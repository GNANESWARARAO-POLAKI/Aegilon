import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Switch } from '@headlessui/react';
import { ShieldCheckIcon, CogIcon, BellIcon } from '@heroicons/react/24/outline';

interface ProtectionSettings {
  mevProtection: boolean;
  sandwichProtection: boolean;
  frontrunProtection: boolean;
  slippageProtection: boolean;
  autoAdjustment: boolean;
  notifications: boolean;
}

const ProtectionControls: React.FC = () => {
  const [settings, setSettings] = useState<ProtectionSettings>({
    mevProtection: true,
    sandwichProtection: true,
    frontrunProtection: true,
    slippageProtection: false,
    autoAdjustment: true,
    notifications: true
  });

  const [maxSlippage, setMaxSlippage] = useState('0.5');
  const [gasOptimization, setGasOptimization] = useState('medium');

  const toggleSetting = (key: keyof ProtectionSettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const protectionControls = [
    {
      key: 'mevProtection' as keyof ProtectionSettings,
      title: 'MEV Protection',
      description: 'Overall MEV threat protection',
      enabled: settings.mevProtection,
      critical: true
    },
    {
      key: 'sandwichProtection' as keyof ProtectionSettings,
      title: 'Sandwich Attack Protection',
      description: 'Block sandwich attacks',
      enabled: settings.sandwichProtection,
      critical: true
    },
    {
      key: 'frontrunProtection' as keyof ProtectionSettings,
      title: 'Front-running Protection',
      description: 'Prevent front-running attacks',
      enabled: settings.frontrunProtection,
      critical: true
    },
    {
      key: 'slippageProtection' as keyof ProtectionSettings,
      title: 'Smart Slippage',
      description: 'Dynamic slippage adjustment',
      enabled: settings.slippageProtection,
      critical: false
    },
    {
      key: 'autoAdjustment' as keyof ProtectionSettings,
      title: 'Auto Adjustment',
      description: 'Automatic protection tuning',
      enabled: settings.autoAdjustment,
      critical: false
    },
    {
      key: 'notifications' as keyof ProtectionSettings,
      title: 'Threat Notifications',
      description: 'Real-time threat alerts',
      enabled: settings.notifications,
      critical: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      {/* Main Protection Toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-safe-green-600/20 to-aegis-blue-600/20 rounded-xl p-6 border border-safe-green-500/30"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-safe-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheckIcon className="w-8 h-8 text-safe-green-400" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Protection Active</h2>
          <p className="text-cyber-silver-300 text-sm mb-4">
            All transactions are being monitored and protected
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-safe-green-600 hover:bg-safe-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Disable Protection
          </motion.button>
        </div>
      </motion.div>

      {/* Protection Settings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20"
      >
        <div className="flex items-center space-x-2 mb-4">
          <CogIcon className="w-5 h-5 text-aegis-blue-400" />
          <h3 className="text-lg font-semibold text-white">Protection Settings</h3>
        </div>

        <div className="space-y-4">
          {protectionControls.map((control, index) => (
            <motion.div
              key={control.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between p-3 rounded-lg bg-cyber-silver-900/30"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="text-white font-medium">{control.title}</h4>
                  {control.critical && (
                    <span className="px-2 py-1 text-xs bg-threat-red-500/20 text-threat-red-400 rounded-full">
                      Critical
                    </span>
                  )}
                </div>
                <p className="text-cyber-silver-400 text-sm">{control.description}</p>
              </div>
              <Switch
                checked={control.enabled}
                onChange={() => toggleSetting(control.key)}
                className={`${
                  control.enabled ? 'bg-safe-green-600' : 'bg-cyber-silver-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-aegis-blue-500 focus:ring-offset-2 focus:ring-offset-cyber-silver-800`}
              >
                <span
                  className={`${
                    control.enabled ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Advanced Settings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Advanced Settings</h3>
        
        <div className="space-y-4">
          {/* Max Slippage */}
          <div>
            <label className="block text-cyber-silver-300 text-sm font-medium mb-2">
              Maximum Slippage (%)
            </label>
            <input
              type="number"
              value={maxSlippage}
              onChange={(e) => setMaxSlippage(e.target.value)}
              className="w-full bg-cyber-silver-900/50 border border-cyber-silver-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-aegis-blue-500"
              step="0.1"
              min="0.1"
              max="5.0"
            />
          </div>

          {/* Gas Optimization */}
          <div>
            <label className="block text-cyber-silver-300 text-sm font-medium mb-2">
              Gas Optimization
            </label>
            <select
              value={gasOptimization}
              onChange={(e) => setGasOptimization(e.target.value)}
              className="w-full bg-cyber-silver-900/50 border border-cyber-silver-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-aegis-blue-500"
            >
              <option value="low">Low (Slower, Cheaper)</option>
              <option value="medium">Medium (Balanced)</option>
              <option value="high">High (Faster, Expensive)</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        
        <div className="grid grid-cols-1 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center space-x-2 bg-aegis-blue-600/20 hover:bg-aegis-blue-600/30 text-aegis-blue-400 font-medium py-3 px-4 rounded-lg transition-colors border border-aegis-blue-500/30"
          >
            <BellIcon className="w-4 h-4" />
            <span>Test Protection</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center space-x-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 font-medium py-3 px-4 rounded-lg transition-colors border border-amber-500/30"
          >
            <CogIcon className="w-4 h-4" />
            <span>Reset to Defaults</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProtectionControls;
