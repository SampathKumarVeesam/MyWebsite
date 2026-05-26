import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// ─── Currency Types ───────────────────────────────────────────────────────────
export type Module = 'games' | 'marketplace' | 'learning' | 'food' | 'entertainment';

export interface Bridge {
  id: string;
  fromModule: Module;
  toModule: Module;
  token: string;        // e.g. "Game Warrior"
  description: string;  // e.g. "5% off next marketplace purchase"
  discount: number;     // 0–1 fraction discount applied
  bonusCashback: number;// extra cashback fraction
  bonusXP: number;      // extra XP/score multiplier fraction
  expiresAt: number;    // unix ms
  claimed: boolean;
}

export interface Boost {
  id: string;
  label: string;
  multiplier: number;   // e.g. 1.2 = +20%
  expiresAt: number;    // unix ms (0 = permanent until removed)
  source: string;
}

export interface ActionRecord {
  id: string;
  module: Module;
  action: string;
  acEarned: number;
  sfEarned: number;
  lgEarned: number;
  roEarned: number;
  timestamp: number;
}

export interface LoopState {
  // Currency
  streakFuel: number;       // SF — decays if not used within 7 days
  loyaltyGems: number;      // LG — permanent
  referralOrbs: number;     // RO — social

  // Counters
  lifetimeEarned: number;
  lifetimeSpent: number;
  loopsCompleted: number;   // full 5-module loops
  categoryMastery: Record<Module, number>;

  // Rolling state
  actionChain: ActionRecord[];   // last 20 actions
  activeBoosts: Boost[];
  activeBridges: Bridge[];

  // Cashback stacks (per module, resets at 20%)
  cashbackStack: Record<Module, number>;

  // Consecutive-day learning streak
  learningStreak: number;
  lastLearningDate: number | null;

  // "Hot Streak" tracker (games in a row)
  gamesPlayedToday: number;
  lastGameDate: string;
}

interface LoopContextType {
  loop: LoopState;
  /** Fire when a user performs a meaningful action in a module */
  recordAction: (module: Module, action: string, baseAC?: number) => {
    acEarned: number; sfEarned: number; lgEarned: number; roEarned: number;
    bridgeCreated: Bridge | null; boostActivated: Boost | null; totalMultiplier: number;
  };
  /** Apply a bridge discount when entering a module */
  consumeBridge: (toModule: Module) => Bridge | null;
  /** Get active bridge targeting a module (for UI hints) */
  getPendingBridge: (toModule: Module) => Bridge | null;
  /** Current earnings multiplier based on all active boosts */
  getCurrentMultiplier: () => number;
  /** Cashback % for a module purchase */
  getCashback: (module: Module) => number;
  /** Clear expired boosts & bridges */
  purgeExpired: () => void;
}

const LoopContext = createContext<LoopContextType | undefined>(undefined);
const LOOP_STORAGE_KEY = 'appverse_loop_state';
const HOURS_24 = 24 * 60 * 60 * 1000;
const HOURS_48 = 48 * 60 * 60 * 1000;
const BRIDGE_TTL = HOURS_48; // bridges last 48h

// ─── Bridge Definitions ───────────────────────────────────────────────────────
// fromModule → toModule mapping with token names & benefits
const BRIDGE_MAP: Record<Module, { to: Module; token: string; description: string; discount: number; cashback: number; xp: number }> = {
  games:         { to: 'marketplace',   token: 'Game Warrior',   description: '5% off your next marketplace purchase', discount: 0.05, cashback: 0,    xp: 0    },
  marketplace:   { to: 'learning',      token: 'Smart Shopper',  description: '1 free module in your next course',    discount: 0.10, cashback: 0,    xp: 0    },
  learning:      { to: 'food',          token: 'Brain Food',     description: '+10% cashback on your next food order', discount: 0,    cashback: 0.10, xp: 0    },
  food:          { to: 'entertainment', token: 'Full Belly',     description: 'No ads + bonus AC on next movie',       discount: 0,    cashback: 0,    xp: 0.10 },
  entertainment: { to: 'games',         token: 'Rested Warrior', description: '+15% starting score on next game',      discount: 0,    cashback: 0,    xp: 0.15 },
};

function defaultLoopState(): LoopState {
  return {
    streakFuel: 0,
    loyaltyGems: 0,
    referralOrbs: 0,
    lifetimeEarned: 0,
    lifetimeSpent: 0,
    loopsCompleted: 0,
    categoryMastery: { games: 0, marketplace: 0, learning: 0, food: 0, entertainment: 0 },
    actionChain: [],
    activeBoosts: [],
    activeBridges: [],
    cashbackStack: { games: 0, marketplace: 0, learning: 0, food: 0, entertainment: 0 },
    learningStreak: 0,
    lastLearningDate: null,
    gamesPlayedToday: 0,
    lastGameDate: '',
  };
}

