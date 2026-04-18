// // import { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import {
// //   Wallet as WalletIcon,
// //   Shield,
// //   ArrowUpRight,
// //   ArrowDownLeft,
// //   History,
// //   Users,
// //   Gift,
// //   AlertTriangle,
// //   CheckCircle,
// //   Copy,
// //   Sparkles,
// //   TrendingUp,
// //   TrendingDown,
// //   Calendar,
// //   Unlock,
// // } from 'lucide-react';
// // import { useAuth } from '@/contexts/AuthContext';
// // import { Button } from '@/components/ui/button';
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // import { Progress } from '@/components/ui/progress';
// // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// // // Transaction Item
// // function TransactionItem({
// //   type,
// //   title,
// //   amount,
// //   date,
// //   fee,
// // }: {
// //   type: 'in' | 'out' | 'vault';
// //   title: string;
// //   amount: number;
// //   date: string;
// //   fee?: number;
// // }) {
// //   const isPositive = type === 'in' || type === 'vault';

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, x: -20 }}
// //       animate={{ opacity: 1, x: 0 }}
// //       className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
// //     >
// //       <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
// //         type === 'in' ? 'bg-green-500/20' :
// //         type === 'out' ? 'bg-red-500/20' :
// //         'bg-blue-500/20'
// //       }`}>
// //         {type === 'in' ? <ArrowDownLeft size={18} className="text-green-400" /> :
// //          type === 'out' ? <ArrowUpRight size={18} className="text-red-400" /> :
// //          <Shield size={18} className="text-blue-400" />}
// //       </div>
// //       <div className="flex-1">
// //         <h4 className="font-medium">{title}</h4>
// //         <div className="flex items-center gap-2 text-sm text-white/50">
// //           <span>{date}</span>
// //           {fee !== undefined && (
// //             <>
// //               <span>•</span>
// //               <span>Fee: {fee} (0.25%)</span>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //       <div className={`font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
// //         {isPositive ? '+' : '-'}{amount}
// //       </div>
// //     </motion.div>
// //   );
// // }

// // // Referral Card
// // function ReferralCard() {
// //   const [copied, setCopied] = useState(false);
// //   const referralCode = 'APPVERSE2026';
// //   const referralLink = `https://appverse.com/ref/${referralCode}`;

// //   const handleCopy = () => {
// //     navigator.clipboard.writeText(referralLink);
// //     setCopied(true);
// //     setTimeout(() => setCopied(false), 2000);
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="glass-card p-6"
// //     >
// //       <div className="flex items-center gap-3 mb-4">
// //         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
// //           <Users size={24} className="text-white" />
// //         </div>
// //         <div>
// //           <h3 className="font-bold text-lg">Refer & Earn</h3>
// //           <p className="text-white/50 text-sm">Get 100 coins per friend</p>
// //         </div>
// //       </div>

// //       <div className="space-y-4">
// //         <div className="p-4 rounded-xl bg-white/5">
// //           <p className="text-white/50 text-sm mb-2">Your Referral Code</p>
// //           <div className="flex items-center gap-2">
// //             <code className="flex-1 px-3 py-2 rounded-lg bg-black/30 font-mono text-lg">
// //               {referralCode}
// //             </code>
// //             <Button
// //               variant="outline"
// //               size="icon"
// //               onClick={handleCopy}
// //               className="shrink-0"
// //             >
// //               {copied ? <CheckCircle size={18} className="text-green-400" /> : <Copy size={18} />}
// //             </Button>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-3 gap-4 text-center">
// //           <div className="p-3 rounded-xl bg-white/5">
// //             <p className="text-2xl font-bold">12</p>
// //             <p className="text-xs text-white/50">Invited</p>
// //           </div>
// //           <div className="p-3 rounded-xl bg-white/5">
// //             <p className="text-2xl font-bold">8</p>
// //             <p className="text-xs text-white/50">Joined</p>
// //           </div>
// //           <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30">
// //             <p className="text-2xl font-bold text-green-400">800</p>
// //             <p className="text-xs text-white/50">Earned</p>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // // Break Vault Dialog
// // function BreakVaultDialog({
// //   isOpen,
// //   onClose,
// //   vaultAmount,
// //   onBreak,
// // }: {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   vaultAmount: number;
// //   onBreak: () => void;
// // }) {
// //   const [confirmed, setConfirmed] = useState(false);

// //   return (
// //     <Dialog open={isOpen} onOpenChange={onClose}>
// //       <DialogContent className="glass-card border-white/10 max-w-md">
// //         <DialogHeader>
// //           <DialogTitle className="flex items-center gap-2">
// //             <AlertTriangle size={24} className="text-red-400" />
// //             Break Emergency Vault
// //           </DialogTitle>
// //           <DialogDescription className="text-white/60">
// //             This should only be used in emergencies. Your vault savings will be transferred to your main wallet.
// //           </DialogDescription>
// //         </DialogHeader>

