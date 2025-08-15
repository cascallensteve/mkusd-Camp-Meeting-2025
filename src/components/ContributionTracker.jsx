import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const ContributionTracker = () => {
  const [progress, setProgress] = useState(0);
  const individualTarget = 927;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(1);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contribution" className="py-8 bg-gradient-to-br from-royal-blue to-dark-blue">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-gold to-yellow-400 rounded-full mb-3"
          >
            <Target className="w-5 h-5 text-white" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl lg:text-2xl font-bold text-white mb-2"
          >
            Individual <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">Target</span>
          </motion.h2>
        </motion.div>

        {/* Individual Target Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg font-bold text-white mb-2"
              >
                Target Amount
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-3xl font-bold text-gold mb-1"
              >
                {individualTarget}
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-sm text-blue-100"
              >
                Kenyan Shillings (KSH)
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContributionTracker;
