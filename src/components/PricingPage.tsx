import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
  buttonText: string;
  buttonColor: string;
}

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: Plan[] = [
    {
      name: 'Basic Protection',
      price: isAnnual ? '$9' : '$12',
      period: isAnnual ? '/month (billed annually)' : '/month',
      description: 'Essential MEV protection for individual traders',
      features: [
        'Basic sandwich attack protection',
        'Real-time threat alerts',
        'Dashboard analytics',
        'Email support',
        'Up to $10K protected volume/month'
      ],
      buttonText: 'Start Basic Plan',
      buttonColor: 'aegis-blue'
    },
    {
      name: 'Pro Shield',
      price: isAnnual ? '$29' : '$39',
      period: isAnnual ? '/month (billed annually)' : '/month',
      description: 'Advanced protection for serious DeFi traders',
      features: [
        'Complete MEV protection suite',
        'Advanced threat detection',
        'Custom protection rules',
        'Priority support',
        'Up to $100K protected volume/month',
        'Gas optimization',
        'Historical analytics'
      ],
      recommended: true,
      buttonText: 'Start Pro Plan',
      buttonColor: 'safe-green'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Institutional-grade protection for protocols and funds',
      features: [
        'Unlimited protection volume',
        'Custom integration support',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced API access',
        'Custom threat detection rules',
        'White-label solutions',
        'SLA guarantees'
      ],
      buttonText: 'Contact Sales',
      buttonColor: 'amber'
    }
  ];

  const faqs = [
    {
      question: 'How does Aegilon MEV protection work?',
      answer: 'Aegilon monitors all Etherlink transactions in real-time using advanced pattern recognition. When a potential MEV threat is detected, our smart contracts automatically implement protection mechanisms to prevent value extraction.'
    },
    {
      question: 'What types of MEV attacks does Aegilon protect against?',
      answer: 'We protect against sandwich attacks, front-running, back-running, and arbitrage-based MEV extraction. Our system continuously updates to defend against new attack vectors.'
    },
    {
      question: 'How fast is the protection response time?',
      answer: 'Aegilon provides sub-500ms threat detection and mitigation, leveraging Etherlink\'s fast confirmation times to outpace traditional MEV extraction attempts.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. For annual plans, you\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'We offer a 7-day free trial for all plans, allowing you to experience Aegilon\'s protection capabilities before committing to a subscription.'
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
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-6 font-cyber">
              Choose Your Protection Level
            </h1>
            <p className="text-xl text-cyber-silver-300 max-w-3xl mx-auto">
              Flexible plans designed for traders of all sizes, from individual DeFi users to institutional protocols
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center mb-12"
          >
            <span className={`mr-3 ${!isAnnual ? 'text-white' : 'text-cyber-silver-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-safe-green-600' : 'bg-cyber-silver-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-white' : 'text-cyber-silver-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 bg-safe-green-500/20 text-safe-green-400 px-2 py-1 rounded-full text-sm">
                Save 25%
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.recommended 
                    ? 'border-safe-green-500/50 cyber-glow' 
                    : 'border-aegis-blue-500/20'
                } transition-all duration-300 hover:border-aegis-blue-500/40`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-safe-green-500 to-aegis-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-cyber-silver-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-lg text-cyber-silver-400 font-normal">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-safe-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-cyber-silver-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-safe-green-600 to-aegis-blue-600 text-white cyber-glow'
                      : `bg-${plan.buttonColor}-600 hover:bg-${plan.buttonColor}-700 text-white`
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-cyber-silver-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Feature Comparison</h2>
            <p className="text-xl text-cyber-silver-300">
              See what's included in each protection tier
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl border border-aegis-blue-500/20">
              <thead>
                <tr className="border-b border-cyber-silver-700">
                  <th className="text-left p-6 text-white font-semibold">Features</th>
                  <th className="text-center p-6 text-white font-semibold">Basic</th>
                  <th className="text-center p-6 text-white font-semibold">Pro</th>
                  <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Sandwich Attack Protection', true, true, true],
                  ['Front-running Protection', false, true, true],
                  ['Real-time Alerts', true, true, true],
                  ['Custom Rules', false, true, true],
                  ['API Access', false, true, true],
                  ['Gas Optimization', false, true, true],
                  ['24/7 Support', false, false, true],
                  ['SLA Guarantee', false, false, true],
                ].map(([feature, basic, pro, enterprise], index) => (
                  <tr key={index} className="border-b border-cyber-silver-700/50">
                    <td className="p-6 text-cyber-silver-300">{feature}</td>
                    <td className="p-6 text-center">
                      {basic ? (
                        <CheckIcon className="w-5 h-5 text-safe-green-400 mx-auto" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-cyber-silver-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {pro ? (
                        <CheckIcon className="w-5 h-5 text-safe-green-400 mx-auto" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-cyber-silver-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {enterprise ? (
                        <CheckIcon className="w-5 h-5 text-safe-green-400 mx-auto" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-cyber-silver-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-cyber-silver-300">
              Everything you need to know about Aegilon protection
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cyber-silver-800/50 backdrop-blur-sm rounded-xl p-6 border border-aegis-blue-500/20"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-cyber-silver-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aegis-blue-600/20 to-safe-green-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Protected?
            </h2>
            <p className="text-xl text-cyber-silver-300 mb-8">
              Start your free trial today and experience the power of real-time MEV protection
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-aegis-blue-600 to-safe-green-600 text-white font-semibold py-4 px-8 rounded-xl cyber-glow text-lg"
            >
              Start 7-Day Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
