// // import { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import {
// //   Gamepad2,
// //   Users,
// //   Trophy,
// //   Zap,
// //   Target,
// //   Timer,
// //   Sparkles,
// //   Flame,
// //   TrendingUp,
// //   Play,
// //   Lock,
// //   Sword,
// //   Crown,
// // } from 'lucide-react';
// // import { Link } from 'react-router-dom';
// // import { useAuth } from '@/contexts/AuthContext';
// // import { Button } from '@/components/ui/button';
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // import { Progress } from '@/components/ui/progress';
// // import { Slider } from '@/components/ui/slider';

// // function GameCard({
// //   title,
// //   category,
// //   players,
// //   reward,
// //   difficulty,
// //   isNew,
// //   isLocked,
// // }: {
// //   title: string;
// //   category: string;
// //   players: string;
// //   reward: number;
// //   difficulty: 'Easy' | 'Medium' | 'Hard';
// //   isNew?: boolean;
// //   isLocked?: boolean;
// // }) {
// //   const difficultyColors = {
// //     Easy: 'from-green-500 to-emerald-500',
// //     Medium: 'from-yellow-500 to-orange-500',
// //     Hard: 'from-red-500 to-pink-500',
// //   };

// //   return (
// //     <motion.div
// //       whileHover={!isLocked ? { scale: 1.03, y: -5 } : {}}
// //       className={`glass-card overflow-hidden group ${isLocked ? 'opacity-60' : 'cursor-pointer'}`}
// //     >
// //       <div className="aspect-video relative overflow-hidden">
// //         <div className={`absolute inset-0 bg-gradient-to-br ${difficultyColors[difficulty]} opacity-20 group-hover:opacity-30 transition-opacity`} />
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <Gamepad2 size={48} className="text-white/30 group-hover:text-white/50 transition-colors" />
// //         </div>
        
// //         <div className="absolute top-3 left-3 flex gap-2">
// //           {isNew && (
// //             <span className="px-2 py-1 rounded-full bg-green-500/80 text-white text-xs font-medium">
// //               NEW
// //             </span>
// //           )}
// //           <span className={`px-2 py-1 rounded-full bg-gradient-to-r ${difficultyColors[difficulty]} text-white text-xs font-medium`}>
// //             {difficulty}
// //           </span>
// //         </div>

// //         {isLocked && (
// //           <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
// //             <Lock size={32} className="text-white/60" />
// //           </div>
// //         )}

// //         {!isLocked && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             whileHover={{ opacity: 1 }}
// //             className="absolute inset-0 bg-black/40 flex items-center justify-center"
// //           >
// //             <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
// //               <Play size={28} className="text-white ml-1" />
// //             </div>
// //           </motion.div>
// //         )}
// //       </div>

// //       <div className="p-4">
// //         <div className="flex items-start justify-between mb-2">
// //           <div>
// //             <h3 className="font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
// //             <p className="text-white/50 text-sm">{category}</p>
// //           </div>
// //         </div>
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center gap-3 text-sm text-white/50">
// //             <span className="flex items-center gap-1">
// //               <Users size={14} />
// //               {players}
// //             </span>
// //           </div>
// //           <div className="flex items-center gap-1 text-amber-400">
// //             <Sparkles size={14} />
// //             <span className="font-medium">+{reward}</span>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // function ChallengeCard() {
// //   const [stake, setStake] = useState(50);
// //   const pot = stake * 2;
// //   const vaultSave = Math.floor(stake * 0.25);
// //   const fee = Math.floor(stake * 0.005);
// //   const winAmount = pot - vaultSave - fee;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="glass-card p-6"
// //     >
// //       <div className="flex items-center gap-4 mb-6">
// //         <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
// //           <Sword size={28} className="text-white" />
// //         </div>
// //         <div>
// //           <h3 className="font-bold text-lg">Challenge a Friend</h3>
// //           <p className="text-white/60 text-sm">Stake coins and compete head-to-head</p>
// //         </div>
// //       </div>

// //       <div className="mb-6">
// //         <div className="flex items-center justify-between mb-2">
// //           <span className="text-sm text-white/60">Your Stake</span>
// //           <span className="font-bold text-lg">{stake} coins</span>
// //         </div>
// //         <Slider
// //           value={[stake]}
// //           onValueChange={(value) => setStake(value[0])}
// //           max={500}
// //           min={10}
// //           step={10}
// //           className="mb-4"
// //         />
// //         <div className="flex justify-between text-xs text-white/40">
// //           <span>10</span>
// //           <span>250</span>
// //           <span>500</span>
// //         </div>
// //       </div>

// //       <div className="grid grid-cols-2 gap-4 mb-6">
// //         <div className="p-4 rounded-xl bg-white/5">
// //           <div className="text-white/50 text-sm mb-1">Total Pot</div>
// //           <div className="text-2xl font-bold text-blue-400">{pot}</div>
// //         </div>
// //         <div className="p-4 rounded-xl bg-white/5">
// //           <div className="text-white/50 text-sm mb-1">You Could Win</div>
// //           <div className="text-2xl font-bold text-green-400">{winAmount}</div>
// //         </div>
// //       </div>

