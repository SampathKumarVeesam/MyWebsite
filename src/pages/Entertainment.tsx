// // import { motion } from 'framer-motion';
// // import {
// //   Play,
// //   Film,
// //   Sparkles,
// //   Clock,
// //   TrendingUp,
// //   Crown,
// //   Users,
// // } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // import { Progress } from '@/components/ui/progress';

// // // Shorts Video Card
// // function ShortsCard({
// //   title,
// //   creator,
// //   views,
// //   likes,
// //   duration,
// //   reward,
// // }: {
// //   title: string;
// //   creator: string;
// //   views: string;
// //   likes: string;
// //   duration: string;
// //   reward: number;
// // }) {
// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.02 }}
// //       className="glass-card overflow-hidden cursor-pointer group"
// //     >
// //       {/* Video Thumbnail */}
// //       <div className="aspect-[9/16] relative overflow-hidden bg-white/5">
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <Play size={48} className="text-white/20" />
// //         </div>

// //         {/* Duration */}
// //         <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 text-xs">
// //           {duration}
// //         </div>

// //         {/* Play Button */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileHover={{ opacity: 1 }}
// //           className="absolute inset-0 bg-black/40 flex items-center justify-center"
// //         >
// //           <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
// //             <Play size={28} className="text-white ml-1" />
// //           </div>
// //         </motion.div>

// //         {/* Reward Badge */}
// //         <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/80 text-white text-xs font-medium">
// //           <Sparkles size={12} />
// //           +{reward}
// //         </div>
// //       </div>

// //       {/* Info */}
// //       <div className="p-3">
// //         <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-400 transition-colors">{title}</h3>
// //         <p className="text-white/50 text-xs mt-1">{creator}</p>
// //         <div className="flex items-center gap-3 mt-2 text-xs text-white/40">
// //           <span>{views} views</span>
// //           <span>{likes} likes</span>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // // Movie/Series Card
// // function ContentCard({
// //   title,
// //   type,
// //   genre,
// //   rating,
// //   duration,
// //   episodes,
// //   isPremium,
// //   isNew,
// // }: {
// //   title: string;
// //   type: 'movie' | 'series';
// //   genre: string;
// //   rating: number;
// //   duration?: string;
// //   episodes?: number;
// //   isPremium?: boolean;
// //   isNew?: boolean;
// // }) {
// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.03 }}
// //       className="glass-card overflow-hidden cursor-pointer group"
// //     >
// //       {/* Poster */}
// //       <div className="aspect-[2/3] relative overflow-hidden bg-white/5">
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <Film size={48} className="text-white/20" />
// //         </div>

// //         {/* Badges */}
// //         <div className="absolute top-3 left-3 flex flex-wrap gap-2">
// //           {isNew && (
// //             <span className="px-2 py-1 rounded-full bg-green-500/80 text-white text-xs font-medium">
// //               NEW
// //             </span>
// //           )}
// //           {isPremium && (
// //             <span className="px-2 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-medium">
// //               <Crown size={10} className="inline mr-1" />
// //               PREMIUM
// //             </span>
// //           )}
// //         </div>

// //         {/* Rating */}
// //         <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
// //           <Sparkles size={12} className="text-yellow-400" />
// //           <span className="text-sm font-medium">{rating}</span>
// //         </div>
// //       </div>

