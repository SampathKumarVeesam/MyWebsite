// // import { useEffect, useRef } from 'react';
// // import { Link } from 'react-router-dom';
// // import { motion, useScroll, useTransform } from 'framer-motion';
// // import {
// //   Gamepad2,
// //   GraduationCap,
// //   ShoppingBag,
// //   Play,
// //   Wallet,
// //   ArrowRight,
// //   Sparkles,
// //   Zap,
// //   TrendingUp,
// //   Flame,
// //   Users,
// //   Crown,
// // } from 'lucide-react';
// // import { Button } from '@/components/ui/button';

// // function ParticleBackground() {
// //   const canvasRef = useRef<HTMLCanvasElement>(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext('2d');
// //     if (!ctx) return;

// //     const setCanvasSize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };
// //     setCanvasSize();

// //     const particles: Array<{
// //       x: number;
// //       y: number;
// //       vx: number;
// //       vy: number;
// //       size: number;
// //       opacity: number;
// //     }> = [];

// //     for (let i = 0; i < 80; i++) {
// //       particles.push({
// //         x: Math.random() * canvas.width,
// //         y: Math.random() * canvas.height,
// //         vx: (Math.random() - 0.5) * 0.5,
// //         vy: (Math.random() - 0.5) * 0.5,
// //         size: Math.random() * 2 + 1,
// //         opacity: Math.random() * 0.5 + 0.2,
// //       });
// //     }

// //     let animationId: number;

// //     function animate() {
// //       if (!ctx || !canvas) return;
// //       ctx.fillStyle = 'rgba(10, 14, 23, 0.1)';
// //       ctx.fillRect(0, 0, canvas.width, canvas.height);

// //       particles.forEach((particle, i) => {
// //         particle.x += particle.vx;
// //         particle.y += particle.vy;

// //         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
// //         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

// //         ctx.beginPath();
// //         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
// //         ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
// //         ctx.fill();

// //         particles.slice(i + 1).forEach((other) => {
// //           const dx = particle.x - other.x;
// //           const dy = particle.y - other.y;
// //           const distance = Math.sqrt(dx * dx + dy * dy);

// //           if (distance < 150) {
// //             ctx.beginPath();
// //             ctx.moveTo(particle.x, particle.y);
// //             ctx.lineTo(other.x, other.y);
// //             ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
// //             ctx.stroke();
// //           }
// //         });
// //       });

// //       animationId = requestAnimationFrame(animate);
// //     }

// //     animate();

// //     const handleResize = () => {
// //       setCanvasSize();
// //     };

// //     window.addEventListener('resize', handleResize);

// //     return () => {
// //       cancelAnimationFrame(animationId);
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, []);

// //   return (
// //     <canvas
// //       ref={canvasRef}
// //       className="absolute inset-0 pointer-events-none"
// //       style={{ background: 'linear-gradient(135deg, #0A0E17 0%, #0F172A 50%, #1E293B 100%)' }}
// //     />
// //   );
// // }

// // interface IslandProps {
// //   icon: React.ElementType;
// //   title: string;
// //   description: string;
// //   color: string;
// //   delay: number;
// //   to: string;
// // }

// // function FloatingIsland({ icon: Icon, title, description, color, delay, to }: IslandProps) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 50 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.8, delay }}
// //       whileHover={{ scale: 1.05, y: -10 }}
// //       className="group"
// //     >
// //       <Link to={to}>
// //         <div className="island-card h-full relative overflow-hidden">
// //           <div
// //             className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${color}`}
// //           />
// //           <div className="relative z-10">
// //             <div
// //               className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
// //             >
// //               <Icon size={28} className="text-white" />
// //             </div>
// //             <h3 className="text-xl font-bold mb-2">{title}</h3>
// //             <p className="text-white/60 text-sm leading-relaxed">{description}</p>
// //             <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
// //               <span>Explore</span>
// //               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
// //             </div>
// //           </div>
// //         </div>
// //       </Link>
// //     </motion.div>
// //   );
// // }

