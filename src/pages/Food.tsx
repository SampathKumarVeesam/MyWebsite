// // import { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import {
// //   UtensilsCrossed,
// //   Search,
// //   Flame,
// //   Zap,
// //   Shield,
// //   Heart,
// //   Star,
// //   Clock,
// //   Sparkles,
// //   Percent,
// //   Bike,
// //   ChevronRight,
// //   ShoppingBag,
// // } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // import { Badge } from '@/components/ui/badge';

// // // Category Card
// // function CategoryCard({
// //   name,
// //   description,
// //   icon: Icon,
// //   color,
// //   count,
// // }: {
// //   name: string;
// //   description: string;
// //   icon: React.ElementType;
// //   color: string;
// //   count: number;
// // }) {
// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.03, y: -5 }}
// //       className="glass-card p-6 cursor-pointer group"
// //     >
// //       <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
// //         <Icon size={28} className="text-white" />
// //       </div>
// //       <h3 className="font-bold text-lg mb-1">{name}</h3>
// //       <p className="text-white/50 text-sm mb-3">{description}</p>
// //       <div className="flex items-center justify-between">
// //         <span className="text-sm text-white/40">{count} restaurants</span>
// //         <ChevronRight size={16} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
// //       </div>
// //     </motion.div>
// //   );
// // }

// // // Restaurant Card
// // function RestaurantCard({
// //   name,
// //   cuisine,
// //   rating,
// //   deliveryTime,
// //   deliveryFee,
// //   cashback,
// //   isOpen,
// // }: {
// //   name: string;
// //   cuisine: string;
// //   rating: number;
// //   deliveryTime: string;
// //   deliveryFee: string;
// //   cashback?: number;
// //   isOpen: boolean;
// // }) {
// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.02 }}
// //       className="glass-card overflow-hidden cursor-pointer group"
// //     >
// //       {/* Image Placeholder */}
// //       <div className="aspect-video relative overflow-hidden bg-white/5">
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <UtensilsCrossed size={48} className="text-white/20" />
// //         </div>
        
// //         {/* Badges */}
// //         <div className="absolute top-3 left-3 flex gap-2">
// //           {!isOpen && (
// //             <span className="px-2 py-1 rounded-full bg-gray-500/80 text-white text-xs">
// //               Closed
// //             </span>
// //           )}
// //           {cashback && (
// //             <span className="px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium">
// //               {cashback}% Cashback
// //             </span>
// //           )}
// //         </div>

// //         {/* Rating */}
// //         <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
// //           <Star size={12} className="text-yellow-400 fill-yellow-400" />
// //           <span className="text-sm font-medium">{rating}</span>
// //         </div>
// //       </div>

// //       {/* Info */}
// //       <div className="p-4">
// //         <h3 className="font-bold group-hover:text-green-400 transition-colors">{name}</h3>
// //         <p className="text-white/50 text-sm">{cuisine}</p>
        
// //         <div className="flex items-center gap-4 mt-3 text-sm text-white/50">
// //           <span className="flex items-center gap-1">
// //             <Clock size={14} />
// //             {deliveryTime}
// //           </span>
// //           <span className="flex items-center gap-1">
// //             <Bike size={14} />
// //             {deliveryFee}
// //           </span>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // // Deal Card
// // function DealCard({
// //   title,
// //   restaurant,
// //   originalPrice,
// //   dealPrice,
// //   savings,
// //   expiresIn,
// // }: {
// //   title: string;
// //   restaurant: string;
// //   originalPrice: number;
// //   dealPrice: number;
// //   savings: number;
// //   expiresIn: string;
// // }) {
// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.02 }}
// //       className="glass-card p-4 cursor-pointer"
// //     >
// //       <div className="flex gap-4">
// //         <div className="w-24 h-24 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
// //           <UtensilsCrossed size={32} className="text-white/30" />
// //         </div>
// //         <div className="flex-1">
// //           <h4 className="font-bold mb-1">{title}</h4>
// //           <p className="text-white/50 text-sm mb-2">{restaurant}</p>
          
