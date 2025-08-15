import { motion } from 'framer-motion';
import { Music, Play, Users, Heart, Youtube, Clock } from 'lucide-react';

const Choirs = () => {
  const choirs = [
    {
      id: 1,
      name: "Still Voice Acapella",
      description: "Beautiful harmonies that touch the soul",
      youtubeId: "2MKGPbkyPmM", // Fixed: Just the video ID, not full URL
      speciality: "Acapella Harmony"
    },
    {
      id: 2,
      name: "The Sojourners Ministers",
      description: "The sojouner minister-kenya ",
      youtubeId: "q7Moh0OP5to", // Fixed: Just the video ID, not full URL
      speciality: "Contemporary Worship"
    },
    {
      id: 3,
      name: "Gerizim Voice Ministers",
      description: "Lifting voices from the mountain of blessing",
      youtubeId: "WEnf6skMK94", // Fixed: Just the video ID, not full URL
      speciality: "Camp Experience"
    },
    {
      id: 4,
      name: "Mkusda Church Choir",
      description: "Our very own university church choir",
      youtubeId: "IJOBHJIfyg0", // Fixed: Just the video ID, not full URL
      speciality: "Inspiring songs and  Hymns"
    },
    {
      id: 5,
      name: "7th Harmony Choir",
      description: "Seven voices, one perfect harmony",
      youtubeId: "7506542798733167928", // TikTok video ID
      speciality: "Contemporary Gospel",
      isTikTok: true
    },
    {
      id: 6,
      name: "TBS Choir Tanzania",
      description: "International voices from our Tanzanian brothers",
      youtubeId: "6gtKwPKutE0", // This one was already correct
      speciality: "Accapella Music"
    },
    {
      id: 7,
      name: "Saints Ministers Choir",
      description: "Called to minister through song",
      youtubeId: "LfFPo8XAC8Y", // Fixed: Just the video ID, not full URL
      speciality: "Praise & Worship"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="choirs" className="section-padding bg-gradient-to-br from-dark-green/5 to-emerald/5">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-dark-green to-emerald rounded-full mb-6"
          >
            <Music className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-green to-emerald">Musical Ministers</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience the power of worship through these anointed choirs and musical ministries
          </p>
        </motion.div>

        {/* Sample Song Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                <Youtube className="w-8 h-8 text-red-600" />
                Sample Worship Experience
              </h3>
              <p className="text-gray-600">
                Get a taste of the powerful worship that awaits you at camp meeting
              </p>
            </div>
            
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/MZAhoE-yHII?list=RDMZAhoE-yHII"
                title="Camp Meeting Worship Sample"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-dark-green">
                <Play className="w-5 h-5" />
                <span className="font-medium">Experience the Power of Worship</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Heart className="w-5 h-5" />
                <span>Prepare your heart for transformation</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Choirs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0 mb-12"
        >
          {choirs.map((choir, index) => (
            <motion.div
              key={choir.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald/30"
            >
              {/* Video */}
              <div className="relative overflow-hidden">
                <div className="aspect-video">
                  {choir.isTikTok ? (
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${choir.youtubeId}`}
                      title={`${choir.name} - Ministry Song`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${choir.youtubeId}`}
                      title={`${choir.name} - Ministry Song`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                
                {/* Music Note Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Music className="w-5 h-5 text-dark-green" />
                </motion.div>
              </div>

              {/* Choir Info */}
              <div className="p-4 sm:p-6">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-dark-green transition-colors duration-300"
                >
                  {choir.name}
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="mb-3"
                >
                  <span className="inline-block bg-gradient-to-r from-dark-green to-emerald text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {choir.speciality}
                  </span>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-gray-600 text-sm leading-relaxed"
                >
                  {choir.description}
                </motion.p>
              </div>

              {/* Decorative bottom accent */}
              <div className="h-1 bg-gradient-to-r from-dark-green via-emerald to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-dark-green/10 to-emerald/10 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border border-dark-green/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-dark-green" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Join the Heavenly Chorus
              </h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Your support helps bring these talented musical ministries together for an unforgettable worship experience. 
              Every contribution helps us create moments of divine encounter through music.
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
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
            >
              <Music className="w-6 h-6" />
              Support Our Musical Ministry
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Choirs;
