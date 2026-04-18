// // import { useState, useEffect, useRef } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Mail, Lock, Eye, EyeOff, Key, ArrowRight, CheckCircle } from 'lucide-react';
// // import { useAuth } from '@/contexts/AuthContext';
// // import { Button } from '@/components/ui/button';

// // // Vault Door Component
// // function VaultDoor({ isUnlocked, onUnlock }: { isUnlocked: boolean; onUnlock: () => void }) {
// //   const [keyPos, setKeyPos] = useState({ x: 0, y: 0 });
// //   const [isKeyNear, setIsKeyNear] = useState(false);
// //   const [showKey, setShowKey] = useState(true);
// //   const containerRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       if (isUnlocked || !containerRef.current) return;
      
// //       const rect = containerRef.current.getBoundingClientRect();
// //       const centerX = rect.left + rect.width / 2;
// //       const centerY = rect.top + rect.height / 2;
      
// //       const distance = Math.sqrt(
// //         Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
// //       );
      
// //       setIsKeyNear(distance < 100);
      
// //       setKeyPos({
// //         x: e.clientX - rect.left,
// //         y: e.clientY - rect.top,
// //       });
// //     };

// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, [isUnlocked]);

// //   const handleClick = () => {
// //     if (isKeyNear && !isUnlocked) {
// //       setShowKey(false);
// //       onUnlock();
// //     }
// //   };

// //   return (
// //     <div ref={containerRef} className="relative w-80 h-80 mx-auto">
// //       <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-4">
// //         <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
// //           <div className="absolute inset-0 opacity-30">
// //             <div className="absolute inset-0" style={{
// //               backgroundImage: `repeating-linear-gradient(
// //                 90deg,
// //                 transparent,
// //                 transparent 40px,
// //                 rgba(255,255,255,0.03) 40px,
// //                 rgba(255,255,255,0.03) 41px
// //               )`,
// //             }} />
// //             <div className="absolute inset-0" style={{
// //               backgroundImage: `repeating-linear-gradient(
// //                 0deg,
// //                 transparent,
// //                 transparent 40px,
// //                 rgba(255,255,255,0.03) 40px,
// //                 rgba(255,255,255,0.03) 41px
// //               )`,
// //             }} />
// //           </div>

// //           <motion.div
// //             animate={{
// //               scale: isKeyNear ? 1.1 : 1,
// //               boxShadow: isKeyNear
// //                 ? '0 0 40px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.3)'
// //                 : '0 0 20px rgba(59, 130, 246, 0.2)',
// //             }}
// //             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-blue-500/30 flex items-center justify-center cursor-pointer"
// //             onClick={handleClick}
// //           >
// //             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/20 flex items-center justify-center">
// //               <motion.div
// //                 animate={{
// //                   rotate: isKeyNear ? [0, -10, 10, 0] : 0,
// //                 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <Key
// //                   size={32}
// //                   className={`transition-colors duration-300 ${
// //                     isKeyNear ? 'text-blue-400' : 'text-white/30'
// //                   }`}
// //                 />
// //               </motion.div>
// //             </div>

// //             <motion.div
// //               animate={{
// //                 scale: isKeyNear ? [1, 1.2, 1] : 1,
// //                 opacity: isKeyNear ? [0.5, 1, 0.5] : 0.3,
// //               }}
// //               transition={{ duration: 1, repeat: Infinity }}
// //               className="absolute inset-0 rounded-full border-2 border-blue-500/30"
// //             />
// //             <motion.div
// //               animate={{
// //                 scale: isKeyNear ? [1, 1.4, 1] : 1,
// //                 opacity: isKeyNear ? [0.3, 0.6, 0.3] : 0.2,
// //               }}
// //               transition={{ duration: 1.5, repeat: Infinity }}
// //               className="absolute inset-0 rounded-full border border-blue-500/20"
// //             />
// //           </motion.div>

// //           <div className="absolute left-4 top-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
// //           <div className="absolute left-4 bottom-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
// //           <div className="absolute right-4 top-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
// //           <div className="absolute right-4 bottom-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
// //         </div>
// //       </div>