// //           <div className="flex items-center gap-3">
// //             <span className="text-xl font-bold text-green-400">{dealPrice}</span>
// //             <span className="text-sm text-white/40 line-through">{originalPrice}</span>
// //             <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
// //               Save {savings}%
// //             </Badge>
// //           </div>
          
// //           <div className="flex items-center justify-between mt-2">
// //             <span className="text-xs text-white/40">Expires in {expiresIn}</span>
// //             <Button size="sm" className="btn-primary">
// //               <Sparkles size={14} className="mr-1" />
// //               Grab Deal
// //             </Button>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // export default function Food() {
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const categories = [
// //     {
// //       name: 'Energy-Giving',
// //       description: 'Carbs & proteins to fuel your day',
// //       icon: Zap,
// //       color: 'from-yellow-500 to-orange-500',
// //       count: 45,
// //     },
// //     {
// //       name: 'Body-Building',
// //       description: 'High protein meals for strength',
// //       icon: Flame,
// //       color: 'from-red-500 to-pink-500',
// //       count: 32,
// //     },
// //     {
// //       name: 'Protective',
// //       description: 'Immunity boosting nutritious food',
// //       icon: Shield,
// //       color: 'from-green-500 to-emerald-500',
// //       count: 28,
// //     },
// //     {
// //       name: 'Heart Healthy',
// //       description: 'Low sodium, heart-friendly options',
// //       icon: Heart,
// //       color: 'from-rose-500 to-red-500',
// //       count: 21,
// //     },
// //   ];

// //   const restaurants = [
// //     {
// //       name: 'Green Bowl',
// //       cuisine: 'Healthy Salads',
// //       rating: 4.8,
// //       deliveryTime: '25-35 min',
// //       deliveryFee: 'Free',
// //       cashback: 10,
// //       isOpen: true,
// //     },
// //     {
// //       name: 'Protein House',
// //       cuisine: 'High Protein Meals',
// //       rating: 4.6,
// //       deliveryTime: '30-45 min',
// //       deliveryFee: '30 coins',
// //       cashback: 8,
// //       isOpen: true,
// //     },
// //     {
// //       name: 'Fresh Kitchen',
// //       cuisine: 'Organic & Natural',
// //       rating: 4.9,
// //       deliveryTime: '20-30 min',
// //       deliveryFee: 'Free',
// //       cashback: 12,
// //       isOpen: true,
// //     },
// //     {
// //       name: 'Fit Meals',
// //       cuisine: 'Calorie Counted',
// //       rating: 4.5,
// //       deliveryTime: '35-50 min',
// //       deliveryFee: '40 coins',
// //       cashback: 6,
// //       isOpen: false,
// //     },
// //     {
// //       name: 'Veggie Delight',
// //       cuisine: 'Vegetarian',
// //       rating: 4.7,
// //       deliveryTime: '25-40 min',
// //       deliveryFee: '25 coins',
// //       cashback: 9,
// //       isOpen: true,
// //     },
// //     {
// //       name: 'Grill Master',
// //       cuisine: 'Grilled Specialties',
// //       rating: 4.4,
// //       deliveryTime: '40-55 min',
// //       deliveryFee: '50 coins',
// //       cashback: 7,
// //       isOpen: true,
// //     },
// //   ];

// //   const deals = [
// //     {
// //       title: 'Superfood Salad Bowl',
// //       restaurant: 'Green Bowl',
// //       originalPrice: 450,
// //       dealPrice: 299,
// //       savings: 33,
// //       expiresIn: '2 hours',
// //     },
// //     {
// //       title: 'Protein Power Pack',
// //       restaurant: 'Protein House',
// //       originalPrice: 650,
// //       dealPrice: 499,
// //       savings: 23,
// //       expiresIn: '4 hours',
// //     },
// //     {
// //       title: 'Organic Buddha Bowl',
// //       restaurant: 'Fresh Kitchen',
// //       originalPrice: 550,
// //       dealPrice: 399,
// //       savings: 27,
// //       expiresIn: '6 hours',
// //     },
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
// //             <UtensilsCrossed className="text-green-400" />
// //             Food
// //           </h1>
// //           <p className="text-white/60">Order healthy meals, earn cashback</p>
// //         </div>
// //       </motion.div>

// //       {/* Search */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.1 }}
// //         className="relative"
// //       >
// //         <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
// //         <Input
// //           type="text"
// //           placeholder="Search restaurants, cuisines, dishes..."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           className="pl-12 bg-white/5 border-white/10"
// //         />
// //       </motion.div>

// //       {/* Nutritional Categories */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.2 }}
// //       >
// //         <h2 className="font-bold text-xl mb-4">Browse by Nutrition</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {categories.map((cat, i) => (
// //             <CategoryCard key={i} {...cat} />
// //           ))}
// //         </div>
// //       </motion.div>

// //       {/* Main Content */}
// //       <Tabs defaultValue="restaurants" className="w-full">
// //         <TabsList className="glass mb-6">
// //           <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
// //           <TabsTrigger value="deals">Hot Deals</TabsTrigger>
// //           <TabsTrigger value="orders">My Orders</TabsTrigger>
// //         </TabsList>

// //         <TabsContent value="restaurants" className="mt-0">
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //             {restaurants.map((restaurant, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: i * 0.1 }}
// //               >
// //                 <RestaurantCard {...restaurant} />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </TabsContent>

// //         <TabsContent value="deals" className="mt-0">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// //             {deals.map((deal, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: i * 0.1 }}
// //               >
// //                 <DealCard {...deal} />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </TabsContent>

// //         <TabsContent value="orders" className="mt-0">
// //           <div className="glass-card p-8 text-center">
// //             <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
// //               <ShoppingBag size={36} className="text-white/40" />
// //             </div>
// //             <h3 className="font-bold text-xl mb-2">No orders yet</h3>
// //             <p className="text-white/60 mb-6">Start ordering to see your order history here</p>
// //             <Button className="btn-primary">
// //               Browse Restaurants
// //             </Button>
// //           </div>
// //         </TabsContent>
// //       </Tabs>

// //       {/* Cashback Banner */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.4 }}
// //         className="glass-card p-6 relative overflow-hidden"
// //       >
// //         <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10" />
// //         <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
// //           <div className="flex items-center gap-4">
// //             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
// //               <Percent size={32} className="text-white" />
// //             </div>
// //             <div>
// //               <h3 className="font-bold text-xl">Earn Cashback on Every Order</h3>
// //               <p className="text-white/60">Get up to 12% coins back on food orders</p>
// //             </div>
// //           </div>
// //           <div className="flex items-center gap-4">
// //             <div className="text-center">
// //               <p className="text-2xl font-bold text-green-400">12%</p>
// //               <p className="text-xs text-white/50">Max Cashback</p>
// //             </div>
// //             <div className="w-px h-12 bg-white/20" />
// //             <div className="text-center">
// //               <p className="text-2xl font-bold text-blue-400">50+</p>
// //               <p className="text-xs text-white/50">Restaurants</p>
// //             </div>
// //           </div>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }



// //=============================================================================================================================================================================




// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   UtensilsCrossed,
//   Search,
//   Flame,
//   Zap,
//   Shield,
//   Heart,
//   Star,
//   Clock,
//   Sparkles,
//   Percent,
//   Bike,
//   ChevronRight,
//   ShoppingBag,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Badge } from '@/components/ui/badge';

// // Category Card
// function CategoryCard({
//   name,
//   description,
//   icon: Icon,
//   color,
//   count,
// }: {
//   name: string;
//   description: string;
//   icon: React.ElementType;
//   color: string;
//   count: number;
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03, y: -5 }}
//       className="glass-card p-6 cursor-pointer group relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0 L30 30 M30 0 L0 30" stroke="%23ffffff" stroke-width="0.5" stroke-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
//       <div className="relative z-10">
//         <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
//           <Icon size={28} className="text-white" />
//         </div>
//         <h3 className="font-bold text-lg mb-1">{name}</h3>
//         <p className="text-white/50 text-sm mb-3">{description}</p>
//         <div className="flex items-center justify-between">
//           <span className="text-sm text-white/40">{count} restaurants</span>
//           <ChevronRight size={16} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // Restaurant Card
// function RestaurantCard({
//   name,
//   cuisine,
//   rating,
//   deliveryTime,
//   deliveryFee,
//   cashback,
//   isOpen,
// }: {
//   name: string;
//   cuisine: string;
//   rating: number;
//   deliveryTime: string;
//   deliveryFee: string;
//   cashback?: number;
//   isOpen: boolean;
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="glass-card overflow-hidden cursor-pointer group"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="2" cy="2" r="1" fill="%2322c55e" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       {/* Image Placeholder */}
//       <div className="aspect-video relative overflow-hidden bg-white/5">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <UtensilsCrossed size={48} className="text-white/20" />
//         </div>
        
