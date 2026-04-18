import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Gamepad2,
  GraduationCap,
  ShoppingBag,
  UtensilsCrossed,
  Play,
  Crown,
  Wallet,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  ChevronRight,
  Flame,
  Coins,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/learning', label: 'Learning Hub', icon: GraduationCap },
  { path: '/games', label: 'Games Arena', icon: Gamepad2 },
  { path: '/marketplace', label: 'Marketplace', icon: ShoppingBag },
  { path: '/food', label: 'Food', icon: UtensilsCrossed },
  { path: '/entertainment', label: 'Entertainment', icon: Play },
  { path: '/premium', label: 'Premium', icon: Crown },
];

export function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(0.7);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(0.95, 0.7 + scrollY / 500);
      setHeaderOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
        style={{ backgroundColor: `rgba(10, 14, 23, ${headerOpacity})` }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <Link to="/dashboard" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
                  AV
                </div>
                <span className="hidden sm:block font-semibold text-lg">AppVerse</span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Coin Balance */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500">
                <Coins size={16} className="text-white" />
                <span className="font-semibold text-sm">{user?.coins?.toLocaleString()}</span>
              </div>

              {/* Streak */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass">
                <Flame size={16} className="text-orange-500" />
                <span className="font-medium text-sm">{user?.streak}</span>
              </div>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              {/* User Avatar */}
              <Link to="/wallet">
                <Avatar className="w-9 h-9 cursor-pointer ring-2 ring-blue-500/30">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm">
                    {user?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Sidebar - Desktop */}
      <motion.aside
        className={`fixed left-0 top-24 bottom-4 z-40 hidden lg:block transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="h-full mx-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl py-4 flex flex-col">
          {/* Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mx-4 mb-4 p-2 hover:bg-white/10 rounded-lg transition-colors self-end"
          >
            <ChevronRight
              size={20}
              className={`transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Navigation */}
          <nav className="flex-1 px-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white border border-blue-500/30'
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-blue-400' : ''} />
                  {isSidebarOpen && (
                    <span className="font-medium text-sm">{item.label}</span>
                  )}
                  {isActive && isSidebarOpen && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Wallet Quick Link */}
          <div className="px-2 pt-4 border-t border-white/10 mt-4">
            <Link
              to="/wallet"
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 ${
                location.pathname === '/wallet'
                  ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-white border border-emerald-500/30'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Wallet size={20} className={location.pathname === '/wallet' ? 'text-emerald-400' : ''} />
              {isSidebarOpen && (
                <div className="flex-1">
                  <span className="font-medium text-sm block">Wallet</span>
                  <span className="text-xs text-white/40">{user?.vaultCoins} in vault</span>
                </div>
              )}
            </Link>
          </div>

          {/* Logout */}
          <div className="px-2 pt-2">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 w-full"
            >
              <LogOut size={20} />
              {isSidebarOpen && <span className="font-medium text-sm">Logout</span>}
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute left-0 top-0 bottom-0 w-72 bg-navy-950 border-r border-white/10 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
                    AV
                  </div>
                  <span className="font-semibold">AppVerse</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white'
                          : 'text-white/60 hover:bg-white/5'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main
        className={`pt-24 pb-20 px-4 transition-all duration-300 ${
          isSidebarOpen ? 'lg:pl-72' : 'lg:pl-28'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Legal Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 px-4 py-2">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl px-4 py-2">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/consumer" className="hover:text-white/60 transition-colors">Consumer Protection</Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/grievance" className="hover:text-white/60 transition-colors">Grievance Redressal</Link>
            <span className="hidden sm:inline">|</span>
            <span>GST Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
