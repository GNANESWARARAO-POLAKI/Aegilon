import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WalletIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface WalletState {
  isConnected: boolean;
  address: string | null;
  balance: string | null;
  network: string;
}

const WalletConnection: React.FC = () => {
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
    network: 'Etherlink'
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mock wallet connection
  const connectWallet = async () => {
    // Simulate wallet connection delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setWallet({
      isConnected: true,
      address: '0x742d...5f2A',
      balance: '12.456',
      network: 'Etherlink'
    });
  };

  const disconnectWallet = () => {
    setWallet({
      isConnected: false,
      address: null,
      balance: null,
      network: 'Etherlink'
    });
    setIsDropdownOpen(false);
  };

  const copyAddress = () => {
    if (wallet.address) {
      navigator.clipboard.writeText(wallet.address);
      // You could add a toast notification here
    }
  };

  if (!wallet.isConnected) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={connectWallet}
        className="flex items-center space-x-2 bg-aegis-blue-600 hover:bg-aegis-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors cyber-glow"
      >
        <WalletIcon className="w-5 h-5" />
        <span>Connect Wallet</span>
      </motion.button>
    );
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-3 bg-cyber-silver-800/80 backdrop-blur-sm border border-aegis-blue-500/30 rounded-lg py-2 px-4 cyber-glow"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-aegis-blue-500 to-safe-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">
            {wallet.address?.slice(2, 4).toUpperCase()}
          </span>
        </div>
        <div className="text-left hidden md:block">
          <p className="text-white text-sm font-medium">{wallet.address}</p>
          <p className="text-cyber-silver-400 text-xs">
            {wallet.balance} ETH • {wallet.network}
          </p>
        </div>
        <ChevronDownIcon 
          className={`w-4 h-4 text-cyber-silver-400 transition-transform ${
            isDropdownOpen ? 'rotate-180' : ''
          }`} 
        />
      </motion.button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-64 bg-cyber-silver-800 border border-aegis-blue-500/30 rounded-lg shadow-xl z-50 overflow-hidden"
        >
          {/* Account Info */}
          <div className="p-4 border-b border-cyber-silver-700">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-aegis-blue-500 to-safe-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {wallet.address?.slice(2, 4).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-white font-medium">Connected</p>
                <p className="text-cyber-silver-400 text-sm">{wallet.network}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-cyber-silver-400 text-sm">Address:</span>
                <button
                  onClick={copyAddress}
                  className="text-aegis-blue-400 text-sm hover:text-aegis-blue-300 transition-colors"
                >
                  {wallet.address}
                </button>
              </div>
              <div className="flex justify-between">
                <span className="text-cyber-silver-400 text-sm">Balance:</span>
                <span className="text-white text-sm font-medium">{wallet.balance} ETH</span>
              </div>
            </div>
          </div>

          {/* Protection Status */}
          <div className="p-4 border-b border-cyber-silver-700">
            <div className="flex items-center justify-between">
              <span className="text-cyber-silver-400 text-sm">MEV Protection:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-safe-green-500 rounded-full"></div>
                <span className="text-safe-green-400 text-sm font-medium">Active</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-cyber-silver-400 text-sm">Threats Blocked:</span>
              <span className="text-white text-sm font-medium">127</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <button className="w-full text-left px-3 py-2 text-cyber-silver-300 hover:text-white hover:bg-cyber-silver-700 rounded transition-colors">
              View Transactions
            </button>
            <button className="w-full text-left px-3 py-2 text-cyber-silver-300 hover:text-white hover:bg-cyber-silver-700 rounded transition-colors">
              Protection History
            </button>
            <button className="w-full text-left px-3 py-2 text-cyber-silver-300 hover:text-white hover:bg-cyber-silver-700 rounded transition-colors">
              Settings
            </button>
            <hr className="my-2 border-cyber-silver-700" />
            <button
              onClick={disconnectWallet}
              className="w-full text-left px-3 py-2 text-threat-red-400 hover:text-threat-red-300 hover:bg-cyber-silver-700 rounded transition-colors"
            >
              Disconnect Wallet
            </button>
          </div>
        </motion.div>
      )}

      {/* Backdrop */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default WalletConnection;
