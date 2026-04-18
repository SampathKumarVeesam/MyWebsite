// // import { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import {
// //   Wallet,
// //   Shield,
// //   Flame,
// //   Target,
// //   Gamepad2,
// //   GraduationCap,
// //   ShoppingBag,
// //   UtensilsCrossed,
// //   Play,
// //   Crown,
// //   ArrowRight,
// //   Sparkles,
// //   CheckCircle2,
// //   Zap,
// // } from 'lucide-react';
// // import { useAuth } from '@/contexts/AuthContext';
// // import { Button } from '@/components/ui/button';
// // import { Progress } from '@/components/ui/progress';

// // // Wallet Card Component
// // function WalletCard({
// //   title,
// //   balance,
// //   icon: Icon,
// //   color,
// //   subtitle,
// // }: {
// //   title: string;
// //   balance: number;
// //   icon: React.ElementType;
// //   color: string;
// //   subtitle: string;
// // }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="glass-card p-6 relative overflow-hidden group"
// //     >
// //       <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`} />
// //       <div className="relative z-10">
// //         <div className="flex items-center justify-between mb-4">
// //           <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
// //             <Icon size={24} className="text-white" />
// //           </div>
// //           <span className="text-sm text-white/50">{subtitle}</span>
// //         </div>
// //         <h3 className="text-white/60 text-sm mb-1">{title}</h3>
// //         <div className="flex items-baseline gap-1">
// //           <span className="text-3xl font-bold">{balance.toLocaleString()}</span>
// //           <span className="text-white/50 text-sm">coins</span>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // // Daily Streak Component
// // function DailyStreak({ streak, onClaim }: { streak: number; onClaim: () => void }) {
// //   const [claimed, setClaimed] = useState(false);
// //   const rewards = [
// //     { day: 1, reward: 10, icon: Sparkles },
// //     { day: 2, reward: 20, icon: Zap },
// //     { day: 3, reward: 30, icon: Sparkles },
// //     { day: 4, reward: 50, icon: Shield },
// //     { day: 5, reward: 100, icon: Crown },
// //     { day: 6, reward: 150, icon: Target },
// //     { day: 7, reward: 300, icon: Sparkles },
// //   ];

// //   const handleClaim = () => {
// //     setClaimed(true);
// //     onClaim();
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="glass-card p-6"
// //     >
// //       <div className="flex items-center justify-between mb-6">
// //         <div className="flex items-center gap-3">
// //           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
// //             <Flame size={24} className="text-white" />
// //           </div>
// //           <div>
// //             <h3 className="font-bold text-lg">Daily Streak</h3>
// //             <p className="text-white/50 text-sm">Keep it going!</p>
// //           </div>
// //         </div>
// //         <div className="text-right">
// //           <div className="text-3xl font-bold text-orange-400">{streak}</div>
// //           <div className="text-white/50 text-sm">days</div>
// //         </div>
// //       </div>

// //       <div className="flex items-center justify-between mb-6">
// //         {rewards.map((item, i) => {
// //           const Icon = item.icon;
// //           const isCompleted = i < streak;
// //           const isCurrent = i === streak;
// //           return (
// //             <div key={i} className="flex flex-col items-center">
// //               <motion.div
// //                 whileHover={{ scale: 1.1 }}
// //                 className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
// //                   isCompleted
// //                     ? 'bg-gradient-to-br from-orange-500 to-red-500'
// //                     : isCurrent
// //                     ? 'bg-white/10 ring-2 ring-orange-500 animate-pulse'
// //                     : 'bg-white/5'
// //                 }`}
// //               >
// //                 <Icon size={16} className={isCompleted || isCurrent ? 'text-white' : 'text-white/30'} />
// //               </motion.div>
// //               <span className={`text-xs ${isCompleted ? 'text-orange-400' : 'text-white/30'}`}>
// //                 +{item.reward}
// //               </span>
// //             </div>
// //           );
// //         })}
// //       </div>

// //       {!claimed ? (
// //         <Button
// //           onClick={handleClaim}
// //           className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
// //         >
// //           <Flame size={18} className="mr-2" />
// //           Claim Daily Reward
// //         </Button>
// //       ) : (
// //         <div className="text-center py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
// //           <CheckCircle2 size={18} className="inline mr-2" />
// //           Reward Claimed!
// //         </div>
// //       )}
// //     </motion.div>
// //   );
// // }

// // // Mission Card Component
// // function MissionCard({
// //   title,
// //   description,
// //   progress,
// //   total,
// //   reward,
// //   icon: Icon,
// // }: {
// //   title: string;
// //   description: string;
// //   progress: number;
// //   total: number;
// //   reward: number;
// //   icon: React.ElementType;
// // }) {
// //   const percentage = (progress / total) * 100;
// //   const isComplete = progress >= total;

// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.02 }}
// //       className={`glass-card p-4 ${isComplete ? 'border-green-500/30' : ''}`}
// //     >
// //       <div className="flex items-start gap-4">
// //         <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
// //           isComplete ? 'bg-green-500/20' : 'bg-white/5'
// //         }`}>
// //           <Icon size={20} className={isComplete ? 'text-green-400' : 'text-white/60'} />
// //         </div>
// //         <div className="flex-1">
// //           <div className="flex items-center justify-between mb-1">
// //             <h4 className="font-medium">{title}</h4>
// //             {isComplete && <CheckCircle2 size={18} className="text-green-400" />}
// //           </div>
// //           <p className="text-white/50 text-sm mb-3">{description}</p>
// //           <div className="flex items-center gap-3">
// //             <div className="flex-1">
// //               <Progress value={percentage} className="h-2" />
// //             </div>
// //             <span className="text-sm text-white/60">
// //               {progress}/{total}
// //             </span>
// //           </div>
// //         </div>
// //         <div className="flex items-center gap-1 text-amber-400">
// //           <Sparkles size={14} />
// //           <span className="font-medium">+{reward}</span>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // // Activity Feed Component
// // function ActivityFeed() {
// //   const activities = [
// //     { type: 'earn', title: 'Completed Daily Quiz', amount: 25, time: '2 min ago', icon: GraduationCap },
// //     { type: 'spend', title: 'Marketplace Purchase', amount: -50, time: '1 hour ago', icon: ShoppingBag },
// //     { type: 'earn', title: 'Won Cosmic Runner', amount: 75, time: '3 hours ago', icon: Gamepad2 },
// //     { type: 'save', title: 'Auto Vault Transfer', amount: 12, time: '5 hours ago', icon: Shield },
// //     { type: 'earn', title: 'Daily Streak Bonus', amount: 30, time: '1 day ago', icon: Flame },
// //   ];

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="glass-card p-6"
// //     >
// //       <div className="flex items-center justify-between mb-6">
// //         <h3 className="font-bold text-lg">Activity Feed</h3>
// //         <span className="text-xs text-white/40">0.25% fee on all transactions</span>
// //       </div>

// //       <div className="space-y-4">
// //         {activities.map((activity, i) => {
// //           const Icon = activity.icon;
// //           return (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ delay: i * 0.1 }}
// //               className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
// //             >
// //               <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
// //                 activity.type === 'earn' ? 'bg-green-500/20' :
// //                 activity.type === 'spend' ? 'bg-red-500/20' :
// //                 'bg-blue-500/20'
// //               }`}>
// //                 <Icon size={18} className={
// //                   activity.type === 'earn' ? 'text-green-400' :
// //                   activity.type === 'spend' ? 'text-red-400' :
// //                   'text-blue-400'
// //                 } />
// //               </div>
// //               <div className="flex-1">
// //                 <h4 className="font-medium text-sm">{activity.title}</h4>
// //                 <span className="text-xs text-white/40">{activity.time}</span>
// //               </div>
// //               <div className={`font-medium ${
// //                 activity.type === 'earn' ? 'text-green-400' :
// //                 activity.type === 'spend' ? 'text-red-400' :
// //                 'text-blue-400'
// //               }`}>
// //                 {activity.type === 'spend' ? '' : '+'}{activity.amount}
// //               </div>
// //             </motion.div>
// //           );
// //         })}
// //       </div>
// //     </motion.div>
// //   );
// // }

// // // Quick Action Button
// // function QuickAction({
// //   icon: Icon,
// //   label,
// //   to,
// //   color,
// // }: {
// //   icon: React.ElementType;
// //   label: string;
// //   to: string;
// //   color: string;
// // }) {
// //   return (
// //     <Link to={to}>
// //       <motion.button
// //         whileHover={{ scale: 1.05, y: -2 }}
// //         whileTap={{ scale: 0.95 }}
// //         className="glass-card p-4 w-full text-center group"
// //       >
// //         <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
// //           <Icon size={24} className="text-white" />
// //         </div>
// //         <span className="text-sm font-medium">{label}</span>
// //       </motion.button>
// //     </Link>
// //   );
// // }

// // export default function Dashboard() {
// //   const { user, updateUser } = useAuth();
// //   const [totalWorth, setTotalWorth] = useState(0);

// //   useEffect(() => {
// //     if (user) {
// //       setTotalWorth(user.coins + user.vaultCoins);
// //     }
// //   }, [user]);

// //   const handleClaimStreak = () => {
// //     if (user) {
// //       const reward = [10, 20, 30, 50, 100, 150, 300][user.streak % 7];
// //       updateUser({
// //         coins: user.coins + reward,
// //         streak: user.streak + 1,
// //       });
// //     }
// //   };

