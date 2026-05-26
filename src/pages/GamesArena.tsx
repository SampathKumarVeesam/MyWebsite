import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gamepad2, Users, Trophy, Zap, Target, Sparkles,
  Flame, Play, Star, ChevronRight, ChevronLeft,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLoop } from '@/contexts/LoopContext';
import CosmicRunner from '@/components/games/CosmicRunner';
import NeonPuzzler from '@/components/games/NeonPuzzler';
import StarBlaster from '@/components/games/StarBlaster';
import QuantumQuiz from '@/components/games/QuantumQuiz';
import VoidVanguard from '@/components/games/VoidVanguard';
import PixelRacer from '@/components/games/PixelRacer';

type Difficulty = 'Easy' | 'Medium' | 'Hard';
type GameId = 'cosmic' | 'neon' | 'star' | 'quiz' | 'void' | 'racer';

interface GameDef {
  id: GameId;
  title: string;
  emoji: string;
  category: string;
  players: string;
  reward: number;
  description: string;
  gradient: string;
  accentColor: string;
  controls: string;
}

const GAMES: GameDef[] = [
  {
    id: 'cosmic',
    title: 'Cosmic Runner',
    emoji: '🚀',
    category: 'Arcade',
    players: '12.5K',
    reward: 50,
    description: 'Dodge meteors in an endless space run. Jump over obstacles before they crush your ship!',
    gradient: 'from-violet-600 via-purple-600 to-indigo-600',
    accentColor: '#818cf8',
    controls: 'SPACE / Click to jump',
  },
  {
    id: 'neon',
    title: 'Neon Puzzler',
    emoji: '🧩',
    category: 'Puzzle',
    players: '8.2K',
    reward: 30,
    description: 'Slide glowing tiles into the correct order. Beat the clock in this neon-lit puzzle challenge!',
    gradient: 'from-cyan-600 via-sky-600 to-blue-600',
    accentColor: '#38bdf8',
    controls: 'Click tiles to slide',
  },
  {
    id: 'star',
    title: 'Star Blaster',
    emoji: '🎯',
    category: 'Action',
    players: '15.1K',
    reward: 75,
    description: 'Command a starship against waves of alien invaders. Survive and destroy your target kill count!',
    gradient: 'from-indigo-600 via-violet-600 to-purple-600',
    accentColor: '#6366f1',
    controls: 'WASD to move, SPACE to shoot',
  },
  {
    id: 'quiz',
    title: 'Quantum Quiz',
    emoji: '🧠',
    category: 'Trivia',
    players: '6.8K',
    reward: 25,
    description: 'Test your knowledge across Science, Math, History & Tech. Answer before the timer runs out!',
    gradient: 'from-purple-600 via-violet-600 to-fuchsia-600',
    accentColor: '#a855f7',
    controls: 'Click to choose answer',
  },
  {
    id: 'void',
    title: 'Void Vanguard',
    emoji: '⚔️',
    category: 'Strategy',
    players: '4.5K',
    reward: 100,
    description: 'Push glowing boxes onto goal tiles in this sci-fi Sokoban. Think before you move!',
    gradient: 'from-violet-700 via-purple-700 to-indigo-700',
    accentColor: '#7c3aed',
    controls: 'WASD / Arrow keys to move',
  },
  {
    id: 'racer',
    title: 'Pixel Racer',
    emoji: '🏎️',
    category: 'Racing',
    players: '9.3K',
    reward: 60,
    description: 'Weave through traffic at high speed. Drive the target distance without crashing!',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    accentColor: '#4f46e5',
    controls: 'Arrow keys / A-D to change lane',
  },
];

const DIFF_CONFIG: Record<Difficulty, { label: string; color: string; bg: string; border: string; emoji: string; desc: string }> = {
  Easy: { label: 'Easy', color: '#34d399', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.4)', emoji: '🟢', desc: '100 levels — Beginner friendly' },
  Medium: { label: 'Medium', color: '#fbbf24', bg: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.4)', emoji: '🟡', desc: '100 levels — Balanced challenge' },
  Hard: { label: 'Hard', color: '#f87171', bg: 'rgba(248,113,113,0.12)', border: 'rgba(248,113,113,0.4)', emoji: '🔴', desc: '100 levels — For the elite' },
};

