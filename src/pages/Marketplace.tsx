// // import { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import {
// //   ShoppingBag,
// //   Search,
// //   Heart,
// //   Share2,
// //   Sparkles,
// //   TrendingUp,
// //   Store,
// //   Package,
// //   Plus,
// //   Star,
// //   BadgeCheck,
// //   Percent,
// // } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Slider } from '@/components/ui/slider';

// // // Product Card Component
// // function ProductCard({
// //   name,
// //   price,
// //   originalPrice,
// //   rating,
// //   reviews,
// //   seller,
// //   isVerified,
// //   cashback,
// //   tags,
// // }: {
// //   name: string;
// //   price: number;
// //   originalPrice?: number;
// //   rating: number;
// //   reviews: number;
// //   seller: string;
// //   isVerified?: boolean;
// //   cashback?: number;
// //   tags?: string[];
// // }) {
// //   const [isLiked, setIsLiked] = useState(false);

// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.02, y: -5 }}
// //       className="glass-card overflow-hidden group cursor-pointer"
// //     >
// //       {/* Product Image */}
// //       <div className="aspect-square relative overflow-hidden bg-white/5">
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <Package size={64} className="text-white/20" />
// //         </div>

// //         {/* Tags */}
// //         <div className="absolute top-3 left-3 flex flex-wrap gap-2">
// //           {cashback && (
// //             <span className="px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium">
// //               {cashback}% Cashback
// //             </span>
// //           )}
// //           {tags?.map((tag, i) => (
// //             <span key={i} className="px-2 py-1 rounded-full bg-white/20 text-white text-xs">
// //               {tag}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Actions */}
// //         <div className="absolute top-3 right-3 flex flex-col gap-2">
// //           <button
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               setIsLiked(!isLiked);
// //             }}
// //             className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
// //               isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
// //             }`}
// //           >
// //             <Heart size={16} className={isLiked ? 'fill-current' : ''} />
// //           </button>
// //           <button className="w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors">
// //             <Share2 size={16} />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Product Info */}
// //       <div className="p-4">
// //         <div className="flex items-start justify-between mb-2">
// //           <h3 className="font-medium line-clamp-2 group-hover:text-blue-400 transition-colors">{name}</h3>
// //         </div>

// //         {/* Seller */}
// //         <div className="flex items-center gap-1 text-sm text-white/50 mb-2">
// //           <span>by {seller}</span>
// //           {isVerified && <BadgeCheck size={14} className="text-blue-400" />}
// //         </div>

// //         {/* Rating */}
// //         <div className="flex items-center gap-2 mb-3">
// //           <div className="flex items-center gap-1">
// //             <Star size={14} className="text-yellow-400 fill-yellow-400" />
// //             <span className="text-sm font-medium">{rating}</span>
// //           </div>
// //           <span className="text-sm text-white/40">({reviews})</span>
// //         </div>

// //         {/* Price */}
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center gap-2">
// //             <span className="text-xl font-bold">{price.toLocaleString()}</span>
// //             <span className="text-xs text-white/50">coins</span>
// //             {originalPrice && (
// //               <span className="text-sm text-white/40 line-through">{originalPrice.toLocaleString()}</span>
// //             )}
// //           </div>
// //           <Button size="sm" className="btn-primary">
// //             <Sparkles size={14} className="mr-1" />
// //             Buy
// //           </Button>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // // Reseller Card
// // function ResellerCard() {
// //   const [margin, setMargin] = useState(20);
// //   const basePrice = 1000;
// //   const sellingPrice = basePrice + margin;
// //   const profit = margin;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="glass-card p-6"
// //     >
// //       <div className="flex items-center gap-4 mb-6">
// //         <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
// //           <TrendingUp size={28} className="text-white" />
// //         </div>
// //         <div>
// //           <h3 className="font-bold text-lg">Resell & Earn</h3>
// //           <p className="text-white/60 text-sm">Meesho-style reselling</p>
// //         </div>
// //       </div>

// //       <div className="space-y-4 mb-6">
// //         <div className="p-4 rounded-xl bg-white/5">
// //           <div className="flex items-center gap-4">
// //             <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
// //               <Package size={28} className="text-white/40" />
// //             </div>
// //             <div>
// //               <p className="font-medium">Wireless Earbuds Pro</p>
// //               <p className="text-white/50 text-sm">Base: {basePrice} coins</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div>
// //           <div className="flex items-center justify-between mb-2">
// //             <span className="text-sm text-white/60">Your Margin</span>
// //             <span className="font-bold">{margin} coins</span>
// //           </div>
// //           <Slider
// //             value={[margin]}
// //             onValueChange={(value) => setMargin(value[0])}
// //             max={200}
// //             min={10}
// //             step={5}
// //           />
// //         </div>