// //       <AnimatePresence>
// //         {showKey && !isUnlocked && (
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0 }}
// //             animate={{
// //               opacity: 1,
// //               scale: 1,
// //               x: keyPos.x - 16,
// //               y: keyPos.y - 16,
// //             }}
// //             exit={{ opacity: 0, scale: 0 }}
// //             className="absolute pointer-events-none z-50"
// //             style={{ left: 0, top: 0 }}
// //           >
// //             <div
// //               className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
// //                 isKeyNear
// //                   ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
// //                   : 'bg-white/20'
// //               }`}
// //             >
// //               <Key size={16} className="text-white" />
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {!isUnlocked && (
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 1 }}
// //           className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
// //         >
// //           <span className="text-white/40 text-sm">
// //             Move your key to the lock and click to unlock
// //           </span>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // }

// // export default function LoginPage() {
// //   const [isUnlocked, setIsUnlocked] = useState(false);
// //   const [showForm, setShowForm] = useState(false);
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //   });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [errors, setErrors] = useState<Record<string, string>>({});
// //   const [isSuccess, setIsSuccess] = useState(false);

// //   const { login, isLoading } = useAuth();
// //   const navigate = useNavigate();

// //   const handleUnlock = () => {
// //     setIsUnlocked(true);
// //     setTimeout(() => {
// //       setShowForm(true);
// //     }, 800);
// //   };

// //   const validateForm = () => {
// //     const newErrors: Record<string, string> = {};

// //     if (!formData.email.trim()) {
// //       newErrors.email = 'Email is required';
// //     }

// //     if (!formData.password) {
// //       newErrors.password = 'Password is required';
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (!validateForm()) return;

// //     try {
// //       await login(formData.email, formData.password);
// //       setIsSuccess(true);
// //       setTimeout(() => {
// //         navigate('/dashboard');
// //       }, 1500);
// //     } catch (error) {
// //       setErrors({ submit: 'Invalid email or password' });
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-navy-950 to-black relative overflow-hidden flex flex-col">
// //       <div className="absolute inset-0 opacity-10">
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             backgroundImage: `
// //               linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
// //               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
// //             `,
// //             backgroundSize: '50px 50px',
// //           }}
// //         />
// //       </div>

// //       <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-12">
// //         <motion.div
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="absolute top-6 left-6"
// //         >
// //           <Link to="/" className="flex items-center gap-3">
// //             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
// //               AV
// //             </div>
// //             <span className="font-semibold text-xl">AppVerse</span>
// //           </Link>
// //         </motion.div>

// //         <AnimatePresence mode="wait">
// //           {!showForm ? (
// //             <motion.div
// //               key="vault"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               className="flex flex-col items-center"
// //             >
// //               <motion.div
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ delay: 0.3 }}
// //                 className="text-center mb-12"
// //               >
// //                 <h1 className="text-3xl md:text-4xl font-bold mb-4">
// //                   Welcome Back, Explorer
// //                 </h1>
// //                 <p className="text-white/60 text-lg">
// //                   Your personal vault awaits. Unlock to access your world.
// //                 </p>
// //               </motion.div>

// //               <VaultDoor isUnlocked={isUnlocked} onUnlock={handleUnlock} />
// //             </motion.div>
// //           ) : (
// //             <motion.div
// //               key="form"
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ type: 'spring', stiffness: 100, damping: 20 }}
// //               className="w-full max-w-md"
// //             >
// //               {isSuccess ? (
// //                 <motion.div
// //                   initial={{ scale: 0.8, opacity: 0 }}
// //                   animate={{ scale: 1, opacity: 1 }}
// //                   className="glass-card p-8 text-center"
// //                 >
// //                   <motion.div
// //                     initial={{ scale: 0 }}
// //                     animate={{ scale: 1 }}
// //                     transition={{ type: 'spring', stiffness: 200 }}
// //                     className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-6"
// //                   >
// //                     <CheckCircle size={40} className="text-white" />
// //                   </motion.div>
// //                   <h2 className="text-2xl font-bold mb-2">Vault Unlocked!</h2>
// //                   <p className="text-white/60">Entering your dashboard...</p>
// //                 </motion.div>
// //               ) : (
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   className="glass-card p-8"
// //                   style={{
// //                     boxShadow: '0 0 60px rgba(59, 130, 246, 0.2)',
// //                   }}
// //                 >
// //                   <div className="text-center mb-8">
// //                     <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
// //                       <Key size={32} className="text-white" />
// //                     </div>
// //                     <h2 className="text-2xl font-bold mb-2">Access Your Vault</h2>
// //                     <p className="text-white/60 text-sm">
// //                       Sign in to continue your journey
// //                     </p>
// //                   </div>

