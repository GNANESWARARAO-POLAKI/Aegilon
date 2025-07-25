import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ThreatMonitor from './components/ThreatMonitor';
import ProtectionControls from './components/ProtectionControls';
import WalletConnection from './components/WalletConnection';
import AboutPage from './components/AboutPage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';
import './App.css';

type PageType = 'landing' | 'dashboard' | 'about' | 'pricing' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [isAppMode, setIsAppMode] = useState(false);

  const renderPage = () => {
    if (isAppMode) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-cyber-silver-900 via-cyber-silver-800 to-aegis-blue-900">
          {/* App Header */}
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-cyber-silver-900/90 backdrop-blur-sm border-b border-aegis-blue-500/20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                {/* Logo */}
                <motion.div 
                  className="flex items-center space-x-3 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsAppMode(false)}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-aegis-blue-500 to-aegis-blue-700 rounded-lg flex items-center justify-center cyber-glow">
                    <span className="text-white font-bold text-xl">Æ</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white font-cyber">Aegilon</h1>
                    <p className="text-aegis-blue-300 text-sm">MEV Protection Oracle</p>
                  </div>
                </motion.div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                  <button 
                    onClick={() => setCurrentPage('dashboard')}
                    className={`transition-colors ${currentPage === 'dashboard' ? 'text-aegis-blue-400' : 'text-cyber-silver-300 hover:text-aegis-blue-400'}`}
                  >
                    Dashboard
                  </button>
                  <button className="text-cyber-silver-300 hover:text-aegis-blue-400 transition-colors">
                    Monitor
                  </button>
                  <button className="text-cyber-silver-300 hover:text-aegis-blue-400 transition-colors">
                    Analytics
                  </button>
                </nav>

                {/* Wallet Connection */}
                <WalletConnection />
              </div>
            </div>
          </motion.header>

          {/* App Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Dashboard */}
              <div className="lg:col-span-2 space-y-8">
                <Dashboard />
                <ThreatMonitor />
              </div>

              {/* Right Column - Controls */}
              <div className="space-y-8">
                <ProtectionControls />
              </div>
            </div>
          </main>

          {/* App Footer */}
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-cyber-silver-900/50 border-t border-aegis-blue-500/20 mt-16"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center">
                <p className="text-cyber-silver-400 text-sm">
                  Aegilon - Ultra-Fast MEV Protection for Etherlink Ecosystem
                </p>
                <p className="text-cyber-silver-500 text-xs mt-2">
                  Powered by Thirdweb • Goldsky • Redstone • Sequence
                </p>
              </div>
            </div>
          </motion.footer>
        </div>
      );
    }

    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'about':
        return <AboutPage />;
      case 'pricing':
        return <PricingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <LandingPage />;
    }
  };

  const renderNavigation = () => {
    if (isAppMode) return null;

    return (
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-cyber-silver-900/90 backdrop-blur-sm border-b border-aegis-blue-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentPage('landing')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-aegis-blue-500 to-aegis-blue-700 rounded-lg flex items-center justify-center cyber-glow">
                <span className="text-white font-bold text-xl">Æ</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white font-cyber">Aegilon</h1>
                <p className="text-aegis-blue-300 text-sm">MEV Protection Oracle</p>
              </div>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('landing')}
                className={`transition-colors ${currentPage === 'landing' ? 'text-aegis-blue-400' : 'text-cyber-silver-300 hover:text-aegis-blue-400'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`transition-colors ${currentPage === 'about' ? 'text-aegis-blue-400' : 'text-cyber-silver-300 hover:text-aegis-blue-400'}`}
              >
                About
              </button>
              <button 
                onClick={() => setCurrentPage('pricing')}
                className={`transition-colors ${currentPage === 'pricing' ? 'text-aegis-blue-400' : 'text-cyber-silver-300 hover:text-aegis-blue-400'}`}
              >
                Pricing
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`transition-colors ${currentPage === 'contact' ? 'text-aegis-blue-400' : 'text-cyber-silver-300 hover:text-aegis-blue-400'}`}
              >
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAppMode(true)}
              className="bg-gradient-to-r from-aegis-blue-600 to-safe-green-600 text-white font-medium py-2 px-6 rounded-lg cyber-glow"
            >
              Launch App
            </motion.button>
          </div>
        </div>
      </motion.header>
    );
  };

  return (
    <div className="App">
      {renderNavigation()}
      <div className={isAppMode ? '' : 'pt-20'}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
