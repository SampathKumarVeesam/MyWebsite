import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Trophy, Star, Zap, ChevronRight } from 'lucide-react';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface GameConfig {
  gravity: number;
  jumpForce: number;
  obstacleSpeed: number;
  obstacleInterval: number;
  targetScore: number; // score to pass the level
}

const LEVEL_CONFIGS: Record<Difficulty, GameConfig[]> = {
  Easy: Array.from({ length: 100 }, (_, i) => ({
    gravity: 0.35 + i * 0.005,
    jumpForce: -9,
    obstacleSpeed: 3 + i * 0.06,
    obstacleInterval: Math.max(1400, 2200 - i * 14),
    targetScore: 100 + i * 25,
  })),
  Medium: Array.from({ length: 100 }, (_, i) => ({
    gravity: 0.45 + i * 0.007,
    jumpForce: -9.5,
    obstacleSpeed: 5 + i * 0.08,
    obstacleInterval: Math.max(1000, 1800 - i * 12),
    targetScore: 200 + i * 40,
  })),
  Hard: Array.from({ length: 100 }, (_, i) => ({
    gravity: 0.6 + i * 0.01,
    jumpForce: -10,
    obstacleSpeed: 7 + i * 0.1,
    obstacleInterval: Math.max(700, 1500 - i * 10),
    targetScore: 350 + i * 60,
  })),
};

interface Obstacle {
  x: number;
  width: number;
  height: number;
}

interface CosmicRunnerProps {
  difficulty: Difficulty;
  initialLevel: number;
  onClose: () => void;
  onLevelComplete: (level: number, score: number) => void;
}

const CANVAS_W = 700;
const CANVAS_H = 260;
const GROUND_Y = 210;
const PLAYER_W = 36;
const PLAYER_H = 36;

