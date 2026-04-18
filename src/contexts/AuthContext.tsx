import React, { createContext, useContext, useState, useCallback } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  coins: number;
  vaultCoins: number;
  streak: number;
  isPremium: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, _password: string) => Promise<void>;
  signup: (email: string, _password: string, name: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, _password: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setUser({
      id: '1',
      email,
      name: email.split('@')[0],
      coins: 1250,
      vaultCoins: 500,
      streak: 3,
      isPremium: false,
    });
    setIsLoading(false);
  }, []);

  const signup = useCallback(async (email: string, _password: string, name: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setUser({
      id: '1',
      email,
      name,
      coins: 100,
      vaultCoins: 0,
      streak: 0,
      isPremium: false,
    });
    setIsLoading(false);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...updates } : null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