// //       {/* Info */}
// //       <div className="p-4">
// //         <h3 className="font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
// //         <p className="text-white/50 text-sm">{genre}</p>
// //         <div className="flex items-center gap-3 mt-2 text-sm text-white/50">
// //           <span>{type === 'movie' ? duration : `${episodes} episodes`}</span>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // // Watch Party Card
// // function WatchPartyCard({
// //   title,
// //   host,
// //   participants,
// //   startsIn,
// // }: {
// //   title: string;
// //   host: string;
// //   participants: number;
// //   startsIn: string;
// // }) {
// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.02 }}
// //       className="glass-card p-4 cursor-pointer"
// //     >
// //       <div className="flex items-center gap-4">
// //         <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
// //           <Users size={28} className="text-white" />
// //         </div>
// //         <div className="flex-1">
// //           <h4 className="font-bold">{title}</h4>
// //           <p className="text-white/50 text-sm">Hosted by {host}</p>
// //           <div className="flex items-center gap-4 mt-2 text-sm text-white/50">
// //             <span className="flex items-center gap-1">
// //               <Users size={14} />
// //               {participants} joined
// //             </span>
// //             <span className="flex items-center gap-1">
// //               <Clock size={14} />
// //               Starts in {startsIn}
// //             </span>
// //           </div>
// //         </div>
// //         <Button size="sm" className="btn-primary">
// //           Join
// //         </Button>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // export default function Entertainment() {
// //   const shorts = [
// //     { title: 'Quick React Tips #1', creator: 'CodeMaster', views: '125K', likes: '8.5K', duration: '0:45', reward: 5 },
// //     { title: '5-Min Workout Routine', creator: 'FitLife', views: '89K', likes: '5.2K', duration: '5:00', reward: 10 },
// //     { title: 'Amazing Science Facts', creator: 'ScienceDaily', views: '234K', likes: '15K', duration: '1:30', reward: 8 },
// //     { title: 'Cooking Hack You Need', creator: 'ChefMike', views: '456K', likes: '32K', duration: '0:58', reward: 6 },
// //     { title: 'Funny Cat Moments', creator: 'PetLovers', views: '1.2M', likes: '89K', duration: '2:15', reward: 5 },
// //     { title: 'Travel Guide: Tokyo', creator: 'Wanderlust', views: '67K', likes: '4.1K', duration: '3:45', reward: 12 },
// //   ];

// //   const movies = [
// //     { title: 'Cyber Dreams', type: 'movie' as const, genre: 'Sci-Fi', rating: 4.8, duration: '2h 15m', isNew: true, isPremium: true },
// //     { title: 'The Last Kingdom', type: 'series' as const, genre: 'Action', rating: 4.7, episodes: 8, isPremium: true },
// //     { title: 'Love in Paris', type: 'movie' as const, genre: 'Romance', rating: 4.5, duration: '1h 45m' },
// //     { title: 'Mystery Manor', type: 'series' as const, genre: 'Thriller', rating: 4.6, episodes: 12, isNew: true, isPremium: true },
// //     { title: 'Space Odyssey', type: 'movie' as const, genre: 'Sci-Fi', rating: 4.9, duration: '2h 30m', isPremium: true },
// //     { title: 'Comedy Central', type: 'series' as const, genre: 'Comedy', rating: 4.4, episodes: 24 },
// //   ];

// //   const watchParties = [
// //     { title: 'Cyber Dreams Premiere', host: 'MovieBuff', participants: 234, startsIn: '30 min' },
// //     { title: 'React Live Coding', host: 'CodeMaster', participants: 89, startsIn: '1 hour' },
// //   ];

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
// //             <Play className="text-red-400" />
// //             Entertainment
// //           </h1>
// //           <p className="text-white/60">Watch, enjoy, and earn coins</p>
// //         </div>
// //         <div className="flex items-center gap-3">
// //           <div className="glass px-4 py-2 rounded-full">
// //             <Sparkles size={16} className="inline mr-2 text-amber-400" />
// //             <span className="text-sm">Watch-to-Earn Active</span>
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* Watch Progress */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.1 }}
// //         className="glass-card p-6"
// //       >
// //         <div className="flex items-center justify-between mb-4">
// //           <div className="flex items-center gap-3">
// //             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
// //               <Film size={24} className="text-white" />
// //             </div>
// //             <div>
// //               <h3 className="font-bold">Daily Watch Goal</h3>
// //               <p className="text-white/50 text-sm">Watch 30 min to earn bonus</p>
// //             </div>
// //           </div>
// //           <div className="text-right">
// //             <span className="text-2xl font-bold">18</span>
// //             <span className="text-white/50">/30 min</span>
// //           </div>
// //         </div>
// //         <Progress value={60} className="h-3" />
// //         <div className="flex items-center justify-between mt-3">
// //           <span className="text-sm text-white/50">Keep watching to earn +50 coins</span>
// //           <span className="text-sm text-amber-400 font-medium">12 min left</span>
// //         </div>
// //       </motion.div>

