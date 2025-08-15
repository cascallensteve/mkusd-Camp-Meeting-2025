import { Quote, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import data from '../data.js';

const ChairMessage = () => {
  return (
    <section id="chair" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-royal-blue mb-4">
            Message from Our Chairperson
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A heartfelt message from our camp leadership
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header with Photo */}
            <div className="bg-gradient-to-r from-royal-blue to-sky-blue p-8 text-white text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="relative inline-block">
                  <img
                    src={data.chairperson.photo}
                    alt={data.chairperson.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center"
                  >
                    <Heart className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {data.chairperson.name}
                </h3>
                <p className="text-blue-100 text-lg">
                  {data.chairperson.title}
                </p>
              </motion.div>
            </div>

            {/* Message Content */}
            <div className="p-8 sm:p-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start mb-6"
              >
                <Quote className="w-8 h-8 text-gold mr-4 mt-1 flex-shrink-0" />
                <blockquote className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium italic">
                  {data.chairperson.message}
                </blockquote>
              </motion.div>

              {/* Signature */}
              {data.chairperson.signature && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-right mt-8"
                >
                  <div className="inline-block">
                    <div className="text-2xl font-script text-royal-blue mb-2">
                      {data.chairperson.signature}
                    </div>
                    <div className="h-0.5 bg-gradient-to-r from-gold to-transparent w-full"></div>
                  </div>
                </motion.div>
              )}

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex justify-center mt-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold"></div>
                  <Heart className="w-6 h-6 text-gold" />
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gold"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 mb-6 text-lg">
              Join us in making this camp a blessing for all participants
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#support');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary text-lg px-8 py-3"
            >
              Support Our Mission
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChairMessage;