// // function QuickPlayCard({ title, players, reward }: { title: string; players: string; reward: number }) {
// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.03 }}
// //       className="glass-card p-4 cursor-pointer group"
// //     >
// //       <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-3 flex items-center justify-center">
// //         <Gamepad2 size={48} className="text-white/40 group-hover:text-white/60 transition-colors" />
// //       </div>
// //       <h4 className="font-semibold mb-1">{title}</h4>
// //       <div className="flex items-center justify-between text-sm text-white/50">
// //         <span className="flex items-center gap-1">
// //           <Users size={14} />
// //           {players}
// //         </span>
// //         <span className="flex items-center gap-1 text-amber-400">
// //           <Sparkles size={14} />
// //           +{reward}
// //         </span>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // function StreakTeaser() {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, scale: 0.9 }}
// //       animate={{ opacity: 1, scale: 1 }}
// //       transition={{ duration: 0.5, delay: 1 }}
// //       className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30"
// //     >
// //       <div className="glass-strong px-6 py-3 rounded-full flex items-center gap-4">
// //         <div className="flex items-center gap-2">
// //           <Flame size={20} className="text-orange-500" />
// //           <span className="font-semibold">Day 0</span>
// //         </div>
// //         <div className="w-px h-6 bg-white/20" />
// //         <span className="text-sm text-white/60">Log in to start your streak</span>
// //         <div className="flex items-center gap-1 text-xs">
// //           <span className="px-2 py-1 rounded bg-white/10">Fee Shield</span>
// //           <span className="px-2 py-1 rounded bg-white/10">Profit Boost</span>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // export default function LandingPage() {
// //   const { scrollY } = useScroll();
// //   const heroY = useTransform(scrollY, [0, 500], [0, 150]);
// //   const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

// //   const islands = [
// //     {
// //       icon: ShoppingBag,
// //       title: 'Marketplace',
// //       description: 'Buy, sell, and resell products. Earn coins with every transaction.',
// //       color: 'from-pink-500 to-rose-500',
// //       delay: 0.3,
// //       to: '/marketplace',
// //     },
// //     {
// //       icon: GraduationCap,
// //       title: 'Learning Hub',
// //       description: 'Learn new skills, earn certificates, and get rewarded for knowledge.',
// //       color: 'from-blue-500 to-cyan-500',
// //       delay: 0.4,
// //       to: '/learning',
// //     },
// //     {
// //       icon: Gamepad2,
// //       title: 'Games Arena',
// //       description: 'Play games, challenge friends, and win coins. Instant play available!',
// //       color: 'from-purple-500 to-violet-500',
// //       delay: 0.5,
// //       to: '/games',
// //     },
// //     {
// //       icon: Play,
// //       title: 'Entertainment',
// //       description: 'Watch shorts, reels, and movies. Earn while you enjoy content.',
// //       color: 'from-red-500 to-orange-500',
// //       delay: 0.6,
// //       to: '/entertainment',
// //     },
// //     {
// //       icon: Wallet,
// //       title: 'Smart Wallet',
// //       description: 'Dual wallet system with spendable coins and emergency vault.',
// //       color: 'from-emerald-500 to-green-500',
// //       delay: 0.7,
// //       to: '/wallet',
// //     },
// //   ];

// //   const quickGames = [
// //     { title: 'Cosmic Runner', players: '12.5K', reward: 50 },
// //     { title: 'Neon Puzzler', players: '8.2K', reward: 30 },
// //     { title: 'Star Blaster', players: '15.1K', reward: 75 },
// //     { title: 'Quantum Quiz', players: '6.8K', reward: 25 },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-navy-950 relative overflow-hidden">
// //       <ParticleBackground />

// //       <motion.nav
// //         initial={{ y: -100 }}
// //         animate={{ y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
// //       >
// //         <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
// //           <div className="flex items-center justify-between">
// //             <Link to="/" className="flex items-center gap-3">
// //               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
// //                 AV
// //               </div>
// //               <span className="font-semibold text-xl hidden sm:block">AppVerse</span>
// //             </Link>

// //             <div className="flex items-center gap-3">
// //               <Link to="/login">
// //                 <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
// //                   Sign In
// //                 </Button>
// //               </Link>
// //               <Link to="/signup">
// //                 <Button className="btn-primary">
// //                   Join AppVerse
// //                   <Sparkles size={16} className="ml-2" />
// //                 </Button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </motion.nav>

// //       <motion.section
// //         style={{ y: heroY, opacity: heroOpacity }}
// //         className="relative min-h-screen flex items-center justify-center pt-20"
// //       >
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="space-y-8"
// //           >
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ delay: 0.2 }}
// //               className="inline-flex"
// //             >
// //               <span className="px-4 py-2 rounded-full glass text-sm font-medium flex items-center gap-2">
// //                 <Sparkles size={16} className="text-amber-400" />
// //                 <span>Welcome to the Future of Earning</span>
// //                 <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs">Beta</span>
// //               </span>
// //             </motion.div>

// //             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
// //               <span className="block text-white">Learn, Play & Earn</span>
// //               <span className="block gradient-text mt-2">in the AppVerse</span>
// //             </h1>

// //             <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
// //               The ultimate platform where every action rewards you. Play games, learn skills, 
// //               shop smart, and build your digital wealth with our dual-wallet system.
// //             </p>