// //       {/* Main Content */}
// //       <Tabs defaultValue="shorts" className="w-full">
// //         <TabsList className="glass mb-6">
// //           <TabsTrigger value="shorts">Shorts</TabsTrigger>
// //           <TabsTrigger value="movies">Movies & Series</TabsTrigger>
// //           <TabsTrigger value="live">Watch Party</TabsTrigger>
// //         </TabsList>

// //         <TabsContent value="shorts" className="mt-0">
// //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
// //             {shorts.map((short, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: i * 0.05 }}
// //               >
// //                 <ShortsCard {...short} />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </TabsContent>

// //         <TabsContent value="movies" className="mt-0">
// //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
// //             {movies.map((movie, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: i * 0.05 }}
// //               >
// //                 <ContentCard {...movie} />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </TabsContent>

// //         <TabsContent value="live" className="mt-0">
// //           <div className="space-y-4">
// //             {watchParties.map((party, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: i * 0.1 }}
// //               >
// //                 <WatchPartyCard {...party} />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </TabsContent>
// //       </Tabs>

// //       {/* Premium Banner */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.3 }}
// //         className="glass-card p-6 relative overflow-hidden"
// //       >
// //         <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10" />
// //         <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
// //           <div className="flex items-center gap-4">
// //             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
// //               <Crown size={32} className="text-white" />
// //             </div>
// //             <div>
// //               <h3 className="font-bold text-xl">Upgrade to Premium</h3>
// //               <p className="text-white/60">Ad-free viewing, offline downloads, watch parties</p>
// //             </div>
// //           </div>
// //           <div className="flex items-center gap-4">
// //             <div className="text-center">
// //               <p className="text-2xl font-bold text-amber-400">499</p>
// //               <p className="text-xs text-white/50">coins/month</p>
// //             </div>
// //             <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white">
// //               <Crown size={18} className="mr-2" />
// //               Upgrade
// //             </Button>
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* Trending Section */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.4 }}
// //       >
// //         <div className="flex items-center justify-between mb-4">
// //           <h2 className="font-bold text-xl flex items-center gap-2">
// //             <TrendingUp size={20} className="text-green-400" />
// //             Trending Now
// //           </h2>
// //           <Button variant="ghost" className="text-blue-400">
// //             See All
// //           </Button>
// //         </div>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
// //           {shorts.slice(0, 6).map((short, i) => (
// //             <ShortsCard key={i} {...short} />
// //           ))}
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }




// //========================================================================================================================================================================




// import { motion } from 'framer-motion';
// import {
//   Play,
//   Film,
//   Sparkles,
//   Clock,
//   TrendingUp,
//   Crown,
//   Users,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Progress } from '@/components/ui/progress';

// // Shorts Video Card
// function ShortsCard({
//   title,
//   creator,
//   views,
//   likes,
//   duration,
//   reward,
// }: {
//   title: string;
//   creator: string;
//   views: string;
//   likes: string;
//   duration: string;
//   reward: number;
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="glass-card overflow-hidden cursor-pointer group"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ef4444" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       {/* Video Thumbnail */}
//       <div className="aspect-[9/16] relative overflow-hidden bg-white/5">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Play size={48} className="text-white/20" />
//         </div>

//         {/* Duration */}
//         <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 text-xs">
//           {duration}
//         </div>

//         {/* Play Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileHover={{ opacity: 1 }}
//           className="absolute inset-0 bg-black/40 flex items-center justify-center"
//         >
//           <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
//             <Play size={28} className="text-white ml-1" />
//           </div>
//         </motion.div>

//         {/* Reward Badge */}
//         <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/80 text-white text-xs font-medium">
//           <Sparkles size={12} />
//           +{reward}
//         </div>
//       </div>

