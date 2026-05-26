import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Trophy, Star, ChevronRight } from 'lucide-react';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface StarBlasterProps {
  difficulty: Difficulty;
  initialLevel: number;
  onClose: () => void;
  onLevelComplete: (level: number, score: number) => void;
}

const CW = 700, CH = 480;

interface Bullet { x: number; y: number; vy: number; }
interface Enemy { x: number; y: number; hp: number; maxHp: number; type: 'basic' | 'tank' | 'fast'; vx: number; vy: number; fireTimer: number; }
interface EnemyBullet { x: number; y: number; vx: number; vy: number; }
interface Particle { x: number; y: number; vx: number; vy: number; life: number; color: string; r: number; }

const LEVEL_CONFIGS: Record<Difficulty, { enemyCount: number; enemyHp: number; enemySpeed: number; enemyFireRate: number; targetKills: number; }[]> = {
  Easy: Array.from({ length: 100 }, (_, i) => ({
    enemyCount: 3 + Math.floor(i / 5),
    enemyHp: 1 + Math.floor(i / 20),
    enemySpeed: 0.6 + i * 0.01,
    enemyFireRate: Math.max(120, 300 - i * 2),
    targetKills: 5 + i * 2,
  })),
  Medium: Array.from({ length: 100 }, (_, i) => ({
    enemyCount: 5 + Math.floor(i / 4),
    enemyHp: 2 + Math.floor(i / 15),
    enemySpeed: 1.0 + i * 0.015,
    enemyFireRate: Math.max(80, 220 - i * 2),
    targetKills: 10 + i * 3,
  })),
  Hard: Array.from({ length: 100 }, (_, i) => ({
    enemyCount: 8 + Math.floor(i / 3),
    enemyHp: 3 + Math.floor(i / 10),
    enemySpeed: 1.5 + i * 0.02,
    enemyFireRate: Math.max(60, 180 - i * 2),
    targetKills: 15 + i * 4,
  })),
};

function spawnEnemy(cfg: typeof LEVEL_CONFIGS['Easy'][0]): Enemy {
  const types: Enemy['type'][] = ['basic', 'tank', 'fast'];
  const type = types[Math.floor(Math.random() * types.length)];
  const hp = type === 'tank' ? cfg.enemyHp * 3 : type === 'fast' ? 1 : cfg.enemyHp;
  return {
    x: 80 + Math.random() * (CW - 160),
    y: -30,
    hp, maxHp: hp,
    type,
    vx: (Math.random() - 0.5) * cfg.enemySpeed,
    vy: cfg.enemySpeed * (type === 'fast' ? 1.8 : type === 'tank' ? 0.6 : 1),
    fireTimer: Math.floor(Math.random() * cfg.enemyFireRate),
  };
}

