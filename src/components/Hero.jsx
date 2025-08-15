import { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import data, { calculateTotalRaised, formatCurrency, calculateProgress } from '../data.js';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    raised: 0,
    contributors: 0,
    progress: 0
  });

  const backgroundImages = [
    "https://res.cloudinary.com/dqvsjtkqw/image/upload/v1754983275/IMG_1220.CR2_1_jiyuoa.jpg",
    "https://res.cloudinary.com/dqvsjtkqw/image/upload/v1754983531/DSC_0035-1536x1025_rmu75y.jpg",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&h=1080&fit=crop",
    "https://res.cloudinary.com/dqvsjtkqw/image/upload/v1754983914/mkus_eeljy8.jpg"
  ];

  const totalRaised = calculateTotalRaised(data.contributors);
  const progressPercentage = calculateProgress(totalRaised, data.targetAmount);

  // Background image rotation
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageTimer);
  }, [backgroundImages.length]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const targetTime = new Date(data.targetDate).getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Animated stats counter
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        raised: Math.floor(totalRaised * progress),
        contributors: Math.floor(data.contributors.length * progress),
        progress: Math.floor(progressPercentage * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats({
          raised: totalRaised,
          contributors: data.contributors.length,
          progress: progressPercentage
        });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [totalRaised, progressPercentage]);

  const handleScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Animation */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Camp Background ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1.05 : 1
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
            onError={(e) => {
              e.target.src = backgroundImages[0];
            }}
          />
        ))}
      </div>
      
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-green via-forest-green to-emerald animate-gradient opacity-85"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='m0 40h40v-40h-40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 text-center text-white section-padding pt-20 sm:pt-24">
        <div className="container-custom">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 sm:mb-8"
          >
            <h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 leading-tight px-2">
              {data.eventName}
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto px-2 mb-3">
              Join us for a transformative spiritual experience that strengthens our faith community
            </p>
            
            {/* Prominent Countdown Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block bg-gradient-to-r from-gold to-yellow-400 text-black font-bold px-6 py-3 rounded-full text-lg sm:text-xl shadow-lg"
            >
              🗓️ {timeLeft.days || 46} Days Until Camp Meeting!
            </motion.div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-6 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              Camp Meeting in
            </h2>
            
            {/* Large Days Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4 sm:mb-6"
            >
              <div className="text-4xl sm:text-7xl lg:text-8xl font-bold text-gold mb-1 sm:mb-2">
                {timeLeft.days || 46}
              </div>
              <div className="text-lg sm:text-2xl text-green-100 font-medium mb-1 sm:mb-2">
                Days Left
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-green-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Countdown • Updates Every Second</span>
              </div>
            </motion.div>
            
            {/* Detailed Countdown */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto px-4">
              {[
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 backdrop-blur-md rounded-xl p-3 sm:p-4 text-center border border-white/20"
                >
                  <div className="text-xl sm:text-2xl font-bold mb-1 text-white">
                    {item.value !== undefined ? item.value.toString().padStart(2, '0') : '00'}
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-wide text-green-100">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16"
          >
            {/* Total Raised */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gold mb-2">
                {animatedStats.raised.toLocaleString()}
              </div>
              <div className="text-green-100">Total Raised</div>
            </motion.div>

            {/* Days Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gold mb-2">
                {timeLeft.days || 46}
              </div>
              <div className="text-green-100">Days Left</div>
            </motion.div>

            {/* Progress */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gold mb-2">
                {(animatedStats.progress || 0).toFixed(4)}%
              </div>
              <div className="text-green-100">Progress</div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('#support')}
              className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 w-full sm:w-auto"
            >
              Donate Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('#live')}
              className="bg-white/20 backdrop-blur-md text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 w-full sm:w-auto"
            >
              Watch Live
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
