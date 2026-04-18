// import { useState, useRef, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Sparkles, Mail, Lock, User, Eye, EyeOff, CheckCircle, ArrowRight } from 'lucide-react';
// import { useAuth } from '@/contexts/AuthContext';
// import { Button } from '@/components/ui/button';

// // Lamp Component
// function HangingLamp({ isLit, onPull }: { isLit: boolean; onPull: () => void }) {
//   const [isDragging, setIsDragging] = useState(false);
//   const [pullProgress, setPullProgress] = useState(0);
//   const startY = useRef(0);

//   const handleMouseDown = (e: React.MouseEvent) => {
//     if (isLit) return;
//     setIsDragging(true);
//     startY.current = e.clientY;
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     if (isLit) return;
//     setIsDragging(true);
//     startY.current = e.touches[0].clientY;
//   };

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isDragging || isLit) return;
//       const delta = Math.min(150, Math.max(0, e.clientY - startY.current));
//       setPullProgress(delta / 150);
//       if (delta >= 150) {
//         onPull();
//         setIsDragging(false);
//       }
//     };

//     const handleTouchMove = (e: TouchEvent) => {
//       if (!isDragging || isLit) return;
//       const delta = Math.min(150, Math.max(0, e.touches[0].clientY - startY.current));
//       setPullProgress(delta / 150);
//       if (delta >= 150) {
//         onPull();
//         setIsDragging(false);
//       }
//     };

//     const handleUp = () => {
//       if (!isLit) {
//         setIsDragging(false);
//         setPullProgress(0);
//       }
//     };

//     if (isDragging) {
//       window.addEventListener('mousemove', handleMouseMove);
//       window.addEventListener('mouseup', handleUp);
//       window.addEventListener('touchmove', handleTouchMove);
//       window.addEventListener('touchend', handleUp);
//     }

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleUp);
//       window.removeEventListener('touchmove', handleTouchMove);
//       window.removeEventListener('touchend', handleUp);
//     };
//   }, [isDragging, isLit, onPull]);

//   return (
//     <div className="relative flex flex-col items-center">
//       <div className="w-0.5 h-24 bg-gradient-to-b from-transparent via-white/30 to-white/50" />
      
//       <motion.div
//         animate={{
//           filter: isLit ? 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.8))' : 'none',
//         }}
//         className="relative"
//       >
//         <div
//           className={`w-32 h-20 transition-all duration-1000 ${
//             isLit
//               ? 'bg-gradient-to-b from-amber-300 to-orange-400'
//               : 'bg-gradient-to-b from-gray-700 to-gray-800'
//           }`}
//           style={{
//             clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
//           }}
//         />
//         <AnimatePresence>
//           {isLit && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.5 }}
//               transition={{ duration: 0.8 }}
//               className="absolute top-full left-1/2 -translate-x-1/2 pointer-events-none"
//             >
//               <div className="w-64 h-64 bg-gradient-radial from-amber-400/40 via-orange-400/20 to-transparent rounded-full blur-3xl" />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>

//       <div className="relative mt-2">
//         <motion.div
//           animate={{
//             y: isDragging ? pullProgress * 150 : 0,
//           }}
//           transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//           className="flex flex-col items-center cursor-pointer"
//           onMouseDown={handleMouseDown}
//           onTouchStart={handleTouchStart}
//         >
//           <div className="w-0.5 h-16 bg-gradient-to-b from-white/50 to-white/30" />
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className={`w-4 h-6 rounded-full transition-colors duration-300 ${
//               isLit ? 'bg-amber-400' : 'bg-white/40'
//             }`}
//             style={{
//               boxShadow: isLit ? '0 0 10px rgba(251, 191, 36, 0.8)' : 'none',
//             }}
//           />
//         </motion.div>
        
//         {!isLit && !isDragging && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//             className="absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap"
//           >
//             <span className="text-white/40 text-sm animate-pulse">
//               Pull down to begin
//             </span>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// // Flashlight Effect Component
// function FlashlightEffect() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div
//       className="fixed inset-0 pointer-events-none z-10"
//       style={{
//         background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(10, 14, 23, 0.95) 100%)`,
//       }}
//     />
//   );
// }

