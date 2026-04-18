// // import { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import {
// //   Crown,
// //   Check,
// //   X,
// //   Zap,
// //   Shield,
// //   Gamepad2,
// //   GraduationCap,
// //   Play,
// //   ShoppingBag,
// //   Calculator,
// //   ArrowRight,
// // } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { Slider } from '@/components/ui/slider';
// // import { Switch } from '@/components/ui/switch';
// // import { useAuth } from '@/contexts/AuthContext';

// // // Feature Comparison Row
// // function FeatureRow({
// //   feature,
// //   free,
// //   premium,
// // }: {
// //   feature: string;
// //   free: boolean | string;
// //   premium: boolean | string;
// // }) {
// //   return (
// //     <div className="grid grid-cols-3 gap-4 py-3 border-b border-white/10 last:border-0">
// //       <span className="text-white/80">{feature}</span>
// //       <div className="flex justify-center">
// //         {typeof free === 'boolean' ? (
// //           free ? (
// //             <Check size={20} className="text-green-400" />
// //           ) : (
// //             <X size={20} className="text-red-400" />
// //           )
// //         ) : (
// //           <span className="text-white/60">{free}</span>
// //         )}
// //       </div>
// //       <div className="flex justify-center">
// //         {typeof premium === 'boolean' ? (
// //           premium ? (
// //             <Check size={20} className="text-green-400" />
// //           ) : (
// //             <X size={20} className="text-red-400" />
// //           )
// //         ) : (
// //           <span className="text-amber-400 font-medium">{premium}</span>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // // Perk Card
// // function PerkCard({
// //   icon: Icon,
// //   title,
// //   description,
// //   module,
// // }: {
// //   icon: React.ElementType;
// //   title: string;
// //   description: string;
// //   module: string;
// // }) {
// //   const moduleColors: Record<string, string> = {
// //     games: 'from-purple-500 to-violet-500',
// //     learning: 'from-blue-500 to-cyan-500',
// //     entertainment: 'from-red-500 to-pink-500',
// //     marketplace: 'from-pink-500 to-rose-500',
// //     all: 'from-amber-400 to-orange-500',
// //   };

// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.02 }}
// //       className="glass-card p-5"
// //     >
// //       <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${moduleColors[module]} flex items-center justify-center mb-4`}>
// //         <Icon size={24} className="text-white" />
// //       </div>
// //       <h4 className="font-bold mb-2">{title}</h4>
// //       <p className="text-white/60 text-sm">{description}</p>
// //     </motion.div>
// //   );
// // }

// // // Profit Calculator
// // function ProfitCalculator() {
// //   const [monthlySpend, setMonthlySpend] = useState(1000);
// //   const [isPremium, setIsPremium] = useState(false);

// //   const freeRate = 0.02;
// //   const premiumRate = 0.04;
// //   const feeRate = 0.0025;

// //   const monthlyEarnings = monthlySpend * (isPremium ? premiumRate : freeRate);
// //   const monthlyFees = monthlySpend * feeRate;
// //   const netEarnings = monthlyEarnings - monthlyFees;
// //   const yearlySavings = netEarnings * 12;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="glass-card p-6"
// //     >
// //       <div className="flex items-center gap-3 mb-6">
// //         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
// //           <Calculator size={24} className="text-white" />
// //         </div>
// //         <div>
// //           <h3 className="font-bold text-lg">Profit Calculator</h3>
// //           <p className="text-white/50 text-sm">See how much you could earn</p>
// //         </div>
// //       </div>

// //       <div className="space-y-6">
// //         <div>
// //           <div className="flex items-center justify-between mb-2">
// //             <span className="text-sm text-white/60">Monthly Activity</span>
// //             <span className="font-bold">{monthlySpend.toLocaleString()} coins</span>
// //           </div>
// //           <Slider
// //             value={[monthlySpend]}
// //             onValueChange={(value) => setMonthlySpend(value[0])}
// //             max={5000}
// //             min={100}
// //             step={100}
// //           />
// //         </div>

// //         <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
// //           <div className="flex items-center gap-3">
// //             <Crown size={20} className="text-amber-400" />
// //             <span className="font-medium">Premium Membership</span>
// //           </div>
// //           <Switch
// //             checked={isPremium}
// //             onCheckedChange={setIsPremium}
// //           />
// //         </div>

