import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoop, type Module, type Bridge } from '@/contexts/LoopContext';
import { Gamepad2, ShoppingBag, GraduationCap, UtensilsCrossed, Play, Zap, Gem, Flame, X, ChevronUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const MODULE_META: Record<Module, { label: string; emoji: string; icon: React.ElementType; path: string; color: string; glow: string }> = {
  games:         { label: 'Game',          emoji: '🎮', icon: Gamepad2,        path: '/games',         color: '#818cf8', glow: 'rgba(129,140,248,0.4)' },
  marketplace:   { label: 'Shop',          emoji: '🛒', icon: ShoppingBag,     path: '/marketplace',   color: '#f472b6', glow: 'rgba(244,114,182,0.4)' },
  learning:      { label: 'Learn',         emoji: '📚', icon: GraduationCap,   path: '/learning',      color: '#38bdf8', glow: 'rgba(56,189,248,0.4)'  },
  food:          { label: 'Food',          emoji: '🍜', icon: UtensilsCrossed, path: '/food',          color: '#fb923c', glow: 'rgba(251,146,60,0.4)'  },
  entertainment: { label: 'Watch',         emoji: '🎬', icon: Play,            path: '/entertainment', color: '#f87171', glow: 'rgba(248,113,113,0.4)' },
};

const LOOP_ORDER: Module[] = ['games', 'marketplace', 'learning', 'food', 'entertainment'];

export default function MomentumRing() {
  const { loop, getCurrentMultiplier, getPendingBridge } = useLoop();
  const [collapsed, setCollapsed] = useState(true);
  const [showReward, setShowReward] = useState<{ label: string } | null>(null);

  const multiplier = getCurrentMultiplier();

  // Last module used
  const lastAction = loop.actionChain[0];
  const lastModule = lastAction?.module ?? null;

  // Next module in cycle
  const lastIdx = lastModule ? LOOP_ORDER.indexOf(lastModule) : -1;
  const nextModule = LOOP_ORDER[(lastIdx + 1) % LOOP_ORDER.length];
  const pendingBridge: Bridge | null = nextModule ? getPendingBridge(nextModule) : null;

  // Reward explosion when loop completes
  useEffect(() => {
    if (loop.loopsCompleted > 0) {
      setShowReward({ label: `🎉 Loop #${loop.loopsCompleted} Complete! +50 bonus AC` });
      const t = setTimeout(() => setShowReward(null), 4000);
      return () => clearTimeout(t);
    }
  }, [loop.loopsCompleted]);

  return (
    <>
      {/* Loop Complete Celebration */}
      <AnimatePresence>
        {showReward && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.8 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-2xl"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#db2777)', boxShadow: '0 0 40px rgba(124,58,237,0.6)' }}
          >
            {showReward.label}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Momentum Ring Panel */}
      <div className="fixed bottom-14 right-4 z-[150]">
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              className="mb-2 w-72 rounded-2xl border border-white/10 overflow-hidden"
              style={{ background: 'rgba(10,14,23,0.97)', backdropFilter: 'blur(20px)' }}
            >
              {/* Header */}
              <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-purple-400" />
                  <span className="font-bold text-sm">Virtuous Cycle</span>
                </div>
                <button onClick={() => setCollapsed(true)} className="text-white/40 hover:text-white">
                  <X size={16} />
                </button>
              </div>

              {/* Currency row */}
              <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
                <div className="flex flex-col items-center py-2 gap-0.5">
                  <div className="flex items-center gap-1 text-orange-400">
                    <Flame size={12} />
                    <span className="text-xs font-bold">{loop.streakFuel}</span>
                  </div>
                  <span className="text-[10px] text-white/40">Streak Fuel</span>
                </div>
                <div className="flex flex-col items-center py-2 gap-0.5">
                  <div className="flex items-center gap-1 text-cyan-400">
                    <Gem size={12} />
                    <span className="text-xs font-bold">{loop.loyaltyGems}</span>
                  </div>
                  <span className="text-[10px] text-white/40">Loyalty Gems</span>
                </div>
                <div className="flex flex-col items-center py-2 gap-0.5">
                  <div className="flex items-center gap-1 text-purple-400">
                    <Zap size={12} />
                    <span className="text-xs font-bold">{multiplier.toFixed(2)}x</span>
                  </div>
                  <span className="text-[10px] text-white/40">Multiplier</span>
                </div>
              </div>

              {/* Module cycle ring */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  {LOOP_ORDER.map((mod, i) => {
                    const meta = MODULE_META[mod];
                    const isLast = mod === lastModule;
                    const isNext = mod === nextModule;
                    const mastery = loop.categoryMastery[mod] ?? 0;
                    return (
                      <div key={mod} className="flex flex-col items-center gap-1 flex-1">
                        <Link to={meta.path}>
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="w-10 h-10 rounded-full flex items-center justify-center text-lg relative"
                            style={{
                              background: isLast
                                ? `radial-gradient(circle, ${meta.color}44, ${meta.color}22)`
                                : isNext
                                ? 'rgba(255,255,255,0.08)'
                                : 'rgba(255,255,255,0.04)',
                              border: `1.5px solid ${isLast ? meta.color : isNext ? meta.color + '88' : 'rgba(255,255,255,0.1)'}`,
                              boxShadow: isLast ? `0 0 12px ${meta.glow}` : 'none',
                            }}
                          >
                            {meta.emoji}
                            {mastery > 0 && (
                              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                                style={{ background: meta.color }}>
                                {mastery > 99 ? '99+' : mastery}
                              </span>
                            )}
                          </motion.div>
                        </Link>
                        <span className="text-[9px] text-white/40">{meta.label}</span>
                        {i < LOOP_ORDER.length - 1 && (
                          <span className="absolute hidden" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Arrows between modules */}
                <div className="flex items-center justify-between px-2 -mt-1 mb-3">
                  {LOOP_ORDER.map((mod, i) => i < LOOP_ORDER.length - 1 && (
                    <motion.span
                      key={mod}
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      className="text-white/20 text-xs flex-1 text-center"
                    >→</motion.span>
                  ))}
                </div>

                {/* Pending bridge hint */}
                {pendingBridge ? (
                  <Link to={MODULE_META[nextModule].path}>
                    <motion.div
                      animate={{ borderColor: ['rgba(124,58,237,0.3)', 'rgba(124,58,237,0.7)', 'rgba(124,58,237,0.3)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="rounded-xl p-3 text-center cursor-pointer"
                      style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}
                    >
                      <div className="text-xs font-bold text-purple-300 mb-0.5">
                        🎁 {pendingBridge.token} Active
                      </div>
                      <div className="text-[11px] text-white/60">{pendingBridge.description}</div>
                      <div className="text-[10px] text-purple-400 mt-1">
                        → Go to {MODULE_META[nextModule].label}
                      </div>
                    </motion.div>
                  </Link>
                ) : lastModule ? (
                  <div className="text-center text-[11px] text-white/40 py-2">
                    Last: {MODULE_META[lastModule].emoji} {lastAction?.action}
                    <br />
                    <span className="text-purple-400">Act in {MODULE_META[nextModule].emoji} {MODULE_META[nextModule].label} to chain</span>
                  </div>
                ) : (
                  <div className="text-center text-[11px] text-white/40 py-2">
                    Start any action to begin the loop!
                  </div>
                )}

                {/* Active boosts */}
                {loop.activeBoosts.length > 0 && (
                  <div className="mt-3 space-y-1">
                    {loop.activeBoosts.slice(0, 2).map(b => (
                      <div key={b.id} className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px]"
                        style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)' }}>
                        <Zap size={10} className="text-amber-400 shrink-0" />
                        <span className="text-amber-300 truncate">{b.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Loop counter */}
                <div className="mt-3 flex items-center justify-between text-[10px] text-white/30">
                  <span>Loops: {loop.loopsCompleted}</span>
                  <span>Lifetime: {loop.lifetimeEarned.toLocaleString()} AC</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAB toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCollapsed(c => !c)}
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-2xl relative ml-auto"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #db2777)',
            boxShadow: '0 0 20px rgba(124,58,237,0.5)',
          }}
        >
          {collapsed ? (
            <Sparkles size={20} className="text-white" />
          ) : (
            <ChevronUp size={20} className="text-white" />
          )}
          {/* Pulse dot if bridge active */}
          {pendingBridge && collapsed && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-black animate-pulse" />
          )}
          {/* Multiplier badge */}
          {multiplier > 1.05 && collapsed && (
            <span className="absolute -bottom-1 -right-1 px-1 py-0.5 rounded-full text-[9px] font-bold text-white"
              style={{ background: 'rgba(251,191,36,0.9)' }}>
              {multiplier.toFixed(1)}x
            </span>
          )}
        </motion.button>
      </div>
    </>
  );
}