function loadLoop(): LoopState {
  try {
    const raw = localStorage.getItem(LOOP_STORAGE_KEY);
    if (raw) return { ...defaultLoopState(), ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return defaultLoopState();
}

function saveLoop(state: LoopState) {
  try { localStorage.setItem(LOOP_STORAGE_KEY, JSON.stringify(state)); } catch { /* ignore */ }
}

function purgeExpiredFromState(state: LoopState): LoopState {
  const now = Date.now();
  return {
    ...state,
    activeBoosts:   state.activeBoosts.filter(b => b.expiresAt === 0 || b.expiresAt > now),
    activeBridges:  state.activeBridges.filter(b => !b.claimed && b.expiresAt > now),
  };
}

function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

// ─── Provider ─────────────────────────────────────────────────────────────────
export function LoopProvider({ children }: { children: React.ReactNode }) {
  const [loop, setLoop] = useState<LoopState>(() => purgeExpiredFromState(loadLoop()));

  useEffect(() => { saveLoop(loop); }, [loop]);

  // Purge expired every 2 minutes
  useEffect(() => {
    const id = setInterval(() => setLoop(prev => purgeExpiredFromState(prev)), 120_000);
    return () => clearInterval(id);
  }, []);

  const getCurrentMultiplier = useCallback((): number => {
    const now = Date.now();
    let mult = 1.0;
    loop.activeBoosts.forEach(b => {
      if (b.expiresAt === 0 || b.expiresAt > now) mult *= b.multiplier;
    });
    // Cross-module bonus: +0.15x per different module used in last 24h
    const recent = loop.actionChain.filter(a => now - a.timestamp < HOURS_24);
    const distinctModules = new Set(recent.map(a => a.module)).size;
    if (distinctModules > 1) mult += (distinctModules - 1) * 0.15;
    return Math.min(mult, 10); // hard cap 10x
  }, [loop]);

  const getCashback = useCallback((module: Module): number => {
    const base = 0.03;
    const stack = loop.cashbackStack[module] ?? 0;
    return Math.min(base + stack, 0.25); // max 25%
  }, [loop]);

  const getPendingBridge = useCallback((toModule: Module): Bridge | null => {
    const now = Date.now();
    return loop.activeBridges.find(
      b => b.toModule === toModule && !b.claimed && b.expiresAt > now
    ) ?? null;
  }, [loop]);

  const consumeBridge = useCallback((toModule: Module): Bridge | null => {
    let found: Bridge | null = null;
    setLoop(prev => {
      const now = Date.now();
      const bridges = prev.activeBridges.map(b => {
        if (b.toModule === toModule && !b.claimed && b.expiresAt > now) {
          found = b;
          return { ...b, claimed: true };
        }
        return b;
      });
      return { ...prev, activeBridges: bridges };
    });
    return found;
  }, []);

  const purgeExpired = useCallback(() => {
    setLoop(prev => purgeExpiredFromState(prev));
  }, []);

  /**
   * Core engine: record a user action and compute all rewards + create bridge.
   */
  const recordAction = useCallback((
    module: Module,
    action: string,
    baseAC = 10,
  ) => {
    let result = { acEarned: 0, sfEarned: 0, lgEarned: 0, roEarned: 0, bridgeCreated: null as Bridge | null, boostActivated: null as Boost | null, totalMultiplier: 1 };

    setLoop(prev => {
      const now = Date.now();
      const todayStr = getTodayStr();
      let next = purgeExpiredFromState({ ...prev });

      // ── 1. Compute multiplier ──────────────────────────────────────
      let mult = 1.0;
      next.activeBoosts.forEach(b => { if (b.expiresAt === 0 || b.expiresAt > now) mult *= b.multiplier; });
      const recent24h = next.actionChain.filter(a => now - a.timestamp < HOURS_24);
      const distinctMods = new Set([...recent24h.map(a => a.module), module]).size;
      if (distinctMods > 1) mult += (distinctMods - 1) * 0.15;
      mult = Math.min(mult, 10);

      // ── 2. Base rewards ───────────────────────────────────────────
      const acEarned = Math.round(baseAC * mult);
      let sfEarned = 0;
      let lgEarned = 0;
      let roEarned = 0;

      // SF on meaningful actions
      if (['win', 'complete', 'review', 'order', 'watch_full', 'pass_quiz', 'certificate', 'publish'].some(k => action.includes(k))) {
        sfEarned = 1;
        next.streakFuel = Math.min(next.streakFuel + 1, 20);
      }
      // LG on premium/mastery events
      if (['certificate', 'win_top', 'publish', 'five_star', 'buy_repeat', 'watch_full'].some(k => action.includes(k))) {
        lgEarned = 1;
        next.loyaltyGems += 1;
      }
      // RO on referral/social events
      if (['top_leaderboard', 'certificate', 'refer', 'host_watch', 'reach_100'].some(k => action.includes(k))) {
        roEarned = 1;
        next.referralOrbs += 1;
      }

      next.lifetimeEarned += acEarned;
      next.categoryMastery[module] = (next.categoryMastery[module] ?? 0) + 1;

      // ── 3. Cashback stack (marketplace & food) ────────────────────
      if (module === 'marketplace' || module === 'food') {
        const cur = next.cashbackStack[module] ?? 0;
        next.cashbackStack = {
          ...next.cashbackStack,
          [module]: Math.min(cur + 0.02, 0.22), // stack +2%, max 22% extra
        };
      }

      // ── 4. Hot Streak (5 games in a row today) ────────────────────
      let boostActivated: Boost | null = null;
      if (module === 'games') {
        const sameDay = next.lastGameDate === todayStr;
        const gamesCount = sameDay ? next.gamesPlayedToday + 1 : 1;
        next.gamesPlayedToday = gamesCount;
        next.lastGameDate = todayStr;

        if (gamesCount === 5) {
          boostActivated = {
            id: `hot_streak_${now}`,
            label: '🔥 Hot Streak! +20% all earnings',
            multiplier: 1.2,
            expiresAt: now + HOURS_24,
            source: 'games',
          };
          next.activeBoosts.push(boostActivated);
        }
      }

      // ── 5. Learning streak boost ──────────────────────────────────
      if (module === 'learning' && action.includes('complete')) {
        const lastLearn = next.lastLearningDate;
        const consecutive = lastLearn && (now - lastLearn) < HOURS_48;
        next.learningStreak = consecutive ? next.learningStreak + 1 : 1;
        next.lastLearningDate = now;

        if (next.learningStreak >= 7) {
          boostActivated = {
            id: `scholar_${now}`,
            label: '📚 Scholar Boost! +25% all earnings for 7 days',
            multiplier: 1.25,
            expiresAt: now + 7 * HOURS_24,
            source: 'learning',
          };
          next.activeBoosts.push(boostActivated);
          next.learningStreak = 0;
        }
      }

      // ── 6. Create Bridge ──────────────────────────────────────────
      const bridgeDef = BRIDGE_MAP[module];
      let bridgeCreated: Bridge | null = null;
      // Only create if there isn't already a pending one to the same target
      const alreadyHas = next.activeBridges.some(
        b => b.toModule === bridgeDef.to && !b.claimed && b.expiresAt > now
      );
      if (!alreadyHas) {
        bridgeCreated = {
          id: `bridge_${now}_${module}`,
          fromModule: module,
          toModule: bridgeDef.to,
          token: bridgeDef.token,
          description: bridgeDef.description,
          discount: bridgeDef.discount,
          bonusCashback: bridgeDef.cashback,
          bonusXP: bridgeDef.xp,
          expiresAt: now + BRIDGE_TTL,
          claimed: false,
        };
        next.activeBridges.push(bridgeCreated);
      }

      // ── 7. Loop completion check ──────────────────────────────────
      const modulesUsedAllTime = Object.entries(next.categoryMastery)
        .filter(([, v]) => v > 0).length as number;
      if (modulesUsedAllTime === 5 && next.loopsCompleted === Math.floor(next.lifetimeEarned / 500)) {
        next.loopsCompleted += 1;
      }

      // ── 8. Action chain (keep last 20) ────────────────────────────
      const record: ActionRecord = {
        id: `${now}_${module}`,
        module,
        action,
        acEarned,
        sfEarned,
        lgEarned,
        roEarned,
        timestamp: now,
      };
      next.actionChain = [record, ...next.actionChain].slice(0, 20);

      result = { acEarned, sfEarned, lgEarned, roEarned, bridgeCreated, boostActivated, totalMultiplier: mult };
      return next;
    });

    return result;
  }, []);

  return (
    <LoopContext.Provider value={{ loop, recordAction, consumeBridge, getPendingBridge, getCurrentMultiplier, getCashback, purgeExpired }}>
      {children}
    </LoopContext.Provider>
  );
}

export function useLoop() {
  const ctx = useContext(LoopContext);
  if (!ctx) throw new Error('useLoop must be used within LoopProvider');
  return ctx;
}