// //         <div className="grid grid-cols-2 gap-4">
// //           <div className="p-4 rounded-xl bg-white/5">
// //             <p className="text-white/50 text-sm mb-1">Monthly Earnings</p>
// //             <p className={`text-2xl font-bold ${isPremium ? 'text-amber-400' : ''}`}>
// //               +{Math.round(monthlyEarnings).toLocaleString()}
// //             </p>
// //             <p className="text-xs text-white/40">
// //               {isPremium ? '4% rate' : '2% rate'}
// //             </p>
// //           </div>
// //           <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
// //             <p className="text-green-400 text-sm mb-1">Yearly Savings</p>
// //             <p className="text-2xl font-bold text-green-400">
// //               {Math.round(yearlySavings).toLocaleString()}
// //             </p>
// //             <p className="text-xs text-white/40">
// //               After 0.25% fees
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // export default function Premium() {
// //   const { user } = useAuth();
// //   const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

// //   const features = [
// //     { feature: 'Base Earning Rate', free: '2%', premium: '4%' },
// //     { feature: 'Ad-Free Entertainment', free: false, premium: true },
// //     { feature: 'Offline Downloads', free: false, premium: true },
// //     { feature: 'Watch Parties', free: false, premium: true },
// //     { feature: 'Exclusive Games', free: false, premium: true },
// //     { feature: 'Premium Courses', free: false, premium: true },
// //     { feature: 'Higher Cashback', free: 'Up to 8%', premium: 'Up to 15%' },
// //     { feature: 'Priority Support', free: false, premium: true },
// //     { feature: 'Custom Avatar', free: false, premium: true },
// //     { feature: 'Badge on Profile', free: false, premium: true },
// //   ];

// //   const perks = [
// //     {
// //       icon: Gamepad2,
// //       title: '2x Game Earnings',
// //       description: 'Earn double coins from every game you play',
// //       module: 'games',
// //     },
// //     {
// //       icon: GraduationCap,
// //       title: 'Premium Courses',
// //       description: 'Access exclusive advanced courses and certifications',
// //       module: 'learning',
// //     },
// //     {
// //       icon: Play,
// //       title: 'Ad-Free + Offline',
// //       description: 'Watch without ads and download for offline viewing',
// //       module: 'entertainment',
// //     },
// //     {
// //       icon: ShoppingBag,
// //       title: 'Higher Cashback',
// //       description: 'Get up to 15% cashback on marketplace purchases',
// //       module: 'marketplace',
// //     },
// //     {
// //       icon: Zap,
// //       title: 'Priority Processing',
// //       description: 'Faster withdrawals and transaction processing',
// //       module: 'all',
// //     },
// //     {
// //       icon: Shield,
// //       title: 'Streak Protection',
// //       description: 'Never lose your streak, even if you miss a day',
// //       module: 'all',
// //     },
// //   ];

// //   const monthlyPrice = 499;
// //   const yearlyPrice = 4999;
// //   const savings = Math.round((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12) * 100);

// //   return (
// //     <div className="space-y-6 pb-20">
// //       {/* Header */}
// //       <motion.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="text-center py-8"
// //       >
// //         <motion.div
// //           initial={{ scale: 0 }}
// //           animate={{ scale: 1 }}
// //           transition={{ type: 'spring', stiffness: 200 }}
// //           className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6"
// //         >
// //           <Crown size={40} className="text-white" />
// //         </motion.div>
// //         <h1 className="text-4xl font-bold mb-3">Upgrade to Premium</h1>
// //         <p className="text-white/60 max-w-xl mx-auto">
// //           Unlock the full AppVerse experience with 2x earnings, exclusive content, and premium perks
// //         </p>
// //       </motion.div>

// //       {/* Pricing Cards */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.1 }}
// //         className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
// //       >
// //         <div
// //           onClick={() => setBillingCycle('monthly')}
// //           className={`glass-card p-6 cursor-pointer transition-all ${
// //             billingCycle === 'monthly' ? 'ring-2 ring-amber-400' : ''
// //           }`}
// //         >
// //           <div className="flex items-center justify-between mb-4">
// //             <h3 className="font-bold text-xl">Monthly</h3>
// //             <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
// //               billingCycle === 'monthly' ? 'border-amber-400 bg-amber-400' : 'border-white/30'
// //             }`}>
// //               {billingCycle === 'monthly' && <Check size={14} className="text-black" />}
// //             </div>
// //           </div>
// //           <div className="mb-4">
// //             <span className="text-4xl font-bold">{monthlyPrice}</span>
// //             <span className="text-white/50"> coins/month</span>
// //           </div>
// //           <p className="text-white/50 text-sm">Flexible, cancel anytime</p>
// //         </div>