//         {/* Badges */}
//         <div className="absolute top-3 left-3 flex gap-2">
//           {!isOpen && (
//             <span className="px-2 py-1 rounded-full bg-gray-500/80 text-white text-xs">
//               Closed
//             </span>
//           )}
//           {cashback && (
//             <span className="px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium">
//               {cashback}% Cashback
//             </span>
//           )}
//         </div>

//         {/* Rating */}
//         <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
//           <Star size={12} className="text-yellow-400 fill-yellow-400" />
//           <span className="text-sm font-medium">{rating}</span>
//         </div>
//       </div>

//       {/* Info */}
//       <div className="p-4">
//         <h3 className="font-bold group-hover:text-green-400 transition-colors">{name}</h3>
//         <p className="text-white/50 text-sm">{cuisine}</p>
        
//         <div className="flex items-center gap-4 mt-3 text-sm text-white/50">
//           <span className="flex items-center gap-1">
//             <Clock size={14} />
//             {deliveryTime}
//           </span>
//           <span className="flex items-center gap-1">
//             <Bike size={14} />
//             {deliveryFee}
//           </span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // Deal Card
// function DealCard({
//   title,
//   restaurant,
//   originalPrice,
//   dealPrice,
//   savings,
//   expiresIn,
// }: {
//   title: string;
//   restaurant: string;
//   originalPrice: number;
//   dealPrice: number;
//   savings: number;
//   expiresIn: string;
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="glass-card p-4 cursor-pointer relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23f97316" fill-opacity="0.05"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent" />
//       <div className="relative z-10 flex gap-4">
//         <div className="w-24 h-24 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
//           <UtensilsCrossed size={32} className="text-white/30" />
//         </div>
//         <div className="flex-1">
//           <h4 className="font-bold mb-1">{title}</h4>
//           <p className="text-white/50 text-sm mb-2">{restaurant}</p>
          