// //   const missions = [
// //     {
// //       title: 'Game Master',
// //       description: 'Play 5 different games today',
// //       progress: 3,
// //       total: 5,
// //       reward: 50,
// //       icon: Gamepad2,
// //     },
// //     {
// //       title: 'Knowledge Seeker',
// //       description: 'Complete 2 lessons in Learning Hub',
// //       progress: 1,
// //       total: 2,
// //       reward: 40,
// //       icon: GraduationCap,
// //     },
// //     {
// //       title: 'Smart Shopper',
// //       description: 'Make a purchase in Marketplace',
// //       progress: 0,
// //       total: 1,
// //       reward: 25,
// //       icon: ShoppingBag,
// //     },
// //     {
// //       title: 'Vault Builder',
// //       description: 'Save 100 coins in your vault',
// //       progress: 75,
// //       total: 100,
// //       reward: 30,
// //       icon: Shield,
// //     },
// //   ];

// //   return (
// //     <div className="space-y-6 pb-20">
// //       <motion.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="flex items-center justify-between"
// //       >
// //         <div>
// //           <h1 className="text-3xl font-bold mb-1">
// //             Welcome back, <span className="gradient-text">{user?.name}</span>
// //           </h1>
// //           <p className="text-white/60">Ready to continue your adventure?</p>
// //         </div>
// //         <div className="hidden sm:flex items-center gap-3">
// //           <div className="glass px-4 py-2 rounded-full">
// //             <span className="text-white/50 text-sm">Total Worth: </span>
// //             <span className="font-bold">{totalWorth.toLocaleString()}</span>
// //             <span className="text-white/50 text-sm ml-1">coins</span>
// //           </div>
// //         </div>
// //       </motion.div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <WalletCard
// //           title="Main Wallet"
// //           balance={user?.coins || 0}
// //           icon={Wallet}
// //           color="from-blue-500 to-cyan-500"
// //           subtitle="Spendable"
// //         />
// //         <WalletCard
// //           title="Emergency Vault"
// //           balance={user?.vaultCoins || 0}
// //           icon={Shield}
// //           color="from-emerald-500 to-green-500"
// //           subtitle="Protected"
// //         />
// //       </div>

// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.2 }}
// //       >
// //         <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
// //           <QuickAction icon={Gamepad2} label="Play Game" to="/games" color="from-purple-500 to-violet-500" />
// //           <QuickAction icon={ShoppingBag} label="Marketplace" to="/marketplace" color="from-pink-500 to-rose-500" />
// //           <QuickAction icon={GraduationCap} label="Learn" to="/learning" color="from-blue-500 to-cyan-500" />
// //           <QuickAction icon={UtensilsCrossed} label="Order Food" to="/food" color="from-orange-500 to-red-500" />
// //           <QuickAction icon={Play} label="Watch" to="/entertainment" color="from-red-500 to-pink-500" />
// //           <QuickAction icon={Crown} label="Premium" to="/premium" color="from-amber-400 to-orange-500" />
// //         </div>
// //       </motion.div>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //         <div className="space-y-6">
// //           <DailyStreak streak={user?.streak || 0} onClaim={handleClaimStreak} />

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.3 }}
// //             className="glass-card p-6"
// //           >
// //             <div className="flex items-center justify-between mb-4">
// //               <h3 className="font-bold text-lg">Active Missions</h3>
// //               <Link to="/games" className="text-sm text-blue-400 hover:underline flex items-center gap-1">
// //                 View All <ArrowRight size={14} />
// //               </Link>
// //             </div>
// //             <div className="space-y-3">
// //               {missions.map((mission, i) => (
// //                 <MissionCard key={i} {...mission} />
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>

// //         <div className="lg:col-span-2">
// //           <ActivityFeed />

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.4 }}
// //             className="mt-6 glass-card p-6 relative overflow-hidden"
// //           >
// //             <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10" />
// //             <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
// //               <div className="flex items-center gap-4">
// //                 <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
// //                   <Crown size={28} className="text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-bold text-lg">Upgrade to Premium</h3>
// //                   <p className="text-white/60 text-sm">Unlock 2x earnings and exclusive perks</p>
// //                 </div>
// //               </div>
// //               <Link to="/premium">
// //                 <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white">
// //                   <Sparkles size={18} className="mr-2" />
// //                   Upgrade Now
// //                 </Button>
// //               </Link>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// //==========================================================================================================================================================================================================================================================================




// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   Wallet,
//   Shield,
//   Flame,
//   Target,
//   Gamepad2,
//   GraduationCap,
//   ShoppingBag,
//   UtensilsCrossed,
//   Play,
//   Crown,
//   ArrowRight,
//   Sparkles,
//   CheckCircle2,
//   Zap,
// } from 'lucide-react';
// import { useAuth } from '@/contexts/AuthContext';
// import { Button } from '@/components/ui/button';
// import { Progress } from '@/components/ui/progress';

// // Wallet Card Component
// function WalletCard({
//   title,
//   balance,
//   icon: Icon,
//   color,
//   subtitle,
// }: {
//   title: string;
//   balance: number;
//   icon: React.ElementType;
//   color: string;
//   subtitle: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="glass-card p-6 relative overflow-hidden group"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
//       <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`} />
//       <div className="relative z-10">
//         <div className="flex items-center justify-between mb-4">
//           <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
//             <Icon size={24} className="text-white" />
//           </div>
//           <span className="text-sm text-white/50">{subtitle}</span>
//         </div>
//         <h3 className="text-white/60 text-sm mb-1">{title}</h3>
//         <div className="flex items-baseline gap-1">
//           <span className="text-3xl font-bold">{balance.toLocaleString()}</span>
//           <span className="text-white/50 text-sm">coins</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // Daily Streak Component
// function DailyStreak({ streak, onClaim }: { streak: number; onClaim: () => void }) {
//   const [claimed, setClaimed] = useState(false);
//   const rewards = [
//     { day: 1, reward: 10, icon: Sparkles },
//     { day: 2, reward: 20, icon: Zap },
//     { day: 3, reward: 30, icon: Sparkles },
//     { day: 4, reward: 50, icon: Shield },
//     { day: 5, reward: 100, icon: Crown },
//     { day: 6, reward: 150, icon: Target },
//     { day: 7, reward: 300, icon: Sparkles },
//   ];

//   const handleClaim = () => {
//     setClaimed(true);
//     onClaim();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="glass-card p-6 relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23f97316" fill-opacity="0.03"%3E%3Cpath d="M20 20l2.5-5 2.5 5-2.5 5-2.5-5zM10 10l2.5-5 2.5 5-2.5 5-2.5-5zM30 30l2.5-5 2.5 5-2.5 5-2.5-5z"/%3E%3C/g%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent" />
//       <div className="relative z-10">
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
//               <Flame size={24} className="text-white" />
//             </div>
//             <div>
//               <h3 className="font-bold text-lg">Daily Streak</h3>
//               <p className="text-white/50 text-sm">Keep it going!</p>
//             </div>
//           </div>
//           <div className="text-right">
//             <div className="text-3xl font-bold text-orange-400">{streak}</div>
//             <div className="text-white/50 text-sm">days</div>
//           </div>
//         </div>

//         <div className="flex items-center justify-between mb-6">
//           {rewards.map((item, i) => {
//             const Icon = item.icon;
//             const isCompleted = i < streak;
//             const isCurrent = i === streak;
//             return (
//               <div key={i} className="flex flex-col items-center">
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
//                     isCompleted
//                       ? 'bg-gradient-to-br from-orange-500 to-red-500'
//                       : isCurrent
//                       ? 'bg-white/10 ring-2 ring-orange-500 animate-pulse'
//                       : 'bg-white/5'
//                   }`}
//                 >
//                   <Icon size={16} className={isCompleted || isCurrent ? 'text-white' : 'text-white/30'} />
//                 </motion.div>
//                 <span className={`text-xs ${isCompleted ? 'text-orange-400' : 'text-white/30'}`}>
//                   +{item.reward}
//                 </span>
//               </div>
//             );
//           })}
//         </div>

//         {!claimed ? (
//           <Button
//             onClick={handleClaim}
//             className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
//           >
//             <Flame size={18} className="mr-2" />
//             Claim Daily Reward
//           </Button>
//         ) : (
//           <div className="text-center py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
//             <CheckCircle2 size={18} className="inline mr-2" />
//             Reward Claimed!
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// // Mission Card Component
// function MissionCard({
//   title,
//   description,
//   progress,
//   total,
//   reward,
//   icon: Icon,
// }: {
//   title: string;
//   description: string;
//   progress: number;
//   total: number;
//   reward: number;
//   icon: React.ElementType;
// }) {
//   const percentage = (progress / total) * 100;
//   const isComplete = progress >= total;

