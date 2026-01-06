import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/authSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleGetStarted = () => {
    // Mock login for demo purposes
    const mockUser = {
      id: '1',
      name: 'Demo User',
      email: 'demo@agrichain.com',
      role: 'farmer' as const,
      organization: 'GreenFields Farm',
      location: 'California, USA',
      walletAddress: '0x742d35Cc6634C0532925a3b8D404d3aABe09e3b1',
      createdAt: new Date(),
    };

    dispatch(loginSuccess({ 
      user: mockUser, 
      token: 'mock-jwt-token' 
    }));
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌱</span>
            </div>
            <h1 className="text-2xl font-bold text-gradient">AgriChain</h1>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => alert('How It Works section - Interactive demo coming soon!')}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => alert('About AgriChain - Blockchain-powered agricultural transparency platform')}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              About
            </button>
          </nav>

          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              onClick={() => alert('Sign In functionality - Choose your role: Farmer, Inspector, Admin, or Consumer')}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={handleGetStarted}
              className="btn btn-primary"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;