interface ActiveGame {
  id: GameId;
  difficulty: Difficulty;
  level: number;
}

interface GameProgress {
  [key: string]: { maxLevel: number; totalScore: number; };
}

export default function GamesArena() {
  const { user, updateUser } = useAuth();
  const { recordAction, consumeBridge, getPendingBridge } = useLoop();
  const [activeGame, setActiveGame] = useState<ActiveGame | null>(null);
  const [selectedGame, setSelectedGame] = useState<GameDef | null>(null);
  const [selectedDiff, setSelectedDiff] = useState<Difficulty>('Easy');
  const [progress, setProgress] = useState<GameProgress>({});
  const [completedCount, setCompletedCount] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [rewardToast, setRewardToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setRewardToast(msg);
    setTimeout(() => setRewardToast(null), 3500);
  };

  const launchGame = (game: GameDef, diff: Difficulty) => {
    const key = `${game.id}-${diff}`;
    const savedLevel = progress[key]?.maxLevel ?? 1;
    setActiveGame({ id: game.id, difficulty: diff, level: savedLevel });
    setSelectedGame(null);
    // Check for Rested Warrior bridge (from entertainment)
    const bridge = consumeBridge('games');
    if (bridge) showToast(`🎮 ${bridge.token}: ${bridge.description}`);
    // Record play action
    recordAction('games', 'play', game.reward);
  };

  const handleLevelComplete = (level: number, score: number) => {
    if (!activeGame) return;
    const key = `${activeGame.id}-${activeGame.difficulty}`;
    setProgress(prev => ({
      ...prev,
      [key]: {
        maxLevel: Math.max(level + 1, prev[key]?.maxLevel ?? 1),
        totalScore: (prev[key]?.totalScore ?? 0) + score,
      },
    }));
    setCompletedCount(c => c + 1);
    setTotalScore(s => s + score);

    // Record win in loop engine
    const result = recordAction('games', 'win_complete', score);
    if (user) updateUser({ coins: user.coins + result.acEarned });
    const msgs = [`+${result.acEarned} AC earned! (${result.totalMultiplier.toFixed(1)}x multiplier)`];
    if (result.sfEarned)  msgs.push('🔥 +1 Streak Fuel');
    if (result.bridgeCreated) msgs.push(`🎁 ${result.bridgeCreated.token} unlocked → Shop`);
    if (result.boostActivated) msgs.push(result.boostActivated.label);
    showToast(msgs[0]);
  };

  const getProgress = (gameId: GameId, diff: Difficulty) => {
    const key = `${gameId}-${diff}`;
    return { level: progress[key]?.maxLevel ?? 1, score: progress[key]?.totalScore ?? 0 };
  };

  const renderGame = () => {
    if (!activeGame) return null;
    const props = {
      difficulty: activeGame.difficulty,
      initialLevel: activeGame.level,
      onClose: () => setActiveGame(null),
      onLevelComplete: handleLevelComplete,
    };
    switch (activeGame.id) {
      case 'cosmic': return <CosmicRunner {...props} />;
      case 'neon': return <NeonPuzzler {...props} />;
      case 'star': return <StarBlaster {...props} />;
      case 'quiz': return <QuantumQuiz {...props} />;
      case 'void': return <VoidVanguard {...props} />;
      case 'racer': return <PixelRacer {...props} />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Reward Toast */}
      <AnimatePresence>
        {rewardToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[300] px-5 py-2.5 rounded-xl text-white text-sm font-semibold shadow-2xl"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#6366f1)', boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
          >
            {rewardToast}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Bridge hint banner */}
      {(() => { const b = getPendingBridge('games'); return b ? (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-xl px-4 py-2.5 flex items-center gap-3 text-sm"
          style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.4)' }}>
          <span className="text-xl">🎁</span>
          <div><span className="font-bold text-purple-300">{b.token} Active: </span>
            <span className="text-white/70">{b.description}</span></div>
        </motion.div>
      ) : null; })()}

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
            <Gamepad2 className="text-purple-400" />
            Games Arena
          </h1>
          <p className="text-white/60">6 real games • 3 difficulty modes • 100 levels each</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="glass px-3 py-1.5 rounded-full flex items-center gap-2">
            <Trophy size={14} className="text-amber-400" />
            <span className="text-sm text-white/80">{completedCount} levels cleared</span>
          </div>
          <div className="glass px-3 py-1.5 rounded-full flex items-center gap-2">
            <Sparkles size={14} className="text-amber-400" />
            <span className="text-sm text-white/80">{totalScore.toLocaleString()} pts</span>
          </div>
          <div className="glass px-3 py-1.5 rounded-full flex items-center gap-2">
            <Flame size={14} className="text-orange-400" />
            <span className="text-sm text-white/80">Streak Active</span>
          </div>
        </div>
      </motion.div>

      {/* Hero banner */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="glass-card p-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(99,102,241,0.1),rgba(124,58,237,0.15))', border: '1px solid rgba(124,58,237,0.3)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-purple-500/10" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#6366f1)', boxShadow: '0 0 24px rgba(124,58,237,0.4)' }}>🎮</div>
            <div>
              <h3 className="font-bold text-xl text-white">Real Games, Real Levels</h3>
              <p className="text-white/60 text-sm">300 levels per game • 1,800 total levels across all games</p>
              <div className="flex items-center gap-4 mt-1">
                {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map(d => (
                  <span key={d} className="text-xs flex items-center gap-1" style={{ color: DIFF_CONFIG[d].color }}>
                    {DIFF_CONFIG[d].emoji} {d}: 100 levels
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <Zap size={16} className="text-purple-400" />
            <span>Click any game to start</span>
          </div>
        </div>
      </motion.div>

      {/* Games Grid */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Star className="text-amber-400" size={18} /> All Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GAMES.map((game, i) => {
            const easyP = getProgress(game.id, 'Easy');
            const medP = getProgress(game.id, 'Medium');
            const hardP = getProgress(game.id, 'Hard');
            const totalLevels = (easyP.level - 1) + (medP.level - 1) + (hardP.level - 1);

            return (
              <motion.div key={game.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedGame(game)}
                className="glass-card overflow-hidden cursor-pointer group"
                style={{ border: `1px solid ${game.accentColor}22` }}>

                {/* Card top gradient */}
                <div className={`h-28 bg-gradient-to-br ${game.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{game.emoji}</span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    {game.category}
                  </div>
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}>
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors">{game.title}</h3>
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                      <Sparkles size={11} />+{game.reward}
                    </div>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed mb-3">{game.description}</p>

                  {/* Difficulty progress bars */}
                  <div className="space-y-1.5">
                    {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map(d => {
                      const p = getProgress(game.id, d);
                      const lvl = Math.min(p.level - 1, 100);
                      return (
                        <div key={d} className="flex items-center gap-2">
                          <span className="text-xs w-12" style={{ color: DIFF_CONFIG[d].color }}>{d}</span>
                          <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full rounded-full transition-all duration-500"
                              style={{ width: `${lvl}%`, background: DIFF_CONFIG[d].color }} />
                          </div>
                          <span className="text-xs text-white/40 w-12 text-right">Lv {Math.max(p.level, 1)}/100</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-1 text-white/40 text-xs">
                      <Users size={11} />{game.players} playing
                    </div>
                    <div className="text-xs text-purple-300/70">{totalLevels}/300 cleared</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Game Selector Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={e => { if (e.target === e.currentTarget) setSelectedGame(null); }}>
            <motion.div initial={{ scale: 0.85, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.85, opacity: 0 }}
              className="relative w-full max-w-lg rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#0f0a2e 0%,#1a1035 100%)', border: `1px solid ${selectedGame.accentColor}33`, boxShadow: `0 0 60px ${selectedGame.accentColor}22` }}>

              {/* Top section */}
              <div className={`bg-gradient-to-br ${selectedGame.gradient} p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <button onClick={() => setSelectedGame(null)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
                  <ChevronLeft size={20} />
                </button>
                <div className="relative z-10 flex items-center gap-4">
                  <span className="text-7xl">{selectedGame.emoji}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedGame.title}</h2>
                    <p className="text-white/70 text-sm mt-1">{selectedGame.description}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-white/60 text-xs flex items-center gap-1"><Target size={11} />{selectedGame.controls}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Difficulty selector */}
              <div className="p-6">
                <h3 className="text-white/70 text-sm font-semibold mb-4 uppercase tracking-wider">Choose Difficulty</h3>
                <div className="space-y-3 mb-6">
                  {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map(d => {
                    const p = getProgress(selectedGame.id, d);
                    const lvl = Math.max(p.level, 1);
                    const cfg = DIFF_CONFIG[d];
                    const isSelected = selectedDiff === d;
                    return (
                      <button key={d} onClick={() => setSelectedDiff(d)}
                        className="w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                        style={{ background: isSelected ? cfg.bg : 'rgba(255,255,255,0.03)', border: `1px solid ${isSelected ? cfg.border : 'rgba(255,255,255,0.07)'}` }}>
                        <span className="text-xl">{cfg.emoji}</span>
                        <div className="flex-1 text-left">
                          <div className="font-bold text-white text-sm">{cfg.label}</div>
                          <div className="text-xs mt-0.5" style={{ color: cfg.color }}>{cfg.desc}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold" style={{ color: cfg.color }}>Level {lvl}/100</div>
                          <div className="h-1.5 w-20 rounded-full bg-white/10 mt-1 overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${Math.min(lvl - 1, 99)}%`, background: cfg.color }} />
                          </div>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: cfg.color }}>
                            <Star size={10} className="text-white" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setSelectedGame(null)}
                    className="flex-1 py-3 rounded-xl text-white/60 font-semibold text-sm border border-white/10 hover:border-white/20 transition-colors">
                    Cancel
                  </button>
                  <button onClick={() => launchGame(selectedGame, selectedDiff)}
                    className="flex-2 flex-grow-[2] py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2"
                    style={{
                      background: `linear-gradient(135deg, ${selectedGame.accentColor}, ${selectedGame.accentColor}88)`,
                      boxShadow: `0 0 20px ${selectedGame.accentColor}44`,
                    }}>
                    <Play size={16} />
                    Play {selectedDiff} — Level {Math.max(getProgress(selectedGame.id, selectedDiff).level, 1)}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Game Renderer */}
      <AnimatePresence>
        {activeGame && renderGame()}
      </AnimatePresence>

      {/* Leaderboard section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="glass-card p-5">
          <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
            <Trophy size={18} className="text-amber-400" /> Global Leaderboard
          </h3>
          {[
            { rank: 1, name: 'DragonSlayer', score: 125000, badge: '🥇' },
            { rank: 2, name: 'NeonNinja', score: 98200, badge: '🥈' },
            { rank: 3, name: 'CosmicKing', score: 87600, badge: '🥉' },
            { rank: 4, name: 'PixelMaster', score: 72300, badge: '4️⃣' },
            { rank: 5, name: user?.name || 'You', score: totalScore || 65400, badge: '⭐', isUser: true },
          ].map(entry => (
            <div key={entry.rank}
              className={`flex items-center gap-3 p-2.5 rounded-lg mb-1.5 ${entry.isUser ? 'border border-purple-500/30' : ''}`}
              style={{ background: entry.isUser ? 'rgba(124,58,237,0.1)' : 'rgba(255,255,255,0.03)' }}>
              <span className="text-lg w-7 text-center">{entry.badge}</span>
              <span className={`flex-1 text-sm font-medium ${entry.isUser ? 'text-purple-300' : 'text-white/80'}`}>
                {entry.name} {entry.isUser && <span className="text-xs text-purple-400">(You)</span>}
              </span>
              <span className="text-sm text-amber-400 font-bold">{entry.score.toLocaleString()}</span>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="glass-card p-5">
          <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
            <Flame size={18} className="text-orange-400" /> Your Progress
          </h3>
          {GAMES.map(game => {
            const total = (['Easy', 'Medium', 'Hard'] as Difficulty[]).reduce((acc, d) => acc + Math.max(getProgress(game.id, d).level - 1, 0), 0);
            return (
              <div key={game.id} className="flex items-center gap-3 mb-3">
                <span className="text-xl">{game.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-white/80">{game.title}</span>
                    <span className="text-xs text-purple-300">{total}/300</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${(total / 300) * 100}%`, background: `linear-gradient(90deg, ${game.accentColor}, ${game.accentColor}88)` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}