// export default function SignupPage() {
//   const [isLampLit, setIsLampLit] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     agreeTerms: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSuccess, setIsSuccess] = useState(false);
  
//   const { signup, isLoading } = useAuth();
//   const navigate = useNavigate();

//   const handleLampPull = () => {
//     setIsLampLit(true);
//     setTimeout(() => {
//       setShowForm(true);
//     }, 800);
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }
    
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
    
//     if (!formData.agreeTerms) {
//       newErrors.agreeTerms = 'You must agree to the terms';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     try {
//       await signup(formData.email, formData.password, formData.name);
//       setIsSuccess(true);
//       setTimeout(() => {
//         navigate('/dashboard');
//       }, 1500);
//     } catch (error) {
//       setErrors({ submit: 'Something went wrong. Please try again.' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden flex flex-col">
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-navy-950 to-black" />
      
//       {!isLampLit && <FlashlightEffect />}

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
//               key="lamp"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0, y: -50 }}
//               className="flex flex-col items-center"
//             >
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 className="text-center mb-12"
//               >
//                 <h1 className="text-3xl md:text-4xl font-bold mb-4">
//                   The AppVerse is Waiting
//                 </h1>
//                 <p className="text-white/60 text-lg">
//                   Find the light... Pull the thread to begin.
//                 </p>
//               </motion.div>

//               <HangingLamp isLit={isLampLit} onPull={handleLampPull} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="form"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ type: 'spring', stiffness: 100, damping: 20 }}
//               className="w-full max-w-md"
//             >
//               {isSuccess ? (
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   className="glass-card p-8 text-center"
//                 >
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ type: 'spring', stiffness: 200 }}
//                     className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6"
//                   >
//                     <CheckCircle size={40} className="text-white" />
//                   </motion.div>
//                   <h2 className="text-2xl font-bold mb-2">Welcome to AppVerse!</h2>
//                   <p className="text-white/60">Your adventure begins now...</p>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="glass-card p-8"
//                   style={{
//                     boxShadow: '0 0 60px rgba(251, 191, 36, 0.2)',
//                   }}
//                 >
//                   <div className="text-center mb-8">
//                     <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
//                       <Sparkles size={32} className="text-white" />
//                     </div>
//                     <h2 className="text-2xl font-bold mb-2">Begin Your Journey</h2>
//                     <p className="text-white/60 text-sm">
//                       Create your account and get 100 starter coins
//                     </p>
//                   </div>

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                       <div className="relative">
//                         <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
//                         <input
//                           type="text"
//                           placeholder="Full Name"
//                           value={formData.name}
//                           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                           className={`input-field pl-12 ${errors.name ? 'border-red-500/50' : ''}`}
//                         />
//                       </div>
//                       {errors.name && (
//                         <motion.p
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="text-red-400 text-xs mt-1 ml-1"
//                         >
//                           {errors.name}
//                         </motion.p>
//                       )}
//                     </div>

//                     <div>
//                       <div className="relative">
//                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
//                         <input
//                           type="email"
//                           placeholder="Email Address"
//                           value={formData.email}
//                           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                           className={`input-field pl-12 ${errors.email ? 'border-red-500/50' : ''}`}
//                         />
//                       </div>
//                       {errors.email && (
//                         <motion.p
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="text-red-400 text-xs mt-1 ml-1"
//                         >
//                           {errors.email}
//                         </motion.p>
//                       )}
//                     </div>

//                     <div>
//                       <div className="relative">
//                         <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
//                         <input
//                           type={showPassword ? 'text' : 'password'}
//                           placeholder="Password"
//                           value={formData.password}
//                           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                           className={`input-field pl-12 pr-12 ${errors.password ? 'border-red-500/50' : ''}`}
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword(!showPassword)}
//                           className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
//                         >
//                           {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                         </button>
//                       </div>
//                       {errors.password && (
//                         <motion.p
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="text-red-400 text-xs mt-1 ml-1"
//                         >
//                           {errors.password}
//                         </motion.p>
//                       )}
//                     </div>

