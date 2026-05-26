import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Trophy, Star, ChevronRight, Shuffle } from 'lucide-react';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface NeonPuzzlerProps {
  difficulty: Difficulty;
  initialLevel: number;
  onClose: () => void;
  onLevelComplete: (level: number, score: number) => void;
}

// Grid sizes per difficulty
const GRID_SIZES: Record<Difficulty, number[]> = {
  Easy: Array.from({ length: 100 }, (_, i) => (i < 33 ? 3 : i < 66 ? 4 : 4)),
  Medium: Array.from({ length: 100 }, (_, i) => (i < 25 ? 4 : i < 70 ? 4 : 5)),
  Hard: Array.from({ length: 100 }, (_, i) => (i < 20 ? 4 : i < 50 ? 5 : 5)),
};

// Time limits per difficulty
const TIME_LIMITS: Record<Difficulty, number[]> = {
  Easy: Array.from({ length: 100 }, (_, i) => Math.max(30, 120 - i * 0.9)),
  Medium: Array.from({ length: 100 }, (_, i) => Math.max(20, 90 - i * 0.7)),
  Hard: Array.from({ length: 100 }, (_, i) => Math.max(15, 60 - i * 0.45)),
};

// Minimum shuffle moves per difficulty
const SHUFFLE_MOVES: Record<Difficulty, number[]> = {
  Easy: Array.from({ length: 100 }, (_, i) => 10 + i * 2),
  Medium: Array.from({ length: 100 }, (_, i) => 20 + i * 3),
  Hard: Array.from({ length: 100 }, (_, i) => 35 + i * 4),
};

function createSolvedBoard(size: number): number[] {
  return Array.from({ length: size * size }, (_, i) => i);
}

function shuffleBoard(board: number[], moves: number): number[] {
  let b = [...board];
  const size = Math.round(Math.sqrt(b.length));
  let emptyIdx = b.indexOf(0);
  for (let i = 0; i < moves; i++) {
    const row = Math.floor(emptyIdx / size);
    const col = emptyIdx % size;
    const neighbors: number[] = [];
    if (row > 0) neighbors.push(emptyIdx - size);
    if (row < size - 1) neighbors.push(emptyIdx + size);
    if (col > 0) neighbors.push(emptyIdx - 1);
    if (col < size - 1) neighbors.push(emptyIdx + 1);
    const target = neighbors[Math.floor(Math.random() * neighbors.length)];
    [b[emptyIdx], b[target]] = [b[target], b[emptyIdx]];
    emptyIdx = target;
  }
  return b;
}

function isSolved(board: number[]): boolean {
  return board.every((v, i) => v === i);
}

const NEON_COLORS = [
  '', // 0 (empty)
  '#818cf8', '#6366f1', '#a78bfa', '#8b5cf6',
  '#38bdf8', '#0ea5e9', '#06b6d4', '#22d3ee',
  '#34d399', '#10b981', '#6ee7b7', '#a7f3d0',
  '#fbbf24', '#f59e0b', '#fb923c', '#f97316',
  '#f472b6', '#ec4899', '#e879f9', '#a855f7',
  '#4ade80', '#22c55e', '#86efac', '#bbf7d0',
  '#c4b5fd', '#a5b4fc', '#93c5fd', '#7dd3fc',
];