// //             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
// //               <Link to="/signup">
// //                 <motion.button
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   className="btn-primary text-lg px-8 py-4"
// //                 >
// //                   Start Your Journey
// //                   <ArrowRight size={20} className="ml-2" />
// //                 </motion.button>
// //               </Link>
// //               <Link to="/games">
// //                 <motion.button
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   className="btn-secondary text-lg px-8 py-4"
// //                 >
// //                   <Gamepad2 size={20} className="mr-2" />
// //                   Play as Guest
// //                 </motion.button>
// //               </Link>
// //             </div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.6 }}
// //               className="flex flex-wrap items-center justify-center gap-8 pt-8"
// //             >
// //               {[
// //                 { value: '500K+', label: 'Active Users', icon: Users },
// //                 { value: '10M+', label: 'Coins Earned', icon: Sparkles },
// //                 { value: '50+', label: 'Games', icon: Gamepad2 },
// //                 { value: '100+', label: 'Courses', icon: GraduationCap },
// //               ].map((stat, i) => (
// //                 <div key={i} className="flex items-center gap-3">
// //                   <stat.icon size={24} className="text-blue-400" />
// //                   <div className="text-left">
// //                     <div className="text-2xl font-bold">{stat.value}</div>
// //                     <div className="text-sm text-white/50">{stat.label}</div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </motion.div>
// //           </motion.div>
// //         </div>

// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 1 }}
// //           className="absolute bottom-8 left-1/2 -translate-x-1/2"
// //         >
// //           <motion.div
// //             animate={{ y: [0, 10, 0] }}
// //             transition={{ duration: 1.5, repeat: Infinity }}
// //             className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
// //           >
// //             <div className="w-1 h-2 bg-white/50 rounded-full" />
// //           </motion.div>
// //         </motion.div>
// //       </motion.section>

// //       <section className="relative py-20 px-4">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-center mb-12"
// //           >
// //             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4">
// //               <Zap size={16} className="text-yellow-400" />
// //               No Account Required
// //             </span>
// //             <h2 className="text-4xl font-bold mb-4">Quick Play Games</h2>
// //             <p className="text-white/60 max-w-xl mx-auto">
// //               Jump right into the action! Play instantly without signing up. 
// //               Your progress will be saved when you join.
// //             </p>
// //           </motion.div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {quickGames.map((game, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: i * 0.1 }}
// //               >
// //                 <QuickPlayCard {...game} />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="relative py-20 px-4">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-center mb-16"
// //           >
// //             <h2 className="text-4xl font-bold mb-4">Explore the Universe</h2>
// //             <p className="text-white/60 max-w-xl mx-auto">
// //               Discover all the ways to earn, learn, and have fun in the AppVerse
// //             </p>
// //           </motion.div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {islands.map((island, i) => (
// //               <FloatingIsland key={i} {...island} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="relative py-20 px-4">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-center mb-16"
// //           >
// //             <h2 className="text-4xl font-bold mb-4">How AppVerse Works</h2>
// //             <p className="text-white/60 max-w-xl mx-auto">
// //               Start earning in three simple steps
// //             </p>
// //           </motion.div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 step: '01',
// //                 title: 'Join the Verse',
// //                 description: 'Create your account in seconds and get 100 starter coins.',
// //                 icon: Sparkles,
// //                 color: 'from-blue-500 to-cyan-500',
// //               },
// //               {
// //                 step: '02',
// //                 title: 'Play & Learn',
// //                 description: 'Engage with games, courses, and content to earn more.',
// //                 icon: Gamepad2,
// //                 color: 'from-purple-500 to-pink-500',
// //               },
// //               {
// //                 step: '03',
// //                 title: 'Build Wealth',
// //                 description: 'Grow your coins with our dual-wallet savings system.',
// //                 icon: TrendingUp,
// //                 color: 'from-emerald-500 to-green-500',
// //               },
// //             ].map((item, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: i * 0.2 }}
// //                 className="relative"
// //               >
// //                 <div className="glass-card p-8 h-full text-center">
// //                   <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
// //                     <item.icon size={36} className="text-white" />
// //                   </div>
// //                   <div className="text-5xl font-bold text-white/10 absolute top-4 right-4">
// //                     {item.step}
// //                   </div>
// //                   <h3 className="text-xl font-bold mb-3">{item.title}</h3>
// //                   <p className="text-white/60">{item.description}</p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="relative py-20 px-4">
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.95 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           viewport={{ once: true }}
// //           className="max-w-5xl mx-auto"
// //         >
// //           <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
// //             <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10" />
// //             <div className="relative z-10">
// //               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-6">
// //                 <Crown size={16} />
// //                 <span>Premium Membership</span>
// //               </div>
// //               <h2 className="text-4xl md:text-5xl font-bold mb-4">
// //                 Unlock the Full Experience
// //               </h2>
// //               <p className="text-white/60 max-w-2xl mx-auto mb-8">
// //                 Get ad-free entertainment, exclusive games, higher earning rates, 
// //                 and premium perks across all modules.
// //               </p>
// //               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
// //                 <Link to="/premium">
// //                   <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl">
// //                     <Crown size={20} className="mr-2" />
// //                     Upgrade to Premium
// //                   </Button>
// //                 </Link>
// //                 <span className="text-white/40 text-sm">Starting at just 499 coins/month</span>
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </section>