//       {/* Info */}
//       <div className="p-3">
//         <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-400 transition-colors">{title}</h3>
//         <p className="text-white/50 text-xs mt-1">{creator}</p>
//         <div className="flex items-center gap-3 mt-2 text-xs text-white/40">
//           <span>{views} views</span>
//           <span>{likes} likes</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // Movie/Series Card
// function ContentCard({
//   title,
//   type,
//   genre,
//   rating,
//   duration,
//   episodes,
//   isPremium,
//   isNew,
// }: {
//   title: string;
//   type: 'movie' | 'series';
//   genre: string;
//   rating: number;
//   duration?: string;
//   episodes?: number;
//   isPremium?: boolean;
//   isNew?: boolean;
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       className="glass-card overflow-hidden cursor-pointer group"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="3" cy="3" r="1" fill="%23a855f7" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       {/* Poster */}
//       <div className="aspect-[2/3] relative overflow-hidden bg-white/5">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Film size={48} className="text-white/20" />
//         </div>

//         {/* Badges */}
//         <div className="absolute top-3 left-3 flex flex-wrap gap-2">
//           {isNew && (
//             <span className="px-2 py-1 rounded-full bg-green-500/80 text-white text-xs font-medium">
//               NEW
//             </span>
//           )}
//           {isPremium && (
//             <span className="px-2 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-medium">
//               <Crown size={10} className="inline mr-1" />
//               PREMIUM
//             </span>
//           )}
//         </div>

//         {/* Rating */}
//         <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
//           <Sparkles size={12} className="text-yellow-400" />
//           <span className="text-sm font-medium">{rating}</span>
//         </div>
//       </div>

//       {/* Info */}
//       <div className="p-4">
//         <h3 className="font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
//         <p className="text-white/50 text-sm">{genre}</p>
//         <div className="flex items-center gap-3 mt-2 text-sm text-white/50">
//           <span>{type === 'movie' ? duration : `${episodes} episodes`}</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // Watch Party Card
// function WatchPartyCard({
//   title,
//   host,
//   participants,
//   startsIn,
// }: {
//   title: string;
//   host: string;
//   participants: number;
//   startsIn: string;
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="glass-card p-4 cursor-pointer"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ec4899" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="flex items-center gap-4">
//         <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
//           <Users size={28} className="text-white" />
//         </div>
//         <div className="flex-1">
//           <h4 className="font-bold">{title}</h4>
//           <p className="text-white/50 text-sm">Hosted by {host}</p>
//           <div className="flex items-center gap-4 mt-2 text-sm text-white/50">
//             <span className="flex items-center gap-1">
//               <Users size={14} />
//               {participants} joined
//             </span>
//             <span className="flex items-center gap-1">
//               <Clock size={14} />
//               Starts in {startsIn}
//             </span>
//           </div>
//         </div>
//         <Button size="sm" className="btn-primary">
//           Join
//         </Button>
//       </div>
//     </motion.div>
//   );
// }

// export default function Entertainment() {
//   const shorts = [
//     { title: 'Quick React Tips #1', creator: 'CodeMaster', views: '125K', likes: '8.5K', duration: '0:45', reward: 5 },
//     { title: '5-Min Workout Routine', creator: 'FitLife', views: '89K', likes: '5.2K', duration: '5:00', reward: 10 },
//     { title: 'Amazing Science Facts', creator: 'ScienceDaily', views: '234K', likes: '15K', duration: '1:30', reward: 8 },
//     { title: 'Cooking Hack You Need', creator: 'ChefMike', views: '456K', likes: '32K', duration: '0:58', reward: 6 },
//     { title: 'Funny Cat Moments', creator: 'PetLovers', views: '1.2M', likes: '89K', duration: '2:15', reward: 5 },
//     { title: 'Travel Guide: Tokyo', creator: 'Wanderlust', views: '67K', likes: '4.1K', duration: '3:45', reward: 12 },
//   ];

//   const movies = [
//     { title: 'Cyber Dreams', type: 'movie' as const, genre: 'Sci-Fi', rating: 4.8, duration: '2h 15m', isNew: true, isPremium: true },
//     { title: 'The Last Kingdom', type: 'series' as const, genre: 'Action', rating: 4.7, episodes: 8, isPremium: true },
//     { title: 'Love in Paris', type: 'movie' as const, genre: 'Romance', rating: 4.5, duration: '1h 45m' },
//     { title: 'Mystery Manor', type: 'series' as const, genre: 'Thriller', rating: 4.6, episodes: 12, isNew: true, isPremium: true },
//     { title: 'Space Odyssey', type: 'movie' as const, genre: 'Sci-Fi', rating: 4.9, duration: '2h 30m', isPremium: true },
//     { title: 'Comedy Central', type: 'series' as const, genre: 'Comedy', rating: 4.4, episodes: 24 },
//   ];