// //         <div className="grid grid-cols-2 gap-4">
// //           <div className="p-3 rounded-xl bg-white/5">
// //             <p className="text-white/50 text-sm">Selling Price</p>
// //             <p className="text-xl font-bold">{sellingPrice}</p>
// //           </div>
// //           <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30">
// //             <p className="text-green-400 text-sm">Your Profit</p>
// //             <p className="text-xl font-bold text-green-400">+{profit}</p>
// //           </div>
// //         </div>
// //       </div>

// //       <Button className="w-full btn-primary">
// //         <Share2 size={18} className="mr-2" />
// //         Share & Sell
// //       </Button>
// //     </motion.div>
// //   );
// // }

// // // Vendor Dashboard
// // function VendorDashboard() {
// //   const stats = [
// //     { label: 'Total Sales', value: '456', change: '+12%' },
// //     { label: 'Revenue', value: '125K', change: '+8%' },
// //     { label: 'Products', value: '28', change: '+3' },
// //     { label: 'Returns', value: '2%', change: '-1%' },
// //   ];

// //   return (
// //     <div className="space-y-6">
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //         {stats.map((stat, i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: i * 0.1 }}
// //             className="glass-card p-4"
// //           >
// //             <p className="text-white/50 text-sm">{stat.label}</p>
// //             <div className="flex items-end justify-between">
// //               <span className="text-2xl font-bold">{stat.value}</span>
// //               <span className="text-green-400 text-sm">{stat.change}</span>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>

// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="glass-card p-6"
// //       >
// //         <div className="flex items-center justify-between mb-6">
// //           <h3 className="font-bold text-lg">My Products</h3>
// //           <Button className="btn-primary">
// //             <Plus size={16} className="mr-2" />
// //             Add Product
// //           </Button>
// //         </div>

// //         <div className="space-y-4">
// //           {[
// //             { name: 'Wireless Earbuds Pro', price: 1000, stock: 45, sales: 234 },
// //             { name: 'Smart Watch Series 5', price: 2500, stock: 23, sales: 89 },
// //             { name: 'Portable Charger 20K', price: 600, stock: 78, sales: 456 },
// //           ].map((product, i) => (
// //             <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
// //               <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
// //                 <Package size={24} className="text-white/40" />
// //               </div>
// //               <div className="flex-1">
// //                 <h4 className="font-medium">{product.name}</h4>
// //                 <div className="flex items-center gap-4 text-sm text-white/50 mt-1">
// //                   <span>{product.price.toLocaleString()} coins</span>
// //                   <span>{product.stock} in stock</span>
// //                 </div>
// //               </div>
// //               <div className="text-right">
// //                 <p className="font-bold">{product.sales}</p>
// //                 <p className="text-xs text-white/50">sold</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default function Marketplace() {
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [isVendorView, setIsVendorView] = useState(false);

// //   const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Sports', 'Books'];

// //   const products = [
// //     {
// //       name: 'Wireless Earbuds Pro with Active Noise Cancellation',
// //       price: 1000,
// //       originalPrice: 1500,
// //       rating: 4.8,
// //       reviews: 234,
// //       seller: 'TechStore',
// //       isVerified: true,
// //       cashback: 5,
// //       tags: ['Best Seller'],
// //     },
// //     {
// //       name: 'Smart Watch Series 5 - Fitness Tracking',
// //       price: 2500,
// //       rating: 4.6,
// //       reviews: 189,
// //       seller: 'GadgetHub',
// //       isVerified: true,
// //       cashback: 8,
// //     },
// //     {
// //       name: 'Portable Charger 20000mAh Fast Charging',
// //       price: 600,
// //       originalPrice: 800,
// //       rating: 4.9,
// //       reviews: 567,
// //       seller: 'PowerMax',
// //       cashback: 3,
// //       tags: ['Hot Deal'],
// //     },
// //     {
// //       name: 'Bluetooth Speaker Waterproof IPX7',
// //       price: 800,
// //       rating: 4.5,
// //       reviews: 123,
// //       seller: 'AudioZone',
// //       isVerified: true,
// //       cashback: 4,
// //     },
// //     {
// //       name: 'Wireless Mouse Ergonomic Design',
// //       price: 350,
// //       originalPrice: 500,
// //       rating: 4.7,
// //       reviews: 89,
// //       seller: 'TechStore',
// //       cashback: 2,
// //     },
// //     {
// //       name: 'LED Desk Lamp with Wireless Charger',
// //       price: 1200,
// //       rating: 4.4,
// //       reviews: 45,
// //       seller: 'HomeComfort',
// //       isVerified: true,
// //       cashback: 6,
// //       tags: ['New'],
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
// //             <ShoppingBag className="text-pink-400" />
// //             Marketplace
// //           </h1>
// //           <p className="text-white/60">Shop smart, earn cashback, resell for profit</p>
// //         </div>
// //         <div className="flex items-center gap-3">
// //           <Button
// //             variant={isVendorView ? 'default' : 'outline'}
// //             onClick={() => setIsVendorView(!isVendorView)}
// //             className={isVendorView ? 'btn-primary' : 'btn-secondary'}
// //           >
// //             <Store size={16} className="mr-2" />
// //             {isVendorView ? 'Buyer View' : 'Seller Portal'}
// //           </Button>
// //         </div>
// //       </motion.div>

