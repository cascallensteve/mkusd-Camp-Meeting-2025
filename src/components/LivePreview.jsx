import { useState } from 'react';
import { Play, Radio, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import data from '../data.js';

const LivePreview = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleWatchLive = () => {
    const element = document.querySelector('#live-video');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="live" className="section-padding bg-gradient-to-br from-royal-blue to-sky-blue">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Live Stream
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join us virtually for the camp meeting
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            {/* Live Status Indicator */}
            <div className="flex items-center justify-between mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  data.isLive 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'bg-gray-500 text-gray-200'
                }`}>
                  <Radio className="w-4 h-4" />
                  <span className="font-semibold text-sm uppercase tracking-wide">
                    {data.isLive ? 'Live Now' : 'Offline'}
                  </span>
                </div>
                {data.isLive && (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-red-500 rounded-full"
                  />
                )}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWatchLive}
                className="btn-primary flex items-center gap-2 text-sm sm:text-base"
              >
                <Play className="w-4 h-4" />
                Watch Live
              </motion.button>
            </div>

            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              id="live-video"
              className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg"
            >
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="text-center text-white">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p>Loading stream...</p>
                  </div>
                </div>
              )}
              
              {/* Replace VIDEO_ID in the URL below with actual YouTube Live stream ID */}
              <iframe
                src={data.liveStreamUrl}
                title="MKU SDA Camp Live Stream"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsVideoLoaded(true)}
              />
            </motion.div>

            {/* Video Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <p className="text-blue-100 mb-4">
                {data.isLive 
                  ? "Experience our camp sessions live with inspiring speakers, worship, and fellowship"
                  : "Stream will be available during camp sessions"
                }
              </p>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={data.liveStreamUrl.replace('/embed/', '/watch?v=')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-yellow-300 transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Open in YouTube
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Additional Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white">
              <h3 className="font-semibold mb-2">Live Interaction</h3>
              <p className="text-blue-100 text-sm">
                Participate in real-time through chat and prayer requests
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white">
              <h3 className="font-semibold mb-2">HD Quality</h3>
              <p className="text-blue-100 text-sm">
                Crystal clear video and audio for the best experience
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold mb-2">Multi-Device</h3>
              <p className="text-blue-100 text-sm">
                Watch on any device - phone, tablet, or computer
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LivePreview;