//           <div className="flex items-center gap-3">
//             <span className="text-xl font-bold text-green-400">{dealPrice}</span>
//             <span className="text-sm text-white/40 line-through">{originalPrice}</span>
//             <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
//               Save {savings}%
//             </Badge>
//           </div>
          
//           <div className="flex items-center justify-between mt-2">
//             <span className="text-xs text-white/40">Expires in {expiresIn}</span>
//             <Button size="sm" className="btn-primary">
//               <Sparkles size={14} className="mr-1" />
//               Grab Deal
//             </Button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function Food() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const categories = [
//     {
//       name: 'Energy-Giving',
//       description: 'Carbs & proteins to fuel your day',
//       icon: Zap,
//       color: 'from-yellow-500 to-orange-500',
//       count: 45,
//     },
//     {
//       name: 'Body-Building',
//       description: 'High protein meals for strength',
//       icon: Flame,
//       color: 'from-red-500 to-pink-500',
//       count: 32,
//     },
//     {
//       name: 'Protective',
//       description: 'Immunity boosting nutritious food',
//       icon: Shield,
//       color: 'from-green-500 to-emerald-500',
//       count: 28,
//     },
//     {
//       name: 'Heart Healthy',
//       description: 'Low sodium, heart-friendly options',
//       icon: Heart,
//       color: 'from-rose-500 to-red-500',
//       count: 21,
//     },
//   ];