// //       {isVendorView ? (
// //         <VendorDashboard />
// //       ) : (
// //         <>
// //           {/* Search and Filter */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.1 }}
// //             className="flex flex-col sm:flex-row gap-4"
// //           >
// //             <div className="relative flex-1">
// //               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
// //               <Input
// //                 type="text"
// //                 placeholder="Search products..."
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 className="pl-12 bg-white/5 border-white/10"
// //               />
// //             </div>
// //             <Button variant="outline" className="btn-secondary">
// //               <Sparkles size={18} className="mr-2" />
// //               Filter
// //             </Button>
// //           </motion.div>

// //           {/* Main Content Grid */}
// //           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
// //             {/* Products Grid - Takes 3 columns */}
// //             <div className="lg:col-span-3">
// //               {/* Categories */}
// //               <div className="flex flex-wrap gap-2 mb-6">
// //                 {categories.map((cat, i) => (
// //                   <button
// //                     key={i}
// //                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
// //                       i === 0
// //                         ? 'bg-pink-500 text-white'
// //                         : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
// //                     }`}
// //                   >
// //                     {cat}
// //                   </button>
// //                 ))}
// //               </div>

// //               {/* Products Grid */}
// //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //                 {products.map((product, i) => (
// //                   <motion.div
// //                     key={i}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: i * 0.1 }}
// //                   >
// //                     <ProductCard {...product} />
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Sidebar - Takes 1 column */}
// //             <div className="space-y-6">
// //               {/* Reseller Card */}
// //               <ResellerCard />

// //               {/* Trending Products */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.3 }}
// //                 className="glass-card p-6"
// //               >
// //                 <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
// //                   <TrendingUp size={20} className="text-green-400" />
// //                   Trending Now
// //                 </h3>
// //                 <div className="space-y-3">
// //                   {[
// //                     { name: 'Wireless Earbuds Pro', sales: 234 },
// //                     { name: 'Smart Watch Series 5', sales: 189 },
// //                     { name: 'Portable Charger', sales: 567 },
// //                   ].map((item, i) => (
// //                     <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
// //                       <span className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-sm font-medium">
// //                         {i + 1}
// //                       </span>
// //                       <div className="flex-1">
// //                         <p className="text-sm font-medium line-clamp-1">{item.name}</p>
// //                         <p className="text-xs text-white/50">{item.sales} sold today</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </motion.div>

// //               {/* Cashback Info */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.4 }}
// //                 className="glass-card p-6"
// //               >
// //                 <div className="flex items-center gap-3 mb-4">
// //                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
// //                     <Percent size={24} className="text-white" />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-bold">Cashback Program</h3>
// //                     <p className="text-white/50 text-sm">Earn on every purchase</p>
// //                   </div>
// //                 </div>
// //                 <div className="space-y-2 text-sm">
// //                   <div className="flex justify-between">
// //                     <span className="text-white/60">Electronics</span>
// //                     <span className="text-green-400">Up to 8%</span>
// //                   </div>
// //                   <div className="flex justify-between">
// //                     <span className="text-white/60">Fashion</span>
// //                     <span className="text-green-400">Up to 5%</span>
// //                   </div>
// //                   <div className="flex justify-between">
// //                     <span className="text-white/60">Home</span>
// //                     <span className="text-green-400">Up to 6%</span>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // }






// //======================================================================================================================================================




// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   ShoppingBag,
//   Search,
//   Heart,
//   Share2,
//   Sparkles,
//   TrendingUp,
//   Store,
//   Package,
//   Plus,
//   Star,
//   BadgeCheck,
//   Percent,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Slider } from '@/components/ui/slider';

// // Product Card Component
// function ProductCard({
//   name,
//   price,
//   originalPrice,
//   rating,
//   reviews,
//   seller,
//   isVerified,
//   cashback,
//   tags,
// }: {
//   name: string;
//   price: number;
//   originalPrice?: number;
//   rating: number;
//   reviews: number;
//   seller: string;
//   isVerified?: boolean;
//   cashback?: number;
//   tags?: string[];
// }) {
//   const [isLiked, setIsLiked] = useState(false);

//   return (
//     <motion.div
//       whileHover={{ scale: 1.02, y: -5 }}
//       className="glass-card overflow-hidden group cursor-pointer"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="2" fill="%23ec4899" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       {/* Product Image */}
//       <div className="aspect-square relative overflow-hidden bg-white/5">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Package size={64} className="text-white/20" />
//         </div>