// //         <div
// //           onClick={() => setBillingCycle('yearly')}
// //           className={`glass-card p-6 cursor-pointer transition-all relative ${
// //             billingCycle === 'yearly' ? 'ring-2 ring-amber-400' : ''
// //           }`}
// //         >
// //           <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium">
// //             Save {savings}%
// //           </div>
// //           <div className="flex items-center justify-between mb-4">
// //             <h3 className="font-bold text-xl">Yearly</h3>
// //             <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
// //               billingCycle === 'yearly' ? 'border-amber-400 bg-amber-400' : 'border-white/30'
// //             }`}>
// //               {billingCycle === 'yearly' && <Check size={14} className="text-black" />}
// //             </div>
// //           </div>
// //           <div className="mb-4">
// //             <span className="text-4xl font-bold">{yearlyPrice}</span>
// //             <span className="text-white/50"> coins/year</span>
// //           </div>
// //           <p className="text-white/50 text-sm">Best value, billed annually</p>
// //         </div>
// //       </motion.div>

// //       {/* CTA Button */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.2 }}
// //         className="text-center"
// //       >
// //         <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white text-lg px-12 py-6">
// //           <Crown size={24} className="mr-3" />
// //           Upgrade Now
// //           <ArrowRight size={20} className="ml-3" />
// //         </Button>
// //         <p className="text-white/40 text-sm mt-3">
// //           You have {user?.coins?.toLocaleString() || 0} coins available
// //         </p>
// //       </motion.div>

// //       {/* Feature Comparison */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.3 }}
// //         className="glass-card p-6"
// //       >
// //         <h3 className="font-bold text-xl mb-6 text-center">Compare Plans</h3>
// //         <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/20 font-medium">
// //           <span>Feature</span>
// //           <span className="text-center">Free</span>
// //           <span className="text-center text-amber-400">Premium</span>
// //         </div>
// //         {features.map((feature, i) => (
// //           <FeatureRow key={i} {...feature} />
// //         ))}
// //       </motion.div>

// //       {/* Perks Grid */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.4 }}
// //       >
// //         <h3 className="font-bold text-xl mb-4 text-center">Premium Perks</h3>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //           {perks.map((perk, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.4 + i * 0.1 }}
// //             >
// //               <PerkCard {...perk} />
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>

// //       {/* Profit Calculator */}
// //       <ProfitCalculator />
// //     </div>
// //   );
// // }




// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Crown,
//   Check,
//   X,
//   Zap,
//   Shield,
//   Gamepad2,
//   GraduationCap,
//   Play,
//   ShoppingBag,
//   Calculator,
//   ArrowRight,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Slider } from '@/components/ui/slider';
// import { Switch } from '@/components/ui/switch';
// import { useAuth } from '@/contexts/AuthContext';

// // Feature Comparison Row
// function FeatureRow({
//   feature,
//   free,
//   premium,
// }: {
//   feature: string;
//   free: boolean | string;
//   premium: boolean | string;
// }) {
//   return (
//     <div className="grid grid-cols-3 gap-4 py-3 border-b border-white/10 last:border-0">
//       <span className="text-white/80">{feature}</span>
//       <div className="flex justify-center">
//         {typeof free === 'boolean' ? (
//           free ? (
//             <Check size={20} className="text-green-400" />
//           ) : (
//             <X size={20} className="text-red-400" />
//           )
//         ) : (
//           <span className="text-white/60">{free}</span>
//         )}
//       </div>
//       <div className="flex justify-center">
//         {typeof premium === 'boolean' ? (
//           premium ? (
//             <Check size={20} className="text-green-400" />
//           ) : (
//             <X size={20} className="text-red-400" />
//           )
//         ) : (
//           <span className="text-amber-400 font-medium">{premium}</span>
//         )}
//       </div>
//     </div>
//   );
// }