//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className={`glass-card p-4 ${isComplete ? 'border-green-500/30' : ''}`}
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="3" cy="3" r="1" fill="%23ffffff" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="flex items-start gap-4">
//         <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
//           isComplete ? 'bg-green-500/20' : 'bg-white/5'
//         }`}>
//           <Icon size={20} className={isComplete ? 'text-green-400' : 'text-white/60'} />
//         </div>
//         <div className="flex-1">
//           <div className="flex items-center justify-between mb-1">
//             <h4 className="font-medium">{title}</h4>
//             {isComplete && <CheckCircle2 size={18} className="text-green-400" />}
//           </div>
//           <p className="text-white/50 text-sm mb-3">{description}</p>
//           <div className="flex items-center gap-3">
//             <div className="flex-1">
//               <Progress value={percentage} className="h-2" />
//             </div>
//             <span className="text-sm text-white/60">
//               {progress}/{total}
//             </span>
//           </div>
//         </div>
//         <div className="flex items-center gap-1 text-amber-400">
//           <Sparkles size={14} />
//           <span className="font-medium">+{reward}</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // Activity Feed Component
// function ActivityFeed() {
//   const activities = [
//     { type: 'earn', title: 'Completed Daily Quiz', amount: 25, time: '2 min ago', icon: GraduationCap },
//     { type: 'spend', title: 'Marketplace Purchase', amount: -50, time: '1 hour ago', icon: ShoppingBag },
//     { type: 'earn', title: 'Won Cosmic Runner', amount: 75, time: '3 hours ago', icon: Gamepad2 },
//     { type: 'save', title: 'Auto Vault Transfer', amount: 12, time: '5 hours ago', icon: Shield },
//     { type: 'earn', title: 'Daily Streak Bonus', amount: 30, time: '1 day ago', icon: Flame },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="glass-card p-6 relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%233b82f6" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
//       <div className="relative z-10">
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="font-bold text-lg">Activity Feed</h3>
//           <span className="text-xs text-white/40">0.25% fee on all transactions</span>
//         </div>

//         <div className="space-y-4">
//           {activities.map((activity, i) => {
//             const Icon = activity.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
//               >
//                 <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
//                   activity.type === 'earn' ? 'bg-green-500/20' :
//                   activity.type === 'spend' ? 'bg-red-500/20' :
//                   'bg-blue-500/20'
//                 }`}>
//                   <Icon size={18} className={
//                     activity.type === 'earn' ? 'text-green-400' :
//                     activity.type === 'spend' ? 'text-red-400' :
//                     'text-blue-400'
//                   } />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-medium text-sm">{activity.title}</h4>
//                   <span className="text-xs text-white/40">{activity.time}</span>
//                 </div>
//                 <div className={`font-medium ${
//                   activity.type === 'earn' ? 'text-green-400' :
//                   activity.type === 'spend' ? 'text-red-400' :
//                   'text-blue-400'
//                 }`}>
//                   {activity.type === 'spend' ? '' : '+'}{activity.amount}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // Quick Action Button
// function QuickAction({
//   icon: Icon,
//   label,
//   to,
//   color,
// }: {
//   icon: React.ElementType;
//   label: string;
//   to: string;
//   color: string;
// }) {
//   return (
//     <Link to={to}>
//       <motion.button
//         whileHover={{ scale: 1.05, y: -2 }}
//         whileTap={{ scale: 0.95 }}
//         className="glass-card p-4 w-full text-center group relative overflow-hidden"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 40L40 0H20L0 20z" fill="%23ffffff" fill-opacity="0.02"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//         <div className="relative z-10">
//           <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
//             <Icon size={24} className="text-white" />
//           </div>
//           <span className="text-sm font-medium">{label}</span>
//         </div>
//       </motion.button>
//     </Link>
//   );
// }

// export default function Dashboard() {
//   const { user, updateUser } = useAuth();
//   const [totalWorth, setTotalWorth] = useState(0);

//   useEffect(() => {
//     if (user) {
//       setTotalWorth(user.coins + user.vaultCoins);
//     }
//   }, [user]);

//   const handleClaimStreak = () => {
//     if (user) {
//       const reward = [10, 20, 30, 50, 100, 150, 300][user.streak % 7];
//       updateUser({
//         coins: user.coins + reward,
//         streak: user.streak + 1,
//       });
//     }
//   };

//   const missions = [
//     {
//       title: 'Game Master',
//       description: 'Play 5 different games today',
//       progress: 3,
//       total: 5,
//       reward: 50,
//       icon: Gamepad2,
//     },
//     {
//       title: 'Knowledge Seeker',
//       description: 'Complete 2 lessons in Learning Hub',
//       progress: 1,
//       total: 2,
//       reward: 40,
//       icon: GraduationCap,
//     },
//     {
//       title: 'Smart Shopper',
//       description: 'Make a purchase in Marketplace',
//       progress: 0,
//       total: 1,
//       reward: 25,
//       icon: ShoppingBag,
//     },
//     {
//       title: 'Vault Builder',
//       description: 'Save 100 coins in your vault',
//       progress: 75,
//       total: 100,
//       reward: 30,
//       icon: Shield,
//     },
//   ];

