import { motion } from 'framer-motion';
import { Users, MessageCircle, Star } from 'lucide-react';
import data from '../data.js';

const Speakers = () => {
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
    <section id="speakers" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-royal-blue to-gold rounded-full mb-6"
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-gold">Inspiring Speakers</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Meet the dedicated speakers who will guide us through this transformative camp experience
          </motion.p>
        </motion.div>

        {/* Speakers Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-gold/30 transition-all duration-300"
            >
              {/* Speaker Photo */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    console.log(`Failed to load image for ${speaker.name}:`, speaker.photo);
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                  }}
                  onLoad={(e) => {
                    e.target.style.opacity = '1';
                  }}
                  style={{ opacity: 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Role Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-royal-blue to-gold text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {speaker.role}
                  </span>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-gray-600 text-sm">{speaker.bio}</p>
                </div>

                {/* Speaker Message */}
                <div className="bg-gradient-to-r from-royal-blue/5 to-gold/5 rounded-xl p-4 border border-royal-blue/10">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-royal-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4 text-gold" />
                        Message from {speaker.name.split(' ')[0]}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {speaker.shortMessage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                {speaker.social && (
                  <div className="flex justify-center gap-3 mt-4 pt-4 border-t border-gray-100">
                    {Object.entries(speaker.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-8 h-8 bg-gray-100 hover:bg-royal-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                        title={platform}
                      >
                        <span className="text-xs font-semibold uppercase">{platform.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-royal-blue/10 to-gold/10 rounded-2xl p-8 max-w-4xl mx-auto border border-royal-blue/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Be Inspired?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Our speakers are ready to share wisdom, guidance, and spiritual insights that will transform your camp experience. 
              Come with an open heart and be prepared to receive God's message through these anointed servants.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
              <div>✓ Powerful biblical teaching</div>
              <div>✓ Practical life applications</div>
              <div>✓ Interactive sessions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