// // Perk Card
// function PerkCard({
//   icon: Icon,
//   title,
//   description,
//   module,
// }: {
//   icon: React.ElementType;
//   title: string;
//   description: string;
//   module: string;
// }) {
//   const moduleColors: Record<string, string> = {
//     games: 'from-purple-500 to-violet-500',
//     learning: 'from-blue-500 to-cyan-500',
//     entertainment: 'from-red-500 to-pink-500',
//     marketplace: 'from-pink-500 to-rose-500',
//     all: 'from-amber-400 to-orange-500',
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="glass-card p-5 relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23fbbf24" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
//       <div className="relative z-10">
//         <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${moduleColors[module]} flex items-center justify-center mb-4`}>
//           <Icon size={24} className="text-white" />
//         </div>
//         <h4 className="font-bold mb-2">{title}</h4>
//         <p className="text-white/60 text-sm">{description}</p>
//       </div>
//     </motion.div>
//   );
// }

// // Profit Calculator
// function ProfitCalculator() {
//   const [monthlySpend, setMonthlySpend] = useState(1000);
//   const [isPremium, setIsPremium] = useState(false);

//   const freeRate = 0.02;
//   const premiumRate = 0.04;
//   const feeRate = 0.0025;

//   const monthlyEarnings = monthlySpend * (isPremium ? premiumRate : freeRate);
//   const monthlyFees = monthlySpend * feeRate;
//   const netEarnings = monthlyEarnings - monthlyFees;
//   const yearlySavings = netEarnings * 12;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="glass-card p-6 relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%2310b981" fill-opacity="0.05"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
//       <div className="relative z-10">
//         <div className="flex items-center gap-3 mb-6">
//           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
//             <Calculator size={24} className="text-white" />
//           </div>
//           <div>
//             <h3 className="font-bold text-lg">Profit Calculator</h3>
//             <p className="text-white/50 text-sm">See how much you could earn</p>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm text-white/60">Monthly Activity</span>
//               <span className="font-bold">{monthlySpend.toLocaleString()} coins</span>
//             </div>
//             <Slider
//               value={[monthlySpend]}
//               onValueChange={(value) => setMonthlySpend(value[0])}
//               max={5000}
//               min={100}
//               step={100}
//             />
//           </div>