export default function CosmicRunner({ difficulty, initialLevel, onClose, onLevelComplete }: CosmicRunnerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    playerY: GROUND_Y - PLAYER_H,
    velY: 0,
    isJumping: false,
    obstacles: [] as Obstacle[],
    score: 0,
    alive: true,
    frameId: 0,
    lastObstacle: 0,
    stars: Array.from({ length: 40 }, () => ({
      x: Math.random() * CANVAS_W,
      y: Math.random() * (CANVAS_H * 0.7),
      r: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
    })),
  });

  const [level, setLevel] = useState(initialLevel);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'dead' | 'levelup'>('idle');
  const [highScore, setHighScore] = useState(0);

  const config = LEVEL_CONFIGS[difficulty][level - 1];

  const jump = useCallback(() => {
    const s = stateRef.current;
    if (!s.isJumping && s.alive) {
      s.velY = config.jumpForce;
      s.isJumping = true;
    }
  }, [config]);

  const resetGame = useCallback(() => {
    const s = stateRef.current;
    s.playerY = GROUND_Y - PLAYER_H;
    s.velY = 0;
    s.isJumping = false;
    s.obstacles = [];
    s.score = 0;
    s.alive = true;
    s.lastObstacle = 0;
    setScore(0);
    setGameState('playing');
  }, []);

  useEffect(() => {
    if (gameState !== 'playing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const s = stateRef.current;

    const draw = (timestamp: number) => {
      if (!s.alive) return;

      // Physics
      s.velY += config.gravity;
      s.playerY += s.velY;
      if (s.playerY >= GROUND_Y - PLAYER_H) {
        s.playerY = GROUND_Y - PLAYER_H;
        s.velY = 0;
        s.isJumping = false;
      }

      // Spawn obstacles
      if (timestamp - s.lastObstacle > config.obstacleInterval) {
        const h = 30 + Math.random() * 35;
        s.obstacles.push({ x: CANVAS_W, width: 22, height: h });
        s.lastObstacle = timestamp;
      }

      // Move obstacles & score
      s.obstacles = s.obstacles.filter(o => {
        o.x -= config.obstacleSpeed;
        return o.x + o.width > -10;
      });
      s.score += 0.08;
      const sc = Math.floor(s.score);
      setScore(sc);

      // Collision
      const px = 80, py = s.playerY;
      for (const o of s.obstacles) {
        if (px + PLAYER_W - 8 > o.x && px + 8 < o.x + o.width && py + PLAYER_H - 4 > GROUND_Y - o.height) {
          s.alive = false;
          setHighScore(prev => Math.max(prev, sc));
          setGameState('dead');
          return;
        }
      }

      // Level up check
      if (sc >= config.targetScore) {
        s.alive = false;
        setGameState('levelup');
        onLevelComplete(level, sc);
        return;
      }

      // Draw
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

      // Sky gradient
      const sky = ctx.createLinearGradient(0, 0, 0, CANVAS_H);
      sky.addColorStop(0, '#050816');
      sky.addColorStop(1, '#0d1b3e');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // Stars
      for (const star of s.stars) {
        star.x -= star.speed * 0.5;
        if (star.x < 0) star.x = CANVAS_W;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,200,255,${0.5 + Math.sin(timestamp * 0.003 + star.x) * 0.3})`;
        ctx.fill();
      }

      // Ground
      const ground = ctx.createLinearGradient(0, GROUND_Y, 0, CANVAS_H);
      ground.addColorStop(0, '#7c3aed');
      ground.addColorStop(1, '#1e1b4b');
      ctx.fillStyle = ground;
      ctx.fillRect(0, GROUND_Y, CANVAS_W, CANVAS_H - GROUND_Y);

      // Ground line glow
      ctx.strokeStyle = '#a78bfa';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#7c3aed';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(CANVAS_W, GROUND_Y);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Player (cosmic ship)
      ctx.save();
      ctx.translate(80 + PLAYER_W / 2, s.playerY + PLAYER_H / 2);
      if (s.isJumping) ctx.rotate(-0.15);
      // Body glow
      ctx.shadowColor = '#818cf8';
      ctx.shadowBlur = 14;
      // Ship body
      ctx.fillStyle = '#6366f1';
      ctx.beginPath();
      ctx.moveTo(0, -PLAYER_H / 2 + 4);
      ctx.lineTo(PLAYER_W / 2 - 2, PLAYER_H / 2 - 2);
      ctx.lineTo(0, PLAYER_H / 2 - 8);
      ctx.lineTo(-(PLAYER_W / 2 - 2), PLAYER_H / 2 - 2);
      ctx.closePath();
      ctx.fill();
      // Cockpit
      ctx.fillStyle = '#a5b4fc';
      ctx.beginPath();
      ctx.arc(0, -2, 7, 0, Math.PI * 2);
      ctx.fill();
      // Thruster
      ctx.fillStyle = `rgba(251,146,60,${0.7 + Math.sin(timestamp * 0.02) * 0.3})`;
      ctx.beginPath();
      ctx.moveTo(-6, PLAYER_H / 2 - 4);
      ctx.lineTo(6, PLAYER_H / 2 - 4);
      ctx.lineTo(0, PLAYER_H / 2 + 10 + Math.random() * 6);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Obstacles (meteors)
      for (const o of s.obstacles) {
        ctx.save();
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 10;
        const grad = ctx.createLinearGradient(o.x, GROUND_Y - o.height, o.x + o.width, GROUND_Y);
        grad.addColorStop(0, '#dc2626');
        grad.addColorStop(1, '#7f1d1d');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(o.x, GROUND_Y - o.height, o.width, o.height, 4);
        ctx.fill();
        ctx.restore();
      }

      // HUD
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.fillRect(10, 10, 180, 38);
      ctx.strokeStyle = 'rgba(139,92,246,0.5)';
      ctx.lineWidth = 1;
      ctx.strokeRect(10, 10, 180, 38);
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 14px Inter, sans-serif';
      ctx.fillText(`Score: ${sc}`, 20, 28);
      ctx.fillStyle = '#a78bfa';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText(`Target: ${config.targetScore}`, 20, 43);

      // Progress bar
      const prog = Math.min(sc / config.targetScore, 1);
      ctx.fillStyle = 'rgba(139,92,246,0.2)';
      ctx.fillRect(CANVAS_W - 120, 14, 105, 10);
      const pGrad = ctx.createLinearGradient(CANVAS_W - 120, 0, CANVAS_W - 120 + 105 * prog, 0);
      pGrad.addColorStop(0, '#818cf8');
      pGrad.addColorStop(1, '#a78bfa');
      ctx.fillStyle = pGrad;
      ctx.fillRect(CANVAS_W - 120, 14, 105 * prog, 10);
      ctx.strokeStyle = 'rgba(139,92,246,0.5)';
      ctx.strokeRect(CANVAS_W - 120, 14, 105, 10);

      s.frameId = requestAnimationFrame(draw);
    };

    s.frameId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(s.frameId);
  }, [gameState, config, level, onLevelComplete]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (gameState === 'idle') { resetGame(); return; }
        if (gameState === 'playing') jump();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [gameState, jump, resetGame]);

  const handleNext = () => {
    if (level < 100) {
      setLevel(l => l + 1);
      setGameState('idle');
    }
  };

  const diffColors: Record<Difficulty, string> = {
    Easy: 'from-green-500 to-emerald-600',
    Medium: 'from-yellow-500 to-orange-500',
    Hard: 'from-red-500 to-pink-600',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        className="relative w-full max-w-3xl"
        style={{ background: 'linear-gradient(135deg,#0f0a2e 0%,#1a0e3d 100%)', borderRadius: 20, border: '1px solid rgba(139,92,246,0.3)', boxShadow: '0 0 60px rgba(139,92,246,0.2)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${diffColors[difficulty]}`}>{difficulty}</div>
            <span className="text-white font-bold text-lg">🚀 Cosmic Runner</span>
            <span className="text-purple-300 text-sm">Level {level}/100</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-400 text-sm"><Trophy size={14} />{highScore}</div>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors"><X size={20} /></button>
          </div>
        </div>

        {/* Game Canvas */}
        <div className="relative p-4">
          <canvas
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            onClick={() => { if (gameState === 'idle') resetGame(); else if (gameState === 'playing') jump(); }}
            className="w-full rounded-xl cursor-pointer"
            style={{ imageRendering: 'pixelated', maxHeight: 280 }}
          />

          <AnimatePresence>
            {gameState === 'idle' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-4 rounded-xl flex flex-col items-center justify-center"
                style={{ background: 'rgba(5,8,22,0.85)' }}>
                <Zap size={48} className="text-purple-400 mb-3" />
                <h3 className="text-white text-2xl font-bold mb-1">Cosmic Runner</h3>
                <p className="text-purple-300 text-sm mb-2">Level {level} • Target: {config.targetScore} pts</p>
                <p className="text-white/50 text-xs mb-5">Speed: {config.obstacleSpeed.toFixed(1)}x | Interval: {(config.obstacleInterval/1000).toFixed(1)}s</p>
                <button onClick={resetGame} className="px-8 py-3 rounded-full font-bold text-white text-lg"
                  style={{ background: 'linear-gradient(90deg,#7c3aed,#6366f1)', boxShadow: '0 0 20px rgba(139,92,246,0.5)' }}>
                  ▶ Play
                </button>
                <p className="text-white/40 text-xs mt-4">Press SPACE or click to jump</p>
              </motion.div>
            )}

            {gameState === 'dead' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-4 rounded-xl flex flex-col items-center justify-center"
                style={{ background: 'rgba(5,8,22,0.9)' }}>
                <div className="text-5xl mb-3">💥</div>
                <h3 className="text-white text-2xl font-bold mb-1">Crashed!</h3>
                <p className="text-white/60 mb-1">Score: <span className="text-purple-300 font-bold">{score}</span></p>
                <p className="text-white/60 mb-5">Target: <span className="text-amber-300">{config.targetScore}</span></p>
                <button onClick={resetGame} className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white"
                  style={{ background: 'linear-gradient(90deg,#7c3aed,#6366f1)', boxShadow: '0 0 20px rgba(139,92,246,0.4)' }}>
                  <RotateCcw size={16} /> Try Again
                </button>
              </motion.div>
            )}

            {gameState === 'levelup' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-4 rounded-xl flex flex-col items-center justify-center"
                style={{ background: 'rgba(5,8,22,0.9)' }}>
                <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] }} transition={{ repeat: 2 }}
                  className="text-5xl mb-3">⭐</motion.div>
                <h3 className="text-white text-2xl font-bold mb-1">Level Complete!</h3>
                <p className="text-emerald-400 font-bold text-lg mb-1">+{score} pts</p>
                <p className="text-white/50 text-sm mb-5">Level {level} cleared!</p>
                <div className="flex gap-3">
                  <button onClick={resetGame} className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white text-sm border border-purple-500/40 hover:border-purple-500 transition-colors">
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
          </AnimatePresence>
        </div>

        {/* Level bar */}
        <div className="px-6 pb-4">
          <div className="flex items-center justify-between text-xs text-white/50 mb-1.5">
            <span>Level Progress</span><span>{level}/100</span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${level}%`, background: 'linear-gradient(90deg,#818cf8,#a78bfa)' }} />
          </div>
          <div className="flex items-center justify-between mt-3">
            {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map(d => (
              <div key={d} className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-full ${d === difficulty ? 'text-white' : 'text-white/30'}`}
                style={{ background: d === difficulty ? 'rgba(139,92,246,0.2)' : 'transparent', border: d === difficulty ? '1px solid rgba(139,92,246,0.4)' : '1px solid transparent' }}>
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
