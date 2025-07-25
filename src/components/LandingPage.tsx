import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  BoltIcon, 
  CurrencyDollarIcon, 
  GlobeAltIcon,
  ArrowRightIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const LandingPage: React.FC = () => {
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const featuresY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const testimonialsY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const features = [
    {
      icon: BoltIcon,
      title: 'Lightning-Fast Detection',
      description: 'Sub-500ms MEV threat detection using Etherlink\'s speed advantage. Goldsky-powered indexing monitors all transactions in real-time for suspicious patterns.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center',
      color: 'blue'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Comprehensive Protection',
      description: 'Advanced algorithms detect and block sandwich attacks, front-running, and arbitrage MEV before execution. Smart contract-based mitigation ensures bulletproof security.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center',
      color: 'green'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Cost-Effective Solutions',
      description: 'Near-zero protection fees enable micro-optimizations impossible on other chains. Redstone oracle integration provides accurate real-time price data.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center',
      color: 'purple'
    },
    {
      icon: GlobeAltIcon,
      title: 'Universal Protocol Coverage',
      description: 'Seamless protection across all Etherlink DeFi protocols. One-click activation through Sequence wallet integration for institutional and retail traders.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center',
      color: 'amber'
    }
  ];

  const stats = [
    { label: 'MEV Attacks Prevented', value: '15,000+' },
    { label: 'Protected Trading Volume', value: '$5.2M+' },
    { label: 'Threat Detection Speed', value: '<500ms' },
    { label: 'Protocol Uptime', value: '99.98%' }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Senior DeFi Trader',
      content: 'Aegilon\'s real-time protection saved me over $50K in potential MEV attacks. The sub-500ms detection is genuinely game-changing for high-frequency trading.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      company: 'Crypto Capital Partners'
    },
    {
      name: 'Sarah Kim',
      role: 'Protocol Developer',
      content: 'Best MEV protection infrastructure we\'ve integrated. Goldsky monitoring + Etherlink speed creates an unbeatable combination for our DeFi protocol.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      company: 'DeFi Innovations Lab'
    },
    {
      name: 'Michael Torres',
      role: 'Institutional Trader',
      content: 'Finally, MEV protection that works at institutional scale. The Sequence wallet integration and near-zero fees make this perfect for our trading operations.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      company: 'Meridian Trading Group'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-silver-900 via-cyber-silver-800 to-aegis-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-aegis-blue-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-aegis-blue-600/20 to-safe-green-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-threat-red-600/20 to-amber-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 100 + '%'}
              y1={Math.random() * 100 + '%'}
              x2={Math.random() * 100 + '%'}
              y2={Math.random() * 100 + '%'}
              stroke="url(#gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="detection-grid absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div 
              className="flex items-center justify-center space-x-4 mb-8"
              initial={{ scale: 0.5, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-aegis-blue-500 to-aegis-blue-700 rounded-2xl flex items-center justify-center cyber-glow"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))",
                    "drop-shadow(0 0 40px rgba(59, 130, 246, 0.6))",
                    "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.span 
                  className="text-white font-bold text-4xl"
                  animate={{ 
                    filter: [
                      "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
                      "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))",
                      "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Æ
                </motion.span>
              </motion.div>
              <motion.div 
                className="text-left"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.h1 
                  className="text-6xl font-bold text-white font-cyber"
                  animate={{
                    filter: [
                      "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
                      "drop-shadow(0 0 30px rgba(34, 197, 94, 0.5))",
                      "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Aegilon
                </motion.h1>
                <motion.p 
                  className="text-aegis-blue-300 text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  MEV Protection Oracle
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                Real-Time{' '}
              </motion.span>
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-aegis-blue-400 to-safe-green-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                MEV Protection
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="block"
              >
                for{' '}
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 40px rgba(34, 197, 94, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Etherlink DeFi
                </motion.span>
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-cyber-silver-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              <span className="text-cyber-silver-200">
                Aegilon leverages Etherlink's sub-500ms confirmations
              </span>{' '}
              to detect and neutralize sandwich attacks, front-running, and MEV extraction 
              before they execute.{' '}
              <motion.span
                className="font-semibold text-white"
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Professional-grade protection with near-zero fees.
              </motion.span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.08,
                  y: -8,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))",
                    "drop-shadow(0 0 40px rgba(34, 197, 94, 0.4))",
                    "drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))"
                  ]
                }}
                transition={{
                  filter: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="bg-gradient-to-r from-aegis-blue-600 to-safe-green-600 text-white font-bold 
                         py-4 px-8 sm:py-5 sm:px-10 md:py-6 md:px-12 rounded-xl cyber-glow 
                         flex items-center space-x-3 text-base sm:text-lg md:text-xl relative overflow-hidden group"
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <ShieldCheckIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 relative z-10" />
                </motion.div>
                <span className="relative z-10">Activate Protection</span>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10" />
                </motion.div>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  y: -4,
                  borderColor: "rgba(59, 130, 246, 0.8)",
                  backgroundColor: "rgba(59, 130, 246, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-aegis-blue-500 text-aegis-blue-400 font-bold 
                         py-4 px-8 sm:py-5 sm:px-10 md:py-6 md:px-12 rounded-xl 
                         hover:bg-aegis-blue-500/10 hover:border-aegis-blue-400 
                         transition-all duration-300 text-base sm:text-lg md:text-xl 
                         relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-aegis-blue-600/0 via-aegis-blue-600/10 to-aegis-blue-600/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">View Live Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <motion.section 
        className="py-16 bg-cyber-silver-900/50 relative overflow-hidden"
        style={{ y: statsY }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.h3 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 40px rgba(34, 197, 94, 0.3)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                Real-Time Protection Metrics
              </motion.h3>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-cyber-silver-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Live performance data from Aegilon's protection network
              </motion.p>
            </motion.div>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="text-center bg-gradient-to-br from-cyber-silver-800/30 to-aegis-blue-900/30 
                           backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20 
                           hover:border-aegis-blue-400/40 transition-all duration-300 group"
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-aegis-blue-600/10 to-safe-green-600/10 rounded-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aegis-blue-400 to-safe-green-400 mb-3 relative z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(34, 197, 94, 0.5)",
                      "0 0 10px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                >
                  {stat.value}
                </motion.div>
                
                <motion.div 
                  className="text-sm sm:text-base md:text-lg font-medium relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {stat.label}
                </motion.div>
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-aegis-blue-400/30 rounded-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Features Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        style={{ y: featuresY }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-32 left-16 w-48 h-48 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 0.7, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h3 
                className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: "linear-gradient(90deg, #3b82f6, #22c55e, #8b5cf6, #3b82f6)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Why Aegilon Leads MEV Protection
              </motion.h3>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-cyber-silver-300 max-w-5xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                animate={{
                  filter: [
                    "brightness(1)",
                    "brightness(1.1)",
                    "brightness(1)"
                  ]
                }}
              >
                Built on cutting-edge infrastructure combining{' '}
                <span className="text-aegis-blue-400 font-semibold">
                  Thirdweb smart contracts
                </span>,{' '}
                <span className="text-safe-green-400 font-semibold">
                  Goldsky real-time indexing
                </span>,{' '}
                <span className="text-aegis-blue-400 font-semibold">
                  Redstone oracles
                </span>, and{' '}
                <span className="text-safe-green-400 font-semibold">
                  Sequence wallet integration
                </span>.
                <br className="hidden md:block" />
                Experience institutional-grade MEV protection designed for Etherlink's unique advantages.
              </motion.p>
            </motion.div>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                  {/* Card background */}
                <div className="bg-gradient-to-br from-cyber-silver-800/50 to-aegis-blue-900/50 
                             backdrop-blur-sm rounded-xl border border-aegis-blue-500/20 
                             group-hover:border-aegis-blue-400/60 transition-all duration-300
                             group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] h-full">
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aegis-blue-600/0 
                               to-aegis-blue-600/0 group-hover:from-aegis-blue-600/10 
                               group-hover:to-safe-green-600/10 rounded-xl transition-all duration-300" />

                  <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Feature image */}
                    <div className="w-full h-32 mb-6 rounded-lg overflow-hidden">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-500 
                                   group-hover:scale-110"
                        />
                      
                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-silver-900/80 
                                    via-transparent to-transparent opacity-60 
                                    group-hover:opacity-30 transition-opacity duration-300" />
                      </div>

                        {/* Icon */}
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 
                                   bg-aegis-blue-500/30 group-hover:bg-aegis-blue-500/60 
                                   transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-aegis-blue-300 group-hover:text-aegis-blue-100 
                                             transition-colors duration-300" />
                        </div>

                        {/* Title */}
                        <motion.h4 
                      className={`text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 transition-colors duration-300 ${
                            feature.color === 'blue' ? 'group-hover:text-blue-300' :
                            feature.color === 'green' ? 'group-hover:text-green-300' :
                            feature.color === 'purple' ? 'group-hover:text-purple-300' :
                            'group-hover:text-amber-300'
                          }`}
                      initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {feature.title}
                        </motion.h4>
                        
                        {/* Description */}
                        <motion.p 
                      className="text-sm sm:text-base md:text-lg text-cyber-silver-300 group-hover:text-cyber-silver-200 
                               transition-colors duration-300 leading-relaxed flex-grow"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.6 }}
                      animate={{
                        filter: [
                          "brightness(1)",
                          "brightness(1.05)",
                          "brightness(1)"
                        ]
                      }}
                        >
                          {feature.description}
                        </motion.p>

                    {/* Decorative elements */}
                    <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                      feature.color === 'blue' ? 'bg-blue-400 group-hover:shadow-lg group-hover:shadow-blue-400/50' :
                      feature.color === 'green' ? 'bg-green-400 group-hover:shadow-lg group-hover:shadow-green-400/50' :
                      feature.color === 'purple' ? 'bg-purple-400 group-hover:shadow-lg group-hover:shadow-purple-400/50' :
                      'bg-amber-400 group-hover:shadow-lg group-hover:shadow-amber-400/50'
                    }`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <section className="py-20 bg-cyber-silver-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h3 
              className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              How Aegilon Works
            </motion.h3>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-cyber-silver-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              animate={{
                filter: [
                  "brightness(1)",
                  "brightness(1.1)",
                  "brightness(1)"
                ]
              }}
            >
              Three-layer architecture delivering institutional-grade MEV protection
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Real-Time Monitoring',
                description: 'Goldsky-powered subgraphs index all Etherlink transactions in real-time, analyzing patterns for potential MEV opportunities and threats across all DeFi protocols.'
              },
              {
                step: '02',
                title: 'Instant Threat Detection',
                description: 'Advanced algorithms with Redstone oracle price feeds detect sandwich attacks, front-running, and arbitrage opportunities within sub-500ms timeframes.'
              },
              {
                step: '03',
                title: 'Smart Contract Protection',
                description: 'Thirdweb-deployed smart contracts automatically execute protection mechanisms, blocking or mitigating MEV attacks before they can extract value from your transactions.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="text-center group"
              >
                        <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-aegis-blue-500 to-safe-green-500 
                           rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold 
                           text-xl sm:text-2xl group-hover:shadow-lg group-hover:shadow-aegis-blue-500/30 
                                   transition-all duration-300"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                          }}
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(59, 130, 246, 0.3)",
                              "0 0 40px rgba(34, 197, 94, 0.3)",
                              "0 0 20px rgba(59, 130, 246, 0.3)"
                            ]
                          }}
                          transition={{
                            boxShadow: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.5
                            }
                          }}
                        >
                          {step.step}
                        </motion.div>
                        <motion.h4 
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-aegis-blue-300 
                                   transition-colors duration-300"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {step.title}
                        </motion.h4>
                        <motion.p 
                  className="text-sm sm:text-base md:text-lg text-cyber-silver-300 group-hover:text-cyber-silver-200 
                                   transition-colors duration-300 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                  animate={{
                    filter: [
                      "brightness(1)",
                      "brightness(1.05)",
                      "brightness(1)"
                    ]
                  }}
                        >
                          {step.description}
                        </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        style={{ y: testimonialsY }}
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-amber-600/10 to-orange-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 0.8, 1],
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h3 
                className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(245, 158, 11, 0.3)",
                    "0 0 40px rgba(34, 197, 94, 0.3)",
                    "0 0 20px rgba(245, 158, 11, 0.3)"
                  ]
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                Trusted by Professional Traders
              </motion.h3>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-cyber-silver-300 max-w-5xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={{
                  filter: [
                    "brightness(1)",
                    "brightness(1.1)",
                    "brightness(1)"
                  ]
                }}
              >
                Real testimonials from institutional and retail traders who rely on Aegilon's 
                advanced MEV protection. Join thousands who trust our battle-tested infrastructure 
                to safeguard their DeFi operations.
              </motion.p>
            </motion.div>          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50, rotateY: 25 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  rotateY: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                  {/* Card background with enhanced effects */}
                  <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyber-silver-800/60 to-aegis-blue-900/60 
                             backdrop-blur-sm rounded-xl border border-aegis-blue-500/30 
                             group-hover:border-amber-400/60 transition-all duration-500
                             group-hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]"
                  />

                {/* Animated background pattern */}
                      <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-orange-600/10 
                             rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(245,158,11,0.05), rgba(249,115,22,0.05))",
                      "linear-gradient(135deg, rgba(34,197,94,0.05), rgba(16,185,129,0.05))",
                      "linear-gradient(135deg, rgba(245,158,11,0.05), rgba(249,115,22,0.05))"
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative z-10 p-6">
                  {/* User avatar and info */}
                  <motion.div 
                    className="flex items-center mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    <motion.div 
                      className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-aegis-blue-400/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Avatar glow effect */}
                        <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-aegis-blue-400/20 to-amber-400/20 rounded-full"
                          animate={{
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.7
                          }}
                        />
                      </motion.div>

                    <div>
                        <motion.div 
                        className="font-semibold text-white group-hover:text-amber-300 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                          >
                            {testimonial.name}
                          </motion.div>
                          <motion.div 
                        className="text-aegis-blue-400 text-sm group-hover:text-amber-400 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.6 }}
                          >
                            {testimonial.role}
                          </motion.div>
                          <motion.div 
                        className="text-cyber-silver-400 text-xs mt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                          >
                            {testimonial.company}
                          </motion.div>
                    </div>
                        </motion.div>

                  {/* Star rating with animation */}
                        <motion.div 
                    className="flex items-center mb-4"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                        >
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, rotate: -180, scale: 0 }}
                              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                              transition={{ 
                                delay: index * 0.2 + 0.4 + i * 0.1,
                                duration: 0.6,
                                type: "spring"
                              }}
                              whileHover={{ 
                                scale: 1.3,
                                rotate: 360,
                                transition: { duration: 0.4 }
                              }}
                            >
                        <StarIcon className="w-5 h-5 text-amber-400 fill-current mr-1" />
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Testimonial content */}
                        <motion.p 
                    className="text-cyber-silver-300 group-hover:text-cyber-silver-200 mb-4 italic leading-relaxed transition-colors duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.8 }}
                        >
                          "{testimonial.content}"
                        </motion.p>

                    {/* Decorative quote marks */}
                    <motion.div
                    className="absolute top-4 right-4 text-6xl text-aegis-blue-400/20 font-serif leading-none"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      "
                    </motion.div>

                  {/* Animated corner decorations */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-3 h-3 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4
                    }}
                  />
                  </div>

                {/* Hover border effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent"
                  style={{
                    background: "linear-gradient(135deg, transparent, rgba(245,158,11,0.5), transparent)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor"
                  }}
                  animate={{
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.8
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced CTA Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        style={{ y: ctaY }}
      >
        {/* Dynamic background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-aegis-blue-600/20 via-purple-600/20 to-safe-green-600/20"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2), rgba(34,197,94,0.2))",
              "linear-gradient(90deg, rgba(34,197,94,0.2), rgba(59,130,246,0.2), rgba(139,92,246,0.2))",
              "linear-gradient(90deg, rgba(139,92,246,0.2), rgba(34,197,94,0.2), rgba(59,130,246,0.2))",
              "linear-gradient(90deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2), rgba(34,197,94,0.2))"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: 0
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: Math.random() * 6 + 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.h3 
              className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              animate={{
                textShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.6)",
                  "0 0 50px rgba(34, 197, 94, 0.6)",
                  "0 0 30px rgba(139, 92, 246, 0.6)",
                  "0 0 30px rgba(59, 130, 246, 0.6)"
                ]
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              Ready to Secure Your Trades?
            </motion.h3>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyber-silver-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              animate={{
                filter: [
                  "brightness(1)",
                  "brightness(1.1)",
                  "brightness(1)"
                ]
              }}
            >
              Join institutional and retail traders who trust Aegilon with their MEV protection.
              <br className="hidden md:block" />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-aegis-blue-400 to-safe-green-400 font-semibold"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Deploy enterprise-grade protection in under 30 seconds.
              </motion.span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-aegis-blue-600 via-purple-600 to-safe-green-600 
                           text-white font-bold py-4 px-10 rounded-xl text-xl
                           relative overflow-hidden group"
              >
                {/* Button animation overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-aegis-blue-700 via-purple-700 to-safe-green-700"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10 flex items-center space-x-3">
                  <ShieldCheckIcon className="w-6 h-6" />
                  <span>Get Protected Now</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRightIcon className="w-6 h-6" />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  borderColor: "rgba(34, 197, 94, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-aegis-blue-500 text-aegis-blue-400 font-semibold 
                           py-4 px-10 rounded-xl text-xl hover:bg-aegis-blue-500/10 
                           transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-aegis-blue-600/0 via-aegis-blue-600/10 to-aegis-blue-600/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Learn More</span>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.div 
                className="flex items-center space-x-2 text-cyber-silver-300"
                whileHover={{ scale: 1.05, color: "#22c55e" }}
              >
                <CheckCircleIcon className="w-5 h-5 text-safe-green-400" />
                <span>99.9% Uptime</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-cyber-silver-300"
                whileHover={{ scale: 1.05, color: "#22c55e" }}
              >
                <CheckCircleIcon className="w-5 h-5 text-safe-green-400" />
                <span>Sub-500ms Protection</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-cyber-silver-300"
                whileHover={{ scale: 1.05, color: "#22c55e" }}
              >
                <CheckCircleIcon className="w-5 h-5 text-safe-green-400" />
                <span>24/7 Monitoring</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