export default function NeonPuzzler({ difficulty, initialLevel, onClose, onLevelComplete }: NeonPuzzlerProps) {
  const [level, setLevel] = useState(initialLevel);
  const [board, setBoard] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'solved' | 'failed'>('idle');
  const [bestMoves, setBestMoves] = useState<number | null>(null);

  const gridSize = GRID_SIZES[difficulty][level - 1];
  const timeLimit = Math.floor(TIME_LIMITS[difficulty][level - 1]);
  const shuffleMoves = SHUFFLE_MOVES[difficulty][level - 1];

  const startGame = useCallback(() => {
    const solved = createSolvedBoard(gridSize);
    const shuffled = shuffleBoard(solved, shuffleMoves);
    setBoard(shuffled);
    setMoves(0);
    setTimeLeft(timeLimit);
    setGameState('playing');
  }, [gridSize, shuffleMoves, timeLimit]);

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;
    if (timeLeft <= 0) { setGameState('failed'); return; }
    const t = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, timeLeft]);

  const handleTileClick = useCallback((idx: number) => {
    if (gameState !== 'playing') return;
    const size = gridSize;
    const emptyIdx = board.indexOf(0);
    const row = Math.floor(idx / size);
    const col = idx % size;
    const emptyRow = Math.floor(emptyIdx / size);
    const emptyCol = emptyIdx % size;

    const isAdjacent =
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow);

    if (!isAdjacent) return;

    const newBoard = [...board];
    [newBoard[emptyIdx], newBoard[idx]] = [newBoard[idx], newBoard[emptyIdx]];
    setBoard(newBoard);
    setMoves(m => m + 1);

    if (isSolved(newBoard)) {
      setGameState('solved');
      const score = Math.floor((timeLeft * 100) / timeLimit * (difficulty === 'Hard' ? 3 : difficulty === 'Medium' ? 2 : 1) * 10);
      setBestMoves(prev => prev === null ? moves + 1 : Math.min(prev, moves + 1));
      onLevelComplete(level, score);
    }
  }, [board, gameState, gridSize, timeLeft, timeLimit, difficulty, moves, level, onLevelComplete]);

  const handleNext = () => {
    if (level < 100) { setLevel(l => l + 1); setGameState('idle'); }
  };

  const diffColors: Record<Difficulty, string> = {
    Easy: 'from-green-500 to-emerald-600',
    Medium: 'from-yellow-500 to-orange-500',
    Hard: 'from-red-500 to-pink-600',
  };

  const timerColor = timeLeft > timeLimit * 0.5 ? '#34d399' : timeLeft > timeLimit * 0.25 ? '#fbbf24' : '#f87171';

  const tileSize = gridSize === 3 ? 90 : gridSize === 4 ? 72 : 60;
  const gap = 4;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        className="relative w-full max-w-lg"
        style={{ background: 'linear-gradient(135deg,#0a0f1e 0%,#0f1a2e 100%)', borderRadius: 20, border: '1px solid rgba(56,189,248,0.3)', boxShadow: '0 0 60px rgba(56,189,248,0.15)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${diffColors[difficulty]}`}>{difficulty}</div>
            <span className="text-white font-bold text-lg">🧩 Neon Puzzler</span>
            <span className="text-cyan-300 text-sm">Level {level}/100</span>
          </div>
          <div className="flex items-center gap-3">
            {bestMoves !== null && <div className="flex items-center gap-1 text-amber-400 text-sm"><Trophy size={14} />{bestMoves} moves</div>}
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors"><X size={20} /></button>
          </div>
        </div>

        {/* Stats */}
        {gameState === 'playing' && (
          <div className="flex items-center justify-between px-6 py-3 border-b border-cyan-500/10">
            <div className="text-sm text-white/60">Moves: <span className="text-white font-bold">{moves}</span></div>
            <div className="flex items-center gap-2">
              <div className="text-sm font-bold" style={{ color: timerColor }}>⏱ {timeLeft}s</div>
              <div className="w-32 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${(timeLeft / timeLimit) * 100}%`, background: `linear-gradient(90deg, ${timerColor}, ${timerColor}88)` }} />
              </div>
            </div>
            <div className="text-sm text-white/60">{gridSize}×{gridSize} grid</div>
          </div>
        )}

        {/* Board */}
        <div className="flex flex-col items-center py-6 px-4 min-h-[320px] justify-center">
          <AnimatePresence mode="wait">
            {gameState === 'idle' && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center">
                <div className="text-6xl mb-4">🧩</div>
                <h3 className="text-white text-xl font-bold mb-2">Neon Puzzler</h3>
                <p className="text-cyan-300 text-sm mb-1">Level {level} • {gridSize}×{gridSize} grid</p>
                <p className="text-white/50 text-xs mb-1">Time: {timeLimit}s | Shuffled: {shuffleMoves} moves</p>
                <p className="text-white/40 text-xs mb-6">Slide tiles to restore the order (empty space = 0)</p>
                <button onClick={startGame} className="flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white text-lg"
                  style={{ background: 'linear-gradient(90deg,#0ea5e9,#06b6d4)', boxShadow: '0 0 20px rgba(6,182,212,0.4)' }}>
                  <Shuffle size={18} /> Shuffle & Play
                </button>
              </motion.div>
            )}

            {(gameState === 'playing' || gameState === 'solved' || gameState === 'failed') && (
              <motion.div key="board" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ display: 'grid', gridTemplateColumns: `repeat(${gridSize}, ${tileSize}px)`, gap: `${gap}px` }}>
                {board.map((val, idx) => (
                  <motion.button
                    key={val}
                    layout
                    onClick={() => handleTileClick(idx)}
                    whileHover={val !== 0 ? { scale: 1.05 } : {}}
                    whileTap={val !== 0 ? { scale: 0.95 } : {}}
                    className={`rounded-xl font-bold text-white flex items-center justify-center transition-all duration-150 ${val === 0 ? 'cursor-default' : 'cursor-pointer'}`}
                    style={{
                      width: tileSize, height: tileSize,
                      fontSize: gridSize >= 5 ? 14 : gridSize === 4 ? 16 : 20,
                      background: val === 0
                        ? 'rgba(255,255,255,0.03)'
                        : `linear-gradient(135deg, ${NEON_COLORS[val % NEON_COLORS.length] || '#6366f1'}cc, ${NEON_COLORS[(val + 5) % NEON_COLORS.length] || '#818cf8'}99)`,
                      border: val === 0 ? '1px dashed rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.15)',
                      boxShadow: val === 0 ? 'none' : `0 0 8px ${NEON_COLORS[val % NEON_COLORS.length] || '#6366f1'}44`,
                    }}
                  >
                    {val !== 0 && val}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlays */}
          <AnimatePresence>
            {gameState === 'solved' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl"
                style={{ background: 'rgba(10,15,30,0.92)' }}>
                <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }} transition={{ repeat: 2 }} className="text-6xl mb-3">🎉</motion.div>
                <h3 className="text-white text-2xl font-bold mb-1">Puzzle Solved!</h3>
                <p className="text-emerald-400 font-bold text-lg mb-1">{moves} moves • {timeLeft}s left</p>
                <p className="text-white/50 text-sm mb-6">Level {level} complete!</p>
                <div className="flex gap-3">
                  <button onClick={startGame} className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white text-sm border border-cyan-500/40 hover:border-cyan-500 transition-colors">
                    <RotateCcw size={14} /> Replay
                  </button>
                  {level < 100 && (
                    <button onClick={handleNext} className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white text-sm"
                      style={{ background: 'linear-gradient(90deg,#10b981,#059669)', boxShadow: '0 0 16px rgba(16,185,129,0.4)' }}>
                      Next Level <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {gameState === 'failed' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl"
                style={{ background: 'rgba(10,15,30,0.92)' }}>
                <div className="text-6xl mb-3">⏰</div>
                <h3 className="text-white text-2xl font-bold mb-1">Time's Up!</h3>
                <p className="text-white/60 mb-1">You made <span className="text-cyan-300 font-bold">{moves}</span> moves</p>
                <p className="text-white/40 text-sm mb-6">Keep practicing!</p>
                <button onClick={startGame} className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white"
                  style={{ background: 'linear-gradient(90deg,#0ea5e9,#06b6d4)', boxShadow: '0 0 20px rgba(6,182,212,0.4)' }}>
                  <RotateCcw size={16} /> Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Level bar */}
        <div className="px-6 pb-4 border-t border-cyan-500/10 pt-3">
          <div className="flex items-center justify-between text-xs text-white/50 mb-1.5">
            <span>Level Progress</span><span>{level}/100</span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${level}%`, background: 'linear-gradient(90deg,#0ea5e9,#06b6d4)' }} />
          </div>
          <div className="flex items-center justify-between mt-3">
            {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map(d => (
              <div key={d} className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-full ${d === difficulty ? 'text-white' : 'text-white/30'}`}
                style={{ background: d === difficulty ? 'rgba(6,182,212,0.2)' : 'transparent', border: d === difficulty ? '1px solid rgba(6,182,212,0.4)' : '1px solid transparent' }}>
                <Star size={10} className={d === difficulty ? 'text-amber-400' : 'text-white/20'} />
                {d}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