// //                   <form onSubmit={handleSubmit} className="space-y-4">
// //                     <div>
// //                       <div className="relative">
// //                         <Mail
// //                           className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
// //                           size={18}
// //                         />
// //                         <input
// //                           type="email"
// //                           placeholder="Email Address"
// //                           value={formData.email}
// //                           onChange={(e) =>
// //                             setFormData({ ...formData, email: e.target.value })
// //                           }
// //                           className={`input-field pl-12 ${
// //                             errors.email ? 'border-red-500/50' : ''
// //                           }`}
// //                         />
// //                       </div>
// //                       {errors.email && (
// //                         <motion.p
// //                           initial={{ opacity: 0, y: -10 }}
// //                           animate={{ opacity: 1, y: 0 }}
// //                           className="text-red-400 text-xs mt-1 ml-1"
// //                         >
// //                           {errors.email}
// //                         </motion.p>
// //                       )}
// //                     </div>

// //                     <div>
// //                       <div className="relative">
// //                         <Lock
// //                           className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
// //                           size={18}
// //                         />
// //                         <input
// //                           type={showPassword ? 'text' : 'password'}
// //                           placeholder="Password"
// //                           value={formData.password}
// //                           onChange={(e) =>
// //                             setFormData({ ...formData, password: e.target.value })
// //                           }
// //                           className={`input-field pl-12 pr-12 ${
// //                             errors.password ? 'border-red-500/50' : ''
// //                           }`}
// //                         />
// //                         <button
// //                           type="button"
// //                           onClick={() => setShowPassword(!showPassword)}
// //                           className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
// //                         >
// //                           {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// //                         </button>
// //                       </div>
// //                       {errors.password && (
// //                         <motion.p
// //                           initial={{ opacity: 0, y: -10 }}
// //                           animate={{ opacity: 1, y: 0 }}
// //                           className="text-red-400 text-xs mt-1 ml-1"
// //                         >
// //                           {errors.password}
// //                         </motion.p>
// //                       )}
// //                     </div>

// //                     <div className="flex justify-end">
// //                       <Link
// //                         to="/forgot-password"
// //                         className="text-sm text-blue-400 hover:underline"
// //                       >
// //                         Forgot password?
// //                       </Link>
// //                     </div>

// //                     {errors.submit && (
// //                       <motion.div
// //                         initial={{ opacity: 0 }}
// //                         animate={{ opacity: 1 }}
// //                         className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center"
// //                       >
// //                         {errors.submit}
// //                       </motion.div>
// //                     )}

// //                     <Button
// //                       type="submit"
// //                       disabled={isLoading}
// //                       className="w-full btn-primary py-4 text-lg"
// //                     >
// //                       {isLoading ? (
// //                         <motion.div
// //                           animate={{ rotate: 360 }}
// //                           transition={{
// //                             duration: 1,
// //                             repeat: Infinity,
// //                             ease: 'linear',
// //                           }}
// //                           className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
// //                         />
// //                       ) : (
// //                         <>
// //                           Unlock Vault
// //                           <ArrowRight size={18} className="ml-2" />
// //                         </>
// //                       )}
// //                     </Button>
// //                   </form>

// //                   <p className="text-center mt-6 text-white/60 text-sm">
// //                     New to AppVerse?{' '}
// //                     <Link
// //                       to="/signup"
// //                       className="text-blue-400 hover:underline font-medium"
// //                     >
// //                       Start your adventure
// //                     </Link>
// //                   </p>
// //                 </motion.div>
// //               )}
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <footer className="relative z-20 px-4 py-4">
// //         <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl px-4 py-2">
// //           <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/40">
// //             <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
// //             <span className="hidden sm:inline">|</span>
// //             <Link to="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
// //             <span className="hidden sm:inline">|</span>
// //             <Link to="/consumer" className="hover:text-white/60 transition-colors">Consumer Protection</Link>
// //             <span className="hidden sm:inline">|</span>
// //             <span>GST Compliant</span>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }




