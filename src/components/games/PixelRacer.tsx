import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Trophy, Star, ChevronRight } from 'lucide-react';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface PixelRacerProps {
  difficulty: Difficulty;
  initialLevel: number;
  onClose: () => void;
  onLevelComplete: (level: number, score: number) => void;
}

const CW = 400, CH = 500;
const ROAD_L = 80, ROAD_R = 320;
const ROAD_W = ROAD_R - ROAD_L;
const LANE_W = ROAD_W / 3;
const LANES = [ROAD_L + LANE_W / 2, ROAD_L + LANE_W * 1.5, ROAD_L + LANE_W * 2.5];
const CAR_W = 36, CAR_H = 60;

const CONFIGS: Record<Difficulty, { speed: number; trafficSpeed: number; targetDist: number; spawnRate: number }[]> = {
  Easy: Array.from({ length: 100 }, (_, i) => ({
    speed: 3 + i * 0.04,
    trafficSpeed: 1.5 + i * 0.025,
    targetDist: 2000 + i * 500,
    spawnRate: Math.max(80, 160 - i * 0.9),
  })),
  Medium: Array.from({ length: 100 }, (_, i) => ({
    speed: 5 + i * 0.06,
    trafficSpeed: 2.5 + i * 0.04,
    targetDist: 3000 + i * 600,
    spawnRate: Math.max(60, 120 - i * 0.8),
  })),
  Hard: Array.from({ length: 100 }, (_, i) => ({
    speed: 7 + i * 0.08,
    trafficSpeed: 4 + i * 0.06,
    targetDist: 4000 + i * 800,
    spawnRate: Math.max(40, 90 - i * 0.7),
  })),
};

interface Traffic { x: number; y: number; lane: number; color: string; }

const TRAFFIC_COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7'];