// //         <div className="space-y-4 py-4">
// //           <div className="p-4 rounded-xl bg-white/5 text-center">
// //             <p className="text-white/50 text-sm mb-1">Amount to Transfer</p>
// //             <p className="text-3xl font-bold">{vaultAmount.toLocaleString()}</p>
// //             <p className="text-white/50 text-sm">coins</p>
// //           </div>

// //           <div className="flex items-start gap-3 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
// //             <AlertTriangle size={18} className="text-yellow-400 shrink-0 mt-0.5" />
// //             <p className="text-sm text-white/70">
// //               Breaking your vault will reset your savings streak. Consider this carefully before proceeding.
// //             </p>
// //           </div>

// //           <label className="flex items-start gap-3 cursor-pointer">
// //             <input
// //               type="checkbox"
// //               checked={confirmed}
// //               onChange={(e) => setConfirmed(e.target.checked)}
// //               className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5"
// //             />
// //             <span className="text-sm text-white/70">
// //               I understand this is for emergencies only and will reset my savings streak.
// //             </span>
// //           </label>
// //         </div>

// //         <div className="flex gap-3">
// //           <Button variant="outline" onClick={onClose} className="flex-1 btn-secondary">
// //             Cancel
// //           </Button>
// //           <Button
// //             onClick={onBreak}
// //             disabled={!confirmed}
// //             className="flex-1 bg-red-500 hover:bg-red-600 text-white"
// //           >
// //             <Unlock size={18} className="mr-2" />
// //             Break Vault
// //           </Button>
// //         </div>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // }

// // export default function Wallet() {
// //   const { user, updateUser } = useAuth();
// //   const [showBreakDialog, setShowBreakDialog] = useState(false);
// //   const [activeTab, setActiveTab] = useState('overview');

// //   const handleBreakVault = () => {
// //     if (user) {
// //       updateUser({
// //         coins: user.coins + user.vaultCoins,
// //         vaultCoins: 0,
// //       });
// //       setShowBreakDialog(false);
// //     }
// //   };

// //   const transactions = [
// //     { type: 'in' as const, title: 'Game Win - Cosmic Runner', amount: 50, date: 'Today, 2:30 PM', fee: 0 },
// //     { type: 'out' as const, title: 'Marketplace Purchase', amount: 200, date: 'Today, 11:15 AM', fee: 0.5 },
// //     { type: 'vault' as const, title: 'Auto Vault Transfer', amount: 25, date: 'Yesterday, 6:00 PM' },
// //     { type: 'in' as const, title: 'Daily Streak Bonus', amount: 30, date: 'Yesterday, 9:00 AM', fee: 0 },
// //     { type: 'out' as const, title: 'Food Order - Green Bowl', amount: 299, date: 'Feb 14, 7:30 PM', fee: 0.75 },
// //     { type: 'in' as const, title: 'Course Completion', amount: 100, date: 'Feb 14, 3:00 PM', fee: 0 },
// //     { type: 'vault' as const, title: 'Weekly Vault Deposit', amount: 150, date: 'Feb 13, 12:00 PM' },
// //   ];

// //   const monthlyStats = {
// //     earned: 2450,
// //     spent: 1800,
// //     saved: 450,
// //     fees: 12.5,
// //   };

// //   return (
// //     <div className="space-y-6 pb-20">
// //       {/* Header */}
// //       <motion.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
// //       >
// //         <div>
// //           <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
// //             <WalletIcon className="text-emerald-400" />
// //             Wallet
// //           </h1>
// //           <p className="text-white/60">Manage your coins and track your wealth</p>
// //         </div>
// //       </motion.div>

// //       {/* Balance Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.1 }}
// //           className="glass-card p-6 relative overflow-hidden"
// //         >
// //           <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
// //           <div className="relative z-10">
// //             <div className="flex items-center gap-3 mb-4">
// //               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
// //                 <WalletIcon size={24} className="text-white" />
// //               </div>
// //               <div>
// //                 <p className="text-white/50 text-sm">Main Wallet</p>
// //                 <p className="text-white/70 text-xs">Spendable Balance</p>
// //               </div>
// //             </div>
// //             <div className="mb-4">
// //               <span className="text-5xl font-bold">{user?.coins?.toLocaleString()}</span>
// //               <span className="text-white/50 ml-2">coins</span>
// //             </div>
// //             <div className="flex gap-2">
// //               <Button size="sm" className="btn-primary">
// //                 <ArrowUpRight size={16} className="mr-1" />
// //                 Send
// //               </Button>
// //               <Button size="sm" variant="outline" className="btn-secondary">
// //                 <ArrowDownLeft size={16} className="mr-1" />
// //                 Receive
// //               </Button>
// //             </div>
// //           </div>
// //         </motion.div>

// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.2 }}
// //           className="glass-card p-6 relative overflow-hidden"
// //         >
// //           <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
// //           <div className="relative z-10">
// //             <div className="flex items-center gap-3 mb-4">
// //               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
// //                 <Shield size={24} className="text-white" />
// //               </div>
// //               <div>
// //                 <p className="text-white/50 text-sm">Emergency Vault</p>
// //                 <p className="text-white/70 text-xs">Protected Savings</p>
// //               </div>
// //             </div>
// //             <div className="mb-4">
// //               <span className="text-5xl font-bold">{user?.vaultCoins?.toLocaleString()}</span>
// //               <span className="text-white/50 ml-2">coins</span>
// //             </div>
// //             <div className="flex gap-2">
// //               <Button
// //                 size="sm"
// //                 variant="outline"
// //                 className="btn-secondary"
// //                 onClick={() => setShowBreakDialog(true)}
// //               >
// //                 <Unlock size={16} className="mr-1" />
// //                 Break Vault
// //               </Button>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>

// //       {/* Monthly Summary */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.3 }}
// //         className="glass-card p-6"
// //       >
// //         <div className="flex items-center justify-between mb-6">
// //           <h3 className="font-bold text-lg flex items-center gap-2">
// //             <Calendar size={20} className="text-blue-400" />
// //             February Summary
// //           </h3>
// //           <span className="text-sm text-white/50">This Month</span>
// //         </div>

// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //           <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
// //             <div className="flex items-center gap-2 mb-2">
// //               <TrendingUp size={16} className="text-green-400" />
// //               <span className="text-white/50 text-sm">Earned</span>
// //             </div>
// //             <p className="text-2xl font-bold text-green-400">+{monthlyStats.earned}</p>
// //           </div>
// //           <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
// //             <div className="flex items-center gap-2 mb-2">
// //               <TrendingDown size={16} className="text-red-400" />
// //               <span className="text-white/50 text-sm">Spent</span>
// //             </div>
// //             <p className="text-2xl font-bold text-red-400">-{monthlyStats.spent}</p>
// //           </div>
// //           <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
// //             <div className="flex items-center gap-2 mb-2">
// //               <Shield size={16} className="text-blue-400" />
// //               <span className="text-white/50 text-sm">Saved</span>
// //             </div>
// //             <p className="text-2xl font-bold text-blue-400">+{monthlyStats.saved}</p>
// //           </div>
// //           <div className="p-4 rounded-xl bg-white/5">
// //             <div className="flex items-center gap-2 mb-2">
// //               <Sparkles size={16} className="text-white/50" />
// //               <span className="text-white/50 text-sm">Fees</span>
// //             </div>
// //             <p className="text-2xl font-bold">{monthlyStats.fees}</p>
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* Main Content */}
// //       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
// //         <TabsList className="glass mb-6">
// //           <TabsTrigger value="overview">Overview</TabsTrigger>
// //           <TabsTrigger value="transactions">Transactions</TabsTrigger>
// //           <TabsTrigger value="referrals">Referrals</TabsTrigger>
// //         </TabsList>

// //         <TabsContent value="overview" className="mt-0 space-y-6">
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <ReferralCard />
            
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               className="glass-card p-6"
// //             >
// //               <div className="flex items-center gap-3 mb-4">
// //                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
// //                   <Gift size={24} className="text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-bold text-lg">Savings Goal</h3>
// //                   <p className="text-white/50 text-sm">Target: 5,000 coins in vault</p>
// //                 </div>
// //               </div>

// //               <div className="mb-4">
// //                 <div className="flex items-center justify-between mb-2">
// //                   <span className="text-white/60">Progress</span>
// //                   <span className="font-bold">{user?.vaultCoins}/5,000</span>
// //                 </div>
// //                 <Progress value={((user?.vaultCoins || 0) / 5000) * 100} className="h-3" />
// //               </div>

// //               <div className="flex items-center justify-between text-sm">
// //                 <span className="text-white/50">
// //                   {Math.round(((user?.vaultCoins || 0) / 5000) * 100)}% complete
// //                 </span>
// //                 <span className="text-amber-400">
// //                   {5000 - (user?.vaultCoins || 0)} more to go!
// //                 </span>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </TabsContent>

// //         <TabsContent value="transactions" className="mt-0">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             className="glass-card p-6"
// //           >
// //             <div className="flex items-center justify-between mb-6">
// //               <h3 className="font-bold text-lg flex items-center gap-2">
// //                 <History size={20} className="text-blue-400" />
// //                 Transaction History
// //               </h3>
// //               <span className="text-xs text-white/40">0.25% fee on all transactions</span>
// //             </div>

// //             <div className="space-y-2">
// //               {transactions.map((tx, i) => (
// //                 <TransactionItem key={i} {...tx} />
// //               ))}
// //             </div>

// //             <Button variant="outline" className="w-full mt-4 btn-secondary">
// //               View All Transactions
// //             </Button>
// //           </motion.div>
// //         </TabsContent>

// //         <TabsContent value="referrals" className="mt-0">
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <ReferralCard />
            
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               className="glass-card p-6"
// //             >
// //               <h3 className="font-bold text-lg mb-4">How It Works</h3>
// //               <div className="space-y-4">
// //                 {[
// //                   { step: 1, title: 'Share Your Link', desc: 'Send your unique referral code to friends' },
// //                   { step: 2, title: 'They Join', desc: 'Your friend signs up using your code' },
// //                   { step: 3, title: 'You Both Earn', desc: 'Get 100 coins, they get 50 bonus' },
// //                 ].map((item) => (
// //                   <div key={item.step} className="flex items-start gap-4">
// //                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-sm font-bold shrink-0">
// //                       {item.step}
// //                     </div>
// //                     <div>
// //                       <h4 className="font-medium">{item.title}</h4>
// //                       <p className="text-white/50 text-sm">{item.desc}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </div>
// //         </TabsContent>
// //       </Tabs>