//   return (
//     <div className="space-y-6 pb-20 relative">
//       {/* Background Pattern */}
//       <div 
//         className="fixed inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 30l20-20M30 30L10 10M30 30l20 20M30 30L10 50" stroke="%233b82f6" stroke-width="0.5" stroke-opacity="0.05" fill="none"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       />

//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex items-center justify-between relative z-10"
//       >
//         <div>
//           <h1 className="text-3xl font-bold mb-1">
//             Welcome back, <span className="gradient-text">{user?.name}</span>
//           </h1>
//           <p className="text-white/60">Ready to continue your adventure?</p>
//         </div>
//         <div className="hidden sm:flex items-center gap-3">
//           <div className="glass px-4 py-2 rounded-full">
//             <span className="text-white/50 text-sm">Total Worth: </span>
//             <span className="font-bold">{totalWorth.toLocaleString()}</span>
//             <span className="text-white/50 text-sm ml-1">coins</span>
//           </div>
//         </div>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <WalletCard
//           title="Main Wallet"
//           balance={user?.coins || 0}
//           icon={Wallet}
//           color="from-blue-500 to-cyan-500"
//           subtitle="Spendable"
//         />
//         <WalletCard
//           title="Emergency Vault"
//           balance={user?.vaultCoins || 0}
//           icon={Shield}
//           color="from-emerald-500 to-green-500"
//           subtitle="Protected"
//         />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//           <QuickAction icon={Gamepad2} label="Play Game" to="/games" color="from-purple-500 to-violet-500" />
//           <QuickAction icon={ShoppingBag} label="Marketplace" to="/marketplace" color="from-pink-500 to-rose-500" />
//           <QuickAction icon={GraduationCap} label="Learn" to="/learning" color="from-blue-500 to-cyan-500" />
//           <QuickAction icon={UtensilsCrossed} label="Order Food" to="/food" color="from-orange-500 to-red-500" />
//           <QuickAction icon={Play} label="Watch" to="/entertainment" color="from-red-500 to-pink-500" />
//           <QuickAction icon={Crown} label="Premium" to="/premium" color="from-amber-400 to-orange-500" />
//         </div>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="space-y-6">
//           <DailyStreak streak={user?.streak || 0} onClaim={handleClaimStreak} />

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="glass-card p-6 relative overflow-hidden"
//             style={{
//               backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="2" fill="%23f59e0b" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//               backgroundRepeat: 'repeat',
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
//             <div className="relative z-10">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-bold text-lg">Active Missions</h3>
//                 <Link to="/games" className="text-sm text-blue-400 hover:underline flex items-center gap-1">
//                   View All <ArrowRight size={14} />
//                 </Link>
//               </div>
//               <div className="space-y-3">
//                 {missions.map((mission, i) => (
//                   <MissionCard key={i} {...mission} />
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <div className="lg:col-span-2">
//           <ActivityFeed />

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="mt-6 glass-card p-6 relative overflow-hidden"
//             style={{
//               backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fbbf24" fill-opacity="0.05"%3E%3Cpolygon points="0,0 40,0 20,20"/%3E%3C/g%3E%3C/svg%3E')`,
//               backgroundRepeat: 'repeat',
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10" />
//             <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
//               <div className="flex items-center gap-4">
//                 <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
//                   <Crown size={28} className="text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg">Upgrade to Premium</h3>
//                   <p className="text-white/60 text-sm">Unlock 2x earnings and exclusive perks</p>
//                 </div>
//               </div>
//               <Link to="/premium">
//                 <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white">
//                   <Sparkles size={18} className="mr-2" />
//                   Upgrade Now
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }



//====================================================================================================================================================================================================================================================




import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Wallet,
  Shield,
  Flame,
  Target,
  Gamepad2,
  GraduationCap,
  ShoppingBag,
  UtensilsCrossed,
  Play,
  Crown,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

// Background image URLs - using Unsplash for high-quality images
const BG_IMAGES = {
  gaming: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
  marketplace: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
  learning: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
  food: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
  entertainment: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop',
  premium: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
  wallet: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop',
  vault: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=200&fit=crop',
  streak: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
  missions: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
  activity: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
};

// Wallet Card Component with Background
function WalletCard({
  title,
  balance,
  icon: Icon,
  color,
  subtitle,
  bgImage,
}: {
  title: string;
  balance: number;
  icon: React.ElementType;
  color: string;
  subtitle: string;
  bgImage: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 relative overflow-hidden group"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.85) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`} />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
            <Icon size={24} className="text-white" />
          </div>
          <span className="text-sm text-white/70 font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">{subtitle}</span>
        </div>
        <h3 className="text-white/70 text-sm mb-1">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{balance.toLocaleString()}</span>
          <span className="text-white/50 text-sm">coins</span>
        </div>
      </div>
    </motion.div>
  );
}