//         {/* Tags */}
//         <div className="absolute top-3 left-3 flex flex-wrap gap-2">
//           {cashback && (
//             <span className="px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium">
//               {cashback}% Cashback
//             </span>
//           )}
//           {tags?.map((tag, i) => (
//             <span key={i} className="px-2 py-1 rounded-full bg-white/20 text-white text-xs">
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Actions */}
//         <div className="absolute top-3 right-3 flex flex-col gap-2">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setIsLiked(!isLiked);
//             }}
//             className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
//               isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
//             }`}
//           >
//             <Heart size={16} className={isLiked ? 'fill-current' : ''} />
//           </button>
//           <button className="w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors">
//             <Share2 size={16} />
//           </button>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="p-4">
//         <div className="flex items-start justify-between mb-2">
//           <h3 className="font-medium line-clamp-2 group-hover:text-blue-400 transition-colors">{name}</h3>
//         </div>

//         {/* Seller */}
//         <div className="flex items-center gap-1 text-sm text-white/50 mb-2">
//           <span>by {seller}</span>
//           {isVerified && <BadgeCheck size={14} className="text-blue-400" />}
//         </div>

//         {/* Rating */}
//         <div className="flex items-center gap-2 mb-3">
//           <div className="flex items-center gap-1">
//             <Star size={14} className="text-yellow-400 fill-yellow-400" />
//             <span className="text-sm font-medium">{rating}</span>
//           </div>
//           <span className="text-sm text-white/40">({reviews})</span>
//         </div>

//         {/* Price */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <span className="text-xl font-bold">{price.toLocaleString()}</span>
//             <span className="text-xs text-white/50">coins</span>
//             {originalPrice && (
//               <span className="text-sm text-white/40 line-through">{originalPrice.toLocaleString()}</span>
//             )}
//           </div>
//           <Button size="sm" className="btn-primary">
//             <Sparkles size={14} className="mr-1" />
//             Buy
//           </Button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // Reseller Card
// function ResellerCard() {
//   const [margin, setMargin] = useState(20);
//   const basePrice = 1000;
//   const sellingPrice = basePrice + margin;
//   const profit = margin;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="glass-card p-6 relative overflow-hidden"
//       style={{
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ec4899" fill-opacity="0.05"/%3E%3C/svg%3E')`,
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent" />
//       <div className="relative z-10">
//         <div className="flex items-center gap-4 mb-6">
//           <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
//             <TrendingUp size={28} className="text-white" />
//           </div>
//           <div>
//             <h3 className="font-bold text-lg">Resell & Earn</h3>
//             <p className="text-white/60 text-sm">Meesho-style reselling</p>
//           </div>
//         </div>

//         <div className="space-y-4 mb-6">
//           <div className="p-4 rounded-xl bg-white/5">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
//                 <Package size={28} className="text-white/40" />
//               </div>
//               <div>
//                 <p className="font-medium">Wireless Earbuds Pro</p>
//                 <p className="text-white/50 text-sm">Base: {basePrice} coins</p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm text-white/60">Your Margin</span>
//               <span className="font-bold">{margin} coins</span>
//             </div>
//             <Slider
//               value={[margin]}
//               onValueChange={(value) => setMargin(value[0])}
//               max={200}
//               min={10}
//               step={5}
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="p-3 rounded-xl bg-white/5">
//               <p className="text-white/50 text-sm">Selling Price</p>
//               <p className="text-xl font-bold">{sellingPrice}</p>
//             </div>
//             <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30">
//               <p className="text-green-400 text-sm">Your Profit</p>
//               <p className="text-xl font-bold text-green-400">+{profit}</p>
//             </div>
//           </div>
//         </div>

//         <Button className="w-full btn-primary">
//           <Share2 size={18} className="mr-2" />
//           Share & Sell
//         </Button>
//       </div>
//     </motion.div>
//   );
// }