// //       {/* Break Vault Dialog */}
// //       <BreakVaultDialog
// //         isOpen={showBreakDialog}
// //         onClose={() => setShowBreakDialog(false)}
// //         vaultAmount={user?.vaultCoins || 0}
// //         onBreak={handleBreakVault}
// //       />
// //     </div>
// //   );
// // }




// //=====================================================================================================================================================================================================================




// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Wallet as WalletIcon,
//   Shield,
//   ArrowUpRight,
//   ArrowDownLeft,
//   History,
//   Users,
//   Gift,
//   AlertTriangle,
//   CheckCircle,
//   Copy,
//   Sparkles,
//   TrendingUp,
//   TrendingDown,
//   Calendar,
//   Unlock,
// } from 'lucide-react';
// import { useAuth } from '@/contexts/AuthContext';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Progress } from '@/components/ui/progress';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// // Transaction Item
// function TransactionItem({
//   type,
//   title,
//   amount,
//   date,
//   fee,
// }: {
//   type: 'in' | 'out' | 'vault';
//   title: string;
//   amount: number;
//   date: string;
//   fee?: number;
// }) {
//   const isPositive = type === 'in' || type === 'vault';

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ffffff" fill-opacity="0.01"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
//         type === 'in' ? 'bg-green-500/20' :
//         type === 'out' ? 'bg-red-500/20' :
//         'bg-blue-500/20'
//       }`}>
//         {type === 'in' ? <ArrowDownLeft size={18} className="text-green-400" /> :
//          type === 'out' ? <ArrowUpRight size={18} className="text-red-400" /> :
//          <Shield size={18} className="text-blue-400" />}
//       </div>
//       <div className="flex-1">
//         <h4 className="font-medium">{title}</h4>
//         <div className="flex items-center gap-2 text-sm text-white/50">
//           <span>{date}</span>
//           {fee !== undefined && (
//             <>
//               <span>•</span>
//               <span>Fee: {fee} (0.25%)</span>
//             </>
//           )}
//         </div>
//       </div>
//       <div className={`font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
//         {isPositive ? '+' : '-'}{amount}
//       </div>
//     </motion.div>
//   );
// }

// // Referral Card
// function ReferralCard() {
//   const [copied, setCopied] = useState(false);
//   const referralCode = 'APPVERSE2026';
//   const referralLink = `https://appverse.com/ref/${referralCode}`;

//   const handleCopy = () => {
//     navigator.clipboard.writeText(referralLink);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="glass-card p-6 relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="2" fill="%23a855f7" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
//       <div className="relative z-10">
//         <div className="flex items-center gap-3 mb-4">
//           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
//             <Users size={24} className="text-white" />
//           </div>
//           <div>
//             <h3 className="font-bold text-lg">Refer & Earn</h3>
//             <p className="text-white/50 text-sm">Get 100 coins per friend</p>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <div className="p-4 rounded-xl bg-white/5">
//             <p className="text-white/50 text-sm mb-2">Your Referral Code</p>
//             <div className="flex items-center gap-2">
//               <code className="flex-1 px-3 py-2 rounded-lg bg-black/30 font-mono text-lg">
//                 {referralCode}
//               </code>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={handleCopy}
//                 className="shrink-0"
//               >
//                 {copied ? <CheckCircle size={18} className="text-green-400" /> : <Copy size={18} />}
//               </Button>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-4 text-center">
//             <div className="p-3 rounded-xl bg-white/5">
//               <p className="text-2xl font-bold">12</p>
//               <p className="text-xs text-white/50">Invited</p>
//             </div>
//             <div className="p-3 rounded-xl bg-white/5">
//               <p className="text-2xl font-bold">8</p>
//               <p className="text-xs text-white/50">Joined</p>
//             </div>
//             <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30">
//               <p className="text-2xl font-bold text-green-400">800</p>
//               <p className="text-xs text-white/50">Earned</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // Break Vault Dialog
// function BreakVaultDialog({
//   isOpen,
//   onClose,
//   vaultAmount,
//   onBreak,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   vaultAmount: number;
//   onBreak: () => void;
// }) {
//   const [confirmed, setConfirmed] = useState(false);

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="glass-card border-white/10 max-w-md">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-2">
//             <AlertTriangle size={24} className="text-red-400" />
//             Break Emergency Vault
//           </DialogTitle>
//           <DialogDescription className="text-white/60">
//             This should only be used in emergencies. Your vault savings will be transferred to your main wallet.
//           </DialogDescription>
//         </DialogHeader>