// //       <footer className="relative py-12 px-4 border-t border-white/10">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
// //             <div>
// //               <div className="flex items-center gap-3 mb-4">
// //                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
// //                   AV
// //                 </div>
// //                 <span className="font-semibold text-xl">AppVerse</span>
// //               </div>
// //               <p className="text-white/50 text-sm">
// //                 The ultimate platform for learning, playing, and earning in the digital universe.
// //               </p>
// //             </div>
// //             <div>
// //               <h4 className="font-semibold mb-4">Platform</h4>
// //               <ul className="space-y-2 text-sm text-white/50">
// //                 <li><Link to="/games" className="hover:text-white transition-colors">Games Arena</Link></li>
// //                 <li><Link to="/learning" className="hover:text-white transition-colors">Learning Hub</Link></li>
// //                 <li><Link to="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
// //                 <li><Link to="/entertainment" className="hover:text-white transition-colors">Entertainment</Link></li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h4 className="font-semibold mb-4">Company</h4>
// //               <ul className="space-y-2 text-sm text-white/50">
// //                 <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
// //                 <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
// //                 <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
// //                 <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h4 className="font-semibold mb-4">Legal</h4>
// //               <ul className="space-y-2 text-sm text-white/50">
// //                 <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
// //                 <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
// //                 <li><Link to="/consumer" className="hover:text-white transition-colors">Consumer Protection</Link></li>
// //                 <li><Link to="/grievance" className="hover:text-white transition-colors">Grievance Redressal</Link></li>
// //               </ul>
// //             </div>
// //           </div>
// //           <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
// //             <p>© 2026 AppVerse. All rights reserved. GST Compliant.</p>
// //           </div>
// //         </div>
// //       </footer>

// //       <StreakTeaser />
// //     </div>
// //   );
// // }





// //=========================================================================================================================================================




// import { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import {
//   Gamepad2,
//   GraduationCap,
//   ShoppingBag,
//   Play,
//   Wallet,
//   ArrowRight,
//   Sparkles,
//   Zap,
//   TrendingUp,
//   Flame,
//   Users,
//   Crown,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// function ParticleBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     setCanvasSize();

//     const particles: Array<{
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       size: number;
//       opacity: number;
//     }> = [];

//     for (let i = 0; i < 80; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         size: Math.random() * 2 + 1,
//         opacity: Math.random() * 0.5 + 0.2,
//       });
//     }

//     let animationId: number;

//     function animate() {
//       if (!ctx || !canvas) return;
//       ctx.fillStyle = 'rgba(10, 14, 23, 0.1)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle, i) => {
//         particle.x += particle.vx;
//         particle.y += particle.vy;

//         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
//         ctx.fill();

//         particles.slice(i + 1).forEach((other) => {
//           const dx = particle.x - other.x;
//           const dy = particle.y - other.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 150) {
//             ctx.beginPath();
//             ctx.moveTo(particle.x, particle.y);
//             ctx.lineTo(other.x, other.y);
//             ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
//             ctx.stroke();
//           }
//         });
//       });

//       animationId = requestAnimationFrame(animate);
//     }

//     animate();

//     const handleResize = () => {
//       setCanvasSize();
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 pointer-events-none"
//       style={{ background: 'linear-gradient(135deg, #0A0E17 0%, #0F172A 50%, #1E293B 100%)' }}
//     />
//   );
// }

// interface IslandProps {
//   icon: React.ElementType;
//   title: string;
//   description: string;
//   color: string;
//   delay: number;
//   to: string;
// }

// function FloatingIsland({ icon: Icon, title, description, color, delay, to }: IslandProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay }}
//       whileHover={{ scale: 1.05, y: -10 }}
//       className="group"
//     >
//       <Link to={to}>
//         <div className="island-card h-full relative overflow-hidden">
//           <div
//             className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${color}`}
//           />
//           <div className="relative z-10">
//             <div
//               className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
//             >
//               <Icon size={28} className="text-white" />
//             </div>
//             <h3 className="text-xl font-bold mb-2">{title}</h3>
//             <p className="text-white/60 text-sm leading-relaxed">{description}</p>
//             <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
//               <span>Explore</span>
//               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//             </div>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

