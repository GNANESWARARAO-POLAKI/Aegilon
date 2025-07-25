import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface DashboardStats {
  threatsBlocked: number;
  protectionUptime: string;
  savingsUSD: number;
  activeProtocols: number;
}

const Dashboard: React.FC = () => {
  const stats: DashboardStats = { 
    threatsBlocked: 127,
    protectionUptime: '99.8%',
    savingsUSD: 2456.78,
    activeProtocols: 8
  };

  const statCards = [
    {
      title: 'MEV Threats Blocked',
      value: stats.threatsBlocked,
      icon: ShieldCheckIcon,
      color: 'safe-green',
      change: '+12 today'
    },
    {
      title: 'Protection Uptime',
      value: stats.protectionUptime,
      icon: ClockIcon,
      color: 'aegis-blue',
      change: 'Last 30 days'
    },
    {
      title: 'Savings (USD)',
      value: `$${stats.savingsUSD.toLocaleString()}`,
      icon: CurrencyDollarIcon,
      color: 'safe-green',
      change: '+$234 today'
    },
    {
      title: 'Protected Protocols',
      value: stats.activeProtocols,
      icon: ExclamationTriangleIcon,
      color: 'amber',
      change: 'All major DEXs'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white font-cyber">Protection Overview</h2>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-safe-green-500 rounded-full animate-pulse"></div>
          <span className="text-safe-green-400 text-sm font-medium">ACTIVE</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20 cyber-glow hover:border-aegis-blue-500/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-cyber-silver-400 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 text-${stat.color}-400`}>{stat.change}</p>
              </div>
              <stat.icon className={`w-8 h-8 text-${stat.color}-500`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Real-time Status Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-aegis-blue-600/20 to-safe-green-600/20 rounded-xl p-6 border border-aegis-blue-500/30"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-safe-green-500/20 rounded-full flex items-center justify-center">
              <ShieldCheckIcon className="w-6 h-6 text-safe-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Protection Status: OPTIMAL</h3>
              <p className="text-cyber-silver-300">
                All protocols monitored • Sub-500ms response time • Zero threats detected in last hour
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-safe-green-400">100%</p>
            <p className="text-cyber-silver-400 text-sm">Coverage</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
