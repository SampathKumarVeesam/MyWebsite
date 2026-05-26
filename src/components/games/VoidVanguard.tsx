import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Trophy, Star, ChevronRight, Flag } from 'lucide-react';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface VoidVanguardProps {
  difficulty: Difficulty;
  initialLevel: number;
  onClose: () => void;
  onLevelComplete: (level: number, score: number) => void;
}

type CellType = 'empty' | 'wall' | 'player' | 'goal' | 'box' | 'box-on-goal' | 'player-on-goal';

// Generate mazes procedurally based on level+difficulty
function generateMaze(level: number, difficulty: Difficulty): { grid: CellType[][]; rows: number; cols: number } {
  const sizes: Record<Difficulty, [number, number]> = {
    Easy: level < 33 ? [6, 8] : level < 66 ? [7, 9] : [8, 10],
    Medium: level < 25 ? [7, 9] : level < 75 ? [8, 10] : [9, 11],
    Hard: level < 20 ? [8, 10] : level < 60 ? [9, 11] : [10, 12],
  };
  const [rows, cols] = sizes[difficulty];

  // Seed-based pseudo-random
  let seed = level * 137 + (difficulty === 'Easy' ? 0 : difficulty === 'Medium' ? 1000 : 2000);
  const rand = () => { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return Math.abs(seed) / 0x7fffffff; };

  const grid: CellType[][] = Array.from({ length: rows }, () => Array(cols).fill('empty'));

  // Borders
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) grid[r][c] = 'wall';
  }

  // Random inner walls
  const wallCount = Math.floor(rows * cols * (0.08 + (level / 100) * 0.1 + (difficulty === 'Hard' ? 0.05 : 0)));
  for (let i = 0; i < wallCount; i++) {
    const r = 1 + Math.floor(rand() * (rows - 2));
    const c = 1 + Math.floor(rand() * (cols - 2));
    if (!((r === 1 && c === 1) || (r === rows - 2 && c === cols - 2))) grid[r][c] = 'wall';
  }

  // Number of boxes
  const boxCount = difficulty === 'Easy' ? 1 + Math.floor(level / 25) : difficulty === 'Medium' ? 2 + Math.floor(level / 20) : 3 + Math.floor(level / 15);
  const actualBoxes = Math.min(boxCount, 4);

  // Place player
  grid[1][1] = 'player';

  // Place boxes and goals
  const emptyPositions: [number, number][] = [];
  for (let r = 1; r < rows - 1; r++) for (let c = 1; c < cols - 1; c++) {
    if (grid[r][c] === 'empty') emptyPositions.push([r, c]);
  }
  for (let i = emptyPositions.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [emptyPositions[i], emptyPositions[j]] = [emptyPositions[j], emptyPositions[i]];
  }

  let placed = 0;
  for (const [r, c] of emptyPositions) {
    if (placed >= actualBoxes) break;
    grid[r][c] = 'box';
    placed++;
  }
  placed = 0;
  for (const [r, c] of emptyPositions.slice(actualBoxes)) {
    if (placed >= actualBoxes) break;
    grid[r][c] = 'goal';
    placed++;
  }

  // Place goal at bottom-right region
  for (let r = rows - 3; r >= rows / 2; r--) {
    for (let c = cols - 3; c >= cols / 2; c--) {
      if (grid[r][c] === 'empty') { grid[r][c] = 'goal'; break; }
    }
  }

  return { grid, rows, cols };
}

function findPlayer(grid: CellType[][]): [number, number] {
  for (let r = 0; r < grid.length; r++)
    for (let c = 0; c < grid[0].length; c++)
      if (grid[r][c] === 'player' || grid[r][c] === 'player-on-goal') return [r, c];
  return [1, 1];
}

function isWon(grid: CellType[][]): boolean {
  for (const row of grid) for (const cell of row) if (cell === 'box') return false;
  return true;
}

const CELL_COLORS: Record<string, string> = {
  wall: '#1e1b4b',
  empty: '#0f0a2e',
  goal: '#0f0a2e',
  player: '#6366f1',
  box: '#f59e0b',
  'box-on-goal': '#10b981',
  'player-on-goal': '#6366f1',
};