// function QuickPlayCard({ title, players, reward }: { title: string; players: string; reward: number }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       className="glass-card p-4 cursor-pointer group relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="3" cy="3" r="1" fill="%23a855f7" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
//       <div className="relative z-10">
//         <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-3 flex items-center justify-center">
//           <Gamepad2 size={48} className="text-white/40 group-hover:text-white/60 transition-colors" />
//         </div>
//         <h4 className="font-semibold mb-1">{title}</h4>
//         <div className="flex items-center justify-between text-sm text-white/50">
//           <span className="flex items-center gap-1">
//             <Users size={14} />
//             {players}
//           </span>
//           <span className="flex items-center gap-1 text-amber-400">
//             <Sparkles size={14} />
//             +{reward}
//           </span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function StreakTeaser() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, delay: 1 }}
//       className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30"
//     >
//       <div className="glass-strong px-6 py-3 rounded-full flex items-center gap-4">
//         <div className="flex items-center gap-2">
//           <Flame size={20} className="text-orange-500" />
//           <span className="font-semibold">Day 0</span>
//         </div>
//         <div className="w-px h-6 bg-white/20" />
//         <span className="text-sm text-white/60">Log in to start your streak</span>
//         <div className="flex items-center gap-1 text-xs">
//           <span className="px-2 py-1 rounded bg-white/10">Fee Shield</span>
//           <span className="px-2 py-1 rounded bg-white/10">Profit Boost</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function LandingPage() {
//   const { scrollY } = useScroll();
//   const heroY = useTransform(scrollY, [0, 500], [0, 150]);
//   const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

//   const islands = [
//     {
//       icon: ShoppingBag,
//       title: 'Marketplace',
//       description: 'Buy, sell, and resell products. Earn coins with every transaction.',
//       color: 'from-pink-500 to-rose-500',
//       delay: 0.3,
//       to: '/marketplace',
//     },
//     {
//       icon: GraduationCap,
//       title: 'Learning Hub',
//       description: 'Learn new skills, earn certificates, and get rewarded for knowledge.',
//       color: 'from-blue-500 to-cyan-500',
//       delay: 0.4,
//       to: '/learning',
//     },
//     {
//       icon: Gamepad2,
//       title: 'Games Arena',
//       description: 'Play games, challenge friends, and win coins. Instant play available!',
//       color: 'from-purple-500 to-violet-500',
//       delay: 0.5,
//       to: '/games',
//     },
//     {
//       icon: Play,
//       title: 'Entertainment',
//       description: 'Watch shorts, reels, and movies. Earn while you enjoy content.',
//       color: 'from-red-500 to-orange-500',
//       delay: 0.6,
//       to: '/entertainment',
//     },
//     {
//       icon: Wallet,
//       title: 'Smart Wallet',
//       description: 'Dual wallet system with spendable coins and emergency vault.',
//       color: 'from-emerald-500 to-green-500',
//       delay: 0.7,
//       to: '/wallet',
//     },
//   ];

//   const quickGames = [
//     { title: 'Cosmic Runner', players: '12.5K', reward: 50 },
//     { title: 'Neon Puzzler', players: '8.2K', reward: 30 },
//     { title: 'Star Blaster', players: '15.1K', reward: 75 },
//     { title: 'Quantum Quiz', players: '6.8K', reward: 25 },
//   ];

//   return (
//     <div className="min-h-screen bg-navy-950 relative overflow-hidden">
//       <ParticleBackground />

//       {/* Additional background pattern */}
//       <div 
//         className="fixed inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 0 L60 30 L30 60 L0 30 Z" stroke="%233b82f6" stroke-width="0.5" stroke-opacity="0.02" fill="none"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       />

//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
//       >
//         <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
//           <div className="flex items-center justify-between">
//             <Link to="/" className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
//                 AV
//               </div>
//               <span className="font-semibold text-xl hidden sm:block">AppVerse</span>
//             </Link>

//             <div className="flex items-center gap-3">
//               <Link to="/login">
//                 <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
//                   Sign In
//                 </Button>
//               </Link>
//               <Link to="/signup">
//                 <Button className="btn-primary">
//                   Join AppVerse
//                   <Sparkles size={16} className="ml-2" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       <motion.section
//         style={{ y: heroY, opacity: heroOpacity }}
//         className="relative min-h-screen flex items-center justify-center pt-20"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex"
//             >
//               <span className="px-4 py-2 rounded-full glass text-sm font-medium flex items-center gap-2">
//                 <Sparkles size={16} className="text-amber-400" />
//                 <span>Welcome to the Future of Earning</span>
//                 <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs">Beta</span>
//               </span>
//             </motion.div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
//               <span className="block text-white">Learn, Play & Earn</span>
//               <span className="block gradient-text mt-2">in the AppVerse</span>
//             </h1>

