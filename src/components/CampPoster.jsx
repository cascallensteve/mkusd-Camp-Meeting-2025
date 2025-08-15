import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const CampPoster = () => {
  return (
    <section id="poster" className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Poster Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <img
                src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1754980220/mkusda_makambi_xhabbh.jpg"
                alt="Camp Meeting Poster"
                className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight"
              >
                Join Us for the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dark-green to-emerald">
                  Annual Camp Meeting
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-base text-gray-600 leading-relaxed"
              >
                Experience a transformative week of spiritual renewal, fellowship, and divine encounters. 
                This year's camp promises to be our most impactful yet.
              </motion.p>
            </div>

            {/* Key Information Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Calendar className="w-6 h-6 text-dark-green mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Camp Dates</h3>
                <p className="text-gray-600 text-sm">September 27 - October 4, 2025</p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <MapPin className="w-6 h-6 text-dark-green mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Location</h3>
                <a 
                  href="https://maps.app.goo.gl/x1MVbjBFNRSoXm2G9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-green hover:text-emerald transition-colors underline text-sm"
                >
                  Mount Kenya University Campus
                </a>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Clock className="w-6 h-6 text-dark-green mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Daily Sessions</h3>
                <p className="text-gray-600 text-sm">Morning & Evening Programs</p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Users className="w-6 h-6 text-dark-green mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Expected</h3>
                <p className="text-gray-600 text-sm">500+ Participants</p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-dark-green/5 to-emerald/5 p-4 rounded-lg border border-dark-green/10"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-3">Camp Highlights</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-dark-green rounded-full mr-2 flex-shrink-0"></span>
                  Powerful ministry sessions with anointed speakers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-dark-green rounded-full mr-2 flex-shrink-0"></span>
                  Dynamic worship and praise experiences
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-dark-green rounded-full mr-2 flex-shrink-0"></span>
                  Fellowship meals and community building
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-dark-green rounded-full mr-2 flex-shrink-0"></span>
                  Youth programs and special activities
                </li>
              </ul>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-dark-green to-emerald text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Support Us Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('live')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-dark-green font-semibold px-6 py-3 rounded-lg border-2 border-dark-green hover:bg-dark-green hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampPoster;