// //===========================================================================================================================================================================




// import { useState, useEffect, useRef } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Mail, Lock, Eye, EyeOff, Key, ArrowRight, CheckCircle } from 'lucide-react';
// import { useAuth } from '@/contexts/AuthContext';
// import { Button } from '@/components/ui/button';

// // Vault Door Component
// function VaultDoor({ isUnlocked, onUnlock }: { isUnlocked: boolean; onUnlock: () => void }) {
//   const [keyPos, setKeyPos] = useState({ x: 0, y: 0 });
//   const [isKeyNear, setIsKeyNear] = useState(false);
//   const [showKey, setShowKey] = useState(true);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (isUnlocked || !containerRef.current) return;
      
//       const rect = containerRef.current.getBoundingClientRect();
//       const centerX = rect.left + rect.width / 2;
//       const centerY = rect.top + rect.height / 2;
      
//       const distance = Math.sqrt(
//         Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
//       );
      
//       setIsKeyNear(distance < 100);
      
//       setKeyPos({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [isUnlocked]);

//   const handleClick = () => {
//     if (isKeyNear && !isUnlocked) {
//       setShowKey(false);
//       onUnlock();
//     }
//   };

//   return (
//     <div ref={containerRef} className="relative w-80 h-80 mx-auto">
//       <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-4">
//         <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
//           <div className="absolute inset-0 opacity-30">
//             <div className="absolute inset-0" style={{
//               backgroundImage: `repeating-linear-gradient(
//                 90deg,
//                 transparent,
//                 transparent 40px,
//                 rgba(255,255,255,0.03) 40px,
//                 rgba(255,255,255,0.03) 41px
//               )`,
//             }} />
//             <div className="absolute inset-0" style={{
//               backgroundImage: `repeating-linear-gradient(
//                 0deg,
//                 transparent,
//                 transparent 40px,
//                 rgba(255,255,255,0.03) 40px,
//                 rgba(255,255,255,0.03) 41px
//               )`,
//             }} />
//           </div>

//           <motion.div
//             animate={{
//               scale: isKeyNear ? 1.1 : 1,
//               boxShadow: isKeyNear
//                 ? '0 0 40px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.3)'
//                 : '0 0 20px rgba(59, 130, 246, 0.2)',
//             }}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-blue-500/30 flex items-center justify-center cursor-pointer"
//             onClick={handleClick}
//           >
//             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/20 flex items-center justify-center">
//               <motion.div
//                 animate={{
//                   rotate: isKeyNear ? [0, -10, 10, 0] : 0,
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Key
//                   size={32}
//                   className={`transition-colors duration-300 ${
//                     isKeyNear ? 'text-blue-400' : 'text-white/30'
//                   }`}
//                 />
//               </motion.div>
//             </div>

//             <motion.div
//               animate={{
//                 scale: isKeyNear ? [1, 1.2, 1] : 1,
//                 opacity: isKeyNear ? [0.5, 1, 0.5] : 0.3,
//               }}
//               transition={{ duration: 1, repeat: Infinity }}
//               className="absolute inset-0 rounded-full border-2 border-blue-500/30"
//             />
//             <motion.div
//               animate={{
//                 scale: isKeyNear ? [1, 1.4, 1] : 1,
//                 opacity: isKeyNear ? [0.3, 0.6, 0.3] : 0.2,
//               }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="absolute inset-0 rounded-full border border-blue-500/20"
//             />
//           </motion.div>

//           <div className="absolute left-4 top-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
//           <div className="absolute left-4 bottom-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
//           <div className="absolute right-4 top-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
//           <div className="absolute right-4 bottom-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
//         </div>
//       </div>

