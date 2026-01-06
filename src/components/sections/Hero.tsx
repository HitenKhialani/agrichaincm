import React from 'react';
import { motion } from 'framer-motion';
import NetworkVisualization from '../blockchain/NetworkVisualization';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Blockchain-Powered
            <br />
            <span className="text-green-300">Agricultural Trust</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Track your food from farm to table with complete transparency. 
            See how blockchain creates trust in the agricultural supply chain.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => {
                // Scroll to network visualization and start demo
                const networkSection = document.querySelector('.network-visualization');
                if (networkSection) {
                  networkSection.scrollIntoView({ behavior: 'smooth' });
                  // Trigger demo mode after scroll
                  setTimeout(() => {
                    alert('🚀 Demo Mode: Watch how a tomato batch moves from farm to your table through blockchain verification!');
                  }, 1000);
                }
              }}
              className="btn btn-primary btn-lg bg-white text-primary-600 hover:bg-gray-100"
            >
              Start Demo
            </button>
            <button 
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary-600"
            >
              Learn More
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <NetworkVisualization />
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;