//                     <div>
//                       <div className="relative">
//                         <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
//                         <input
//                           type={showPassword ? 'text' : 'password'}
//                           placeholder="Confirm Password"
//                           value={formData.confirmPassword}
//                           onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                           className={`input-field pl-12 ${errors.confirmPassword ? 'border-red-500/50' : ''}`}
//                         />
//                       </div>
//                       {errors.confirmPassword && (
//                         <motion.p
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="text-red-400 text-xs mt-1 ml-1"
//                         >
//                           {errors.confirmPassword}
//                         </motion.p>
//                       )}
//                     </div>

//                     <div>
//                       <label className="flex items-start gap-3 cursor-pointer">
//                         <input
//                           type="checkbox"
//                           checked={formData.agreeTerms}
//                           onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
//                           className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-blue-500"
//                         />
//                         <span className="text-sm text-white/60">
//                           I agree to the{' '}
//                           <Link to="/terms" className="text-blue-400 hover:underline">Terms of Service</Link>
//                           {' '}and{' '}
//                           <Link to="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>
//                         </span>
//                       </label>
//                       {errors.agreeTerms && (
//                         <motion.p
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="text-red-400 text-xs mt-1 ml-1"
//                         >
//                           {errors.agreeTerms}
//                         </motion.p>
//                       )}
//                     </div>

//                     {errors.submit && (
//                       <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center"
//                       >
//                         {errors.submit}
//                       </motion.div>
//                     )}

//                     <Button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full btn-primary py-4 text-lg"
//                     >
//                       {isLoading ? (
//                         <motion.div
//                           animate={{ rotate: 360 }}
//                           transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
//                           className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
//                         />
//                       ) : (
//                         <>
//                           Create Account
//                           <ArrowRight size={18} className="ml-2" />
//                         </>
//                       )}
//                     </Button>
//                   </form>

//                   <p className="text-center mt-6 text-white/60 text-sm">
//                     Already have an account?{' '}
//                     <Link to="/login" className="text-blue-400 hover:underline font-medium">
//                       Sign In
//                     </Link>
//                   </p>
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







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mail, Lock, User, Eye, EyeOff, CheckCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

// Lamp Component
function HangingLamp({ isLit, onPull }: { isLit: boolean; onPull: () => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [pullProgress, setPullProgress] = useState(0);
  const startY = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isLit) return;
    setIsDragging(true);
    startY.current = e.clientY;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isLit) return;
    setIsDragging(true);
    startY.current = e.touches[0].clientY;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || isLit) return;
      const delta = Math.min(150, Math.max(0, e.clientY - startY.current));
      setPullProgress(delta / 150);
      if (delta >= 150) {
        onPull();
        setIsDragging(false);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || isLit) return;
      const delta = Math.min(150, Math.max(0, e.touches[0].clientY - startY.current));
      setPullProgress(delta / 150);
      if (delta >= 150) {
        onPull();
        setIsDragging(false);
      }
    };

    const handleUp = () => {
      if (!isLit) {
        setIsDragging(false);
        setPullProgress(0);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [isDragging, isLit, onPull]);

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-0.5 h-24 bg-gradient-to-b from-transparent via-white/30 to-white/50" />
      
      <motion.div
        animate={{
          filter: isLit ? 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.8))' : 'none',
        }}
        className="relative"
      >
        <div
          className={`w-32 h-20 transition-all duration-1000 ${
            isLit
              ? 'bg-gradient-to-b from-amber-300 to-orange-400'
              : 'bg-gradient-to-b from-gray-700 to-gray-800'
          }`}
          style={{
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
          }}
        />
        <AnimatePresence>
          {isLit && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8 }}
              className="absolute top-full left-1/2 -translate-x-1/2 pointer-events-none"
            >
              <div className="w-64 h-64 bg-gradient-radial from-amber-400/40 via-orange-400/20 to-transparent rounded-full blur-3xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="relative mt-2">
        <motion.div
          animate={{
            y: isDragging ? pullProgress * 150 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="flex flex-col items-center cursor-pointer"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="w-0.5 h-16 bg-gradient-to-b from-white/50 to-white/30" />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-4 h-6 rounded-full transition-colors duration-300 ${
              isLit ? 'bg-amber-400' : 'bg-white/40'
            }`}
            style={{
              boxShadow: isLit ? '0 0 10px rgba(251, 191, 36, 0.8)' : 'none',
            }}
          />
        </motion.div>
        
        {!isLit && !isDragging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <span className="text-white/40 text-sm animate-pulse">
              Pull down to begin
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Flashlight Effect Component
function FlashlightEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(10, 14, 23, 0.95) 100%)`,
      }}
    />
  );
}

