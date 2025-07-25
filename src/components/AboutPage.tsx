import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon,
  BoltIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const technologies = [
    {
      name: 'Thirdweb',
      description: 'Smart contract deployment and management',
      icon: CodeBracketIcon,
      color: 'aegis-blue'
    },
    {
      name: 'Goldsky',
      description: 'Real-time transaction indexing and monitoring',
      icon: CpuChipIcon,
      color: 'safe-green'
    },
    {
      name: 'Redstone',
      description: 'Oracle price feeds for accurate arbitrage detection',
      icon: BoltIcon,
      color: 'amber'
    },
    {
      name: 'Sequence',
      description: 'Seamless wallet integration and user experience',
      icon: ShieldCheckIcon,
      color: 'threat-red'
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'Lead Blockchain Developer',
      expertise: 'Smart Contracts, MEV Research',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Sarah Chen',
      role: 'Frontend Engineer',
      expertise: 'React, Web3 Integration',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Security Researcher',
      expertise: 'MEV Protection, DeFi Security',
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-silver-900 via-cyber-silver-800 to-aegis-blue-900">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6 font-cyber">About Aegilon</h1>
            <p className="text-xl text-cyber-silver-300 max-w-3xl mx-auto leading-relaxed">
              Aegilon represents the next evolution in DeFi security, combining cutting-edge technology 
              with real-time threat detection to create an impenetrable shield against MEV exploitation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-cyber-silver-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-cyber-silver-300 mb-6 leading-relaxed">
                MEV (Maximal Extractable Value) exploitation costs traders billions of dollars annually. 
                Traditional solutions rely on private mempools or delayed execution, creating poor user experiences.
              </p>
              <p className="text-lg text-cyber-silver-300 mb-6 leading-relaxed">
                Aegilon leverages Etherlink's lightning-fast confirmation times to create a new paradigm: 
                real-time MEV protection that detects and neutralizes threats before they can execute.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-safe-green-500/20 rounded-full flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-safe-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Sub-500ms Protection</h3>
                  <p className="text-cyber-silver-400">Faster than any competing solution</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-8 border border-aegis-blue-500/20 cyber-glow"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Key Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-cyber-silver-300">MEV Losses Prevented</span>
                  <span className="text-safe-green-400 font-bold">$2.5M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyber-silver-300">Threats Detected</span>
                  <span className="text-aegis-blue-400 font-bold">10,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyber-silver-300">Average Response Time</span>
                  <span className="text-amber-400 font-bold">&lt;500ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyber-silver-300">Success Rate</span>
                  <span className="text-safe-green-400 font-bold">99.8%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Powered by Industry Leaders</h2>
            <p className="text-xl text-cyber-silver-300 max-w-3xl mx-auto">
              Aegilon leverages the best-in-class partner technologies to deliver unmatched MEV protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20 cyber-glow hover:border-aegis-blue-500/40 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-${tech.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className={`w-8 h-8 text-${tech.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-cyber-silver-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cyber-silver-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Meet the Team</h2>
            <p className="text-xl text-cyber-silver-300 max-w-2xl mx-auto">
              Expert developers and researchers dedicated to advancing DeFi security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-aegis-blue-500 to-safe-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-aegis-blue-400 mb-2">{member.role}</p>
                <p className="text-cyber-silver-300 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-xl text-cyber-silver-300 max-w-4xl mx-auto leading-relaxed mb-8">
              We envision a DeFi ecosystem where traders can operate with complete confidence, 
              knowing that sophisticated MEV protection shields their every transaction. 
              Aegilon is building the infrastructure for this future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-aegis-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-8 h-8 text-aegis-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Global Scale</h3>
                <p className="text-cyber-silver-300">Protecting traders across all major blockchains</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-safe-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BoltIcon className="w-8 h-8 text-safe-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                <p className="text-cyber-silver-300">Continuous advancement in MEV protection technology</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
                <p className="text-cyber-silver-300">Open-source algorithms and community governance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