//   const watchParties = [
//     { title: 'Cyber Dreams Premiere', host: 'MovieBuff', participants: 234, startsIn: '30 min' },
//     { title: 'React Live Coding', host: 'CodeMaster', participants: 89, startsIn: '1 hour' },
//   ];

//   return (
//     <div className="space-y-6 pb-20 relative">
//       {/* Background Pattern */}
//       <div 
//         className="fixed inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 20 L20 0 L40 20 L20 40 Z" stroke="%23ef4444" stroke-width="0.5" stroke-opacity="0.03" fill="none"/%3E%3C/svg%3E')`,
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
//             <Play className="text-red-400" />
//             Entertainment
//           </h1>
//           <p className="text-white/60">Watch, enjoy, and earn coins</p>
//         </div>
//         <div className="flex items-center gap-3">
//           <div className="glass px-4 py-2 rounded-full">
//             <Sparkles size={16} className="inline mr-2 text-amber-400" />
//             <span className="text-sm">Watch-to-Earn Active</span>
//           </div>
//         </div>
//       </motion.div>

//       {/* Watch Progress */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="glass-card p-6 relative overflow-hidden"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ef4444" fill-opacity="0.05"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-pink-500/5 to-red-500/5" />
//         <div className="relative z-10">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
//                 <Film size={24} className="text-white" />
//               </div>
//               <div>
//                 <h3 className="font-bold">Daily Watch Goal</h3>
//                 <p className="text-white/50 text-sm">Watch 30 min to earn bonus</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <span className="text-2xl font-bold">18</span>
//               <span className="text-white/50">/30 min</span>
//             </div>
//           </div>
//           <Progress value={60} className="h-3" />
//           <div className="flex items-center justify-between mt-3">
//             <span className="text-sm text-white/50">Keep watching to earn +50 coins</span>
//             <span className="text-sm text-amber-400 font-medium">12 min left</span>
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Content */}
//       <Tabs defaultValue="shorts" className="w-full">
//         <TabsList className="glass mb-6">
//           <TabsTrigger value="shorts">Shorts</TabsTrigger>
//           <TabsTrigger value="movies">Movies & Series</TabsTrigger>
//           <TabsTrigger value="live">Watch Party</TabsTrigger>
//         </TabsList>

//         <TabsContent value="shorts" className="mt-0">
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//             {shorts.map((short, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//               >
//                 <ShortsCard {...short} />
//               </motion.div>
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="movies" className="mt-0">
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//             {movies.map((movie, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//               >
//                 <ContentCard {...movie} />
//               </motion.div>
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="live" className="mt-0">
//           <div className="space-y-4">
//             {watchParties.map((party, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <WatchPartyCard {...party} />
//               </motion.div>
//             ))}
//           </div>
//         </TabsContent>
//       </Tabs>

//       {/* Premium Banner */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="glass-card p-6 relative overflow-hidden"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="1.5" fill="%23fbbf24" fill-opacity="0.1"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10" />
//         <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-4">
//             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
//               <Crown size={32} className="text-white" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xl">Upgrade to Premium</h3>
//               <p className="text-white/60">Ad-free viewing, offline downloads, watch parties</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="text-center">
//               <p className="text-2xl font-bold text-amber-400">499</p>
//               <p className="text-xs text-white/50">coins/month</p>
//             </div>
//             <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white">
//               <Crown size={18} className="mr-2" />
//               Upgrade
//             </Button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Trending Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="font-bold text-xl flex items-center gap-2">
//             <TrendingUp size={20} className="text-green-400" />
//             Trending Now
//           </h2>
//           <Button variant="ghost" className="text-blue-400">
//             See All
//           </Button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//           {shorts.slice(0, 6).map((short, i) => (
//             <ShortsCard key={i} {...short} />
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }



//==============================================================================================================================================================================================================================================================