export default function StarBlaster({ difficulty, initialLevel, onClose, onLevelComplete }: StarBlasterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const keysRef = useRef<Set<string>>(new Set());
  const stateRef = useRef({
    px: CW / 2, py: CH - 80,
    bullets: [] as Bullet[],
    enemies: [] as Enemy[],
    enemyBullets: [] as EnemyBullet[],
    particles: [] as Particle[],
    kills: 0, hp: 5, maxHp: 5,
    fireTimer: 0, spawnTimer: 0,
    alive: true, frameId: 0,
    stars: Array.from({ length: 60 }, () => ({
      x: Math.random() * CW, y: Math.random() * CH,
      speed: 0.5 + Math.random() * 2, r: Math.random() * 1.5 + 0.3,
    })),
  });

  const [level, setLevel] = useState(initialLevel);
  const [kills, setKills] = useState(0);
  const [hp, setHp] = useState(5);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'dead' | 'levelup'>('idle');
  const [highKills, setHighKills] = useState(0);

  const cfg = LEVEL_CONFIGS[difficulty][level - 1];

  const resetGame = useCallback(() => {
    const s = stateRef.current;
    s.px = CW / 2; s.py = CH - 80;
    s.bullets = []; s.enemies = []; s.enemyBullets = []; s.particles = [];
    s.kills = 0; s.hp = 5; s.maxHp = 5;
    s.fireTimer = 0; s.spawnTimer = 0; s.alive = true;
    setKills(0); setHp(5); setGameState('playing');
  }, []);

  useEffect(() => {
    if (gameState !== 'playing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const s = stateRef.current;

    const loop = () => {
      if (!s.alive) return;

      // Player movement
      const speed = 4.5;
      if (keysRef.current.has('ArrowLeft') || keysRef.current.has('a')) s.px = Math.max(20, s.px - speed);
      if (keysRef.current.has('ArrowRight') || keysRef.current.has('d')) s.px = Math.min(CW - 20, s.px + speed);
      if (keysRef.current.has('ArrowUp') || keysRef.current.has('w')) s.py = Math.max(CH / 2, s.py - speed);
      if (keysRef.current.has('ArrowDown') || keysRef.current.has('s')) s.py = Math.min(CH - 20, s.py + speed);

      // Fire
      s.fireTimer--;
      if (s.fireTimer <= 0 && (keysRef.current.has(' ') || keysRef.current.has('z'))) {
        s.bullets.push({ x: s.px, y: s.py - 20, vy: -10 });
        s.bullets.push({ x: s.px - 10, y: s.py - 10, vy: -9.5 });
        s.bullets.push({ x: s.px + 10, y: s.py - 10, vy: -9.5 });
        s.fireTimer = 12;
      }

      // Bullets
      s.bullets = s.bullets.filter(b => { b.y += b.vy; return b.y > -10; });

      // Spawn enemies
      s.spawnTimer--;
      if (s.spawnTimer <= 0 && s.enemies.length < cfg.enemyCount) {
        s.enemies.push(spawnEnemy(cfg));
        s.spawnTimer = 60;
      }

      // Move enemies + fire
      for (const e of s.enemies) {
        e.x += e.vx;
        e.y += e.vy;
        if (e.x < 20 || e.x > CW - 20) e.vx *= -1;
        e.fireTimer--;
        if (e.fireTimer <= 0) {
          const dx = s.px - e.x, dy = s.py - e.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          s.enemyBullets.push({ x: e.x, y: e.y, vx: (dx / dist) * 3.5, vy: (dy / dist) * 3.5 });
          e.fireTimer = cfg.enemyFireRate;
        }
      }

      // Remove off-screen enemies
      s.enemies = s.enemies.filter(e => e.y < CH + 40);

      // Enemy bullets
      s.enemyBullets = s.enemyBullets.filter(b => {
        b.x += b.vx; b.y += b.vy;
        return b.x > -10 && b.x < CW + 10 && b.y > -10 && b.y < CH + 10;
      });

      // Collision: player bullets vs enemies
      for (let bi = s.bullets.length - 1; bi >= 0; bi--) {
        for (let ei = s.enemies.length - 1; ei >= 0; ei--) {
          const b = s.bullets[bi], e = s.enemies[ei];
          if (!b || !e) continue;
          if (Math.abs(b.x - e.x) < 20 && Math.abs(b.y - e.y) < 20) {
            s.bullets.splice(bi, 1);
            e.hp--;
            for (let p = 0; p < 5; p++) {
              s.particles.push({
                x: e.x, y: e.y,
                vx: (Math.random() - 0.5) * 4, vy: (Math.random() - 0.5) * 4,
                life: 25, r: Math.random() * 3 + 1,
                color: e.type === 'tank' ? '#f87171' : e.type === 'fast' ? '#34d399' : '#fbbf24',
              });
            }
            if (e.hp <= 0) {
              s.enemies.splice(ei, 1);
              s.kills++;
              setKills(s.kills);
              for (let p = 0; p < 12; p++) {
                s.particles.push({
                  x: e.x, y: e.y,
                  vx: (Math.random() - 0.5) * 8, vy: (Math.random() - 0.5) * 8,
                  life: 40, r: Math.random() * 5 + 2,
                  color: ['#f87171', '#fbbf24', '#a78bfa', '#38bdf8'][Math.floor(Math.random() * 4)],
                });
              }
              if (s.kills >= cfg.targetKills) {
                s.alive = false;
                setGameState('levelup');
                onLevelComplete(level, s.kills * 100);
                return;
              }
            }
            break;
          }
        }
      }

      // Enemy bullets vs player
      for (let bi = s.enemyBullets.length - 1; bi >= 0; bi--) {
        const b = s.enemyBullets[bi];
        if (Math.abs(b.x - s.px) < 18 && Math.abs(b.y - s.py) < 18) {
          s.enemyBullets.splice(bi, 1);
          s.hp--;
          setHp(s.hp);
          if (s.hp <= 0) {
            s.alive = false;
            setHighKills(prev => Math.max(prev, s.kills));
            setGameState('dead');
            return;
          }
        }
      }

      // Particles
      s.particles = s.particles.filter(p => { p.x += p.vx; p.y += p.vy; p.life--; return p.life > 0; });

      // Stars
      for (const st of s.stars) { st.y += st.speed; if (st.y > CH) { st.y = -5; st.x = Math.random() * CW; } }

      // DRAW
      ctx.clearRect(0, 0, CW, CH);
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, CW, CH);

      // Stars
      for (const st of s.stars) {
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,210,255,${0.4 + st.speed * 0.2})`;
        ctx.fill();
      }

      // Particles
      for (const p of s.particles) {
        ctx.globalAlpha = p.life / 40;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Enemies
      for (const e of s.enemies) {
        ctx.save();
        ctx.translate(e.x, e.y);
        const col = e.type === 'tank' ? '#ef4444' : e.type === 'fast' ? '#34d399' : '#f59e0b';
        ctx.shadowColor = col;
        ctx.shadowBlur = 12;
        ctx.fillStyle = col;
        if (e.type === 'fast') {
          ctx.beginPath();
          ctx.moveTo(0, -12); ctx.lineTo(8, 10); ctx.lineTo(-8, 10);
          ctx.closePath(); ctx.fill();
        } else if (e.type === 'tank') {
          ctx.fillRect(-16, -12, 32, 24);
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -14); ctx.lineTo(12, 12); ctx.lineTo(0, 6); ctx.lineTo(-12, 12);
          ctx.closePath(); ctx.fill();
        }
        // HP bar
        const bw = 30;
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(-bw / 2, 16, bw, 4);
        ctx.fillStyle = col;
        ctx.fillRect(-bw / 2, 16, bw * (e.hp / e.maxHp), 4);
        ctx.restore();
      }

      // Enemy bullets
      for (const b of s.enemyBullets) {
        ctx.shadowColor = '#f87171';
        ctx.shadowBlur = 6;
        ctx.fillStyle = '#fca5a5';
        ctx.beginPath();
        ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Player bullets
      for (const b of s.bullets) {
        ctx.shadowColor = '#818cf8';
        ctx.shadowBlur = 8;
        ctx.fillStyle = '#c7d2fe';
        ctx.fillRect(b.x - 2, b.y, 4, 14);
      }
      ctx.shadowBlur = 0;

      // Player ship
      ctx.save();
      ctx.translate(s.px, s.py);
      ctx.shadowColor = '#6366f1';
      ctx.shadowBlur = 20;
      ctx.fillStyle = '#6366f1';
      ctx.beginPath();
      ctx.moveTo(0, -24); ctx.lineTo(18, 14); ctx.lineTo(8, 8); ctx.lineTo(0, 12);
      ctx.lineTo(-8, 8); ctx.lineTo(-18, 14);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#a5b4fc';
      ctx.beginPath();
      ctx.arc(0, -4, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // HUD
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillRect(8, 8, 200, 44);
      ctx.strokeStyle = 'rgba(99,102,241,0.5)';
      ctx.lineWidth = 1;
      ctx.strokeRect(8, 8, 200, 44);
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.fillText(`Kills: ${s.kills} / ${cfg.targetKills}`, 18, 26);
      // HP hearts
      for (let i = 0; i < s.maxHp; i++) {
        ctx.fillStyle = i < s.hp ? '#ef4444' : '#374151';
        ctx.font = '14px sans-serif';
        ctx.fillText('♥', 18 + i * 18, 46);
      }

      s.frameId = requestAnimationFrame(loop);
    };

    s.frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(s.frameId);
  }, [gameState, cfg, level, onLevelComplete]);

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => { keysRef.current.add(e.key); if (e.key === ' ') e.preventDefault(); };
    const onUp = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => { window.removeEventListener('keydown', onDown); window.removeEventListener('keyup', onUp); };
  }, []);

  useEffect(() => {
    if (gameState === 'idle') {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); resetGame(); }
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [gameState, resetGame]);

  const handleNext = () => { if (level < 100) { setLevel(l => l + 1); setGameState('idle'); } };

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
        style={{ background: 'linear-gradient(135deg,#030712 0%,#0f172a 100%)', borderRadius: 20, border: '1px solid rgba(99,102,241,0.3)', boxShadow: '0 0 60px rgba(99,102,241,0.2)' }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-indigo-500/20">
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${diffColors[difficulty]}`}>{difficulty}</div>
            <span className="text-white font-bold text-lg">🚀 Star Blaster</span>
            <span className="text-indigo-300 text-sm">Level {level}/100</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-400 text-sm"><Trophy size={14} />{highKills} kills</div>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors"><X size={20} /></button>
          </div>
        </div>

        <div className="relative p-4">
          <canvas ref={canvasRef} width={CW} height={CH} className="w-full rounded-xl" style={{ maxHeight: 380 }} />

          <AnimatePresence>
            {gameState === 'idle' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-4 rounded-xl flex flex-col items-center justify-center"
                style={{ background: 'rgba(3,7,18,0.88)' }}>
                <div className="text-5xl mb-3">🎯</div>
                <h3 className="text-white text-2xl font-bold mb-1">Star Blaster</h3>
                <p className="text-indigo-300 text-sm mb-1">Level {level} — Kill {cfg.targetKills} enemies</p>
                <p className="text-white/40 text-xs mb-2">Enemies: {cfg.enemyCount} max | HP: {cfg.enemyHp}</p>
                <p className="text-white/40 text-xs mb-5">WASD/Arrows to move • SPACE/Z to shoot</p>
                <button onClick={resetGame} className="px-8 py-3 rounded-full font-bold text-white text-lg"
                  style={{ background: 'linear-gradient(90deg,#4f46e5,#7c3aed)', boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}>
                  ▶ Start
                </button>
              </motion.div>
            )}

            {gameState === 'dead' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-4 rounded-xl flex flex-col items-center justify-center"
                style={{ background: 'rgba(3,7,18,0.92)' }}>
                <div className="text-5xl mb-3">💀</div>
                <h3 className="text-white text-2xl font-bold mb-1">Destroyed!</h3>
                <p className="text-white/60 mb-5">You got <span className="text-indigo-300 font-bold">{kills}</span> kills</p>
                <button onClick={resetGame} className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white"
                  style={{ background: 'linear-gradient(90deg,#4f46e5,#7c3aed)', boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}>
                  <RotateCcw size={16} /> Retry
                </button>
              </motion.div>
            )}

            {gameState === 'levelup' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-4 rounded-xl flex flex-col items-center justify-center"
                style={{ background: 'rgba(3,7,18,0.92)' }}>
                <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }} transition={{ repeat: 2 }} className="text-5xl mb-3">🏆</motion.div>
                <h3 className="text-white text-2xl font-bold mb-1">Mission Complete!</h3>
                <p className="text-emerald-400 font-bold text-lg mb-5">Level {level} cleared!</p>
                <div className="flex gap-3">
                  <button onClick={resetGame} className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white text-sm border border-indigo-500/40">
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

        <div className="px-6 pb-4">
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
