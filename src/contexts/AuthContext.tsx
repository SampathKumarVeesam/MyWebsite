import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  coins: number;
  vaultCoins: number;
  streak: number;
  isPremium: boolean;
  /**
   * Unix timestamp (ms) of the exact moment the user last claimed their streak.
   * null means the user has never claimed.
   */
  lastStreakClaimTime: number | null;
}

interface StreakStatus {
  /** Whether the user can claim right now (24h cooldown has passed) */
  canClaim: boolean;
  /** Current streak count */
  currentStreak: number;
  /** The reward for the next claim */
  nextReward: number;
  /** Index 0-6 in the 7-day reward cycle */
  streakDayIndex: number;
  /** Milliseconds remaining until the next claim becomes available (0 if can claim now) */
  msUntilNextClaim: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, _password: string) => Promise<void>;
  signup: (email: string, _password: string, name: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  claimDailyStreak: () => { success: boolean; reward: number; message: string };
  canClaimStreak: () => boolean;
  getStreakStatus: () => StreakStatus;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Key for localStorage persistence
const USER_STORAGE_KEY = 'appverse_user_data';

/**
 * Time constants in milliseconds
 */
const HOURS_24 = 24 * 60 * 60 * 1000; // 24 hours — minimum cooldown between claims
const HOURS_48 = 48 * 60 * 60 * 1000; // 48 hours — maximum gap to keep streak alive

/**
 * The 7-day reward cycle. After day 7, it loops back to day 1.
 */
const STREAK_REWARDS = [10, 20, 30, 50, 100, 150, 300];

/**
 * Load user data from localStorage.
 */
function loadUserFromStorage(): User | null {
  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as User;
      return validateAndFixStreak(parsed);
    }
  } catch {
    // Corrupted data, ignore
  }
  return null;
}

/**
 * Save user data to localStorage.
 */
function saveUserToStorage(user: User): void {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  } catch {
    // Storage full or unavailable, ignore silently
  }
}

/**
 * Clear user data from localStorage.
 */
function clearUserFromStorage(): void {
  try {
    localStorage.removeItem(USER_STORAGE_KEY);
  } catch {
    // Ignore
  }
}

/**
 * Validate the streak on load.
 * 
 * Rules:
 * - If lastStreakClaimTime is null → streak = 0 (never claimed)
 * - If more than 48 hours have passed since last claim → streak is broken, reset to 0
 * - Otherwise → streak is still alive
 */
function validateAndFixStreak(user: User): User {
  if (!user.lastStreakClaimTime) {
    return { ...user, streak: 0 };
  }

  const now = Date.now();
  const elapsed = now - user.lastStreakClaimTime;

  if (elapsed >= HOURS_48) {
    // Streak is broken — more than 48 hours since last claim
    return { ...user, streak: 0, lastStreakClaimTime: null };
  }

  // Streak is still alive
  return user;
}

/**
 * Calculate how many ms remain until the 24h cooldown expires.
 * Returns 0 if cooldown has already passed.
 */