import { motion } from 'framer-motion';
import {
  Play,
  Film,
  Sparkles,
  Clock,
  TrendingUp,
  Crown,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

// Background images for entertainment
const BG_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&h=400&fit=crop',
  shorts: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=400&fit=crop',
  movies: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop',
  watchparty: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=200&fit=crop',
  trending: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=200&fit=crop',
  premium: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop',
};

// Shorts Video Card with Background
function ShortsCard({
  title,
  creator,
  views,
  likes,
  duration,
  reward,
  bgImage,
}: {
  title: string;
  creator: string;
  views: string;
  likes: string;
  duration: string;
  reward: number;
  bgImage: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card overflow-hidden cursor-pointer group relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 14, 23, 0.8) 0%, rgba(10, 14, 23, 0.95) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Video Thumbnail */}
      <div className="aspect-[9/16] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Play size={48} className="text-white/20" />
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 text-xs backdrop-blur-sm">
          {duration}
        </div>

        {/* Play Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Play size={28} className="text-white ml-1" />
          </div>
        </motion.div>

        {/* Reward Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/80 text-white text-xs font-medium backdrop-blur-sm">
          <Sparkles size={12} />
          +{reward}
        </div>
      </div>

      {/* Info */}
      <div className="p-3 relative z-10">
        <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-white/50 text-xs mt-1">{creator}</p>
        <div className="flex items-center gap-3 mt-2 text-xs text-white/40">
          <span>{views} views</span>
          <span>{likes} likes</span>
        </div>
      </div>
    </motion.div>
  );
}

// Movie/Series Card with Background
function ContentCard({
  title,
  type,
  genre,
  rating,
  duration,
  episodes,
  isPremium,
  isNew,
  bgImage,
}: {
  title: string;
  type: 'movie' | 'series';
  genre: string;
  rating: number;
  duration?: string;
  episodes?: number;
  isPremium?: boolean;
  isNew?: boolean;
  bgImage: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="glass-card overflow-hidden cursor-pointer group relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 14, 23, 0.7) 0%, rgba(10, 14, 23, 0.95) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Poster */}
      <div className="aspect-[2/3] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Film size={48} className="text-white/20" />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {isNew && (
            <span className="px-2 py-1 rounded-full bg-green-500/80 text-white text-xs font-medium backdrop-blur-sm">
              NEW
            </span>
          )}
          {isPremium && (
            <span className="px-2 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-medium backdrop-blur-sm">
              <Crown size={10} className="inline mr-1" />
              PREMIUM
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
          <Sparkles size={12} className="text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 relative z-10">
        <h3 className="font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-white/50 text-sm">{genre}</p>
        <div className="flex items-center gap-3 mt-2 text-sm text-white/50">
          <span>{type === 'movie' ? duration : `${episodes} episodes`}</span>
        </div>
      </div>
    </motion.div>
  );
}

// Watch Party Card with Background
function WatchPartyCard({
  title,
  host,
  participants,
  startsIn,
}: {
  title: string;
  host: string;
  participants: number;
  startsIn: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-4 cursor-pointer relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.85) 100%), url(${BG_IMAGES.watchparty})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
          <Users size={28} className="text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold">{title}</h4>
          <p className="text-white/50 text-sm">Hosted by {host}</p>
          <div className="flex items-center gap-4 mt-2 text-sm text-white/50">
            <span className="flex items-center gap-1">
              <Users size={14} />
              {participants} joined
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              Starts in {startsIn}
            </span>
          </div>
        </div>
        <Button size="sm" className="btn-primary">
          Join
        </Button>
      </div>
    </motion.div>
  );
}