//       <AnimatePresence>
//         {showKey && !isUnlocked && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               x: keyPos.x - 16,
//               y: keyPos.y - 16,
//             }}
//             exit={{ opacity: 0, scale: 0 }}
//             className="absolute pointer-events-none z-50"
//             style={{ left: 0, top: 0 }}
//           >
//             <div
//               className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
//                 isKeyNear
//                   ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
//                   : 'bg-white/20'
//               }`}
//             >
//               <Key size={16} className="text-white" />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {!isUnlocked && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
//         >
//           <span className="text-white/40 text-sm">
//             Move your key to the lock and click to unlock
//           </span>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// export default function LoginPage() {
//   const [isUnlocked, setIsUnlocked] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSuccess, setIsSuccess] = useState(false);

//   const { login, isLoading } = useAuth();
//   const navigate = useNavigate();

//   const handleUnlock = () => {
//     setIsUnlocked(true);
//     setTimeout(() => {
//       setShowForm(true);
//     }, 800);
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     try {
//       await login(formData.email, formData.password);
//       setIsSuccess(true);
//       setTimeout(() => {
//         navigate('/dashboard');
//       }, 1500);
//     } catch (error) {
//       setErrors({ submit: 'Invalid email or password' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-navy-950 to-black relative overflow-hidden flex flex-col">
//       {/* Background Pattern */}
//       <div 
//         className="fixed inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%233b82f6" fill-opacity="0.03"/%3E%3C/svg%3E')`,
//           backgroundRepeat: 'repeat',
//         }}
//       />

//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '50px 50px',
//           }}
//         />
//       </div>

//       <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="absolute top-6 left-6"
//         >
//           <Link to="/" className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
//               AV
//             </div>
//             <span className="font-semibold text-xl">AppVerse</span>
//           </Link>
//         </motion.div>

//         <AnimatePresence mode="wait">
//           {!showForm ? (
//             <motion.div
//               key="vault"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="flex flex-col items-center"
//             >
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-center mb-12"
//               >
//                 <h1 className="text-3xl md:text-4xl font-bold mb-4">
//                   Welcome Back, Explorer
//                 </h1>
//                 <p className="text-white/60 text-lg">
//                   Your personal vault awaits. Unlock to access your world.
//                 </p>
//               </motion.div>

//               <VaultDoor isUnlocked={isUnlocked} onUnlock={handleUnlock} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="form"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ type: 'spring', stiffness: 100, damping: 20 }}
//               className="w-full max-w-md"
//             >
//               {isSuccess ? (
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   className="glass-card p-8 text-center relative overflow-hidden"
//                   style={{
//                     backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%2322c55e" fill-opacity="0.05"/%3E%3C/svg%3E')`,
//                     backgroundRepeat: 'repeat',
//                   }}
//                 >
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ type: 'spring', stiffness: 200 }}
//                     className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-6"
//                   >
//                     <CheckCircle size={40} className="text-white" />
//                   </motion.div>
//                   <h2 className="text-2xl font-bold mb-2">Vault Unlocked!</h2>
//                   <p className="text-white/60">Entering your dashboard...</p>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="glass-card p-8 relative overflow-hidden"
//                   style={{
//                     backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%233b82f6" fill-opacity="0.05"/%3E%3C/svg%3E')`,
//                     backgroundRepeat: 'repeat',
//                     boxShadow: '0 0 60px rgba(59, 130, 246, 0.2)',
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
//                   <div className="relative z-10">
//                     <div className="text-center mb-8">
//                       <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
//                         <Key size={32} className="text-white" />
//                       </div>
//                       <h2 className="text-2xl font-bold mb-2">Access Your Vault</h2>
//                       <p className="text-white/60 text-sm">
//                         Sign in to continue your journey
//                       </p>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div>
//                         <div className="relative">
//                           <Mail
//                             className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
//                             size={18}
//                           />
//                           <input
//                             type="email"
//                             placeholder="Email Address"
//                             value={formData.email}
//                             onChange={(e) =>
//                               setFormData({ ...formData, email: e.target.value })
//                             }
//                             className={`input-field pl-12 ${
//                               errors.email ? 'border-red-500/50' : ''
//                             }`}
//                           />
//                         </div>
//                         {errors.email && (
//                           <motion.p
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="text-red-400 text-xs mt-1 ml-1"
//                           >
//                             {errors.email}
//                           </motion.p>
//                         )}
//                       </div>