// //       <div className="mb-6">
// //         <div className="flex items-center justify-between text-sm mb-2">
// //           <span className="text-white/60">75/25 Split</span>
// //           <span className="text-emerald-400">{vaultSave} → Vault</span>
// //         </div>
// //         <div className="h-4 rounded-full overflow-hidden flex">
// //           <div className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '75%' }} />
// //           <div className="w-1/4 bg-gradient-to-r from-emerald-500 to-green-500" />
// //         </div>
// //         <div className="flex justify-between text-xs text-white/40 mt-1">
// //           <span>Winner (75%)</span>
// //           <span>Vault Save (25%)</span>
// //         </div>
// //       </div>

// //       <Button className="w-full btn-primary">
// //         <Target size={18} className="mr-2" />
// //         Find Opponent
// //       </Button>
// //     </motion.div>
// //   );
// // }

// // function LiveMatchCard({
// //   opponent,
// //   game,
// //   stake,
// //   status,
// //   timeLeft,
// // }: {
// //   opponent: string;
// //   game: string;
// //   stake: number;
// //   status: 'your-turn' | 'waiting';
// //   timeLeft: string;
// // }) {
// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.02 }}
// //       className="glass-card p-4"
// //     >
// //       <div className="flex items-center justify-between">
// //         <div className="flex items-center gap-3">
// //           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
// //             {opponent.charAt(0)}
// //           </div>
// //           <div>
// //             <h4 className="font-medium">vs {opponent}</h4>
// //             <p className="text-white/50 text-sm">{game}</p>
// //           </div>
// //         </div>
// //         <div className="text-right">
// //           <div className="flex items-center gap-1 text-amber-400">
// //             <Sparkles size={14} />
// //             <span className="font-medium">{stake}</span>
// //           </div>
// //           <span className="text-xs text-white/40">{timeLeft}</span>
// //         </div>
// //       </div>
// //       <div className="mt-4 flex items-center justify-between">
// //         <span className={`text-sm ${status === 'your-turn' ? 'text-green-400' : 'text-yellow-400'}`}>
// //           {status === 'your-turn' ? 'Your Turn!' : 'Waiting...'}
// //         </span>
// //         <Button size="sm" className={status === 'your-turn' ? 'btn-primary' : 'btn-secondary'}>
// //           {status === 'your-turn' ? 'Play Now' : 'View'}
// //         </Button>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // function LeaderboardEntry({
// //   rank,
// //   name,
// //   score,
// //   isUser,
// //   trend,
// // }: {
// //   rank: number;
// //   name: string;
// //   score: number;
// //   isUser?: boolean;
// //   trend: 'up' | 'down' | 'same';
// // }) {
// //   const rankColors = {
// //     1: 'from-yellow-400 to-amber-500',
// //     2: 'from-gray-300 to-gray-400',
// //     3: 'from-orange-400 to-amber-600',
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, x: -20 }}
// //       animate={{ opacity: 1, x: 0 }}
// //       className={`flex items-center gap-4 p-3 rounded-xl ${isUser ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-white/5'}`}
// //     >
// //       <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
// //         rank <= 3 ? `bg-gradient-to-br ${rankColors[rank as keyof typeof rankColors]} text-white` : 'bg-white/10'
// //       }`}>
// //         {rank <= 3 ? <Crown size={14} /> : rank}
// //       </div>
// //       <div className="flex-1">
// //         <span className={`font-medium ${isUser ? 'text-blue-400' : ''}`}>{name}</span>
// //         {isUser && <span className="text-xs text-blue-400 ml-2">(You)</span>}
// //       </div>
// //       <div className="flex items-center gap-2">
// //         <TrendingUp size={14} className={trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-white/30'} />
// //         <span className="font-medium">{score.toLocaleString()}</span>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // export default function GamesArena() {
// //   const { user } = useAuth();

// //   const games = [
// //     { title: 'Cosmic Runner', category: 'Arcade', players: '12.5K', reward: 50, difficulty: 'Easy' as const, isNew: true },
// //     { title: 'Neon Puzzler', category: 'Puzzle', players: '8.2K', reward: 30, difficulty: 'Medium' as const },
// //     { title: 'Star Blaster', category: 'Action', players: '15.1K', reward: 75, difficulty: 'Hard' as const },
// //     { title: 'Quantum Quiz', category: 'Trivia', players: '6.8K', reward: 25, difficulty: 'Easy' as const },
// //     { title: 'Void Vanguard', category: 'Strategy', players: '4.5K', reward: 100, difficulty: 'Hard' as const, isLocked: true },
// //     { title: 'Pixel Racer', category: 'Racing', players: '9.3K', reward: 60, difficulty: 'Medium' as const },
// //   ];

// //   const liveMatches = [
// //     { opponent: 'Alex', game: 'Cosmic Runner', stake: 100, status: 'your-turn' as const, timeLeft: '2:30' },
// //     { opponent: 'Sarah', game: 'Neon Puzzler', stake: 50, status: 'waiting' as const, timeLeft: '5:00' },
// //   ];

// //   const topWinners = [
// //     { rank: 1, name: 'DragonSlayer', score: 125000, trend: 'up' as const },
// //     { rank: 2, name: 'NeonNinja', score: 98200, trend: 'same' as const },
// //     { rank: 3, name: 'CosmicKing', score: 87600, trend: 'up' as const },
// //     { rank: 4, name: 'PixelMaster', score: 72300, trend: 'down' as const },
// //     { rank: 5, name: user?.name || 'You', score: 65400, trend: 'up' as const, isUser: true },
// //   ];