export default function SignupPage() {
  const [isLampLit, setIsLampLit] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { signup, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLampPull = () => {
    setIsLampLit(true);
    setTimeout(() => {
      setShowForm(true);
    }, 800);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      await signup(formData.email, formData.password, formData.name);
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="30" cy="30" r="3" fill="%23fbbf24" fill-opacity="0.02"/%3E%3C/svg%3E')`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-navy-950 to-black" />
      
      {!isLampLit && <FlashlightEffect />}

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
              key="lamp"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mb-12"
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  The AppVerse is Waiting
                </h1>
                <p className="text-white/60 text-lg">
                  Find the light... Pull the thread to begin.
                </p>
              </motion.div>

              <HangingLamp isLit={isLampLit} onPull={handleLampPull} />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="w-full max-w-md"
            >
              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="glass-card p-8 text-center relative overflow-hidden"
                  style={{
                    backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%2310b981" fill-opacity="0.05"/%3E%3C/svg%3E')`,
                    backgroundRepeat: 'repeat',
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={40} className="text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-2">Welcome to AppVerse!</h2>
                  <p className="text-white/60">Your adventure begins now...</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-8 relative overflow-hidden"
                  style={{
                    backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="1" height="1" fill="%23fbbf24" fill-opacity="0.05"/%3E%3C/svg%3E')`,
                    backgroundRepeat: 'repeat',
                    boxShadow: '0 0 60px rgba(251, 191, 36, 0.2)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
                        <Sparkles size={32} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Begin Your Journey</h2>
                      <p className="text-white/60 text-sm">
                        Create your account and get 100 starter coins
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`input-field pl-12 ${errors.name ? 'border-red-500/50' : ''}`}
                          />
                        </div>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-xs mt-1 ml-1"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`input-field pl-12 ${errors.email ? 'border-red-500/50' : ''}`}
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
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className={`input-field pl-12 pr-12 ${errors.password ? 'border-red-500/50' : ''}`}
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

                      <div>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className={`input-field pl-12 ${errors.confirmPassword ? 'border-red-500/50' : ''}`}
                          />
                        </div>
                        {errors.confirmPassword && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-xs mt-1 ml-1"
                          >
                            {errors.confirmPassword}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.agreeTerms}
                            onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                            className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-blue-500"
                          />
                          <span className="text-sm text-white/60">
                            I agree to the{' '}
                            <Link to="/terms" className="text-blue-400 hover:underline">Terms of Service</Link>
                            {' '}and{' '}
                            <Link to="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>
                          </span>
                        </label>
                        {errors.agreeTerms && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-xs mt-1 ml-1"
                          >
                            {errors.agreeTerms}
                          </motion.p>
                        )}
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
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                        ) : (
                          <>
                            Create Account
                            <ArrowRight size={18} className="ml-2" />
                          </>
                        )}
                      </Button>
                    </form>

                    <p className="text-center mt-6 text-white/60 text-sm">
                      Already have an account?{' '}
                      <Link to="/login" className="text-blue-400 hover:underline font-medium">
                        Sign In
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