function getMsUntilNextClaim(lastClaimTime: number | null): number {
  if (!lastClaimTime) return 0; // Never claimed → can claim now
  const nextClaimTime = lastClaimTime + HOURS_24;
  const remaining = nextClaimTime - Date.now();
  return Math.max(0, remaining);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => loadUserFromStorage());
  const [isLoading, setIsLoading] = useState(false);

  // Persist user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      saveUserToStorage(user);
    }
  }, [user]);

  // Every minute, re-validate streak in case 48h window expires while app is open
  useEffect(() => {
    const interval = setInterval(() => {
      setUser(prev => {
        if (!prev) return null;
        const validated = validateAndFixStreak(prev);
        if (validated.streak !== prev.streak || validated.lastStreakClaimTime !== prev.lastStreakClaimTime) {
          return validated;
        }
        return prev;
      });
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  const login = useCallback(async (email: string, _password: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if there's existing stored data for this user
    const existingUser = loadUserFromStorage();
    if (existingUser && existingUser.email === email) {
      // Resume existing session with validated streak
      setUser(existingUser);
    } else {
      // New login — create fresh user
      const newUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        coins: 1250,
        vaultCoins: 500,
        streak: 0,
        isPremium: false,
        lastStreakClaimTime: null,
      };
      setUser(newUser);
    }
    setIsLoading(false);
  }, []);

  const signup = useCallback(async (email: string, _password: string, name: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newUser: User = {
      id: '1',
      email,
      name,
      coins: 100,
      vaultCoins: 0,
      streak: 0,
      isPremium: false,
      lastStreakClaimTime: null,
    };
    setUser(newUser);
    setIsLoading(false);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    clearUserFromStorage();
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser(prev => {
      if (!prev) return null;
      return { ...prev, ...updates };
    });
  }, []);

  /**
   * Check if the user can claim right now (24h cooldown has passed).
   */
  const canClaimStreak = useCallback((): boolean => {
    if (!user) return false;
    return getMsUntilNextClaim(user.lastStreakClaimTime) === 0;
  }, [user]);

  /**
   * Get full streak status for the UI.
   */
  const getStreakStatus = useCallback((): StreakStatus => {
    if (!user) {
      return { canClaim: false, currentStreak: 0, nextReward: STREAK_REWARDS[0], streakDayIndex: 0, msUntilNextClaim: 0 };
    }

    const msRemaining = getMsUntilNextClaim(user.lastStreakClaimTime);
    const canClaim = msRemaining === 0;
    const streakDayIndex = user.streak % 7;
    const nextReward = STREAK_REWARDS[streakDayIndex];

    return {
      canClaim,
      currentStreak: user.streak,
      nextReward,
      streakDayIndex,
      msUntilNextClaim: msRemaining,
    };
  }, [user]);

  /**
   * Claim the daily streak reward.
   * This is the SINGLE source of truth for streak claiming.
   * 
   * Rules:
   * 1. Must wait at least 24 hours between claims.
   * 2. If last claim was within 24-48 hours ago → streak continues (+1).
   * 3. If last claim was less than 24h ago → reject (cooldown not expired).
   * 4. If last claim was more than 48h ago (or never) → streak resets to 1 (fresh start).
   */
  const claimDailyStreak = useCallback((): { success: boolean; reward: number; message: string } => {
    if (!user) {
      return { success: false, reward: 0, message: 'Not logged in' };
    }

    const now = Date.now();
    const msRemaining = getMsUntilNextClaim(user.lastStreakClaimTime);

    // Cooldown hasn't expired yet
    if (msRemaining > 0) {
      const hours = Math.floor(msRemaining / (1000 * 60 * 60));
      const minutes = Math.floor((msRemaining % (1000 * 60 * 60)) / (1000 * 60));
      return {
        success: false,
        reward: 0,
        message: `Come back in ${hours}h ${minutes}m!`,
      };
    }

    let newStreak: number;

    if (user.lastStreakClaimTime) {
      const elapsed = now - user.lastStreakClaimTime;
      if (elapsed < HOURS_48) {
        // Within the 48h window — streak continues
        newStreak = user.streak + 1;
      } else {
        // More than 48h — streak broken, start fresh
        newStreak = 1;
      }
    } else {
      // Never claimed before — first time
      newStreak = 1;
    }

    // Calculate reward based on the streak day in the 7-day cycle
    // Day 1 → index 0, Day 2 → index 1, ..., Day 7 → index 6, Day 8 → index 0 (cycle)
    const rewardIndex = (newStreak - 1) % 7;
    const reward = STREAK_REWARDS[rewardIndex];

    setUser(prev => {
      if (!prev) return null;
      return {
        ...prev,
        streak: newStreak,
        coins: prev.coins + reward,
        lastStreakClaimTime: now,
      };
    });

    return {
      success: true,
      reward,
      message: `🔥 Day ${newStreak} streak! +${reward} coins earned!`,
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        updateUser,
        claimDailyStreak,
        canClaimStreak,
        getStreakStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