//             <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
//               The ultimate platform where every action rewards you. Play games, learn skills, 
//               shop smart, and build your digital wealth with our dual-wallet system.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Link to="/signup">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="btn-primary text-lg px-8 py-4"
//                 >
//                   Start Your Journey
//                   <ArrowRight size={20} className="ml-2" />
//                 </motion.button>
//               </Link>
//               <Link to="/games">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="btn-secondary text-lg px-8 py-4"
//                 >
//                   <Gamepad2 size={20} className="mr-2" />
//                   Play as Guest
//                 </motion.button>
//               </Link>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-wrap items-center justify-center gap-8 pt-8"
//             >
//               {[
//                 { value: '500K+', label: 'Active Users', icon: Users },
//                 { value: '10M+', label: 'Coins Earned', icon: Sparkles },
//                 { value: '50+', label: 'Games', icon: Gamepad2 },
//                 { value: '100+', label: 'Courses', icon: GraduationCap },
//               ].map((stat, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <stat.icon size={24} className="text-blue-400" />
//                   <div className="text-left">
//                     <div className="text-2xl font-bold">{stat.value}</div>
//                     <div className="text-sm text-white/50">{stat.label}</div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
//           >
//             <div className="w-1 h-2 bg-white/50 rounded-full" />
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       <section className="relative py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4">
//               <Zap size={16} className="text-yellow-400" />
//               No Account Required
//             </span>
//             <h2 className="text-4xl font-bold mb-4">Quick Play Games</h2>
//             <p className="text-white/60 max-w-xl mx-auto">
//               Jump right into the action! Play instantly without signing up. 
//               Your progress will be saved when you join.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {quickGames.map((game, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <QuickPlayCard {...game} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4">Explore the Universe</h2>
//             <p className="text-white/60 max-w-xl mx-auto">
//               Discover all the ways to earn, learn, and have fun in the AppVerse
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {islands.map((island, i) => (
//               <FloatingIsland key={i} {...island} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4">How AppVerse Works</h2>
//             <p className="text-white/60 max-w-xl mx-auto">
//               Start earning in three simple steps
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 step: '01',
//                 title: 'Join the Verse',
//                 description: 'Create your account in seconds and get 100 starter coins.',
//                 icon: Sparkles,
//                 color: 'from-blue-500 to-cyan-500',
//               },
//               {
//                 step: '02',
//                 title: 'Play & Learn',
//                 description: 'Engage with games, courses, and content to earn more.',
//                 icon: Gamepad2,
//                 color: 'from-purple-500 to-pink-500',
//               },
//               {
//                 step: '03',
//                 title: 'Build Wealth',
//                 description: 'Grow your coins with our dual-wallet savings system.',
//                 icon: TrendingUp,
//                 color: 'from-emerald-500 to-green-500',
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.2 }}
//                 className="relative"
//               >
//                 <div className="glass-card p-8 h-full text-center relative overflow-hidden">
//                   <div 
//                     className="absolute inset-0"
//                     style={{
//                       backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="3" fill="%23ffffff" fill-opacity="0.02"/%3E%3C/svg%3E')`,
//                       backgroundRepeat: 'repeat',
//                     }}
//                   />
//                   <div className="relative z-10">
//                     <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
//                       <item.icon size={36} className="text-white" />
//                     </div>
//                     <div className="text-5xl font-bold text-white/10 absolute top-4 right-4">
//                       {item.step}
//                     </div>
//                     <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                     <p className="text-white/60">{item.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative py-20 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto"
//         >
//           <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
//             <div 
//               className="absolute inset-0"
//               style={{
//                 backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23fbbf24" fill-opacity="0.05"/%3E%3C/svg%3E')`,
//                 backgroundRepeat: 'repeat',
//               }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10" />
//             <div className="relative z-10">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-6">
//                 <Crown size={16} />
//                 <span>Premium Membership</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">
//                 Unlock the Full Experience
//               </h2>
//               <p className="text-white/60 max-w-2xl mx-auto mb-8">
//                 Get ad-free entertainment, exclusive games, higher earning rates, 
//                 and premium perks across all modules.
//               </p>
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                 <Link to="/premium">
//                   <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl">
//                     <Crown size={20} className="mr-2" />
//                     Upgrade to Premium
//                   </Button>
//                 </Link>
//                 <span className="text-white/40 text-sm">Starting at just 499 coins/month</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       <footer className="relative py-12 px-4 border-t border-white/10">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
//                   AV
//                 </div>
//                 <span className="font-semibold text-xl">AppVerse</span>
//               </div>
//               <p className="text-white/50 text-sm">
//                 The ultimate platform for learning, playing, and earning in the digital universe.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Platform</h4>
//               <ul className="space-y-2 text-sm text-white/50">
//                 <li><Link to="/games" className="hover:text-white transition-colors">Games Arena</Link></li>
//                 <li><Link to="/learning" className="hover:text-white transition-colors">Learning Hub</Link></li>
//                 <li><Link to="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
//                 <li><Link to="/entertainment" className="hover:text-white transition-colors">Entertainment</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-sm text-white/50">
//                 <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
//                 <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
//                 <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
//                 <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Legal</h4>
//               <ul className="space-y-2 text-sm text-white/50">
//                 <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
//                 <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
//                 <li><Link to="/consumer" className="hover:text-white transition-colors">Consumer Protection</Link></li>
//                 <li><Link to="/grievance" className="hover:text-white transition-colors">Grievance Redressal</Link></li>
//               </ul>
//             </div>
//           </div>
//           <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
//             <p>© 2026 AppVerse. All rights reserved. GST Compliant.</p>
//           </div>
//         </div>
//       </footer>

//       <StreakTeaser />
//     </div>
//   );
// }




//====================================================================================================================================================================================





import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Gamepad2,
  GraduationCap,
  ShoppingBag,
  Play,
  Wallet,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Flame,
  Users,
  Crown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Background images for landing page
const BG_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop',
  games: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
  marketplace: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
  learning: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
  entertainment: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop',
  wallet: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
  howItWorks: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
  premium: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=400&fit=crop',
};

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(10, 14, 23, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();

        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #0A0E17 0%, #0F172A 50%, #1E293B 100%)' }}
    />
  );
}