export default function Entertainment() {
  const shorts = [
    { title: 'Quick React Tips #1', creator: 'CodeMaster', views: '125K', likes: '8.5K', duration: '0:45', reward: 5, bgImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=400&fit=crop' },
    { title: '5-Min Workout Routine', creator: 'FitLife', views: '89K', likes: '5.2K', duration: '5:00', reward: 10, bgImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=400&fit=crop' },
    { title: 'Amazing Science Facts', creator: 'ScienceDaily', views: '234K', likes: '15K', duration: '1:30', reward: 8, bgImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=400&fit=crop' },
    { title: 'Cooking Hack You Need', creator: 'ChefMike', views: '456K', likes: '32K', duration: '0:58', reward: 6, bgImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=400&fit=crop' },
    { title: 'Funny Cat Moments', creator: 'PetLovers', views: '1.2M', likes: '89K', duration: '2:15', reward: 5, bgImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=400&fit=crop' },
    { title: 'Travel Guide: Tokyo', creator: 'Wanderlust', views: '67K', likes: '4.1K', duration: '3:45', reward: 12, bgImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=400&fit=crop' },
  ];

  const movies = [
    { title: 'Cyber Dreams', type: 'movie' as const, genre: 'Sci-Fi', rating: 4.8, duration: '2h 15m', isNew: true, isPremium: true, bgImage: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&h=400&fit=crop' },
    { title: 'The Last Kingdom', type: 'series' as const, genre: 'Action', rating: 4.7, episodes: 8, isPremium: true, bgImage: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=400&fit=crop' },
    { title: 'Love in Paris', type: 'movie' as const, genre: 'Romance', rating: 4.5, duration: '1h 45m', bgImage: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=400&fit=crop' },
    { title: 'Mystery Manor', type: 'series' as const, genre: 'Thriller', rating: 4.6, episodes: 12, isNew: true, isPremium: true, bgImage: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=300&h=400&fit=crop' },
    { title: 'Space Odyssey', type: 'movie' as const, genre: 'Sci-Fi', rating: 4.9, duration: '2h 30m', isPremium: true, bgImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&h=400&fit=crop' },
    { title: 'Comedy Central', type: 'series' as const, genre: 'Comedy', rating: 4.4, episodes: 24, bgImage: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=300&h=400&fit=crop' },
  ];

  const watchParties = [
    { title: 'Cyber Dreams Premiere', host: 'MovieBuff', participants: 234, startsIn: '30 min' },
    { title: 'React Live Coding', host: 'CodeMaster', participants: 89, startsIn: '1 hour' },
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
            <Play className="text-red-400" />
            Entertainment
          </h1>
          <p className="text-white/60">Watch, enjoy, and earn coins</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="glass px-4 py-2 rounded-full backdrop-blur-xl">
            <Sparkles size={16} className="inline mr-2 text-amber-400" />
            <span className="text-sm">Watch-to-Earn Active</span>
          </div>
        </div>
      </motion.div>

      {/* Watch Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Film size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold">Daily Watch Goal</h3>
                <p className="text-white/50 text-sm">Watch 30 min to earn bonus</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold">18</span>
              <span className="text-white/50">/30 min</span>
            </div>
          </div>
          <Progress value={60} className="h-3" />
          <div className="flex items-center justify-between mt-3">
            <span className="text-sm text-white/50">Keep watching to earn +50 coins</span>
            <span className="text-sm text-amber-400 font-medium">12 min left</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <Tabs defaultValue="shorts" className="w-full">
        <TabsList className="glass mb-6 backdrop-blur-xl">
          <TabsTrigger value="shorts">Shorts</TabsTrigger>
          <TabsTrigger value="movies">Movies & Series</TabsTrigger>
          <TabsTrigger value="live">Watch Party</TabsTrigger>
        </TabsList>

        <TabsContent value="shorts" className="mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {shorts.map((short, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ShortsCard {...short} />
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="movies" className="mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {movies.map((movie, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ContentCard {...movie} />
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="live" className="mt-0">
          <div className="space-y-4">
            {watchParties.map((party, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <WatchPartyCard {...party} />
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Premium Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.9) 0%, rgba(10, 14, 23, 0.85) 100%), url(${BG_IMAGES.trending})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
              <Crown size={32} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Upgrade to Premium</h3>
              <p className="text-white/60">Ad-free viewing, offline downloads, watch parties</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-400">499</p>
              <p className="text-xs text-white/50">coins/month</p>
            </div>
            <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-lg shadow-amber-500/25">
              <Crown size={18} className="mr-2" />
              Upgrade
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Trending Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-xl flex items-center gap-2">
            <TrendingUp size={20} className="text-green-400" />
            Trending Now
          </h2>
          <Button variant="ghost" className="text-blue-400">
            See All
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {shorts.slice(0, 6).map((short, i) => (
            <ShortsCard key={i} {...short} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}