//         <div className="space-y-4 py-4">
//           <div className="p-4 rounded-xl bg-white/5 text-center">
//             <p className="text-white/50 text-sm mb-1">Amount to Transfer</p>
//             <p className="text-3xl font-bold">{vaultAmount.toLocaleString()}</p>
//             <p className="text-white/50 text-sm">coins</p>
//           </div>

//           <div className="flex items-start gap-3 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
//             <AlertTriangle size={18} className="text-yellow-400 shrink-0 mt-0.5" />
//             <p className="text-sm text-white/70">
//               Breaking your vault will reset your savings streak. Consider this carefully before proceeding.
//             </p>
//           </div>

//           <label className="flex items-start gap-3 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={confirmed}
//               onChange={(e) => setConfirmed(e.target.checked)}
//               className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5"
//             />
//             <span className="text-sm text-white/70">
//               I understand this is for emergencies only and will reset my savings streak.
//             </span>
//           </label>
//         </div>

//         <div className="flex gap-3">
//           <Button variant="outline" onClick={onClose} className="flex-1 btn-secondary">
//             Cancel
//           </Button>
//           <Button
//             onClick={onBreak}
//             disabled={!confirmed}
//             className="flex-1 bg-red-500 hover:bg-red-600 text-white"
//           >
//             <Unlock size={18} className="mr-2" />
//             Break Vault
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default function Wallet() {
//   const { user, updateUser } = useAuth();
//   const [showBreakDialog, setShowBreakDialog] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');

//   const handleBreakVault = () => {
//     if (user) {
//       updateUser({
//         coins: user.coins + user.vaultCoins,
//         vaultCoins: 0,
//       });
//       setShowBreakDialog(false);
//     }
//   };

//   const transactions = [
//     { type: 'in' as const, title: 'Game Win - Cosmic Runner', amount: 50, date: 'Today, 2:30 PM', fee: 0 },
//     { type: 'out' as const, title: 'Marketplace Purchase', amount: 200, date: 'Today, 11:15 AM', fee: 0.5 },
//     { type: 'vault' as const, title: 'Auto Vault Transfer', amount: 25, date: 'Yesterday, 6:00 PM' },
//     { type: 'in' as const, title: 'Daily Streak Bonus', amount: 30, date: 'Yesterday, 9:00 AM', fee: 0 },
//     { type: 'out' as const, title: 'Food Order - Green Bowl', amount: 299, date: 'Feb 14, 7:30 PM', fee: 0.75 },
//     { type: 'in' as const, title: 'Course Completion', amount: 100, date: 'Feb 14, 3:00 PM', fee: 0 },
//     { type: 'vault' as const, title: 'Weekly Vault Deposit', amount: 150, date: 'Feb 13, 12:00 PM' },
//   ];

//   const monthlyStats = {
//     earned: 2450,
//     spent: 1800,
//     saved: 450,
//     fees: 12.5,
//   };

//   return (
//     <div className="space-y-6 pb-20 relative">
//       {/* Background Pattern */}
//       <div 
//         className="fixed inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%2310b981" fill-opacity="0.02"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       />

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10"
//       >
//         <div>
//           <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
//             <WalletIcon className="text-emerald-400" />
//             Wallet
//           </h1>
//           <p className="text-white/60">Manage your coins and track your wealth</p>
//         </div>
//       </motion.div>

//       {/* Balance Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="glass-card p-6 relative overflow-hidden"
//           style={{
//             backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="2" fill="%233b82f6" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//             backgroundRepeat: 'repeat',
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
//           <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
//           <div className="relative z-10">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
//                 <WalletIcon size={24} className="text-white" />
//               </div>
//               <div>
//                 <p className="text-white/50 text-sm">Main Wallet</p>
//                 <p className="text-white/70 text-xs">Spendable Balance</p>
//               </div>
//             </div>
//             <div className="mb-4">
//               <span className="text-5xl font-bold">{user?.coins?.toLocaleString()}</span>
//               <span className="text-white/50 ml-2">coins</span>
//             </div>
//             <div className="flex gap-2">
//               <Button size="sm" className="btn-primary">
//                 <ArrowUpRight size={16} className="mr-1" />
//                 Send
//               </Button>
//               <Button size="sm" variant="outline" className="btn-secondary">
//                 <ArrowDownLeft size={16} className="mr-1" />
//                 Receive
//               </Button>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="glass-card p-6 relative overflow-hidden"
//           style={{
//             backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="2" fill="%2310b981" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//             backgroundRepeat: 'repeat',
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
//           <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
//           <div className="relative z-10">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
//                 <Shield size={24} className="text-white" />
//               </div>
//               <div>
//                 <p className="text-white/50 text-sm">Emergency Vault</p>
//                 <p className="text-white/70 text-xs">Protected Savings</p>
//               </div>
//             </div>
//             <div className="mb-4">
//               <span className="text-5xl font-bold">{user?.vaultCoins?.toLocaleString()}</span>
//               <span className="text-white/50 ml-2">coins</span>
//             </div>
//             <div className="flex gap-2">
//               <Button
//                 size="sm"
//                 variant="outline"
//                 className="btn-secondary"
//                 onClick={() => setShowBreakDialog(true)}
//               >
//                 <Unlock size={16} className="mr-1" />
//                 Break Vault
//               </Button>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Monthly Summary */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="glass-card p-6 relative overflow-hidden"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%233b82f6" fill-opacity="0.02"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
//         <div className="relative z-10">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="font-bold text-lg flex items-center gap-2">
//               <Calendar size={20} className="text-blue-400" />
//               February Summary
//             </h3>
//             <span className="text-sm text-white/50">This Month</span>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
//               <div className="flex items-center gap-2 mb-2">
//                 <TrendingUp size={16} className="text-green-400" />
//                 <span className="text-white/50 text-sm">Earned</span>
//               </div>
//               <p className="text-2xl font-bold text-green-400">+{monthlyStats.earned}</p>
//             </div>
//             <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
//               <div className="flex items-center gap-2 mb-2">
//                 <TrendingDown size={16} className="text-red-400" />
//                 <span className="text-white/50 text-sm">Spent</span>
//               </div>
//               <p className="text-2xl font-bold text-red-400">-{monthlyStats.spent}</p>
//             </div>
//             <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
//               <div className="flex items-center gap-2 mb-2">
//                 <Shield size={16} className="text-blue-400" />
//                 <span className="text-white/50 text-sm">Saved</span>
//               </div>
//               <p className="text-2xl font-bold text-blue-400">+{monthlyStats.saved}</p>
//             </div>
//             <div className="p-4 rounded-xl bg-white/5">
//               <div className="flex items-center gap-2 mb-2">
//                 <Sparkles size={16} className="text-white/50" />
//                 <span className="text-white/50 text-sm">Fees</span>
//               </div>
//               <p className="text-2xl font-bold">{monthlyStats.fees}</p>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Content */}
//       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//         <TabsList className="glass mb-6">
//           <TabsTrigger value="overview">Overview</TabsTrigger>
//           <TabsTrigger value="transactions">Transactions</TabsTrigger>
//           <TabsTrigger value="referrals">Referrals</TabsTrigger>
//         </TabsList>

//         <TabsContent value="overview" className="mt-0 space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <ReferralCard />
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="glass-card p-6 relative overflow-hidden"
//               style={{
//                 backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23f59e0b" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//                 backgroundRepeat: 'repeat',
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
//               <div className="relative z-10">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
//                     <Gift size={24} className="text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">Savings Goal</h3>
//                     <p className="text-white/50 text-sm">Target: 5,000 coins in vault</p>
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-white/60">Progress</span>
//                     <span className="font-bold">{user?.vaultCoins}/5,000</span>
//                   </div>
//                   <Progress value={((user?.vaultCoins || 0) / 5000) * 100} className="h-3" />
//                 </div>

//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-white/50">
//                     {Math.round(((user?.vaultCoins || 0) / 5000) * 100)}% complete
//                   </span>
//                   <span className="text-amber-400">
//                     {5000 - (user?.vaultCoins || 0)} more to go!
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </TabsContent>

//         <TabsContent value="transactions" className="mt-0">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="glass-card p-6 relative overflow-hidden"
//             style={{
//               backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ffffff" fill-opacity="0.01"/%3E%3C/svg%3E')`,
//               backgroundRepeat: 'repeat',
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
//             <div className="relative z-10">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="font-bold text-lg flex items-center gap-2">
//                   <History size={20} className="text-blue-400" />
//                   Transaction History
//                 </h3>
//                 <span className="text-xs text-white/40">0.25% fee on all transactions</span>
//               </div>

//               <div className="space-y-2">
//                 {transactions.map((tx, i) => (
//                   <TransactionItem key={i} {...tx} />
//                 ))}
//               </div>

//               <Button variant="outline" className="w-full mt-4 btn-secondary">
//                 View All Transactions
//               </Button>
//             </div>
//           </motion.div>
//         </TabsContent>

//         <TabsContent value="referrals" className="mt-0">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <ReferralCard />
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="glass-card p-6 relative overflow-hidden"
//               style={{
//                 backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23a855f7" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//                 backgroundRepeat: 'repeat',
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
//               <div className="relative z-10">
//                 <h3 className="font-bold text-lg mb-4">How It Works</h3>
//                 <div className="space-y-4">
//                   {[
//                     { step: 1, title: 'Share Your Link', desc: 'Send your unique referral code to friends' },
//                     { step: 2, title: 'They Join', desc: 'Your friend signs up using your code' },
//                     { step: 3, title: 'You Both Earn', desc: 'Get 100 coins, they get 50 bonus' },
//                   ].map((item) => (
//                     <div key={item.step} className="flex items-start gap-4">
//                       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-sm font-bold shrink-0">
//                         {item.step}
//                       </div>
//                       <div>
//                         <h4 className="font-medium">{item.title}</h4>
//                         <p className="text-white/50 text-sm">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </TabsContent>
//       </Tabs>

//       {/* Break Vault Dialog */}
//       <BreakVaultDialog
//         isOpen={showBreakDialog}
//         onClose={() => setShowBreakDialog(false)}
//         vaultAmount={user?.vaultCoins || 0}
//         onBreak={handleBreakVault}
//       />
//     </div>
//   );
// }


//==========================================================================================================================================================================================================================================================




import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wallet as WalletIcon,
  Shield,
  ArrowUpRight,
  ArrowDownLeft,
  History,
  Users,
  Gift,
  AlertTriangle,
  CheckCircle,
  Copy,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Calendar,
  Unlock,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Transaction Item
function TransactionItem({
  type,
  title,
  amount,
  date,
  fee,
}: {
  type: 'in' | 'out' | 'vault';
  title: string;
  amount: number;
  date: string;
  fee?: number;
}) {
  const isPositive = type === 'in' || type === 'vault';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors relative overflow-hidden"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ffffff" fill-opacity="0.01"/%3E%3C/svg%3E')`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
        type === 'in' ? 'bg-green-500/20' :
        type === 'out' ? 'bg-red-500/20' :
        'bg-blue-500/20'
      }`}>
        {type === 'in' ? <ArrowDownLeft size={18} className="text-green-400" /> :
         type === 'out' ? <ArrowUpRight size={18} className="text-red-400" /> :
         <Shield size={18} className="text-blue-400" />}
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <div className="flex items-center gap-2 text-sm text-white/50">
          <span>{date}</span>
          {fee !== undefined && (
            <>
              <span>•</span>
              <span>Fee: {fee} (0.25%)</span>
            </>
          )}
        </div>
      </div>
      <div className={`font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? '+' : '-'}{amount}
      </div>
    </motion.div>
  );
}

