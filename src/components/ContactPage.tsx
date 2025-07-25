import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      description: 'Get help from our support team',
      contact: 'support@aegilon.io',
      responseTime: '< 4 hours'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      contact: 'Available 24/7',
      responseTime: '< 2 minutes'
    },
    {
      icon: PhoneIcon,
      title: 'Phone Support',
      description: 'Enterprise customers only',
      contact: '+1 (555) 123-4567',
      responseTime: 'Business hours'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 DeFi Street, Suite 100\nSan Francisco, CA 94105',
      timezone: 'PST (UTC-8)'
    },
    {
      city: 'London',
      address: '456 Blockchain Avenue\nLondon, UK EC2A 4DP',
      timezone: 'GMT (UTC+0)'
    },
    {
      city: 'Singapore',
      address: '789 Crypto Plaza, Level 15\nSingapore 018989',
      timezone: 'SGT (UTC+8)'
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
            <h1 className="text-5xl font-bold text-white mb-6 font-cyber">Get in Touch</h1>
            <p className="text-xl text-cyber-silver-300 max-w-3xl mx-auto">
              Have questions about MEV protection? Need help with integration? 
              Our team of experts is here to help you secure your DeFi operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20 cyber-glow hover:border-aegis-blue-500/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-aegis-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-aegis-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-cyber-silver-300 mb-3">{method.description}</p>
                <p className="text-aegis-blue-400 font-medium mb-1">{method.contact}</p>
                <p className="text-safe-green-400 text-sm">Response: {method.responseTime}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-8 border border-aegis-blue-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyber-silver-300 text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-cyber-silver-900/50 border border-cyber-silver-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aegis-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyber-silver-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-cyber-silver-900/50 border border-cyber-silver-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aegis-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cyber-silver-300 text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-silver-900/50 border border-cyber-silver-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aegis-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-cyber-silver-300 text-sm font-medium mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-silver-900/50 border border-cyber-silver-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aegis-blue-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                    <option value="integration">Integration Help</option>
                  </select>
                </div>

                <div>
                  <label className="block text-cyber-silver-300 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-cyber-silver-900/50 border border-cyber-silver-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aegis-blue-500 focus:border-transparent"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label className="block text-cyber-silver-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-cyber-silver-900/50 border border-cyber-silver-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aegis-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-aegis-blue-600 to-safe-green-600 text-white font-semibold py-3 px-6 rounded-lg cyber-glow transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
                <p className="text-cyber-silver-300 mb-8">
                  We have teams around the world to provide 24/7 support for your MEV protection needs.
                </p>
              </div>

              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aegis-blue-500/20 rounded-lg flex items-center justify-center mt-1">
                      <MapPinIcon className="w-6 h-6 text-aegis-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{office.city}</h3>
                      <p className="text-cyber-silver-300 whitespace-pre-line mb-2">{office.address}</p>
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="w-4 h-4 text-aegis-blue-400" />
                        <span className="text-aegis-blue-400 text-sm">{office.timezone}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-aegis-blue-600/20 to-safe-green-600/20 rounded-xl p-6 border border-aegis-blue-500/30"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Need Immediate Help?</h3>
                <p className="text-cyber-silver-300 mb-4">
                  For urgent technical issues or security concerns, use our priority support channels:
                </p>
                <div className="space-y-2">
                  <p className="text-aegis-blue-400">🚨 Security Issues: security@aegilon.io</p>
                  <p className="text-amber-400">⚡ Technical Emergencies: emergency@aegilon.io</p>
                  <p className="text-safe-green-400">💬 Live Chat: Available 24/7 on our platform</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-cyber-silver-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Before You Contact Us</h2>
            <p className="text-cyber-silver-300 mb-8">
              Check out these resources for quick answers to common questions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20 hover:border-aegis-blue-500/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                <p className="text-cyber-silver-300 text-sm">
                  Comprehensive guides and API documentation
                </p>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20 hover:border-aegis-blue-500/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">FAQ</h3>
                <p className="text-cyber-silver-300 text-sm">
                  Frequently asked questions and troubleshooting
                </p>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20 hover:border-aegis-blue-500/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                <p className="text-cyber-silver-300 text-sm">
                  Join our Discord for community support
                </p>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
