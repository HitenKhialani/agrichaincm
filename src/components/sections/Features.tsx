import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🔗',
      title: 'Blockchain Transparency',
      description: 'Every transaction is recorded on an immutable ledger, ensuring complete traceability from farm to table.',
    },
    {
      icon: '🔍',
      title: 'Quality Verification',
      description: 'Independent inspectors verify quality and compliance at each stage of the supply chain.',
    },
    {
      icon: '📱',
      title: 'Consumer Trust',
      description: 'Scan QR codes to instantly verify product authenticity and view complete journey history.',
    },
    {
      icon: '🌱',
      title: 'Sustainable Practices',
      description: 'Track organic certifications and sustainable farming practices with verified documentation.',
    },
    {
      icon: '⚡',
      title: 'Real-time Updates',
      description: 'Get instant notifications as your products move through each stage of the supply chain.',
    },
    {
      icon: '🛡️',
      title: 'Secure & Private',
      description: 'Role-based access ensures stakeholders only see relevant information while maintaining privacy.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose AgriChain?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our blockchain-powered platform brings transparency, trust, and efficiency 
            to agricultural supply chains worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;