// Referral Card
function ReferralCard() {
  const [copied, setCopied] = useState(false);
  const referralCode = 'APPVERSE2026';
  const referralLink = `https://appverse.com/ref/${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="2" fill="%23a855f7" fill-opacity="0.03"/%3E%3C/svg%3E')`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
            <Users size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Refer & Earn</h3>
            <p className="text-white/50 text-sm">Get 100 coins per friend</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/50 text-sm mb-2">Your Referral Code</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 px-3 py-2 rounded-lg bg-black/30 font-mono text-lg">
                {referralCode}
              </code>
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopy}
                className="shrink-0"
              >
                {copied ? <CheckCircle size={18} className="text-green-400" /> : <Copy size={18} />}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-xl bg-white/5">
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-white/50">Invited</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <p className="text-2xl font-bold">8</p>
              <p className="text-xs text-white/50">Joined</p>
            </div>
            <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30">
              <p className="text-2xl font-bold text-green-400">800</p>
              <p className="text-xs text-white/50">Earned</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Break Vault Dialog
function BreakVaultDialog({
  isOpen,
  onClose,
  vaultAmount,
  onBreak,
}: {
  isOpen: boolean;
  onClose: () => void;
  vaultAmount: number;
  onBreak: () => void;
}) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-white/10 max-w-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent" />
        <div className="relative z-10">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle size={24} className="text-red-400" />
              Break Emergency Vault
            </DialogTitle>
            <DialogDescription className="text-white/60">
              This should only be used in emergencies. Your vault savings will be transferred to your main wallet.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="p-4 rounded-xl bg-white/5 text-center">
              <p className="text-white/50 text-sm mb-1">Amount to Transfer</p>
              <p className="text-3xl font-bold">{vaultAmount.toLocaleString()}</p>
              <p className="text-white/50 text-sm">coins</p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
              <AlertTriangle size={18} className="text-yellow-400 shrink-0 mt-0.5" />
              <p className="text-sm text-white/70">
                Breaking your vault will reset your savings streak. Consider this carefully before proceeding.
              </p>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5"
              />
              <span className="text-sm text-white/70">
                I understand this is for emergencies only and will reset my savings streak.
              </span>
            </label>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1 btn-secondary">
              Cancel
            </Button>
            <Button
              onClick={onBreak}
              disabled={!confirmed}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white"
            >
              <Unlock size={18} className="mr-2" />
              Break Vault
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Wallet() {
  const { user, updateUser } = useAuth();
  const [showBreakDialog, setShowBreakDialog] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const handleBreakVault = () => {
    if (user) {
      updateUser({
        coins: user.coins + user.vaultCoins,
        vaultCoins: 0,
      });
      setShowBreakDialog(false);
    }
  };

  const transactions = [
    { type: 'in' as const, title: 'Game Win - Cosmic Runner', amount: 50, date: 'Today, 2:30 PM', fee: 0 },
    { type: 'out' as const, title: 'Marketplace Purchase', amount: 200, date: 'Today, 11:15 AM', fee: 0.5 },
    { type: 'vault' as const, title: 'Auto Vault Transfer', amount: 25, date: 'Yesterday, 6:00 PM' },
    { type: 'in' as const, title: 'Daily Streak Bonus', amount: 30, date: 'Yesterday, 9:00 AM', fee: 0 },
    { type: 'out' as const, title: 'Food Order - Green Bowl', amount: 299, date: 'Feb 14, 7:30 PM', fee: 0.75 },
    { type: 'in' as const, title: 'Course Completion', amount: 100, date: 'Feb 14, 3:00 PM', fee: 0 },
    { type: 'vault' as const, title: 'Weekly Vault Deposit', amount: 150, date: 'Feb 13, 12:00 PM' },
  ];

  const monthlyStats = {
    earned: 2450,
    spent: 1800,
    saved: 450,
    fees: 12.5,
  };

  return (
    <div className="space-y-6 pb-20 relative">
      {/* Background Pattern - Emerald/Green Financial Theme */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%2310b981" fill-opacity="0.02"/%3E%3C/svg%3E')`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Animated Background Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
            <WalletIcon className="text-emerald-400" />
            Wallet
          </h1>
          <p className="text-white/60">Manage your coins and track your wealth</p>
        </div>
      </motion.div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 relative overflow-hidden"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="2" fill="%233b82f6" fill-opacity="0.03"/%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <WalletIcon size={24} className="text-white" />
              </div>
              <div>
                <p className="text-white/50 text-sm">Main Wallet</p>
                <p className="text-white/70 text-xs">Spendable Balance</p>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-5xl font-bold">{user?.coins?.toLocaleString()}</span>
              <span className="text-white/50 ml-2">coins</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="btn-primary">
                <ArrowUpRight size={16} className="mr-1" />
                Send
              </Button>
              <Button size="sm" variant="outline" className="btn-secondary">
                <ArrowDownLeft size={16} className="mr-1" />
                Receive
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 relative overflow-hidden"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="2" fill="%2310b981" fill-opacity="0.03"/%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
              <div>
                <p className="text-white/50 text-sm">Emergency Vault</p>
                <p className="text-white/70 text-xs">Protected Savings</p>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-5xl font-bold">{user?.vaultCoins?.toLocaleString()}</span>
              <span className="text-white/50 ml-2">coins</span>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="btn-secondary"
                onClick={() => setShowBreakDialog(true)}
              >
                <Unlock size={16} className="mr-1" />
                Break Vault
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Monthly Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%233b82f6" fill-opacity="0.02"/%3E%3C/svg%3E')`,
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Calendar size={20} className="text-blue-400" />
              February Summary
            </h3>
            <span className="text-sm text-white/50">This Month</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-green-400" />
                <span className="text-white/50 text-sm">Earned</span>
              </div>
              <p className="text-2xl font-bold text-green-400">+{monthlyStats.earned}</p>
            </div>
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown size={16} className="text-red-400" />
                <span className="text-white/50 text-sm">Spent</span>
              </div>
              <p className="text-2xl font-bold text-red-400">-{monthlyStats.spent}</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={16} className="text-blue-400" />
                <span className="text-white/50 text-sm">Saved</span>
              </div>
              <p className="text-2xl font-bold text-blue-400">+{monthlyStats.saved}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-white/50" />
                <span className="text-white/50 text-sm">Fees</span>
              </div>
              <p className="text-2xl font-bold">{monthlyStats.fees}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="glass mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReferralCard />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 relative overflow-hidden"
              style={{
                backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23f59e0b" fill-opacity="0.03"/%3E%3C/svg%3E')`,
                backgroundRepeat: 'repeat',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <Gift size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Savings Goal</h3>
                    <p className="text-white/50 text-sm">Target: 5,000 coins in vault</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60">Progress</span>
                    <span className="font-bold">{user?.vaultCoins}/5,000</span>
                  </div>
                  <Progress value={((user?.vaultCoins || 0) / 5000) * 100} className="h-3" />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">
                    {Math.round(((user?.vaultCoins || 0) / 5000) * 100)}% complete
                  </span>
                  <span className="text-amber-400">
                    {5000 - (user?.vaultCoins || 0)} more to go!
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 relative overflow-hidden"
            style={{
              backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ffffff" fill-opacity="0.01"/%3E%3C/svg%3E')`,
              backgroundRepeat: 'repeat',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <History size={20} className="text-blue-400" />
                  Transaction History
                </h3>
                <span className="text-xs text-white/40">0.25% fee on all transactions</span>
              </div>

              <div className="space-y-2">
                {transactions.map((tx, i) => (
                  <TransactionItem key={i} {...tx} />
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4 btn-secondary">
                View All Transactions
              </Button>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="referrals" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReferralCard />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 relative overflow-hidden"
              style={{
                backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23a855f7" fill-opacity="0.03"/%3E%3C/svg%3E')`,
                backgroundRepeat: 'repeat',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-4">How It Works</h3>
                <div className="space-y-4">
                  {[
                    { step: 1, title: 'Share Your Link', desc: 'Send your unique referral code to friends' },
                    { step: 2, title: 'They Join', desc: 'Your friend signs up using your code' },
                    { step: 3, title: 'You Both Earn', desc: 'Get 100 coins, they get 50 bonus' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-sm font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Break Vault Dialog */}
      <BreakVaultDialog
        isOpen={showBreakDialog}
        onClose={() => setShowBreakDialog(false)}
        vaultAmount={user?.vaultCoins || 0}
        onBreak={handleBreakVault}
      />
    </div>
  );
}