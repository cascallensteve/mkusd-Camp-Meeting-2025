import { motion } from 'framer-motion';
import { Users, Heart, Star } from 'lucide-react';
import data from '../data.js';

const CampCommittee = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="committee" className="section-padding bg-gradient-to-br from-forest-green to-dark-green">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold to-royal-blue rounded-full mb-6"
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-royal-blue">Camp Committee</span> Message
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-green-100 max-w-3xl mx-auto"
          >
Your spiritual growth team
          </motion.p>
        </motion.div>

        {/* Committee Message */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <div className="max-w-2xl mx-auto">
            {/* Camp Committee Message */}
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gold to-royal-blue rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {data.campCommittee.title}
                </h3>
              </div>
              
              <motion.div
                variants={itemVariants}
                className="text-sm lg:text-base text-green-100 leading-relaxed text-left max-w-4xl mx-auto"
                style={{ whiteSpace: 'pre-line' }}
              >
                {data.campCommittee.message}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampCommittee;