// //   const topSavers = [
// //     { rank: 1, name: 'VaultKeeper', score: 450000, trend: 'up' as const },
// //     { rank: 2, name: 'CoinHoarder', score: 380000, trend: 'up' as const },
// //     { rank: 3, name: 'SafeSaver', score: 320000, trend: 'same' as const },
// //     { rank: 4, name: 'WealthWise', score: 275000, trend: 'up' as const },
// //     { rank: 5, name: user?.name || 'You', score: 125000, trend: 'up' as const, isUser: true },
// //   ];

// //   return (
// //     <div className="space-y-6 pb-20">
// //       <motion.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
// //       >
// //         <div>
// //           <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
// //             <Gamepad2 className="text-purple-400" />
// //             Games Arena
// //           </h1>
// //           <p className="text-white/60">Play, compete, and earn coins</p>
// //         </div>
// //         <div className="flex items-center gap-3">
// //           <div className="glass px-4 py-2 rounded-full">
// //             <Flame size={16} className="inline mr-2 text-orange-400" />
// //             <span className="text-sm">Streak Protected</span>
// //           </div>
// //         </div>
// //       </motion.div>

// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.1 }}
// //         className="glass-card p-6 relative overflow-hidden"
// //       >
// //         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10" />
// //         <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
// //           <div className="flex items-center gap-4">
// //             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
// //               <Zap size={32} className="text-white" />
// //             </div>
// //             <div>
// //               <h3 className="font-bold text-xl">Quick Play</h3>
// //               <p className="text-white/60">Jump into a random game instantly</p>
// //             </div>
// //           </div>
// //           <Button className="btn-primary text-lg px-8">
// //             <Play size={20} className="mr-2" />
// //             Play Now
// //           </Button>
// //         </div>
// //       </motion.div>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //         <div className="lg:col-span-2 space-y-6">
// //           <Tabs defaultValue="all" className="w-full">
// //             <TabsList className="glass mb-6">
// //               <TabsTrigger value="all">All Games</TabsTrigger>
// //               <TabsTrigger value="arcade">Arcade</TabsTrigger>
// //               <TabsTrigger value="puzzle">Puzzle</TabsTrigger>
// //               <TabsTrigger value="action">Action</TabsTrigger>
// //             </TabsList>

