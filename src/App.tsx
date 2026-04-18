import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { SmoothScroll } from './components/SmoothScroll';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import GamesArena from './pages/GamesArena';
import LearningHub from './pages/LearningHub';
import Marketplace from './pages/Marketplace';
import Food from './pages/Food';
import Entertainment from './pages/Entertainment';
import Premium from './pages/Premium';
import Wallet from './pages/Wallet';

function App() {
  return (
    <AuthProvider>
      <Router>
        <SmoothScroll />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/games" element={<GamesArena />} />
            <Route path="/learning" element={<LearningHub />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/food" element={<Food />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/wallet" element={<Wallet />} />
          </Route>
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