//           <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
//             <div className="flex items-center gap-3">
//               <Crown size={20} className="text-amber-400" />
//               <span className="font-medium">Premium Membership</span>
//             </div>
//             <Switch
//               checked={isPremium}
//               onCheckedChange={setIsPremium}
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="p-4 rounded-xl bg-white/5">
//               <p className="text-white/50 text-sm mb-1">Monthly Earnings</p>
//               <p className={`text-2xl font-bold ${isPremium ? 'text-amber-400' : ''}`}>
//                 +{Math.round(monthlyEarnings).toLocaleString()}
//               </p>
//               <p className="text-xs text-white/40">
//                 {isPremium ? '4% rate' : '2% rate'}
//               </p>
//             </div>
//             <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
//               <p className="text-green-400 text-sm mb-1">Yearly Savings</p>
//               <p className="text-2xl font-bold text-green-400">
//                 {Math.round(yearlySavings).toLocaleString()}
//               </p>
//               <p className="text-xs text-white/40">
//                 After 0.25% fees
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function Premium() {
//   const { user } = useAuth();
//   const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

//   const features = [
//     { feature: 'Base Earning Rate', free: '2%', premium: '4%' },
//     { feature: 'Ad-Free Entertainment', free: false, premium: true },
//     { feature: 'Offline Downloads', free: false, premium: true },
//     { feature: 'Watch Parties', free: false, premium: true },
//     { feature: 'Exclusive Games', free: false, premium: true },
//     { feature: 'Premium Courses', free: false, premium: true },
//     { feature: 'Higher Cashback', free: 'Up to 8%', premium: 'Up to 15%' },
//     { feature: 'Priority Support', free: false, premium: true },
//     { feature: 'Custom Avatar', free: false, premium: true },
//     { feature: 'Badge on Profile', free: false, premium: true },
//   ];

//   const perks = [
//     {
//       icon: Gamepad2,
//       title: '2x Game Earnings',
//       description: 'Earn double coins from every game you play',
//       module: 'games',
//     },
//     {
//       icon: GraduationCap,
//       title: 'Premium Courses',
//       description: 'Access exclusive advanced courses and certifications',
//       module: 'learning',
//     },
//     {
//       icon: Play,
//       title: 'Ad-Free + Offline',
//       description: 'Watch without ads and download for offline viewing',
//       module: 'entertainment',
//     },
//     {
//       icon: ShoppingBag,
//       title: 'Higher Cashback',
//       description: 'Get up to 15% cashback on marketplace purchases',
//       module: 'marketplace',
//     },
//     {
//       icon: Zap,
//       title: 'Priority Processing',
//       description: 'Faster withdrawals and transaction processing',
//       module: 'all',
//     },
//     {
//       icon: Shield,
//       title: 'Streak Protection',
//       description: 'Never lose your streak, even if you miss a day',
//       module: 'all',
//     },
//   ];

//   const monthlyPrice = 499;
//   const yearlyPrice = 4999;
//   const savings = Math.round((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12) * 100);

//   return (
//     <div className="space-y-6 pb-20 relative">
//       {/* Background Pattern */}
//       <div 
//         className="fixed inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="20" cy="20" r="2" fill="%23fbbf24" fill-opacity="0.02"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       />

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center py-8 relative z-10"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ type: 'spring', stiffness: 200 }}
//           className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6"
//         >
//           <Crown size={40} className="text-white" />
//         </motion.div>
//         <h1 className="text-4xl font-bold mb-3">Upgrade to Premium</h1>
//         <p className="text-white/60 max-w-xl mx-auto">
//           Unlock the full AppVerse experience with 2x earnings, exclusive content, and premium perks
//         </p>
//       </motion.div>

//       {/* Pricing Cards */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
//       >
//         <div
//           onClick={() => setBillingCycle('monthly')}
//           className={`glass-card p-6 cursor-pointer transition-all relative overflow-hidden ${
//             billingCycle === 'monthly' ? 'ring-2 ring-amber-400' : ''
//           }`}
//           style={{
//             backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23fbbf24" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//             backgroundRepeat: 'repeat',
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
//           <div className="relative z-10">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="font-bold text-xl">Monthly</h3>
//               <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
//                 billingCycle === 'monthly' ? 'border-amber-400 bg-amber-400' : 'border-white/30'
//               }`}>
//                 {billingCycle === 'monthly' && <Check size={14} className="text-black" />}
//               </div>
//             </div>
//             <div className="mb-4">
//               <span className="text-4xl font-bold">{monthlyPrice}</span>
//               <span className="text-white/50"> coins/month</span>
//             </div>
//             <p className="text-white/50 text-sm">Flexible, cancel anytime</p>
//           </div>
//         </div>

//         <div
//           onClick={() => setBillingCycle('yearly')}
//           className={`glass-card p-6 cursor-pointer transition-all relative overflow-hidden ${
//             billingCycle === 'yearly' ? 'ring-2 ring-amber-400' : ''
//           }`}
//           style={{
//             backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23fbbf24" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//             backgroundRepeat: 'repeat',
//           }}
//         >
//           <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium">
//             Save {savings}%
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
//           <div className="relative z-10">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="font-bold text-xl">Yearly</h3>
//               <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
//                 billingCycle === 'yearly' ? 'border-amber-400 bg-amber-400' : 'border-white/30'
//               }`}>
//                 {billingCycle === 'yearly' && <Check size={14} className="text-black" />}
//               </div>
//             </div>
//             <div className="mb-4">
//               <span className="text-4xl font-bold">{yearlyPrice}</span>
//               <span className="text-white/50"> coins/year</span>
//             </div>
//             <p className="text-white/50 text-sm">Best value, billed annually</p>
//           </div>
//         </div>
//       </motion.div>

//       {/* CTA Button */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="text-center"
//       >
//         <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white text-lg px-12 py-6">
//           <Crown size={24} className="mr-3" />
//           Upgrade Now
//           <ArrowRight size={20} className="ml-3" />
//         </Button>
//         <p className="text-white/40 text-sm mt-3">
//           You have {user?.coins?.toLocaleString() || 0} coins available
//         </p>
//       </motion.div>

//       {/* Feature Comparison */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="glass-card p-6 relative overflow-hidden"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ffffff" fill-opacity="0.02"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
//         <div className="relative z-10">
//           <h3 className="font-bold text-xl mb-6 text-center">Compare Plans</h3>
//           <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/20 font-medium">
//             <span>Feature</span>
//             <span className="text-center">Free</span>
//             <span className="text-center text-amber-400">Premium</span>
//           </div>
//           {features.map((feature, i) => (
//             <FeatureRow key={i} {...feature} />
//           ))}
//         </div>
//       </motion.div>

//       {/* Perks Grid */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         <h3 className="font-bold text-xl mb-4 text-center">Premium Perks</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {perks.map((perk, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 + i * 0.1 }}
//             >
//               <PerkCard {...perk} />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Profit Calculator */}
//       <ProfitCalculator />
//     </div>
//   );
// }






//=======================================================================================================================================================================================




import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Crown,
  Check,
  X,
  Zap,
  Shield,
  Gamepad2,
  GraduationCap,
  Play,
  ShoppingBag,
  Calculator,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/contexts/AuthContext';

// Feature Comparison Row
function FeatureRow({
  feature,
  free,
  premium,
}: {
  feature: string;
  free: boolean | string;
  premium: boolean | string;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-white/10 last:border-0">
      <span className="text-white/80">{feature}</span>
      <div className="flex justify-center">
        {typeof free === 'boolean' ? (
          free ? (
            <Check size={20} className="text-green-400" />
          ) : (
            <X size={20} className="text-red-400" />
          )
        ) : (
          <span className="text-white/60">{free}</span>
        )}
      </div>
      <div className="flex justify-center">
        {typeof premium === 'boolean' ? (
          premium ? (
            <Check size={20} className="text-green-400" />
          ) : (
            <X size={20} className="text-red-400" />
          )
        ) : (
          <span className="text-amber-400 font-medium">{premium}</span>
        )}
      </div>
    </div>
  );
}

// Perk Card
function PerkCard({
  icon: Icon,
  title,
  description,
  module,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  module: string;
}) {
  const moduleColors: Record<string, string> = {
    games: 'from-purple-500 to-violet-500',
    learning: 'from-blue-500 to-cyan-500',
    entertainment: 'from-red-500 to-pink-500',
    marketplace: 'from-pink-500 to-rose-500',
    all: 'from-amber-400 to-orange-500',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-5 relative overflow-hidden"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23fbbf24" fill-opacity="0.03"/%3E%3C/svg%3E')`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${moduleColors[module]} flex items-center justify-center mb-4`}>
          <Icon size={24} className="text-white" />
        </div>
        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-white/60 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

// Profit Calculator
function ProfitCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(1000);
  const [isPremium, setIsPremium] = useState(false);

  const freeRate = 0.02;
  const premiumRate = 0.04;
  const feeRate = 0.0025;

  const monthlyEarnings = monthlySpend * (isPremium ? premiumRate : freeRate);
  const monthlyFees = monthlySpend * feeRate;
  const netEarnings = monthlyEarnings - monthlyFees;
  const yearlySavings = netEarnings * 12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%2310b981" fill-opacity="0.05"/%3E%3C/svg%3E')`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
            <Calculator size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Profit Calculator</h3>
            <p className="text-white/50 text-sm">See how much you could earn</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white/60">Monthly Activity</span>
              <span className="font-bold">{monthlySpend.toLocaleString()} coins</span>
            </div>
            <Slider
              value={[monthlySpend]}
              onValueChange={(value) => setMonthlySpend(value[0])}
              max={5000}
              min={100}
              step={100}
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
            <div className="flex items-center gap-3">
              <Crown size={20} className="text-amber-400" />
              <span className="font-medium">Premium Membership</span>
            </div>
            <Switch
              checked={isPremium}
              onCheckedChange={setIsPremium}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5">
              <p className="text-white/50 text-sm mb-1">Monthly Earnings</p>
              <p className={`text-2xl font-bold ${isPremium ? 'text-amber-400' : ''}`}>
                +{Math.round(monthlyEarnings).toLocaleString()}
              </p>
              <p className="text-xs text-white/40">
                {isPremium ? '4% rate' : '2% rate'}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
              <p className="text-green-400 text-sm mb-1">Yearly Savings</p>
              <p className="text-2xl font-bold text-green-400">
                {Math.round(yearlySavings).toLocaleString()}
              </p>
              <p className="text-xs text-white/40">
                After 0.25% fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Premium() {
  const { user } = useAuth();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const features = [
    { feature: 'Base Earning Rate', free: '2%', premium: '4%' },
    { feature: 'Ad-Free Entertainment', free: false, premium: true },
    { feature: 'Offline Downloads', free: false, premium: true },
    { feature: 'Watch Parties', free: false, premium: true },
    { feature: 'Exclusive Games', free: false, premium: true },
    { feature: 'Premium Courses', free: false, premium: true },
    { feature: 'Higher Cashback', free: 'Up to 8%', premium: 'Up to 15%' },
    { feature: 'Priority Support', free: false, premium: true },
    { feature: 'Custom Avatar', free: false, premium: true },
    { feature: 'Badge on Profile', free: false, premium: true },
  ];

  const perks = [
    {
      icon: Gamepad2,
      title: '2x Game Earnings',
      description: 'Earn double coins from every game you play',
      module: 'games',
    },
    {
      icon: GraduationCap,
      title: 'Premium Courses',
      description: 'Access exclusive advanced courses and certifications',
      module: 'learning',
    },
    {
      icon: Play,
      title: 'Ad-Free + Offline',
      description: 'Watch without ads and download for offline viewing',
      module: 'entertainment',
    },
    {
      icon: ShoppingBag,
      title: 'Higher Cashback',
      description: 'Get up to 15% cashback on marketplace purchases',
      module: 'marketplace',
    },
    {
      icon: Zap,
      title: 'Priority Processing',
      description: 'Faster withdrawals and transaction processing',
      module: 'all',
    },
    {
      icon: Shield,
      title: 'Streak Protection',
      description: 'Never lose your streak, even if you miss a day',
      module: 'all',
    },
  ];

  const monthlyPrice = 499;
  const yearlyPrice = 4999;
  const savings = Math.round((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12) * 100);

  return (
    <div className="space-y-6 pb-20 relative">
      {/* Background Pattern - Amber/Gold Dots */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="20" cy="20" r="2" fill="%23fbbf24" fill-opacity="0.02"/%3E%3C/svg%3E')`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6"
        >
          <Crown size={40} className="text-white" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-3">Upgrade to Premium</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Unlock the full AppVerse experience with 2x earnings, exclusive content, and premium perks
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
      >
        <div
          onClick={() => setBillingCycle('monthly')}
          className={`glass-card p-6 cursor-pointer transition-all relative overflow-hidden ${
            billingCycle === 'monthly' ? 'ring-2 ring-amber-400' : ''
          }`}
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23fbbf24" fill-opacity="0.03"/%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xl">Monthly</h3>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                billingCycle === 'monthly' ? 'border-amber-400 bg-amber-400' : 'border-white/30'
              }`}>
                {billingCycle === 'monthly' && <Check size={14} className="text-black" />}
              </div>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-bold">{monthlyPrice}</span>
              <span className="text-white/50"> coins/month</span>
            </div>
            <p className="text-white/50 text-sm">Flexible, cancel anytime</p>
          </div>
        </div>

        <div
          onClick={() => setBillingCycle('yearly')}
          className={`glass-card p-6 cursor-pointer transition-all relative overflow-hidden ${
            billingCycle === 'yearly' ? 'ring-2 ring-amber-400' : ''
          }`}
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23fbbf24" fill-opacity="0.03"/%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium">
            Save {savings}%
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xl">Yearly</h3>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                billingCycle === 'yearly' ? 'border-amber-400 bg-amber-400' : 'border-white/30'
              }`}>
                {billingCycle === 'yearly' && <Check size={14} className="text-black" />}
              </div>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-bold">{yearlyPrice}</span>
              <span className="text-white/50"> coins/year</span>
            </div>
            <p className="text-white/50 text-sm">Best value, billed annually</p>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white text-lg px-12 py-6">
          <Crown size={24} className="mr-3" />
          Upgrade Now
          <ArrowRight size={20} className="ml-3" />
        </Button>
        <p className="text-white/40 text-sm mt-3">
          You have {user?.coins?.toLocaleString() || 0} coins available
        </p>
      </motion.div>

      {/* Feature Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ffffff" fill-opacity="0.02"/%3E%3C/svg%3E')`,
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="relative z-10">
          <h3 className="font-bold text-xl mb-6 text-center">Compare Plans</h3>
          <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/20 font-medium">
            <span>Feature</span>
            <span className="text-center">Free</span>
            <span className="text-center text-amber-400">Premium</span>
          </div>
          {features.map((feature, i) => (
            <FeatureRow key={i} {...feature} />
          ))}
        </div>
      </motion.div>

      {/* Perks Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="font-bold text-xl mb-4 text-center">Premium Perks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <PerkCard {...perk} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Profit Calculator */}
      <ProfitCalculator />
    </div>
  );
}