export default function VoidVanguard({ difficulty, initialLevel, onClose, onLevelComplete }: VoidVanguardProps) {
  const [level, setLevel] = useState(initialLevel);
  const [grid, setGrid] = useState<CellType[][]>([]);
  const [moves, setMoves] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'won'>('idle');
  const [bestMoves, setBestMoves] = useState<number | null>(null);
  const [mazeData, setMazeData] = useState<{ rows: number; cols: number }>({ rows: 6, cols: 8 });

  const initLevel = useCallback(() => {
    const { grid: g, rows, cols } = generateMaze(level, difficulty);
    setGrid(g);
    setMazeData({ rows, cols });
    setMoves(0);
    setGameState('playing');
  }, [level, difficulty]);

  const move = useCallback((dr: number, dc: number) => {
    if (gameState !== 'playing') return;
    setGrid(prev => {
      const g = prev.map(row => [...row]);
      const [pr, pc] = findPlayer(g);
      const nr = pr + dr, nc = pc + dc;
      if (nr < 0 || nr >= g.length || nc < 0 || nc >= g[0].length) return prev;
      if (g[nr][nc] === 'wall') return prev;

      if (g[nr][nc] === 'box' || g[nr][nc] === 'box-on-goal') {
        const br = nr + dr, bc = nc + dc;
        if (br < 0 || br >= g.length || bc < 0 || bc >= g[0].length) return prev;
        if (g[br][bc] === 'wall' || g[br][bc] === 'box' || g[br][bc] === 'box-on-goal') return prev;
        const wasGoal = g[nr][nc] === 'box-on-goal';
        g[nr][nc] = wasGoal ? 'goal' : 'empty';
        g[br][bc] = g[br][bc] === 'goal' ? 'box-on-goal' : 'box';
      }

      const playerWasOnGoal = g[pr][pc] === 'player-on-goal';
      g[pr][pc] = playerWasOnGoal ? 'goal' : 'empty';
      g[nr][nc] = g[nr][nc] === 'goal' ? 'player-on-goal' : 'player';
      return g;
    });
    setMoves(m => m + 1);
  }, [gameState]);

  useEffect(() => {
    if (gameState !== 'playing') return;
    if (isWon(grid)) {
      setGameState('won');
      setBestMoves(prev => prev === null ? moves : Math.min(prev, moves));
      onLevelComplete(level, Math.max(1000 - moves * 10, 100));
    }
  }, [grid, gameState, moves, level, onLevelComplete]);

  useEffect(() => {
    if (gameState !== 'playing') return;
    const onKey = (e: KeyboardEvent) => {
      const map: Record<string, [number, number]> = {
        ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1],
        w: [-1, 0], s: [1, 0], a: [0, -1], d: [0, 1],
      };
      if (map[e.key]) { e.preventDefault(); move(...map[e.key]); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [gameState, move]);

  const handleNext = () => { if (level < 100) { setLevel(l => l + 1); setGameState('idle'); } };

  const diffColors: Record<Difficulty, string> = {
    Easy: 'from-green-500 to-emerald-600',
    Medium: 'from-yellow-500 to-orange-500',
    Hard: 'from-red-500 to-pink-600',
  };

  const cellSize = mazeData.cols <= 8 ? 44 : mazeData.cols <= 10 ? 38 : 32;

  const renderCell = (cell: CellType, r: number, c: number) => {
    const size = cellSize;
    return (
      <div key={`${r}-${c}`}
        className="flex items-center justify-center rounded-md transition-all duration-100"
        style={{ width: size, height: size, background: CELL_COLORS[cell] || CELL_COLORS.empty,
          border: cell === 'wall' ? '2px solid #312e81' : cell === 'goal' || cell === 'box-on-goal' || cell === 'player-on-goal' ? '2px dashed rgba(16,185,129,0.5)' : '1px solid rgba(255,255,255,0.05)',
          boxShadow: cell === 'player' || cell === 'player-on-goal' ? '0 0 12px #6366f1' : cell === 'box-on-goal' ? '0 0 10px #10b981' : cell === 'box' ? '0 0 6px #f59e0b66' : 'none',
        }}>
        {cell === 'player' && <div className="w-5 h-5 rounded-full" style={{ background: '#818cf8', boxShadow: '0 0 8px #6366f1' }} />}
        {cell === 'player-on-goal' && <div className="w-5 h-5 rounded-full" style={{ background: '#818cf8', boxShadow: '0 0 8px #6366f1' }} />}
        {cell === 'box' && <div className="w-5 h-5 rounded-sm" style={{ background: '#f59e0b' }} />}
        {cell === 'box-on-goal' && <div className="w-5 h-5 rounded-sm" style={{ background: '#10b981', boxShadow: '0 0 8px #10b981' }} />}
        {cell === 'goal' && <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(16,185,129,0.5)' }} />}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
        className="relative w-full max-w-2xl"
        style={{ background: 'linear-gradient(135deg,#0c0a1e 0%,#150d30 100%)', borderRadius: 20, border: '1px solid rgba(124,58,237,0.3)', boxShadow: '0 0 60px rgba(124,58,237,0.15)' }}>

        <div className="flex items-center justify-between px-6 py-4 border-b border-violet-500/20">
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${diffColors[difficulty]}`}>{difficulty}</div>
            <span className="text-white font-bold text-lg">⚔️ Void Vanguard</span>
            <span className="text-violet-300 text-sm">Level {level}/100</span>
          </div>
          <div className="flex items-center gap-3">
            {bestMoves !== null && <div className="flex items-center gap-1 text-amber-400 text-sm"><Trophy size={14} />Best: {bestMoves}</div>}
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors"><X size={20} /></button>
          </div>
        </div>

        {gameState === 'playing' && (
          <div className="flex items-center justify-between px-6 py-2.5 border-b border-violet-500/10 text-sm">
            <span className="text-white/60">Moves: <span className="text-white font-bold">{moves}</span></span>
            <span className="text-white/40 text-xs">Push 📦 onto 🟢 goals | WASD/Arrows</span>
            <button onClick={initLevel} className="flex items-center gap-1 text-violet-400 hover:text-violet-300 text-xs"><RotateCcw size={12} /> Reset</button>
          </div>
        )}

        <div className="flex flex-col items-center py-6 px-4 min-h-[300px] justify-center">
          <AnimatePresence mode="wait">
            {gameState === 'idle' && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center text-center">
                <div className="text-6xl mb-4">⚔️</div>
                <h3 className="text-white text-xl font-bold mb-2">Void Vanguard</h3>
                <p className="text-violet-300 text-sm mb-1">Level {level} — Sokoban Puzzle</p>
                <p className="text-white/40 text-xs mb-6">Push all boxes onto the glowing goals</p>
                <button onClick={initLevel} className="px-8 py-3 rounded-full font-bold text-white text-lg"
                  style={{ background: 'linear-gradient(90deg,#7c3aed,#6d28d9)', boxShadow: '0 0 20px rgba(124,58,237,0.4)' }}>
                  <Flag size={18} className="inline mr-2" />Play Level {level}
                </button>
              </motion.div>
            )}

            {gameState === 'playing' && grid.length > 0 && (
              <motion.div key="grid" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="flex flex-col gap-1">
                  {grid.map((row, r) => (
                    <div key={r} className="flex gap-1">
                      {row.map((cell, c) => renderCell(cell, r, c))}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {gameState === 'won' && (
              <motion.div key="won" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center">
                <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }} transition={{ repeat: 2 }} className="text-6xl mb-4">🏆</motion.div>
                <h3 className="text-white text-2xl font-bold mb-1">Puzzle Solved!</h3>
                <p className="text-emerald-400 font-bold text-lg mb-1">{moves} moves</p>
                <p className="text-white/50 text-sm mb-5">Level {level} complete!</p>
                <div className="flex gap-3">
                  <button onClick={initLevel} className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white text-sm border border-violet-500/40">
                    <RotateCcw size={14} /> Replay
                  </button>
                  {level < 100 && (
                    <button onClick={handleNext} className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white text-sm"
                      style={{ background: 'linear-gradient(90deg,#10b981,#059669)', boxShadow: '0 0 16px rgba(16,185,129,0.4)' }}>
                      Next <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="px-6 pb-4 border-t border-violet-500/10 pt-3">
          <div className="flex items-center justify-between text-xs text-white/50 mb-1.5">
            <span>Level Progress</span><span>{level}/100</span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${level}%`, background: 'linear-gradient(90deg,#7c3aed,#6d28d9)' }} />
          </div>
          <div className="flex items-center justify-between mt-3">
            {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map(d => (
              <div key={d} className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-full ${d === difficulty ? 'text-white' : 'text-white/30'}`}
                style={{ background: d === difficulty ? 'rgba(124,58,237,0.2)' : 'transparent', border: d === difficulty ? '1px solid rgba(124,58,237,0.4)' : '1px solid transparent' }}>
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