// // Vendor Dashboard
// function VendorDashboard() {
//   const stats = [
//     { label: 'Total Sales', value: '456', change: '+12%' },
//     { label: 'Revenue', value: '125K', change: '+8%' },
//     { label: 'Products', value: '28', change: '+3' },
//     { label: 'Returns', value: '2%', change: '-1%' },
//   ];

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {stats.map((stat, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             className="glass-card p-4 relative overflow-hidden"
//             style={{
//               backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="3" cy="3" r="1" fill="%23ec4899" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//               backgroundRepeat: 'repeat',
//             }}
//           >
//             <p className="text-white/50 text-sm">{stat.label}</p>
//             <div className="flex items-end justify-between">
//               <span className="text-2xl font-bold">{stat.value}</span>
//               <span className="text-green-400 text-sm">{stat.change}</span>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="glass-card p-6 relative overflow-hidden"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23a855f7" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
//         <div className="relative z-10">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="font-bold text-lg">My Products</h3>
//             <Button className="btn-primary">
//               <Plus size={16} className="mr-2" />
//               Add Product
//             </Button>
//           </div>

//           <div className="space-y-4">
//             {[
//               { name: 'Wireless Earbuds Pro', price: 1000, stock: 45, sales: 234 },
//               { name: 'Smart Watch Series 5', price: 2500, stock: 23, sales: 89 },
//               { name: 'Portable Charger 20K', price: 600, stock: 78, sales: 456 },
//             ].map((product, i) => (
//               <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
//                 <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
//                   <Package size={24} className="text-white/40" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-medium">{product.name}</h4>
//                   <div className="flex items-center gap-4 text-sm text-white/50 mt-1">
//                     <span>{product.price.toLocaleString()} coins</span>
//                     <span>{product.stock} in stock</span>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="font-bold">{product.sales}</p>
//                   <p className="text-xs text-white/50">sold</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default function Marketplace() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isVendorView, setIsVendorView] = useState(false);

//   const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Sports', 'Books'];

//   const products = [
//     {
//       name: 'Wireless Earbuds Pro with Active Noise Cancellation',
//       price: 1000,
//       originalPrice: 1500,
//       rating: 4.8,
//       reviews: 234,
//       seller: 'TechStore',
//       isVerified: true,
//       cashback: 5,
//       tags: ['Best Seller'],
//     },
//     {
//       name: 'Smart Watch Series 5 - Fitness Tracking',
//       price: 2500,
//       rating: 4.6,
//       reviews: 189,
//       seller: 'GadgetHub',
//       isVerified: true,
//       cashback: 8,
//     },
//     {
//       name: 'Portable Charger 20000mAh Fast Charging',
//       price: 600,
//       originalPrice: 800,
//       rating: 4.9,
//       reviews: 567,
//       seller: 'PowerMax',
//       cashback: 3,
//       tags: ['Hot Deal'],
//     },
//     {
//       name: 'Bluetooth Speaker Waterproof IPX7',
//       price: 800,
//       rating: 4.5,
//       reviews: 123,
//       seller: 'AudioZone',
//       isVerified: true,
//       cashback: 4,
//     },
//     {
//       name: 'Wireless Mouse Ergonomic Design',
//       price: 350,
//       originalPrice: 500,
//       rating: 4.7,
//       reviews: 89,
//       seller: 'TechStore',
//       cashback: 2,
//     },
//     {
//       name: 'LED Desk Lamp with Wireless Charger',
//       price: 1200,
//       rating: 4.4,
//       reviews: 45,
//       seller: 'HomeComfort',
//       isVerified: true,
//       cashback: 6,
//       tags: ['New'],
//     },
//   ];

//   return (
//     <div className="space-y-6 pb-20 relative">
//       {/* Background Pattern */}
//       <div 
//         className="fixed inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ec4899" fill-opacity="0.02"/%3E%3C/svg%3E')`,
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
//             <ShoppingBag className="text-pink-400" />
//             Marketplace
//           </h1>
//           <p className="text-white/60">Shop smart, earn cashback, resell for profit</p>
//         </div>
//         <div className="flex items-center gap-3">
//           <Button
//             variant={isVendorView ? 'default' : 'outline'}
//             onClick={() => setIsVendorView(!isVendorView)}
//             className={isVendorView ? 'btn-primary' : 'btn-secondary'}
//           >
//             <Store size={16} className="mr-2" />
//             {isVendorView ? 'Buyer View' : 'Seller Portal'}
//           </Button>
//         </div>
//       </motion.div>

//       {isVendorView ? (
//         <VendorDashboard />
//       ) : (
//         <>
//           {/* Search and Filter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
//               <Input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-12 bg-white/5 border-white/10"
//               />
//             </div>
//             <Button variant="outline" className="btn-secondary">
//               <Sparkles size={18} className="mr-2" />
//               Filter
//             </Button>
//           </motion.div>

//           {/* Main Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//             {/* Products Grid - Takes 3 columns */}
//             <div className="lg:col-span-3">
//               {/* Categories */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {categories.map((cat, i) => (
//                   <button
//                     key={i}
//                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                       i === 0
//                         ? 'bg-pink-500 text-white'
//                         : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>

//               {/* Products Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {products.map((product, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                   >
//                     <ProductCard {...product} />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Sidebar - Takes 1 column */}
//             <div className="space-y-6">
//               {/* Reseller Card */}
//               <ResellerCard />

//               {/* Trending Products */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="glass-card p-6 relative overflow-hidden"
//                 style={{
//                   backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%2322c55e" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//                   backgroundRepeat: 'repeat',
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
//                 <div className="relative z-10">
//                   <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
//                     <TrendingUp size={20} className="text-green-400" />
//                     Trending Now
//                   </h3>
//                   <div className="space-y-3">
//                     {[
//                       { name: 'Wireless Earbuds Pro', sales: 234 },
//                       { name: 'Smart Watch Series 5', sales: 189 },
//                       { name: 'Portable Charger', sales: 567 },
//                     ].map((item, i) => (
//                       <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
//                         <span className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-sm font-medium">
//                           {i + 1}
//                         </span>
//                         <div className="flex-1">
//                           <p className="text-sm font-medium line-clamp-1">{item.name}</p>
//                           <p className="text-xs text-white/50">{item.sales} sold today</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Cashback Info */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="glass-card p-6 relative overflow-hidden"
//                 style={{
//                   backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%2322c55e" fill-opacity="0.05"/%3E%3C/svg%3E')`,
//                   backgroundRepeat: 'repeat',
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
//                 <div className="relative z-10">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
//                       <Percent size={24} className="text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold">Cashback Program</h3>
//                       <p className="text-white/50 text-sm">Earn on every purchase</p>
//                     </div>
//                   </div>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-white/60">Electronics</span>
//                       <span className="text-green-400">Up to 8%</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-white/60">Fashion</span>
//                       <span className="text-green-400">Up to 5%</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-white/60">Home</span>
//                       <span className="text-green-400">Up to 6%</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Search,
  Heart,
  Share2,
  Sparkles,
  TrendingUp,
  Store,
  Package,
  Plus,
  Star,
  BadgeCheck,
  Percent,
  Filter,
  X,
  ChevronDown,
  ShoppingCart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { useNavigate } from 'react-router-dom';

// Product Card Component
function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  seller,
  isVerified,
  cashback,
  tags,
  image,
  onBuy,
  onLike,
  onShare,
  isLiked: initialLiked,
}: {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  seller: string;
  isVerified?: boolean;
  cashback?: number;
  tags?: string[];
  image?: string;
  onBuy: (product: any) => void;
  onLike: (id: string) => void;
  onShare: (product: any) => void;
  isLiked: boolean;
}) {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    onLike(id);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShare({ id, name, price });
  };

  const handleBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBuy({ id, name, price, seller });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass-card overflow-hidden group cursor-pointer relative"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="2" fill="%23ec4899" fill-opacity="0.03"/%3E%3C/svg%3E')`,
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Hover Glow Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-pink-500/10 via-transparent to-transparent pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Product Image */}
      <div className="aspect-square relative overflow-hidden bg-white/5">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Package size={64} className="text-white/20" />
          </div>
        )}
        
        {/* Animated Shine Effect */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: isHovered ? '100%' : '-100%', opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {cashback && (
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium cursor-pointer"
            >
              {cashback}% Cashback
            </motion.span>
          )}
          {tags?.map((tag, i) => (
            <motion.span 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="px-2 py-1 rounded-full bg-white/20 text-white text-xs cursor-pointer"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart size={16} className={isLiked ? 'fill-current' : ''} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShare}
            className="w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <Share2 size={16} />
          </motion.button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 relative z-10">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-medium line-clamp-2 group-hover:text-pink-400 transition-colors">{name}</h3>
        </div>

        {/* Seller */}
        <div className="flex items-center gap-1 text-sm text-white/50 mb-2">
          <span>by {seller}</span>
          {isVerified && <BadgeCheck size={14} className="text-blue-400" />}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-white/40">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">{price.toLocaleString()}</span>
            <span className="text-xs text-white/50">coins</span>
            {originalPrice && (
              <span className="text-sm text-white/40 line-through">{originalPrice.toLocaleString()}</span>
            )}
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="sm" 
              className="btn-primary bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              onClick={handleBuy}
            >
              <Sparkles size={14} className="mr-1" />
              Buy
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Reseller Card
function ResellerCard({ onShare }: { onShare: () => void }) {
  const [margin, setMargin] = useState(20);
  const [isExpanded, setIsExpanded] = useState(false);
  const basePrice = 1000;
  const sellingPrice = basePrice + margin;
  const profit = margin;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ec4899" fill-opacity="0.05"/%3E%3C/svg%3E')`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent" />
      
      {/* Animated Background GIF Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gradient-conic from-pink-500 via-purple-500 to-pink-500 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center cursor-pointer"
          >
            <TrendingUp size={28} className="text-white" />
          </motion.div>
          <div>
            <h3 className="font-bold text-lg">Resell & Earn</h3>
            <p className="text-white/60 text-sm">Meesho-style reselling</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-xl bg-white/5 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
                <Package size={28} className="text-white/40" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Wireless Earbuds Pro</p>
                <p className="text-white/50 text-sm">Base: {basePrice} coins</p>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-white/50" />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <p className="text-sm text-white/70">High demand product with 234 sales today. Perfect for reselling!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white/60">Your Margin</span>
              <motion.span 
                key={margin}
                initial={{ scale: 1.2, color: '#10b981' }}
                animate={{ scale: 1, color: '#ffffff' }}
                className="font-bold"
              >
                {margin} coins
              </motion.span>
            </div>
            <Slider
              value={[margin]}
              onValueChange={(value) => setMargin(value[0])}
              max={200}
              min={10}
              step={5}
              className="cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-3 rounded-xl bg-white/5 cursor-pointer"
            >
              <p className="text-white/50 text-sm">Selling Price</p>
              <p className="text-xl font-bold">{sellingPrice}</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 cursor-pointer"
            >
              <p className="text-green-400 text-sm">Your Profit</p>
              <motion.p 
                key={profit}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-xl font-bold text-green-400"
              >
                +{profit}
              </motion.p>
            </motion.div>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button 
            className="w-full btn-primary bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
            onClick={onShare}
          >
            <Share2 size={18} className="mr-2" />
            Share & Sell
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Vendor Dashboard
function VendorDashboard() {
  const [, setActiveTab] = useState('products');
  const navigate = useNavigate();
  
  const stats = [
    { label: 'Total Sales', value: '456', change: '+12%', onClick: () => {} },
    { label: 'Revenue', value: '125K', change: '+8%', onClick: () => {} },
    { label: 'Products', value: '28', change: '+3', onClick: () => setActiveTab('products') },
    { label: 'Returns', value: '2%', change: '-1%', onClick: () => {} },
  ];

  const products = [
    { name: 'Wireless Earbuds Pro', price: 1000, stock: 45, sales: 234, id: '1' },
    { name: 'Smart Watch Series 5', price: 2500, stock: 23, sales: 89, id: '2' },
    { name: 'Portable Charger 20K', price: 600, stock: 78, sales: 456, id: '3' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            onClick={stat.onClick}
            className="glass-card p-4 relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="3" cy="3" r="1" fill="%23ec4899" fill-opacity="0.03"/%3E%3C/svg%3E')`,
              backgroundRepeat: 'repeat',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            <p className="text-white/50 text-sm relative z-10">{stat.label}</p>
            <div className="flex items-end justify-between relative z-10">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className="text-green-400 text-sm">{stat.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23a855f7" fill-opacity="0.03"/%3E%3C/svg%3E')`,
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">My Products</h3>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                className="btn-primary bg-gradient-to-r from-purple-500 to-violet-500"
                onClick={() => navigate('/vendor/add-product')}
              >
                <Plus size={16} className="mr-2" />
                Add Product
              </Button>
            </motion.div>
          </div>

          <div className="space-y-4">
            {products.map((product, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.01, x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => navigate(`/vendor/product/${product.id}`)}
              >
                <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
                  <Package size={24} className="text-white/40" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{product.name}</h4>
                  <div className="flex items-center gap-4 text-sm text-white/50 mt-1">
                    <span>{product.price.toLocaleString()} coins</span>
                    <span>{product.stock} in stock</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{product.sales}</p>
                  <p className="text-xs text-white/50">sold</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Filter Modal
function FilterModal({ isOpen, onClose, onApply }: { isOpen: boolean; onClose: () => void; onApply: (filters: any) => void }) {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [cashbackOnly, setCashbackOnly] = useState(false);

  const categories = ['Electronics', 'Fashion', 'Home', 'Beauty', 'Sports', 'Books'];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="glass-card p-6 w-full max-w-md relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23ec4899" fill-opacity="0.03"/%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Filter size={20} />
                Filter Products
              </h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10"
              >
                <X size={20} />
              </motion.button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm text-white/60 mb-2 block">Price Range</label>
                <div className="flex items-center gap-4 mb-2">
                  <Input 
                    type="number" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-24 bg-white/5"
                  />
                  <span className="text-white/40">to</span>
                  <Input 
                    type="number" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-24 bg-white/5"
                  />
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={5000}
                  step={100}
                />
              </div>

              <div>
                <label className="text-sm text-white/60 mb-2 block">Categories</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategories(prev => 
                        prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
                      )}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedCategories.includes(cat)
                          ? 'bg-pink-500 text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="cashback"
                  checked={cashbackOnly}
                  onChange={(e) => setCashbackOnly(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-white/5"
                />
                <label htmlFor="cashback" className="text-sm cursor-pointer">Cashback offers only</label>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button variant="outline" className="flex-1 btn-secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                className="flex-1 btn-primary bg-gradient-to-r from-pink-500 to-rose-500"
                onClick={() => {
                  onApply({ priceRange, selectedCategories, cashbackOnly });
                  onClose();
                }}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVendorView, setIsVendorView] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<any[]>([]);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const navigate = useNavigate();

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Sports', 'Books'];

  const products = [
    {
      id: '1',
      name: 'Wireless Earbuds Pro with Active Noise Cancellation',
      price: 1000,
      originalPrice: 1500,
      rating: 4.8,
      reviews: 234,
      seller: 'TechStore',
      isVerified: true,
      cashback: 5,
      tags: ['Best Seller'],
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Smart Watch Series 5 - Fitness Tracking',
      price: 2500,
      rating: 4.6,
      reviews: 189,
      seller: 'GadgetHub',
      isVerified: true,
      cashback: 8,
      category: 'Electronics',
    },
    {
      id: '3',
      name: 'Portable Charger 20000mAh Fast Charging',
      price: 600,
      originalPrice: 800,
      rating: 4.9,
      reviews: 567,
      seller: 'PowerMax',
      cashback: 3,
      tags: ['Hot Deal'],
      category: 'Electronics',
    },
    {
      id: '4',
      name: 'Bluetooth Speaker Waterproof IPX7',
      price: 800,
      rating: 4.5,
      reviews: 123,
      seller: 'AudioZone',
      isVerified: true,
      cashback: 4,
      category: 'Electronics',
    },
    {
      id: '5',
      name: 'Wireless Mouse Ergonomic Design',
      price: 350,
      originalPrice: 500,
      rating: 4.7,
      reviews: 89,
      seller: 'TechStore',
      cashback: 2,
      category: 'Electronics',
    },
    {
      id: '6',
      name: 'LED Desk Lamp with Wireless Charger',
      price: 1200,
      rating: 4.4,
      reviews: 45,
      seller: 'HomeComfort',
      isVerified: true,
      cashback: 6,
      tags: ['New'],
      category: 'Home',
    },
  ];

  const handleBuy = (product: any) => {
    setCart(prev => [...prev, product]);
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 2000);
  };

  const handleLike = (id: string) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleShare = (product: any) => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} for ${product.price} coins!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`${product.name} - ${product.price} coins\n${window.location.href}`);
      alert('Product link copied to clipboard!');
    }
  };

  const handleResellerShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Wireless Earbuds Pro',
        text: 'Get Wireless Earbuds Pro at best price! Use my referral.',
        url: 'https://appverse.com/ref/123',
      });
    }
  };

  const filteredProducts = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    (searchQuery === '' || p.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6 pb-20 relative min-h-screen">
      {/* Animated Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23ec4899" fill-opacity="0.02"/%3E%3C/svg%3E')`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Cart Notification */}
      <AnimatePresence>
        {showCartNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-20 left-1/2 z-50 glass-card px-6 py-3 bg-green-500/20 border-green-500/50 flex items-center gap-2"
          >
            <ShoppingCart size={18} className="text-green-400" />
            <span>Added to cart!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ShoppingBag className="text-pink-400" />
            </motion.div>
            Marketplace
          </h1>
          <p className="text-white/60">Shop smart, earn cashback, resell for profit</p>
        </div>
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={isVendorView ? 'default' : 'outline'}
              onClick={() => setIsVendorView(!isVendorView)}
              className={isVendorView ? 'btn-primary bg-gradient-to-r from-purple-500 to-violet-500' : 'btn-secondary'}
            >
              <Store size={16} className="mr-2" />
              {isVendorView ? 'Buyer View' : 'Seller Portal'}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button 
              variant="outline" 
              size="icon"
              className="relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart size={18} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {isVendorView ? (
        <VendorDashboard />
      ) : (
        <>
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 relative z-10"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white/5 border-white/10 focus:border-pink-500/50 transition-colors"
              />
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X size={16} />
                </motion.button>
              )}
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => setShowFilterModal(true)}
              >
                <Sparkles size={18} className="mr-2" />
                Filter
              </Button>
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
            {/* Products Grid - Takes 3 columns */}
            <div className="lg:col-span-3">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25'
                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, i) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <ProductCard 
                        {...product} 
                        onBuy={handleBuy}
                        onLike={handleLike}
                        onShare={handleShare}
                        isLiked={likedProducts.has(product.id)}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredProducts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 text-white/50"
                >
                  <Package size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No products found. Try a different search.</p>
                </motion.div>
              )}
            </div>

            {/* Sidebar - Takes 1 column */}
            <div className="space-y-6">
              {/* Reseller Card */}
              <ResellerCard onShare={handleResellerShare} />

              {/* Trending Products */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 relative overflow-hidden"
                style={{
                  backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%2322c55e" fill-opacity="0.03"/%3E%3C/svg%3E')`,
                  backgroundRepeat: 'repeat',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp size={20} className="text-green-400" />
                    Trending Now
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Wireless Earbuds Pro', sales: 234, id: '1' },
                      { name: 'Smart Watch Series 5', sales: 189, id: '2' },
                      { name: 'Portable Charger', sales: 567, id: '3' },
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.02, x: 4 }}
                        onClick={() => navigate(`/product/${item.id}`)}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <span className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-sm font-medium">
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                          <p className="text-xs text-white/50">{item.sales} sold today</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Cashback Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-6 relative overflow-hidden"
                style={{
                  backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%2322c55e" fill-opacity="0.05"/%3E%3C/svg%3E')`,
                  backgroundRepeat: 'repeat',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center cursor-pointer"
                    >
                      <Percent size={24} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold">Cashback Program</h3>
                      <p className="text-white/50 text-sm">Earn on every purchase</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    {[
                      { cat: 'Electronics', value: 'Up to 8%' },
                      { cat: 'Fashion', value: 'Up to 5%' },
                      { cat: 'Home', value: 'Up to 6%' },
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02, x: 2 }}
                        className="flex justify-between cursor-pointer p-1 rounded hover:bg-white/5"
                      >
                        <span className="text-white/60">{item.cat}</span>
                        <span className="text-green-400">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}

      {/* Filter Modal */}
      <FilterModal 
        isOpen={showFilterModal} 
        onClose={() => setShowFilterModal(false)}
        onApply={(filters) => console.log(filters)}
      />
    </div>
  );
}