import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ThreatData {
  id: string;
  timestamp: number;
  type: 'sandwich' | 'frontrun' | 'arbitrage';
  severity: 'low' | 'medium' | 'high';
  protocol: string;
  amount: number;
  status: 'blocked' | 'monitoring' | 'mitigated';
}

interface ChartData {
  time: string;
  threats: number;
  blocked: number;
}

const ThreatMonitor: React.FC = () => {
  const [threats, setThreats] = useState<ThreatData[]>([]);
  const [chartData, setChartData] = useState<ChartData[]>([]);

  // Mock real-time data
  useEffect(() => {
    const generateMockThreats = () => {
      const mockThreats: ThreatData[] = [
        {
          id: '1',
          timestamp: Date.now() - 30000,
          type: 'sandwich',
          severity: 'high',
          protocol: 'UniswapV3',
          amount: 1250.50,
          status: 'blocked'
        },
        {
          id: '2',
          timestamp: Date.now() - 60000,
          type: 'frontrun',
          severity: 'medium',
          protocol: 'SushiSwap',
          amount: 890.25,
          status: 'blocked'
        },
        {
          id: '3',
          timestamp: Date.now() - 120000,
          type: 'arbitrage',
          severity: 'low',
          protocol: 'Curve',
          amount: 450.75,
          status: 'monitoring'
        }
      ];
      setThreats(mockThreats);
    };

    const generateChartData = () => {
      const data: ChartData[] = [];
      for (let i = 23; i >= 0; i--) {
        const time = new Date(Date.now() - i * 60 * 60 * 1000).toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        });
        data.push({
          time,
          threats: Math.floor(Math.random() * 20) + 5,
          blocked: Math.floor(Math.random() * 15) + 3
        });
      }
      setChartData(data);
    };

    generateMockThreats();
    generateChartData();

    // Simulate real-time updates
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newThreat: ThreatData = {
          id: Date.now().toString(),
          timestamp: Date.now(),
          type: ['sandwich', 'frontrun', 'arbitrage'][Math.floor(Math.random() * 3)] as any,
          severity: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as any,
          protocol: ['UniswapV3', 'SushiSwap', 'Curve', 'Balancer'][Math.floor(Math.random() * 4)],
          amount: Math.random() * 2000 + 100,
          status: 'blocked'
        };
        setThreats(prev => [newThreat, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'threat-red';
      case 'medium': return 'amber';
      case 'low': return 'safe-green';
      default: return 'cyber-silver';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'blocked': return 'safe-green';
      case 'monitoring': return 'amber';
      case 'mitigated': return 'aegis-blue';
      default: return 'cyber-silver';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white font-cyber">Threat Monitor</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-safe-green-500 rounded-full animate-pulse"></div>
          <span className="text-cyber-silver-300 text-sm">Live Monitoring</span>
        </div>
      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20"
      >
        <h3 className="text-lg font-semibold text-white mb-4">24-Hour Threat Activity</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #3b82f6',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="threats" 
                stroke="#ef4444" 
                strokeWidth={2}
                name="Threats Detected"
              />
              <Line 
                type="monotone" 
                dataKey="blocked" 
                stroke="#22c55e" 
                strokeWidth={2}
                name="Threats Blocked"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Threat Feed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Recent Threat Activity</h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          <AnimatePresence>
            {threats.map((threat) => (
              <motion.div
                key={threat.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center justify-between p-4 bg-cyber-silver-900/50 rounded-lg border border-cyber-silver-700/30"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full bg-${getSeverityColor(threat.severity)}-500`}></div>
                  <div>
                    <p className="text-white font-medium capitalize">
                      {threat.type} Attack
                    </p>
                    <p className="text-cyber-silver-400 text-sm">
                      {threat.protocol} • ${threat.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${getStatusColor(threat.status)}-500/20 text-${getStatusColor(threat.status)}-400 capitalize`}>
                    {threat.status}
                  </span>
                  <p className="text-cyber-silver-500 text-xs mt-1">
                    {new Date(threat.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThreatMonitor;