// //             <TabsContent value="all" className="mt-0">
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 {games.map((game, i) => (
// //                   <motion.div
// //                     key={i}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: i * 0.1 }}
// //                   >
// //                     <GameCard {...game} />
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </TabsContent>

// //             <TabsContent value="arcade" className="mt-0">
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 {games.filter(g => g.category === 'Arcade').map((game, i) => (
// //                   <GameCard key={i} {...game} />
// //                 ))}
// //               </div>
// //             </TabsContent>

// //             <TabsContent value="puzzle" className="mt-0">
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 {games.filter(g => g.category === 'Puzzle').map((game, i) => (
// //                   <GameCard key={i} {...game} />
// //                 ))}
// //               </div>
// //             </TabsContent>

// //             <TabsContent value="action" className="mt-0">
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 {games.filter(g => g.category === 'Action').map((game, i) => (
// //                   <GameCard key={i} {...game} />
// //                 ))}
// //               </div>
// //             </TabsContent>
// //           </Tabs>

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.3 }}
// //           >
// //             <div className="flex items-center justify-between mb-4">
// //               <h3 className="font-bold text-lg flex items-center gap-2">
// //                 <Timer size={20} className="text-green-400" />
// //                 Live Matches
// //               </h3>
// //               <Link to="/games" className="text-sm text-blue-400 hover:underline">
// //                 View All
// //               </Link>
// //             </div>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               {liveMatches.map((match, i) => (
// //                 <LiveMatchCard key={i} {...match} />
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>

// //         <div className="space-y-6">
// //           <ChallengeCard />

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.4 }}
// //             className="glass-card p-6"
// //           >
// //             <Tabs defaultValue="winners">
// //               <div className="flex items-center justify-between mb-4">
// //                 <h3 className="font-bold text-lg flex items-center gap-2">
// //                   <Trophy size={20} className="text-amber-400" />
// //                   Leaderboards
// //                 </h3>
// //                 <TabsList className="bg-white/5">
// //                   <TabsTrigger value="winners" className="text-xs">Winners</TabsTrigger>
// //                   <TabsTrigger value="savers" className="text-xs">Savers</TabsTrigger>
// //                 </TabsList>
// //               </div>

// //               <TabsContent value="winners" className="mt-0 space-y-2">
// //                 {topWinners.map((entry, i) => (
// //                   <LeaderboardEntry key={i} {...entry} />
// //                 ))}
// //               </TabsContent>

// //               <TabsContent value="savers" className="mt-0 space-y-2">
// //                 {topSavers.map((entry, i) => (
// //                   <LeaderboardEntry key={i} {...entry} />
// //                 ))}
// //               </TabsContent>
// //             </Tabs>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.5 }}
// //             className="glass-card p-6"
// //           >
// //             <div className="flex items-center gap-3 mb-4">
// //               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
// //                 <Target size={24} className="text-white" />
// //               </div>
// //               <div>
// //                 <h3 className="font-bold">Daily Challenge</h3>
// //                 <p className="text-white/50 text-sm">Win 3 games today</p>
// //               </div>
// //             </div>
// //             <div className="mb-4">
// //               <div className="flex items-center justify-between text-sm mb-2">
// //                 <span className="text-white/60">Progress</span>
// //                 <span className="font-medium">1/3</span>
// //               </div>
// //               <Progress value={33} className="h-2" />
// //             </div>
// //             <div className="flex items-center justify-between">
// //               <div className="flex items-center gap-1 text-amber-400">
// //                 <Sparkles size={14} />
// //                 <span className="font-medium">+200 coins</span>
// //               </div>
// //               <span className="text-xs text-white/40">12 hours left</span>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// //======================================================================================================




// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Gamepad2,
//   Users,
//   Trophy,
//   Zap,
//   Target,
//   Timer,
//   Sparkles,
//   Flame,
//   TrendingUp,
//   Play,
//   Lock,
//   Sword,
//   Crown,
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Progress } from '@/components/ui/progress';
// import { Slider } from '@/components/ui/slider';

// function GameCard({
//   title,
//   category,
//   players,
//   reward,
//   difficulty,
//   isNew,
//   isLocked,
// }: {
//   title: string;
//   category: string;
//   players: string;
//   reward: number;
//   difficulty: 'Easy' | 'Medium' | 'Hard';
//   isNew?: boolean;
//   isLocked?: boolean;
// }) {
//   const difficultyColors = {
//     Easy: 'from-green-500 to-emerald-500',
//     Medium: 'from-yellow-500 to-orange-500',
//     Hard: 'from-red-500 to-pink-500',
//   };

//   return (
//     <motion.div
//       whileHover={!isLocked ? { scale: 1.03, y: -5 } : {}}
//       className={`glass-card overflow-hidden group ${isLocked ? 'opacity-60' : 'cursor-pointer'}`}
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 15 L15 0 L30 15 L15 30 Z" stroke="%238b5cf6" stroke-width="0.5" stroke-opacity="0.05" fill="none"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="aspect-video relative overflow-hidden">
//         <div className={`absolute inset-0 bg-gradient-to-br ${difficultyColors[difficulty]} opacity-20 group-hover:opacity-30 transition-opacity`} />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Gamepad2 size={48} className="text-white/30 group-hover:text-white/50 transition-colors" />
//         </div>
        
//         <div className="absolute top-3 left-3 flex gap-2">
//           {isNew && (
//             <span className="px-2 py-1 rounded-full bg-green-500/80 text-white text-xs font-medium">
//               NEW
//             </span>
//           )}
//           <span className={`px-2 py-1 rounded-full bg-gradient-to-r ${difficultyColors[difficulty]} text-white text-xs font-medium`}>
//             {difficulty}
//           </span>
//         </div>

//         {isLocked && (
//           <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//             <Lock size={32} className="text-white/60" />
//           </div>
//         )}

//         {!isLocked && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileHover={{ opacity: 1 }}
//             className="absolute inset-0 bg-black/40 flex items-center justify-center"
//           >
//             <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
//               <Play size={28} className="text-white ml-1" />
//             </div>
//           </motion.div>
//         )}
//       </div>

//       <div className="p-4">
//         <div className="flex items-start justify-between mb-2">
//           <div>
//             <h3 className="font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
//             <p className="text-white/50 text-sm">{category}</p>
//           </div>
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3 text-sm text-white/50">
//             <span className="flex items-center gap-1">
//               <Users size={14} />
//               {players}
//             </span>
//           </div>
//           <div className="flex items-center gap-1 text-amber-400">
//             <Sparkles size={14} />
//             <span className="font-medium">+{reward}</span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function ChallengeCard() {
//   const [stake, setStake] = useState(50);
//   const pot = stake * 2;
//   const vaultSave = Math.floor(stake * 0.25);
//   const fee = Math.floor(stake * 0.005);
//   const winAmount = pot - vaultSave - fee;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="glass-card p-6 relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23a855f7" fill-opacity="0.05"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
//       <div className="relative z-10">
//         <div className="flex items-center gap-4 mb-6">
//           <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
//             <Sword size={28} className="text-white" />
//           </div>
//           <div>
//             <h3 className="font-bold text-lg">Challenge a Friend</h3>
//             <p className="text-white/60 text-sm">Stake coins and compete head-to-head</p>
//           </div>
//         </div>

//         <div className="mb-6">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-sm text-white/60">Your Stake</span>
//             <span className="font-bold text-lg">{stake} coins</span>
//           </div>
//           <Slider
//             value={[stake]}
//             onValueChange={(value) => setStake(value[0])}
//             max={500}
//             min={10}
//             step={10}
//             className="mb-4"
//           />
//           <div className="flex justify-between text-xs text-white/40">
//             <span>10</span>
//             <span>250</span>
//             <span>500</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div className="p-4 rounded-xl bg-white/5">
//             <div className="text-white/50 text-sm mb-1">Total Pot</div>
//             <div className="text-2xl font-bold text-blue-400">{pot}</div>
//           </div>
//           <div className="p-4 rounded-xl bg-white/5">
//             <div className="text-white/50 text-sm mb-1">You Could Win</div>
//             <div className="text-2xl font-bold text-green-400">{winAmount}</div>
//           </div>
//         </div>

//         <div className="mb-6">
//           <div className="flex items-center justify-between text-sm mb-2">
//             <span className="text-white/60">75/25 Split</span>
//             <span className="text-emerald-400">{vaultSave} → Vault</span>
//           </div>
//           <div className="h-4 rounded-full overflow-hidden flex">
//             <div className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '75%' }} />
//             <div className="w-1/4 bg-gradient-to-r from-emerald-500 to-green-500" />
//           </div>
//           <div className="flex justify-between text-xs text-white/40 mt-1">
//             <span>Winner (75%)</span>
//             <span>Vault Save (25%)</span>
//           </div>
//         </div>

//         <Button className="w-full btn-primary">
//           <Target size={18} className="mr-2" />
//           Find Opponent
//         </Button>
//       </div>
//     </motion.div>
//   );
// }

// function LiveMatchCard({
//   opponent,
//   game,
//   stake,
//   status,
//   timeLeft,
// }: {
//   opponent: string;
//   game: string;
//   stake: number;
//   status: 'your-turn' | 'waiting';
//   timeLeft: string;
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="glass-card p-4 relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="3" cy="3" r="1" fill="%23ec4899" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
//       <div className="relative z-10">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
//               {opponent.charAt(0)}
//             </div>
//             <div>
//               <h4 className="font-medium">vs {opponent}</h4>
//               <p className="text-white/50 text-sm">{game}</p>
//             </div>
//           </div>
//           <div className="text-right">
//             <div className="flex items-center gap-1 text-amber-400">
//               <Sparkles size={14} />
//               <span className="font-medium">{stake}</span>
//             </div>
//             <span className="text-xs text-white/40">{timeLeft}</span>
//           </div>
//         </div>
//         <div className="mt-4 flex items-center justify-between">
//           <span className={`text-sm ${status === 'your-turn' ? 'text-green-400' : 'text-yellow-400'}`}>
//             {status === 'your-turn' ? 'Your Turn!' : 'Waiting...'}
//           </span>
//           <Button size="sm" className={status === 'your-turn' ? 'btn-primary' : 'btn-secondary'}>
//             {status === 'your-turn' ? 'Play Now' : 'View'}
//           </Button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function LeaderboardEntry({
//   rank,
//   name,
//   score,
//   isUser,
//   trend,
// }: {
//   rank: number;
//   name: string;
//   score: number;
//   isUser?: boolean;
//   trend: 'up' | 'down' | 'same';
// }) {
//   const rankColors = {
//     1: 'from-yellow-400 to-amber-500',
//     2: 'from-gray-300 to-gray-400',
//     3: 'from-orange-400 to-amber-600',
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       className={`flex items-center gap-4 p-3 rounded-xl ${isUser ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-white/5'}`}
//     >
//       <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
//         rank <= 3 ? `bg-gradient-to-br ${rankColors[rank as keyof typeof rankColors]} text-white` : 'bg-white/10'
//       }`}>
//         {rank <= 3 ? <Crown size={14} /> : rank}
//       </div>
//       <div className="flex-1">
//         <span className={`font-medium ${isUser ? 'text-blue-400' : ''}`}>{name}</span>
//         {isUser && <span className="text-xs text-blue-400 ml-2">(You)</span>}
//       </div>
//       <div className="flex items-center gap-2">
//         <TrendingUp size={14} className={trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-white/30'} />
//         <span className="font-medium">{score.toLocaleString()}</span>
//       </div>
//     </motion.div>
//   );
// }

// export default function GamesArena() {
//   const { user } = useAuth();

//   const games = [
//     { title: 'Cosmic Runner', category: 'Arcade', players: '12.5K', reward: 50, difficulty: 'Easy' as const, isNew: true },
//     { title: 'Neon Puzzler', category: 'Puzzle', players: '8.2K', reward: 30, difficulty: 'Medium' as const },
//     { title: 'Star Blaster', category: 'Action', players: '15.1K', reward: 75, difficulty: 'Hard' as const },
//     { title: 'Quantum Quiz', category: 'Trivia', players: '6.8K', reward: 25, difficulty: 'Easy' as const },
//     { title: 'Void Vanguard', category: 'Strategy', players: '4.5K', reward: 100, difficulty: 'Hard' as const, isLocked: true },
//     { title: 'Pixel Racer', category: 'Racing', players: '9.3K', reward: 60, difficulty: 'Medium' as const },
//   ];

//   const liveMatches = [
//     { opponent: 'Alex', game: 'Cosmic Runner', stake: 100, status: 'your-turn' as const, timeLeft: '2:30' },
//     { opponent: 'Sarah', game: 'Neon Puzzler', stake: 50, status: 'waiting' as const, timeLeft: '5:00' },
//   ];

//   const topWinners = [
//     { rank: 1, name: 'DragonSlayer', score: 125000, trend: 'up' as const },
//     { rank: 2, name: 'NeonNinja', score: 98200, trend: 'same' as const },
//     { rank: 3, name: 'CosmicKing', score: 87600, trend: 'up' as const },
//     { rank: 4, name: 'PixelMaster', score: 72300, trend: 'down' as const },
//     { rank: 5, name: user?.name || 'You', score: 65400, trend: 'up' as const, isUser: true },
//   ];

//   const topSavers = [
//     { rank: 1, name: 'VaultKeeper', score: 450000, trend: 'up' as const },
//     { rank: 2, name: 'CoinHoarder', score: 380000, trend: 'up' as const },
//     { rank: 3, name: 'SafeSaver', score: 320000, trend: 'same' as const },
//     { rank: 4, name: 'WealthWise', score: 275000, trend: 'up' as const },
//     { rank: 5, name: user?.name || 'You', score: 125000, trend: 'up' as const, isUser: true },
//   ];

//   return (
//     <div className="space-y-6 pb-20 relative">
//       {/* Background Pattern */}
//       <div 
//         className="fixed inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 10 L10 0 L20 10 L10 20 Z M20 20 L30 10 L40 20 L30 30 Z" stroke="%238b5cf6" stroke-width="0.5" stroke-opacity="0.03" fill="none"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       />

//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10"
//       >
//         <div>
//           <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
//             <Gamepad2 className="text-purple-400" />
//             Games Arena
//           </h1>
//           <p className="text-white/60">Play, compete, and earn coins</p>
//         </div>
//         <div className="flex items-center gap-3">
//           <div className="glass px-4 py-2 rounded-full">
//             <Flame size={16} className="inline mr-2 text-orange-400" />
//             <span className="text-sm">Streak Protected</span>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="glass-card p-6 relative overflow-hidden"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="2" fill="%23a855f7" fill-opacity="0.05"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10" />
//         <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-4">
//             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
//               <Zap size={32} className="text-white" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xl">Quick Play</h3>
//               <p className="text-white/60">Jump into a random game instantly</p>
//             </div>
//           </div>
//           <Button className="btn-primary text-lg px-8">
//             <Play size={20} className="mr-2" />
//             Play Now
//           </Button>
//         </div>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 space-y-6">
//           <Tabs defaultValue="all" className="w-full">
//             <TabsList className="glass mb-6">
//               <TabsTrigger value="all">All Games</TabsTrigger>
//               <TabsTrigger value="arcade">Arcade</TabsTrigger>
//               <TabsTrigger value="puzzle">Puzzle</TabsTrigger>
//               <TabsTrigger value="action">Action</TabsTrigger>
//             </TabsList>

//             <TabsContent value="all" className="mt-0">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {games.map((game, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                   >
//                     <GameCard {...game} />
//                   </motion.div>
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="arcade" className="mt-0">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {games.filter(g => g.category === 'Arcade').map((game, i) => (
//                   <GameCard key={i} {...game} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="puzzle" className="mt-0">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {games.filter(g => g.category === 'Puzzle').map((game, i) => (
//                   <GameCard key={i} {...game} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="action" className="mt-0">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {games.filter(g => g.category === 'Action').map((game, i) => (
//                   <GameCard key={i} {...game} />
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="font-bold text-lg flex items-center gap-2">
//                 <Timer size={20} className="text-green-400" />
//                 Live Matches
//               </h3>
//               <Link to="/games" className="text-sm text-blue-400 hover:underline">
//                 View All
//               </Link>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {liveMatches.map((match, i) => (
//                 <LiveMatchCard key={i} {...match} />
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         <div className="space-y-6">
//           <ChallengeCard />

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="glass-card p-6 relative overflow-hidden"
//             style={{
//               backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23f59e0b" fill-opacity="0.05"/%3E%3C/svg%3E')`,
//               backgroundRepeat: 'repeat',
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
//             <div className="relative z-10">
//               <Tabs defaultValue="winners">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-bold text-lg flex items-center gap-2">
//                     <Trophy size={20} className="text-amber-400" />
//                     Leaderboards
//                   </h3>
//                   <TabsList className="bg-white/5">
//                     <TabsTrigger value="winners" className="text-xs">Winners</TabsTrigger>
//                     <TabsTrigger value="savers" className="text-xs">Savers</TabsTrigger>
//                   </TabsList>
//                 </div>

//                 <TabsContent value="winners" className="mt-0 space-y-2">
//                   {topWinners.map((entry, i) => (
//                     <LeaderboardEntry key={i} {...entry} />
//                   ))}
//                 </TabsContent>

//                 <TabsContent value="savers" className="mt-0 space-y-2">
//                   {topSavers.map((entry, i) => (
//                     <LeaderboardEntry key={i} {...entry} />
//                   ))}
//                 </TabsContent>
//               </Tabs>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="glass-card p-6 relative overflow-hidden"
//             style={{
//               backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23ec4899" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//               backgroundRepeat: 'repeat',
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent" />
//             <div className="relative z-10">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
//                   <Target size={24} className="text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold">Daily Challenge</h3>
//                   <p className="text-white/50 text-sm">Win 3 games today</p>
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <div className="flex items-center justify-between text-sm mb-2">
//                   <span className="text-white/60">Progress</span>
//                   <span className="font-medium">1/3</span>
//                 </div>
//                 <Progress value={33} className="h-2" />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-1 text-amber-400">
//                   <Sparkles size={14} />
//                   <span className="font-medium">+200 coins</span>
//                 </div>
//                 <span className="text-xs text-white/40">12 hours left</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }





//////===============================================================================================================================================================================




import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Gamepad2,
  Users,
  Trophy,
  Zap,
  Target,
  Timer,
  Sparkles,
  Flame,
  TrendingUp,
  Play,
  Lock,
  Sword,
  Crown,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';

// Background images for games
const BG_IMAGES = {
  cosmic: 'https://images.unsplash.com/photo-1614730341194-75c607400070?w=400&h=300&fit=crop',
  neon: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
  star: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=300&fit=crop',
  quiz: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
  void: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop',
  racer: 'https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?w=400&h=300&fit=crop',
  hero: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=400&fit=crop',
  challenge: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
  leaderboard: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
};

function GameCard({
  title,
  category,
  players,
  reward,
  difficulty,
  isNew,
  isLocked,
  bgImage,
}: {
  title: string;
  category: string;
  players: string;
  reward: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isNew?: boolean;
  isLocked?: boolean;
  bgImage: string;
}) {
  const difficultyColors = {
    Easy: 'from-green-500 to-emerald-500',
    Medium: 'from-yellow-500 to-orange-500',
    Hard: 'from-red-500 to-pink-500',
  };

  return (
    <motion.div
      whileHover={!isLocked ? { scale: 1.03, y: -5 } : {}}
      className={`glass-card overflow-hidden group relative ${isLocked ? 'opacity-60' : 'cursor-pointer'}`}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.9) 0%, rgba(10, 14, 23, 0.95) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="aspect-video relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${difficultyColors[difficulty]} opacity-20 group-hover:opacity-30 transition-opacity`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Gamepad2 size={48} className="text-white/30 group-hover:text-white/50 transition-colors" />
        </div>
        
        <div className="absolute top-3 left-3 flex gap-2">
          {isNew && (
            <span className="px-2 py-1 rounded-full bg-green-500/80 text-white text-xs font-medium backdrop-blur-sm">
              NEW
            </span>
          )}
          <span className={`px-2 py-1 rounded-full bg-gradient-to-r ${difficultyColors[difficulty]} text-white text-xs font-medium backdrop-blur-sm`}>
            {difficulty}
          </span>
        </div>

        {isLocked && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Lock size={32} className="text-white/60" />
          </div>
        )}

        {!isLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play size={28} className="text-white ml-1" />
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-4 relative z-10">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-white/50 text-sm">{category}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-white/50">
            <span className="flex items-center gap-1">
              <Users size={14} />
              {players}
            </span>
          </div>
          <div className="flex items-center gap-1 text-amber-400">
            <Sparkles size={14} />
            <span className="font-medium">+{reward}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ChallengeCard() {
  const [stake, setStake] = useState(50);
  const pot = stake * 2;
  const vaultSave = Math.floor(stake * 0.25);
  const fee = Math.floor(stake * 0.005);
  const winAmount = pot - vaultSave - fee;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.challenge})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg">
            <Sword size={28} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Challenge a Friend</h3>
            <p className="text-white/60 text-sm">Stake coins and compete head-to-head</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white/60">Your Stake</span>
            <span className="font-bold text-lg">{stake} coins</span>
          </div>
          <Slider
            value={[stake]}
            onValueChange={(value) => setStake(value[0])}
            max={500}
            min={10}
            step={10}
            className="mb-4"
          />
          <div className="flex justify-between text-xs text-white/40">
            <span>10</span>
            <span>250</span>
            <span>500</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-white/5">
            <div className="text-white/50 text-sm mb-1">Total Pot</div>
            <div className="text-2xl font-bold text-blue-400">{pot}</div>
          </div>
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
            <div className="text-white/50 text-sm mb-1">You Could Win</div>
            <div className="text-2xl font-bold text-green-400">{winAmount}</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-white/60">75/25 Split</span>
            <span className="text-emerald-400">{vaultSave} → Vault</span>
          </div>
          <div className="h-4 rounded-full overflow-hidden flex">
            <div className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '75%' }} />
            <div className="w-1/4 bg-gradient-to-r from-emerald-500 to-green-500" />
          </div>
          <div className="flex justify-between text-xs text-white/40 mt-1">
            <span>Winner (75%)</span>
            <span>Vault Save (25%)</span>
          </div>
        </div>

        <Button className="w-full btn-primary">
          <Target size={18} className="mr-2" />
          Find Opponent
        </Button>
      </div>
    </motion.div>
  );
}

function LiveMatchCard({
  opponent,
  game,
  stake,
  status,
  timeLeft,
}: {
  opponent: string;
  game: string;
  stake: number;
  status: 'your-turn' | 'waiting';
  timeLeft: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
            {opponent.charAt(0)}
          </div>
          <div>
            <h4 className="font-medium">vs {opponent}</h4>
            <p className="text-white/50 text-sm">{game}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-amber-400">
            <Sparkles size={14} />
            <span className="font-medium">{stake}</span>
          </div>
          <span className="text-xs text-white/40">{timeLeft}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className={`text-sm ${status === 'your-turn' ? 'text-green-400' : 'text-yellow-400'}`}>
          {status === 'your-turn' ? 'Your Turn!' : 'Waiting...'}
        </span>
        <Button size="sm" className={status === 'your-turn' ? 'btn-primary' : 'btn-secondary'}>
          {status === 'your-turn' ? 'Play Now' : 'View'}
        </Button>
      </div>
    </motion.div>
  );
}

function LeaderboardEntry({
  rank,
  name,
  score,
  isUser,
  trend,
}: {
  rank: number;
  name: string;
  score: number;
  isUser?: boolean;
  trend: 'up' | 'down' | 'same';
}) {
  const rankColors = {
    1: 'from-yellow-400 to-amber-500',
    2: 'from-gray-300 to-gray-400',
    3: 'from-orange-400 to-amber-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex items-center gap-4 p-3 rounded-xl ${isUser ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-white/5'}`}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
        rank <= 3 ? `bg-gradient-to-br ${rankColors[rank as keyof typeof rankColors]} text-white` : 'bg-white/10'
      }`}>
        {rank <= 3 ? <Crown size={14} /> : rank}
      </div>
      <div className="flex-1">
        <span className={`font-medium ${isUser ? 'text-blue-400' : ''}`}>{name}</span>
        {isUser && <span className="text-xs text-blue-400 ml-2">(You)</span>}
      </div>
      <div className="flex items-center gap-2">
        <TrendingUp size={14} className={trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-white/30'} />
        <span className="font-medium">{score.toLocaleString()}</span>
      </div>
    </motion.div>
  );
}

export default function GamesArena() {
  const { user } = useAuth();

  const games = [
    { title: 'Cosmic Runner', category: 'Arcade', players: '12.5K', reward: 50, difficulty: 'Easy' as const, isNew: true, bgImage: BG_IMAGES.cosmic },
    { title: 'Neon Puzzler', category: 'Puzzle', players: '8.2K', reward: 30, difficulty: 'Medium' as const, bgImage: BG_IMAGES.neon },
    { title: 'Star Blaster', category: 'Action', players: '15.1K', reward: 75, difficulty: 'Hard' as const, bgImage: BG_IMAGES.star },
    { title: 'Quantum Quiz', category: 'Trivia', players: '6.8K', reward: 25, difficulty: 'Easy' as const, bgImage: BG_IMAGES.quiz },
    { title: 'Void Vanguard', category: 'Strategy', players: '4.5K', reward: 100, difficulty: 'Hard' as const, isLocked: true, bgImage: BG_IMAGES.void },
    { title: 'Pixel Racer', category: 'Racing', players: '9.3K', reward: 60, difficulty: 'Medium' as const, bgImage: BG_IMAGES.racer },
  ];

  const liveMatches = [
    { opponent: 'Alex', game: 'Cosmic Runner', stake: 100, status: 'your-turn' as const, timeLeft: '2:30' },
    { opponent: 'Sarah', game: 'Neon Puzzler', stake: 50, status: 'waiting' as const, timeLeft: '5:00' },
  ];

  const topWinners = [
    { rank: 1, name: 'DragonSlayer', score: 125000, trend: 'up' as const },
    { rank: 2, name: 'NeonNinja', score: 98200, trend: 'same' as const },
    { rank: 3, name: 'CosmicKing', score: 87600, trend: 'up' as const },
    { rank: 4, name: 'PixelMaster', score: 72300, trend: 'down' as const },
    { rank: 5, name: user?.name || 'You', score: 65400, trend: 'up' as const, isUser: true },
  ];

  const topSavers = [
    { rank: 1, name: 'VaultKeeper', score: 450000, trend: 'up' as const },
    { rank: 2, name: 'CoinHoarder', score: 380000, trend: 'up' as const },
    { rank: 3, name: 'SafeSaver', score: 320000, trend: 'same' as const },
    { rank: 4, name: 'WealthWise', score: 275000, trend: 'up' as const },
    { rank: 5, name: user?.name || 'You', score: 125000, trend: 'up' as const, isUser: true },
  ];

  return (
    <div className="space-y-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
            <Gamepad2 className="text-purple-400" />
            Games Arena
          </h1>
          <p className="text-white/60">Play, compete, and earn coins</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="glass px-4 py-2 rounded-full backdrop-blur-xl">
            <Flame size={16} className="inline mr-2 text-orange-400" />
            <span className="text-sm">Streak Protected</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.9) 0%, rgba(10, 14, 23, 0.85) 100%), url(${BG_IMAGES.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg">
              <Zap size={32} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Quick Play</h3>
              <p className="text-white/60">Jump into a random game instantly</p>
            </div>
          </div>
          <Button className="btn-primary text-lg px-8 shadow-lg shadow-purple-500/25">
            <Play size={20} className="mr-2" />
            Play Now
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="glass mb-6 backdrop-blur-xl">
              <TabsTrigger value="all">All Games</TabsTrigger>
              <TabsTrigger value="arcade">Arcade</TabsTrigger>
              <TabsTrigger value="puzzle">Puzzle</TabsTrigger>
              <TabsTrigger value="action">Action</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {games.map((game, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <GameCard {...game} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="arcade" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {games.filter(g => g.category === 'Arcade').map((game, i) => (
                  <GameCard key={i} {...game} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="puzzle" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {games.filter(g => g.category === 'Puzzle').map((game, i) => (
                  <GameCard key={i} {...game} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="action" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {games.filter(g => g.category === 'Action').map((game, i) => (
                  <GameCard key={i} {...game} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Timer size={20} className="text-green-400" />
                Live Matches
              </h3>
              <Link to="/games" className="text-sm text-blue-400 hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {liveMatches.map((match, i) => (
                <LiveMatchCard key={i} {...match} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <ChallengeCard />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.leaderboard})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10">
              <Tabs defaultValue="winners">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Trophy size={20} className="text-amber-400" />
                    Leaderboards
                  </h3>
                  <TabsList className="bg-white/5">
                    <TabsTrigger value="winners" className="text-xs">Winners</TabsTrigger>
                    <TabsTrigger value="savers" className="text-xs">Savers</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="winners" className="mt-0 space-y-2">
                  {topWinners.map((entry, i) => (
                    <LeaderboardEntry key={i} {...entry} />
                  ))}
                </TabsContent>

                <TabsContent value="savers" className="mt-0 space-y-2">
                  {topSavers.map((entry, i) => (
                    <LeaderboardEntry key={i} {...entry} />
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg">
                <Target size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold">Daily Challenge</h3>
                <p className="text-white/50 text-sm">Win 3 games today</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-white/60">Progress</span>
                <span className="font-medium">1/3</span>
              </div>
              <Progress value={33} className="h-2" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                <Sparkles size={14} />
                <span className="font-medium">+200 coins</span>
              </div>
              <span className="text-xs text-white/40">12 hours left</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}