//                       <div>
//                         <div className="relative">
//                           <Lock
//                             className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
//                             size={18}
//                           />
//                           <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={(e) =>
//                               setFormData({ ...formData, password: e.target.value })
//                             }
//                             className={`input-field pl-12 pr-12 ${
//                               errors.password ? 'border-red-500/50' : ''
//                             }`}
//                           />
//                           <button
//                             type="button"
//                             onClick={() => setShowPassword(!showPassword)}
//                             className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
//                           >
//                             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                           </button>
//                         </div>
//                         {errors.password && (
//                           <motion.p
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="text-red-400 text-xs mt-1 ml-1"
//                           >
//                             {errors.password}
//                           </motion.p>
//                         )}
//                       </div>

//                       <div className="flex justify-end">
//                         <Link
//                           to="/forgot-password"
//                           className="text-sm text-blue-400 hover:underline"
//                         >
//                           Forgot password?
//                         </Link>
//                       </div>

//                       {errors.submit && (
//                         <motion.div
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center"
//                         >
//                           {errors.submit}
//                         </motion.div>
//                       )}

//                       <Button
//                         type="submit"
//                         disabled={isLoading}
//                         className="w-full btn-primary py-4 text-lg"
//                       >
//                         {isLoading ? (
//                           <motion.div
//                             animate={{ rotate: 360 }}
//                             transition={{
//                               duration: 1,
//                               repeat: Infinity,
//                               ease: 'linear',
//                             }}
//                             className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
//                           />
//                         ) : (
//                           <>
//                             Unlock Vault
//                             <ArrowRight size={18} className="ml-2" />
//                           </>
//                         )}
//                       </Button>
//                     </form>

//                     <p className="text-center mt-6 text-white/60 text-sm">
//                       New to AppVerse?{' '}
//                       <Link
//                         to="/signup"
//                         className="text-blue-400 hover:underline font-medium"
//                       >
//                         Start your adventure
//                       </Link>
//                     </p>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <footer className="relative z-20 px-4 py-4">
//         <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl px-4 py-2">
//           <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/40">
//             <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
//             <span className="hidden sm:inline">|</span>
//             <Link to="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
//             <span className="hidden sm:inline">|</span>
//             <Link to="/consumer" className="hover:text-white/60 transition-colors">Consumer Protection</Link>
//             <span className="hidden sm:inline">|</span>
//             <span>GST Compliant</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


//==========================================================================================================================================================================================================




import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Key, ArrowRight, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