//   const restaurants = [
//     {
//       name: 'Green Bowl',
//       cuisine: 'Healthy Salads',
//       rating: 4.8,
//       deliveryTime: '25-35 min',
//       deliveryFee: 'Free',
//       cashback: 10,
//       isOpen: true,
//     },
//     {
//       name: 'Protein House',
//       cuisine: 'High Protein Meals',
//       rating: 4.6,
//       deliveryTime: '30-45 min',
//       deliveryFee: '30 coins',
//       cashback: 8,
//       isOpen: true,
//     },
//     {
//       name: 'Fresh Kitchen',
//       cuisine: 'Organic & Natural',
//       rating: 4.9,
//       deliveryTime: '20-30 min',
//       deliveryFee: 'Free',
//       cashback: 12,
//       isOpen: true,
//     },
//     {
//       name: 'Fit Meals',
//       cuisine: 'Calorie Counted',
//       rating: 4.5,
//       deliveryTime: '35-50 min',
//       deliveryFee: '40 coins',
//       cashback: 6,
//       isOpen: false,
//     },
//     {
//       name: 'Veggie Delight',
//       cuisine: 'Vegetarian',
//       rating: 4.7,
//       deliveryTime: '25-40 min',
//       deliveryFee: '25 coins',
//       cashback: 9,
//       isOpen: true,
//     },
//     {
//       name: 'Grill Master',
//       cuisine: 'Grilled Specialties',
//       rating: 4.4,
//       deliveryTime: '40-55 min',
//       deliveryFee: '50 coins',
//       cashback: 7,
//       isOpen: true,
//     },
//   ];

//   const deals = [
//     {
//       title: 'Superfood Salad Bowl',
//       restaurant: 'Green Bowl',
//       originalPrice: 450,
//       dealPrice: 299,
//       savings: 33,
//       expiresIn: '2 hours',
//     },
//     {
//       title: 'Protein Power Pack',
//       restaurant: 'Protein House',
//       originalPrice: 650,
//       dealPrice: 499,
//       savings: 23,
//       expiresIn: '4 hours',
//     },
//     {
//       title: 'Organic Buddha Bowl',
//       restaurant: 'Fresh Kitchen',
//       originalPrice: 550,
//       dealPrice: 399,
//       savings: 27,
//       expiresIn: '6 hours',
//     },
//   ];

//   return (
//     <div className="space-y-6 pb-20 relative">
//       {/* Background Pattern */}
//       <div 
//         className="fixed inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="20" cy="20" r="1" fill="%2322c55e" fill-opacity="0.03"/%3E%3C/svg%3E')`,
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
//             <UtensilsCrossed className="text-green-400" />
//             Food
//           </h1>
//           <p className="text-white/60">Order healthy meals, earn cashback</p>
//         </div>
//       </motion.div>

//       {/* Search */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="relative"
//       >
//         <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
//         <Input
//           type="text"
//           placeholder="Search restaurants, cuisines, dishes..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="pl-12 bg-white/5 border-white/10"
//         />
//       </motion.div>

//       {/* Nutritional Categories */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <h2 className="font-bold text-xl mb-4">Browse by Nutrition</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {categories.map((cat, i) => (
//             <CategoryCard key={i} {...cat} />
//           ))}
//         </div>
//       </motion.div>

//       {/* Main Content */}
//       <Tabs defaultValue="restaurants" className="w-full">
//         <TabsList className="glass mb-6">
//           <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
//           <TabsTrigger value="deals">Hot Deals</TabsTrigger>
//           <TabsTrigger value="orders">My Orders</TabsTrigger>
//         </TabsList>

//         <TabsContent value="restaurants" className="mt-0">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {restaurants.map((restaurant, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <RestaurantCard {...restaurant} />
//               </motion.div>
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="deals" className="mt-0">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//             {deals.map((deal, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <DealCard {...deal} />
//               </motion.div>
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="orders" className="mt-0">
//           <div className="glass-card p-8 text-center">
//             <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
//               <ShoppingBag size={36} className="text-white/40" />
//             </div>
//             <h3 className="font-bold text-xl mb-2">No orders yet</h3>
//             <p className="text-white/60 mb-6">Start ordering to see your order history here</p>
//             <Button className="btn-primary">
//               Browse Restaurants
//             </Button>
//           </div>
//         </TabsContent>
//       </Tabs>