interface IslandProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay: number;
  to: string;
  bgImage: string;
}

function FloatingIsland({ icon: Icon, title, description, color, delay, to, bgImage }: IslandProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group"
    >
      <Link to={to}>
        <div className="island-card h-full relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.85) 100%), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${color}`}
          />
          <div className="relative z-10">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
            >
              <Icon size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{description}</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
              <span>Explore</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function QuickPlayCard({ title, players, reward, bgImage }: { title: string; players: string; reward: number; bgImage: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="glass-card p-4 cursor-pointer group relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.9) 0%, rgba(10, 14, 23, 0.95) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-3 flex items-center justify-center relative z-10">
        <Gamepad2 size={48} className="text-white/40 group-hover:text-white/60 transition-colors" />
      </div>
      <h4 className="font-semibold mb-1 relative z-10">{title}</h4>
      <div className="flex items-center justify-between text-sm text-white/50 relative z-10">
        <span className="flex items-center gap-1">
          <Users size={14} />
          {players}
        </span>
        <span className="flex items-center gap-1 text-amber-400">
          <Sparkles size={14} />
          +{reward}
        </span>
      </div>
    </motion.div>
  );
}

function StreakTeaser() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30"
    >
      <div className="glass-strong px-6 py-3 rounded-full flex items-center gap-4 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <Flame size={20} className="text-orange-500" />
          <span className="font-semibold">Day 0</span>
        </div>
        <div className="w-px h-6 bg-white/20" />
        <span className="text-sm text-white/60">Log in to start your streak</span>
        <div className="flex items-center gap-1 text-xs">
          <span className="px-2 py-1 rounded bg-white/10">Fee Shield</span>
          <span className="px-2 py-1 rounded bg-white/10">Profit Boost</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const islands = [
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      description: 'Buy, sell, and resell products. Earn coins with every transaction.',
      color: 'from-pink-500 to-rose-500',
      delay: 0.3,
      to: '/marketplace',
      bgImage: BG_IMAGES.marketplace,
    },
    {
      icon: GraduationCap,
      title: 'Learning Hub',
      description: 'Learn new skills, earn certificates, and get rewarded for knowledge.',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.4,
      to: '/learning',
      bgImage: BG_IMAGES.learning,
    },
    {
      icon: Gamepad2,
      title: 'Games Arena',
      description: 'Play games, challenge friends, and win coins. Instant play available!',
      color: 'from-purple-500 to-violet-500',
      delay: 0.5,
      to: '/games',
      bgImage: BG_IMAGES.games,
    },
    {
      icon: Play,
      title: 'Entertainment',
      description: 'Watch shorts, reels, and movies. Earn while you enjoy content.',
      color: 'from-red-500 to-orange-500',
      delay: 0.6,
      to: '/entertainment',
      bgImage: BG_IMAGES.entertainment,
    },
    {
      icon: Wallet,
      title: 'Smart Wallet',
      description: 'Dual wallet system with spendable coins and emergency vault.',
      color: 'from-emerald-500 to-green-500',
      delay: 0.7,
      to: '/wallet',
      bgImage: BG_IMAGES.wallet,
    },
  ];

  const quickGames = [
    { title: 'Cosmic Runner', players: '12.5K', reward: 50, bgImage: 'https://images.unsplash.com/photo-1614730341194-75c607400070?w=400&h=300&fit=crop' },
    { title: 'Neon Puzzler', players: '8.2K', reward: 30, bgImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop' },
    { title: 'Star Blaster', players: '15.1K', reward: 75, bgImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=300&fit=crop' },
    { title: 'Quantum Quiz', players: '6.8K', reward: 25, bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-navy-950 relative overflow-hidden">
      <ParticleBackground />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      >
        <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
                AV
              </div>
              <span className="font-semibold text-xl hidden sm:block">AppVerse</span>
            </Link>

            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="btn-primary">
                  Join AppVerse
                  <Sparkles size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${BG_IMAGES.hero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/80 to-navy-950" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex"
            >
              <span className="px-4 py-2 rounded-full glass text-sm font-medium flex items-center gap-2 backdrop-blur-xl">
                <Sparkles size={16} className="text-amber-400" />
                <span>Welcome to the Future of Earning</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs">Beta</span>
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">Learn, Play & Earn</span>
              <span className="block gradient-text mt-2">in the AppVerse</span>
            </h1>

            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              The ultimate platform where every action rewards you. Play games, learn skills, 
              shop smart, and build your digital wealth with our dual-wallet system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4 shadow-lg shadow-blue-500/25"
                >
                  Start Your Journey
                  <ArrowRight size={20} className="ml-2" />
                </motion.button>
              </Link>
              <Link to="/games">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  <Gamepad2 size={20} className="mr-2" />
                  Play as Guest
                </motion.button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 pt-8"
            >
              {[
                { value: '500K+', label: 'Active Users', icon: Users },
                { value: '10M+', label: 'Coins Earned', icon: Sparkles },
                { value: '50+', label: 'Games', icon: Gamepad2 },
                { value: '100+', label: 'Courses', icon: GraduationCap },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <stat.icon size={24} className="text-blue-400" />
                  <div className="text-left">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4 backdrop-blur-xl">
              <Zap size={16} className="text-yellow-400" />
              No Account Required
            </span>
            <h2 className="text-4xl font-bold mb-4">Quick Play Games</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Jump right into the action! Play instantly without signing up. 
              Your progress will be saved when you join.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickGames.map((game, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <QuickPlayCard {...game} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Explore the Universe</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Discover all the ways to earn, learn, and have fun in the AppVerse
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {islands.map((island, i) => (
              <FloatingIsland key={i} {...island} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How AppVerse Works</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Start earning in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Join the Verse',
                description: 'Create your account in seconds and get 100 starter coins.',
                icon: Sparkles,
                color: 'from-blue-500 to-cyan-500',
              },
              {
                step: '02',
                title: 'Play & Learn',
                description: 'Engage with games, courses, and content to earn more.',
                icon: Gamepad2,
                color: 'from-purple-500 to-pink-500',
              },
              {
                step: '03',
                title: 'Build Wealth',
                description: 'Grow your coins with our dual-wallet savings system.',
                icon: TrendingUp,
                color: 'from-emerald-500 to-green-500',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="glass-card p-8 h-full text-center relative overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.howItWorks})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon size={36} className="text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white/10 absolute top-4 right-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.9) 0%, rgba(10, 14, 23, 0.85) 100%), url(${BG_IMAGES.premium})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                <Crown size={16} />
                <span>Premium Membership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Unlock the Full Experience
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-8">
                Get ad-free entertainment, exclusive games, higher earning rates, 
                and premium perks across all modules.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/premium">
                  <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-500/25">
                    <Crown size={20} className="mr-2" />
                    Upgrade to Premium
                  </Button>
                </Link>
                <span className="text-white/40 text-sm">Starting at just 499 coins/month</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="relative py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
                  AV
                </div>
                <span className="font-semibold text-xl">AppVerse</span>
              </div>
              <p className="text-white/50 text-sm">
                The ultimate platform for learning, playing, and earning in the digital universe.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link to="/games" className="hover:text-white transition-colors">Games Arena</Link></li>
                <li><Link to="/learning" className="hover:text-white transition-colors">Learning Hub</Link></li>
                <li><Link to="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
                <li><Link to="/entertainment" className="hover:text-white transition-colors">Entertainment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/consumer" className="hover:text-white transition-colors">Consumer Protection</Link></li>
                <li><Link to="/grievance" className="hover:text-white transition-colors">Grievance Redressal</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
            <p>© 2026 AppVerse. All rights reserved. GST Compliant.</p>
          </div>
        </div>
      </footer>

      <StreakTeaser />
    </div>
  );
}