export default function PixelRacer({ difficulty, initialLevel, onClose, onLevelComplete }: PixelRacerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const keysRef = useRef<Set<string>>(new Set());
  const stateRef = useRef({
    px: LANES[1], py: CH - 80,
    targetLane: 1, currentLane: 1,
    traffic: [] as Traffic[],
    distance: 0, alive: true,
    spawnTimer: 0, roadOffset: 0,
    frameId: 0,
  });

  const [level, setLevel] = useState(initialLevel);
  const [distance, setDistance] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'crash' | 'win'>('idle');
  const [highDist, setHighDist] = useState(0);

  const cfg = CONFIGS[difficulty][level - 1];

  const resetGame = useCallback(() => {
    const s = stateRef.current;
    s.px = LANES[1]; s.py = CH - 80;
    s.targetLane = 1; s.currentLane = 1;
    s.traffic = []; s.distance = 0;
    s.alive = true; s.spawnTimer = 0; s.roadOffset = 0;
    setDistance(0); setGameState('playing');
  }, []);

  useEffect(() => {
    if (gameState !== 'playing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const s = stateRef.current;

    const loop = () => {
      if (!s.alive) return;

      // Input
      if (keysRef.current.has('ArrowLeft') || keysRef.current.has('a')) s.targetLane = Math.max(0, s.currentLane - 1);
      if (keysRef.current.has('ArrowRight') || keysRef.current.has('d')) s.targetLane = Math.min(2, s.currentLane + 1);

      // Smooth lane change
      const targetX = LANES[s.targetLane];
      s.px += (targetX - s.px) * 0.15;
      if (Math.abs(s.px - targetX) < 1) { s.px = targetX; s.currentLane = s.targetLane; }

      // Road scroll
      s.roadOffset = (s.roadOffset + cfg.speed * 2) % 80;
      s.distance += cfg.speed * 0.5;
      setDistance(Math.floor(s.distance));

      // Spawn traffic
      s.spawnTimer--;
      if (s.spawnTimer <= 0) {
        const lane = Math.floor(Math.random() * 3);
        s.traffic.push({ x: LANES[lane], y: -70, lane, color: TRAFFIC_COLORS[Math.floor(Math.random() * TRAFFIC_COLORS.length)] });
        s.spawnTimer = cfg.spawnRate;
      }

      // Move traffic
      s.traffic = s.traffic.filter(t => { t.y += cfg.trafficSpeed + cfg.speed; return t.y < CH + 80; });

      // Collision
      for (const t of s.traffic) {
        if (Math.abs(t.x - s.px) < CAR_W - 8 && Math.abs(t.y - s.py) < CAR_H - 8) {
          s.alive = false;
          setHighDist(prev => Math.max(prev, Math.floor(s.distance)));
          setGameState('crash');
          return;
        }
      }

      // Win
      if (s.distance >= cfg.targetDist) {
        s.alive = false;
        setGameState('win');
        onLevelComplete(level, Math.floor(s.distance));
        return;
      }

      // DRAW
      ctx.clearRect(0, 0, CW, CH);

      // Sky/background
      const bg = ctx.createLinearGradient(0, 0, 0, CH);
      bg.addColorStop(0, '#0f172a');
      bg.addColorStop(1, '#1e293b');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, CW, CH);

      // Grass
      ctx.fillStyle = '#14532d';
      ctx.fillRect(0, 0, ROAD_L, CH);
      ctx.fillRect(ROAD_R, 0, CW - ROAD_R, CH);

      // Road
      const road = ctx.createLinearGradient(ROAD_L, 0, ROAD_R, 0);
      road.addColorStop(0, '#374151');
      road.addColorStop(0.5, '#4b5563');
      road.addColorStop(1, '#374151');
      ctx.fillStyle = road;
      ctx.fillRect(ROAD_L, 0, ROAD_W, CH);

      // Road markings
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 3;
      ctx.setLineDash([40, 40]);
      ctx.lineDashOffset = -s.roadOffset;
      ctx.beginPath();
      ctx.moveTo(ROAD_L + LANE_W, 0); ctx.lineTo(ROAD_L + LANE_W, CH);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(ROAD_L + LANE_W * 2, 0); ctx.lineTo(ROAD_L + LANE_W * 2, CH);
      ctx.stroke();
      ctx.setLineDash([]);

      // Road edges
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(ROAD_L, 0); ctx.lineTo(ROAD_L, CH); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ROAD_R, 0); ctx.lineTo(ROAD_R, CH); ctx.stroke();

      // Traffic
      for (const t of s.traffic) {
        ctx.save();
        ctx.shadowColor = t.color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = t.color;
        // Car body
        ctx.beginPath();
        ctx.roundRect(t.x - CAR_W / 2 + 4, t.y - CAR_H / 2 + 6, CAR_W - 8, CAR_H - 12, 4);
        ctx.fill();
        // Headlights
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(t.x - 12, t.y + CAR_H / 2 - 18, 8, 5);
        ctx.fillRect(t.x + 4, t.y + CAR_H / 2 - 18, 8, 5);
        ctx.restore();
      }

      // Player car
      ctx.save();
      ctx.translate(s.px, s.py);
      ctx.shadowColor = '#818cf8';
      ctx.shadowBlur = 20;
      // Body
      ctx.fillStyle = '#6366f1';
      ctx.beginPath();
      ctx.roundRect(-CAR_W / 2 + 2, -CAR_H / 2, CAR_W - 4, CAR_H, 6);
      ctx.fill();
      // Windows
      ctx.fillStyle = '#c7d2fe';
      ctx.beginPath();
      ctx.roundRect(-CAR_W / 2 + 6, -CAR_H / 2 + 8, CAR_W - 12, 18, 3);
      ctx.fill();
      // Headlights
      ctx.fillStyle = '#fef9c3';
      ctx.shadowColor = '#fef9c3';
      ctx.fillRect(-CAR_W / 2 + 2, -CAR_H / 2 + 2, 10, 6);
      ctx.fillRect(CAR_W / 2 - 12, -CAR_H / 2 + 2, 10, 6);
      ctx.restore();

      // HUD
      const prog = Math.min(s.distance / cfg.targetDist, 1);
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.fillRect(8, 8, CW - 16, 38);
      ctx.strokeStyle = 'rgba(99,102,241,0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(8, 8, CW - 16, 38);
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.fillText(`Distance: ${Math.floor(s.distance)}m / ${cfg.targetDist}m`, 16, 24);
      // Progress bar
      ctx.fillStyle = 'rgba(99,102,241,0.3)';
      ctx.fillRect(16, 30, CW - 32, 8);
      const pGrad = ctx.createLinearGradient(16, 0, 16 + (CW - 32) * prog, 0);
      pGrad.addColorStop(0, '#818cf8');
      pGrad.addColorStop(1, '#6366f1');
      ctx.fillStyle = pGrad;
      ctx.fillRect(16, 30, (CW - 32) * prog, 8);

      s.frameId = requestAnimationFrame(loop);
    };

    s.frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(s.frameId);
  }, [gameState, cfg, level, onLevelComplete]);

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => { keysRef.current.add(e.key); };
    const onUp = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => { window.removeEventListener('keydown', onDown); window.removeEventListener('keyup', onUp); };
  }, []);

  const handleNext = () => { if (level < 100) { setLevel(l => l + 1); setGameState('idle'); } };

  const diffColors: Record<Difficulty, string> = {
    Easy: 'from-green-500 to-emerald-600',
    Medium: 'from-yellow-500 to-orange-500',
    Hard: 'from-red-500 to-pink-600',
  };

  // Touch controls
  const handleTouch = (dir: 'left' | 'right') => {
    const s = stateRef.current;
    if (dir === 'left') s.targetLane = Math.max(0, s.currentLane - 1);
    else s.targetLane = Math.min(2, s.currentLane + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
        className="relative w-full max-w-md"
        style={{ background: 'linear-gradient(135deg,#030712 0%,#0f172a 100%)', borderRadius: 20, border: '1px solid rgba(99,102,241,0.3)', boxShadow: '0 0 60px rgba(99,102,241,0.2)' }}>

        <div className="flex items-center justify-between px-6 py-4 border-b border-indigo-500/20">
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${diffColors[difficulty]}`}>{difficulty}</div>
            <span className="text-white font-bold text-lg">🏎️ Pixel Racer</span>
            <span className="text-indigo-300 text-sm">Level {level}/100</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-400 text-sm"><Trophy size={14} />{highDist}m</div>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors"><X size={20} /></button>
          </div>
        </div>

        <div className="relative px-4 pt-4">
          <canvas ref={canvasRef} width={CW} height={CH} className="w-full rounded-xl" style={{ maxHeight: 380 }} />
          <AnimatePresence>
            {gameState === 'idle' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-4 rounded-xl flex flex-col items-center justify-center"
                style={{ background: 'rgba(3,7,18,0.88)' }}>
                <div className="text-5xl mb-3">🏎️</div>
                <h3 className="text-white text-2xl font-bold mb-1">Pixel Racer</h3>
                <p className="text-indigo-300 text-sm mb-1">Level {level} — Drive {cfg.targetDist}m</p>
                <p className="text-white/40 text-xs mb-5">Arrow Keys / A-D to change lanes</p>
                <button onClick={resetGame} className="px-8 py-3 rounded-full font-bold text-white text-lg"
                  style={{ background: 'linear-gradient(90deg,#4f46e5,#7c3aed)', boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}>
                  ▶ Race!
                </button>
              </motion.div>
            )}
            {gameState === 'crash' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-4 rounded-xl flex flex-col items-center justify-center"
                style={{ background: 'rgba(3,7,18,0.92)' }}>
                <div className="text-5xl mb-3">💥</div>
                <h3 className="text-white text-2xl font-bold mb-1">Crash!</h3>
                <p className="text-white/60 mb-5">Distance: <span className="text-indigo-300 font-bold">{distance}m</span></p>
                <button onClick={resetGame} className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white"
                  style={{ background: 'linear-gradient(90deg,#4f46e5,#7c3aed)' }}>
                  <RotateCcw size={16} /> Retry
                </button>
              </motion.div>
            )}
            {gameState === 'win' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-4 rounded-xl flex flex-col items-center justify-center"
                style={{ background: 'rgba(3,7,18,0.92)' }}>
                <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }} transition={{ repeat: 2 }} className="text-5xl mb-3">🏁</motion.div>
                <h3 className="text-white text-2xl font-bold mb-1">Finish Line!</h3>
                <p className="text-emerald-400 font-bold text-lg mb-5">{distance}m driven!</p>
                <div className="flex gap-3">
                  <button onClick={resetGame} className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white text-sm border border-indigo-500/40">
                    <RotateCcw size={14} /> Replay
                  </button>
                  {level < 100 && (
                    <button onClick={handleNext} className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white text-sm"
                      style={{ background: 'linear-gradient(90deg,#10b981,#059669)' }}>
                      Next <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Touch controls */}
        {gameState === 'playing' && (
          <div className="flex gap-4 px-6 py-3">
            <button onPointerDown={() => handleTouch('left')} className="flex-1 py-3 rounded-xl font-bold text-white text-xl"
              style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)' }}>◀</button>
            <button onPointerDown={() => handleTouch('right')} className="flex-1 py-3 rounded-xl font-bold text-white text-xl"
              style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)' }}>▶</button>
          </div>
        )}

        <div className="px-6 pb-4 border-t border-indigo-500/10 pt-3">
          <div className="flex items-center justify-between text-xs text-white/50 mb-1.5">
            <span>Level Progress</span><span>{level}/100</span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${level}%`, background: 'linear-gradient(90deg,#4f46e5,#7c3aed)' }} />
          </div>
          <div className="flex items-center justify-between mt-3">
            {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map(d => (
              <div key={d} className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-full ${d === difficulty ? 'text-white' : 'text-white/30'}`}
                style={{ background: d === difficulty ? 'rgba(99,102,241,0.2)' : 'transparent', border: d === difficulty ? '1px solid rgba(99,102,241,0.4)' : '1px solid transparent' }}>
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