//       {/* Cashback Banner */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="glass-card p-6 relative overflow-hidden"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%2322c55e" fill-opacity="0.1"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10" />
//         <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-4">
//             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
//               <Percent size={32} className="text-white" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xl">Earn Cashback on Every Order</h3>
//               <p className="text-white/60">Get up to 12% coins back on food orders</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="text-center">
//               <p className="text-2xl font-bold text-green-400">12%</p>
//               <p className="text-xs text-white/50">Max Cashback</p>
//             </div>
//             <div className="w-px h-12 bg-white/20" />
//             <div className="text-center">
//               <p className="text-2xl font-bold text-blue-400">50+</p>
//               <p className="text-xs text-white/50">Restaurants</p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }





////////////////////////////=====================================================================================================================================================




import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed,
  Search,
  Flame,
  Zap,
  Shield,
  Heart,
  Star,
  Clock,
  Sparkles,
  Percent,
  Bike,
  ChevronRight,
  ShoppingBag,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

// Background images for food
const BG_IMAGES = {
  energy: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=300&fit=crop',
  protein: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop',
  immunity: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
  heart: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
  hero: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop',
  cashback: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
};

// Category Card with Background
function CategoryCard({
  name,
  description,
  icon: Icon,
  color,
  count,
  bgImage,
}: {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  count: number;
  bgImage: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="glass-card p-6 cursor-pointer group relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.85) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${color}`} />
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
          <Icon size={28} className="text-white" />
        </div>
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-white/50 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/40">{count} restaurants</span>
          <ChevronRight size={16} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  );
}

