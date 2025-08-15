import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import data from '../data.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube
  };

  const quickLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQs', href: '#faq' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-dark-green text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={data.logo}
                  alt="MKU SDA Logo"
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <h3 className="text-2xl font-bold text-gold">
                  {data.eventName}
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A transformative spiritual experience bringing together students and community members 
                for worship, fellowship, and spiritual growth. Join us in this journey of faith and renewal.
              </p>
              <div className="flex items-center gap-2 text-gold">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Building Faith, Strengthening Community</span>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gold">Contact Info</h4>
              <div className="space-y-3">
                <motion.a
                  whileHover={{ x: 5 }}
                  href={`mailto:${data.contact.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                  <span>{data.contact.email}</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ x: 5 }}
                  href={`tel:${data.contact.phone}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                  <span>{data.contact.phone}</span>
                </motion.a>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <MapPin className="w-5 h-5 text-emerald mt-1 flex-shrink-0" />
                  <span>{data.contact.address}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-8 mt-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gold">Follow Us</h4>
                <div className="flex gap-4">
                  {Object.entries(data.contact.socialMedia).map(([platform, url]) => {
                    const IconComponent = socialIcons[platform];
                    if (!IconComponent) return null;
                    
                    return (
                      <motion.a
                        key={platform}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-forest-green transition-all duration-300"
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="text-center sm:text-right">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-dark-green hover:bg-forest-green px-6 py-3 rounded-full text-white font-medium transition-all duration-300"
                >
                  Back to Top
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="container-custom py-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-400" />
              <span>© {currentYear} Mount Kenya University SDA. Made with love for our community.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span>Built by Media Team Mkusda church</span>
              <div className="w-2 h-2 bg-dark-green rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
