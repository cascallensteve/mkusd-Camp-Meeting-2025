import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../data.js';

const Navbar = ({ onBudgetClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (href, itemName) => {
    setIsOpen(false);
    if (itemName === 'Budget') {
      onBudgetClick && onBudgetClick();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img
              src={data.logo}
              alt="MKU SDA Logo"
              className="w-12 h-12 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-12 h-12 bg-gradient-to-r from-gold to-yellow-400 rounded-full items-center justify-center text-black font-bold text-lg hidden">
              MKU
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>MKU SDA</h1>
              <p className={`text-sm ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>Camp Fundraiser</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {data.navigation.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`font-medium transition-colors duration-200 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-dark-green' 
                    : 'text-white hover:text-gold'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('#support')}
              className="btn-primary"
            >
              Donate Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
              scrolled 
                ? 'hover:bg-gray-100 text-gray-700' 
                : 'hover:bg-white/20 text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Full Screen Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <img
                      src={data.logo}
                      alt="MKU SDA Logo"
                      className="w-10 h-10 object-contain"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">MKU SDA</h2>
                      <p className="text-sm text-gray-600">Camp Meeting</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-gray-600" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="p-6">
                  <div className="flex flex-col space-y-6">
                    {data.navigation.map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                        onClick={() => handleNavClick(item.href, item.name)}
                        className="text-left text-lg font-medium text-gray-700 hover:text-royal-blue transition-all duration-200 py-2 border-b border-gray-100 hover:border-royal-blue/30"
                      >
                        {item.name}
                      </motion.button>
                    ))}
                    
                    {/* Donate Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="pt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavClick('#support')}
                        className="w-full bg-gradient-to-r from-royal-blue to-gold text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Donate Now
                      </motion.button>
                    </motion.div>
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
                  <div className="text-center text-sm text-gray-500">
                    <p>MKU SDA Camp Meeting 2025</p>
                    <p className="mt-1">Join us for a transformative experience</p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