// Daily Streak Component with Background
function DailyStreak({ streak, onClaim }: { streak: number; onClaim: () => void }) {
  const [claimed, setClaimed] = useState(false);
  const rewards = [
    { day: 1, reward: 10, icon: Sparkles },
    { day: 2, reward: 20, icon: Zap },
    { day: 3, reward: 30, icon: Sparkles },
    { day: 4, reward: 50, icon: Shield },
    { day: 5, reward: 100, icon: Crown },
    { day: 6, reward: 150, icon: Target },
    { day: 7, reward: 300, icon: Sparkles },
  ];

  const handleClaim = () => {
    setClaimed(true);
    onClaim();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.85) 100%), url(${BG_IMAGES.streak})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
              <Flame size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Daily Streak</h3>
              <p className="text-white/50 text-sm">Keep it going!</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-orange-400">{streak}</div>
            <div className="text-white/50 text-sm">days</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6 overflow-x-auto pb-2">
          {rewards.map((item, i) => {
            const Icon = item.icon;
            const isCompleted = i < streak;
            const isCurrent = i === streak;
            return (
              <div key={i} className="flex flex-col items-center min-w-[40px]">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 shadow-lg ${
                    isCompleted
                      ? 'bg-gradient-to-br from-orange-500 to-red-500'
                      : isCurrent
                      ? 'bg-white/10 ring-2 ring-orange-500 animate-pulse'
                      : 'bg-white/5'
                  }`}
                >
                  <Icon size={16} className={isCompleted || isCurrent ? 'text-white' : 'text-white/30'} />
                </motion.div>
                <span className={`text-xs ${isCompleted ? 'text-orange-400' : 'text-white/30'}`}>
                  +{item.reward}
                </span>
              </div>
            );
          })}
        </div>

        {!claimed ? (
          <Button
            onClick={handleClaim}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25"
          >
            <Flame size={18} className="mr-2" />
            Claim Daily Reward
          </Button>
        ) : (
          <div className="text-center py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
            <CheckCircle2 size={18} className="inline mr-2" />
            Reward Claimed!
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Mission Card Component with Background
function MissionCard({
  title,
  description,
  progress,
  total,
  reward,
  icon: Icon,
}: {
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: number;
  icon: React.ElementType;
}) {
  const percentage = (progress / total) * 100;
  const isComplete = progress >= total;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`glass-card p-4 relative overflow-hidden ${isComplete ? 'border-green-500/30' : ''}`}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.missions})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            isComplete ? 'bg-green-500/20' : 'bg-white/5'
          }`}>
            <Icon size={20} className={isComplete ? 'text-green-400' : 'text-white/60'} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium">{title}</h4>
              {isComplete && <CheckCircle2 size={18} className="text-green-400" />}
            </div>
            <p className="text-white/50 text-sm mb-3">{description}</p>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <Progress value={percentage} className="h-2" />
              </div>
              <span className="text-sm text-white/60">
                {progress}/{total}
              </span>
            </div>
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

// Activity Feed Component with Background
function ActivityFeed() {
  const activities = [
    { type: 'earn', title: 'Completed Daily Quiz', amount: 25, time: '2 min ago', icon: GraduationCap },
    { type: 'spend', title: 'Marketplace Purchase', amount: -50, time: '1 hour ago', icon: ShoppingBag },
    { type: 'earn', title: 'Won Cosmic Runner', amount: 75, time: '3 hours ago', icon: Gamepad2 },
    { type: 'save', title: 'Auto Vault Transfer', amount: 12, time: '5 hours ago', icon: Shield },
    { type: 'earn', title: 'Daily Streak Bonus', amount: 30, time: '1 day ago', icon: Flame },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.activity})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg">Activity Feed</h3>
          <span className="text-xs text-white/40">0.25% fee on all transactions</span>
        </div>

        <div className="space-y-4">
          {activities.map((activity, i) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activity.type === 'earn' ? 'bg-green-500/20' :
                  activity.type === 'spend' ? 'bg-red-500/20' :
                  'bg-blue-500/20'
                }`}>
                  <Icon size={18} className={
                    activity.type === 'earn' ? 'text-green-400' :
                    activity.type === 'spend' ? 'text-red-400' :
                    'text-blue-400'
                  } />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{activity.title}</h4>
                  <span className="text-xs text-white/40">{activity.time}</span>
                </div>
                <div className={`font-medium ${
                  activity.type === 'earn' ? 'text-green-400' :
                  activity.type === 'spend' ? 'text-red-400' :
                  'text-blue-400'
                }`}>
                  {activity.type === 'spend' ? '' : '+'}{activity.amount}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// Quick Action Button with Background
function QuickAction({
  icon: Icon,
  label,
  to,
  color,
  bgImage,
}: {
  icon: React.ElementType;
  label: string;
  to: string;
  color: string;
  bgImage: string;
}) {
  return (
    <Link to={to}>
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="glass-card p-4 w-full text-center group relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 14, 23, 0.9) 0%, rgba(10, 14, 23, 0.95) 100%), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${color}`} />
        <div className="relative z-10">
          <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
            <Icon size={24} className="text-white" />
          </div>
          <span className="text-sm font-medium">{label}</span>
        </div>
      </motion.button>
    </Link>
  );
}

export default function Dashboard() {
  const { user, updateUser } = useAuth();
  const [totalWorth, setTotalWorth] = useState(0);

  useEffect(() => {
    if (user) {
      setTotalWorth(user.coins + user.vaultCoins);
    }
  }, [user]);

  const handleClaimStreak = () => {
    if (user) {
      const reward = [10, 20, 30, 50, 100, 150, 300][user.streak % 7];
      updateUser({
        coins: user.coins + reward,
        streak: user.streak + 1,
      });
    }
  };

  const missions = [
    {
      title: 'Game Master',
      description: 'Play 5 different games today',
      progress: 3,
      total: 5,
      reward: 50,
      icon: Gamepad2,
    },
    {
      title: 'Knowledge Seeker',
      description: 'Complete 2 lessons in Learning Hub',
      progress: 1,
      total: 2,
      reward: 40,
      icon: GraduationCap,
    },
    {
      title: 'Smart Shopper',
      description: 'Make a purchase in Marketplace',
      progress: 0,
      total: 1,
      reward: 25,
      icon: ShoppingBag,
    },
    {
      title: 'Vault Builder',
      description: 'Save 100 coins in your vault',
      progress: 75,
      total: 100,
      reward: 30,
      icon: Shield,
    },
  ];

  return (
    <div className="space-y-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold mb-1">
            Welcome back, <span className="gradient-text">{user?.name}</span>
          </h1>
          <p className="text-white/60">Ready to continue your adventure?</p>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <div className="glass px-4 py-2 rounded-full backdrop-blur-xl">
            <span className="text-white/50 text-sm">Total Worth: </span>
            <span className="font-bold">{totalWorth.toLocaleString()}</span>
            <span className="text-white/50 text-sm ml-1">coins</span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WalletCard
          title="Main Wallet"
          balance={user?.coins || 0}
          icon={Wallet}
          color="from-blue-500 to-cyan-500"
          subtitle="Spendable"
          bgImage={BG_IMAGES.wallet}
        />
        <WalletCard
          title="Emergency Vault"
          balance={user?.vaultCoins || 0}
          icon={Shield}
          color="from-emerald-500 to-green-500"
          subtitle="Protected"
          bgImage={BG_IMAGES.vault}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <QuickAction icon={Gamepad2} label="Play Game" to="/games" color="from-purple-500 to-violet-500" bgImage={BG_IMAGES.gaming} />
          <QuickAction icon={ShoppingBag} label="Marketplace" to="/marketplace" color="from-pink-500 to-rose-500" bgImage={BG_IMAGES.marketplace} />
          <QuickAction icon={GraduationCap} label="Learn" to="/learning" color="from-blue-500 to-cyan-500" bgImage={BG_IMAGES.learning} />
          <QuickAction icon={UtensilsCrossed} label="Order Food" to="/food" color="from-orange-500 to-red-500" bgImage={BG_IMAGES.food} />
          <QuickAction icon={Play} label="Watch" to="/entertainment" color="from-red-500 to-pink-500" bgImage={BG_IMAGES.entertainment} />
          <QuickAction icon={Crown} label="Premium" to="/premium" color="from-amber-400 to-orange-500" bgImage={BG_IMAGES.premium} />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <DailyStreak streak={user?.streak || 0} onClaim={handleClaimStreak} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.missions})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Active Missions</h3>
                <Link to="/games" className="text-sm text-blue-400 hover:underline flex items-center gap-1">
                  View All <ArrowRight size={14} />
                </Link>
              </div>
              <div className="space-y-3">
                {missions.map((mission, i) => (
                  <MissionCard key={i} {...mission} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-2">
          <ActivityFeed />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 glass-card p-6 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.9) 0%, rgba(10, 14, 23, 0.85) 100%), url(${BG_IMAGES.premium})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <Crown size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Upgrade to Premium</h3>
                  <p className="text-white/60 text-sm">Unlock 2x earnings and exclusive perks</p>
                </div>
              </div>
              <Link to="/premium">
                <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-lg shadow-amber-500/25">
                  <Sparkles size={18} className="mr-2" />
                  Upgrade Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}