// Vault Door Component
function VaultDoor({ isUnlocked, onUnlock }: { isUnlocked: boolean; onUnlock: () => void }) {
  const [keyPos, setKeyPos] = useState({ x: 0, y: 0 });
  const [isKeyNear, setIsKeyNear] = useState(false);
  const [showKey, setShowKey] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isUnlocked || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );
      
      setIsKeyNear(distance < 100);
      
      setKeyPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isUnlocked]);

  const handleClick = () => {
    if (isKeyNear && !isUnlocked) {
      setShowKey(false);
      onUnlock();
    }
  };

  return (
    <div ref={containerRef} className="relative w-80 h-80 mx-auto">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-4">
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 40px,
                rgba(255,255,255,0.03) 40px,
                rgba(255,255,255,0.03) 41px
              )`,
            }} />
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 40px,
                rgba(255,255,255,0.03) 40px,
                rgba(255,255,255,0.03) 41px
              )`,
            }} />
          </div>

          <motion.div
            animate={{
              scale: isKeyNear ? 1.1 : 1,
              boxShadow: isKeyNear
                ? '0 0 40px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.3)'
                : '0 0 20px rgba(59, 130, 246, 0.2)',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-blue-500/30 flex items-center justify-center cursor-pointer"
            onClick={handleClick}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/20 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: isKeyNear ? [0, -10, 10, 0] : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <Key
                  size={32}
                  className={`transition-colors duration-300 ${
                    isKeyNear ? 'text-blue-400' : 'text-white/30'
                  }`}
                />
              </motion.div>
            </div>

            <motion.div
              animate={{
                scale: isKeyNear ? [1, 1.2, 1] : 1,
                opacity: isKeyNear ? [0.5, 1, 0.5] : 0.3,
              }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-blue-500/30"
            />
            <motion.div
              animate={{
                scale: isKeyNear ? [1, 1.4, 1] : 1,
                opacity: isKeyNear ? [0.3, 0.6, 0.3] : 0.2,
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-blue-500/20"
            />
          </motion.div>

          <div className="absolute left-4 top-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
          <div className="absolute left-4 bottom-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
          <div className="absolute right-4 top-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
          <div className="absolute right-4 bottom-8 w-3 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800" />
        </div>
      </div>

      <AnimatePresence>
        {showKey && !isUnlocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: keyPos.x - 16,
              y: keyPos.y - 16,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute pointer-events-none z-50"
            style={{ left: 0, top: 0 }}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isKeyNear
                  ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                  : 'bg-white/20'
              }`}
            >
              <Key size={16} className="text-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          <span className="text-white/40 text-sm">
            Move your key to the lock and click to unlock
          </span>
        </motion.div>
      )}
    </div>
  );
}

export default function LoginPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleUnlock = () => {
    setIsUnlocked(true);
    setTimeout(() => {
      setShowForm(true);
    }, 800);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await login(formData.email, formData.password);
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (error) {
      setErrors({ submit: 'Invalid email or password' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-navy-950 to-black relative overflow-hidden flex flex-col">
      {/* Background Pattern - Grid Lines */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%233b82f6" fill-opacity="0.03"/%3E%3C/svg%3E')`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-6 left-6"
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
              AV
            </div>
            <span className="font-semibold text-xl">AppVerse</span>
          </Link>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div
              key="vault"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-12"
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Welcome Back, Explorer
                </h1>
                <p className="text-white/60 text-lg">
                  Your personal vault awaits. Unlock to access your world.
                </p>
              </motion.div>

              <VaultDoor isUnlocked={isUnlocked} onUnlock={handleUnlock} />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="w-full max-w-md"
            >
              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="glass-card p-8 text-center relative overflow-hidden"
                  style={{
                    backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%2322c55e" fill-opacity="0.05"/%3E%3C/svg%3E')`,
                    backgroundRepeat: 'repeat',
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={40} className="text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-2">Vault Unlocked!</h2>
                  <p className="text-white/60">Entering your dashboard...</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-8 relative overflow-hidden"
                  style={{
                    backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%233b82f6" fill-opacity="0.05"/%3E%3C/svg%3E')`,
                    backgroundRepeat: 'repeat',
                    boxShadow: '0 0 60px rgba(59, 130, 246, 0.2)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                        <Key size={32} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Access Your Vault</h2>
                      <p className="text-white/60 text-sm">
                        Sign in to continue your journey
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <div className="relative">
                          <Mail
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                            size={18}
                          />
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className={`input-field pl-12 ${
                              errors.email ? 'border-red-500/50' : ''
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-xs mt-1 ml-1"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <div className="relative">
                          <Lock
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                            size={18}
                          />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) =>
                              setFormData({ ...formData, password: e.target.value })
                            }
                            className={`input-field pl-12 pr-12 ${
                              errors.password ? 'border-red-500/50' : ''
                            }`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        {errors.password && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-xs mt-1 ml-1"
                          >
                            {errors.password}
                          </motion.p>
                        )}
                      </div>

                      <div className="flex justify-end">
                        <Link
                          to="/forgot-password"
                          className="text-sm text-blue-400 hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      {errors.submit && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center"
                        >
                          {errors.submit}
                        </motion.div>
                      )}

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full btn-primary py-4 text-lg"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                        ) : (
                          <>
                            Unlock Vault
                            <ArrowRight size={18} className="ml-2" />
                          </>
                        )}
                      </Button>
                    </form>

                    <p className="text-center mt-6 text-white/60 text-sm">
                      New to AppVerse?{' '}
                      <Link
                        to="/signup"
                        className="text-blue-400 hover:underline font-medium"
                      >
                        Start your adventure
                      </Link>
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="relative z-20 px-4 py-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl px-4 py-2">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/consumer" className="hover:text-white/60 transition-colors">Consumer Protection</Link>
            <span className="hidden sm:inline">|</span>
            <span>GST Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  );
}