// Restaurant Card with Background
function RestaurantCard({
  name,
  cuisine,
  rating,
  deliveryTime,
  deliveryFee,
  cashback,
  isOpen,
  bgImage,
}: {
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  cashback?: number;
  isOpen: boolean;
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
      {/* Image Placeholder */}
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <UtensilsCrossed size={64} className="text-white/20" />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {!isOpen && (
            <span className="px-2 py-1 rounded-full bg-gray-500/80 text-white text-xs backdrop-blur-sm">
              Closed
            </span>
          )}
          {cashback && (
            <span className="px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium backdrop-blur-sm">
              {cashback}% Cashback
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 relative z-10">
        <h3 className="font-bold group-hover:text-green-400 transition-colors">{name}</h3>
        <p className="text-white/50 text-sm">{cuisine}</p>
        
        <div className="flex items-center gap-4 mt-3 text-sm text-white/50">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {deliveryTime}
          </span>
          <span className="flex items-center gap-1">
            <Bike size={14} />
            {deliveryFee}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Deal Card with Background
function DealCard({
  title,
  restaurant,
  originalPrice,
  dealPrice,
  savings,
  expiresIn,
  bgImage,
}: {
  title: string;
  restaurant: string;
  originalPrice: number;
  dealPrice: number;
  savings: number;
  expiresIn: string;
  bgImage: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-4 cursor-pointer relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 flex gap-4">
        <div className="w-24 h-24 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
          <UtensilsCrossed size={32} className="text-white/30" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold mb-1">{title}</h4>
          <p className="text-white/50 text-sm mb-2">{restaurant}</p>
          
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-green-400">{dealPrice}</span>
            <span className="text-sm text-white/40 line-through">{originalPrice}</span>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              Save {savings}%
            </Badge>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-white/40">Expires in {expiresIn}</span>
            <Button size="sm" className="btn-primary">
              <Sparkles size={14} className="mr-1" />
              Grab Deal
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Food() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      name: 'Energy-Giving',
      description: 'Carbs & proteins to fuel your day',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      count: 45,
      bgImage: BG_IMAGES.energy,
    },
    {
      name: 'Body-Building',
      description: 'High protein meals for strength',
      icon: Flame,
      color: 'from-red-500 to-pink-500',
      count: 32,
      bgImage: BG_IMAGES.protein,
    },
    {
      name: 'Protective',
      description: 'Immunity boosting nutritious food',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      count: 28,
      bgImage: BG_IMAGES.immunity,
    },
    {
      name: 'Heart Healthy',
      description: 'Low sodium, heart-friendly options',
      icon: Heart,
      color: 'from-rose-500 to-red-500',
      count: 21,
      bgImage: BG_IMAGES.heart,
    },
  ];

  const restaurants = [
    {
      name: 'Green Bowl',
      cuisine: 'Healthy Salads',
      rating: 4.8,
      deliveryTime: '25-35 min',
      deliveryFee: 'Free',
      cashback: 10,
      isOpen: true,
      bgImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    },
    {
      name: 'Protein House',
      cuisine: 'High Protein Meals',
      rating: 4.6,
      deliveryTime: '30-45 min',
      deliveryFee: '30 coins',
      cashback: 8,
      isOpen: true,
      bgImage: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop',
    },
    {
      name: 'Fresh Kitchen',
      cuisine: 'Organic & Natural',
      rating: 4.9,
      deliveryTime: '20-30 min',
      deliveryFee: 'Free',
      cashback: 12,
      isOpen: true,
      bgImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
    },
    {
      name: 'Fit Meals',
      cuisine: 'Calorie Counted',
      rating: 4.5,
      deliveryTime: '35-50 min',
      deliveryFee: '40 coins',
      cashback: 6,
      isOpen: false,
      bgImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    },
    {
      name: 'Veggie Delight',
      cuisine: 'Vegetarian',
      rating: 4.7,
      deliveryTime: '25-40 min',
      deliveryFee: '25 coins',
      cashback: 9,
      isOpen: true,
      bgImage: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400&h=300&fit=crop',
    },
    {
      name: 'Grill Master',
      cuisine: 'Grilled Specialties',
      rating: 4.4,
      deliveryTime: '40-55 min',
      deliveryFee: '50 coins',
      cashback: 7,
      isOpen: true,
      bgImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    },
  ];

  const deals = [
    {
      title: 'Superfood Salad Bowl',
      restaurant: 'Green Bowl',
      originalPrice: 450,
      dealPrice: 299,
      savings: 33,
      expiresIn: '2 hours',
      bgImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop',
    },
    {
      title: 'Protein Power Pack',
      restaurant: 'Protein House',
      originalPrice: 650,
      dealPrice: 499,
      savings: 23,
      expiresIn: '4 hours',
      bgImage: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=200&fit=crop',
    },
    {
      title: 'Organic Buddha Bowl',
      restaurant: 'Fresh Kitchen',
      originalPrice: 550,
      dealPrice: 399,
      savings: 27,
      expiresIn: '6 hours',
      bgImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=200&fit=crop',
    },
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
            <UtensilsCrossed className="text-green-400" />
            Food
          </h1>
          <p className="text-white/60">Order healthy meals, earn cashback</p>
        </div>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
        <Input
          type="text"
          placeholder="Search restaurants, cuisines, dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 bg-white/5 border-white/10"
        />
      </motion.div>

      {/* Nutritional Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-bold text-xl mb-4">Browse by Nutrition</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={i} {...cat} />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <Tabs defaultValue="restaurants" className="w-full">
        <TabsList className="glass mb-6 backdrop-blur-xl">
          <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
          <TabsTrigger value="deals">Hot Deals</TabsTrigger>
          <TabsTrigger value="orders">My Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="restaurants" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurants.map((restaurant, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <RestaurantCard {...restaurant} />
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="deals" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {deals.map((deal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <DealCard {...deal} />
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="orders" className="mt-0">
          <div className="glass-card p-8 text-center relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.hero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                <ShoppingBag size={36} className="text-white/40" />
              </div>
              <h3 className="font-bold text-xl mb-2">No orders yet</h3>
              <p className="text-white/60 mb-6">Start ordering to see your order history here</p>
              <Button className="btn-primary">
                Browse Restaurants
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Cashback Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.9) 0%, rgba(10, 14, 23, 0.85) 100%), url(${BG_IMAGES.cashback})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
              <Percent size={32} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Earn Cashback on Every Order</h3>
              <p className="text-white/60">Get up to 12% coins back on food orders</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">12%</p>
              <p className="text-xs text-white/50">Max Cashback</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-400">50+</p>
              <p className="text-xs text-white/50">Restaurants</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}