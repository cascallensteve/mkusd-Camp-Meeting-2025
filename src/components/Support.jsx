import { Heart, Shield, Phone, Mail, CreditCard, Smartphone, Building, DollarSign, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import data from '../data.js';

const Support = () => {
  const handleOneKitty = () => {
    window.open('https://onekitty.co.ke/kitty/7906/', '_blank');
  };

  const getPaymentIcon = (iconName) => {
    const icons = {
      'credit-card': CreditCard,
      'smartphone': Smartphone,
      'building': Building,
      'dollar-sign': DollarSign
    };
    return icons[iconName] || CreditCard;
  };

  return (
    <section id="support" className="section-padding bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-green mb-4">
            Support Our Camp Meeting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous contribution makes a lasting impact on lives and faith
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Support Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-8"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-dark-green to-emerald rounded-full mb-6"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-dark-green mb-4">
                Why Your Donation Matters
              </h3>
              
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                {data.supportMessage}
              </p>
            </div>

            {/* Donation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOneKitty}
                  className="btn-primary text-xl px-8 py-4 shadow-lg inline-flex items-center"
                >
                  <Smartphone className="w-6 h-6 mr-3" />
                  Pay via One Kitty
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.button>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-green text-white px-8 py-4 rounded-xl shadow-lg text-xl font-semibold"
                >
                  <Building className="w-6 h-6 mr-3 inline" />
                  Paybill: 7108831
                </motion.div>
              </div>
              
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-4">
                <p className="text-gray-700 font-medium">
                  For Paybill: Account Number: <span className="font-bold text-dark-green">camp meeting 2025</span>
                </p>
              </div>
              
              <p className="text-gray-500 text-sm">
                Choose your preferred payment method • All donations are appreciated
              </p>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h4 className="text-lg font-semibold text-gray-800 text-center mb-6">
                Available Payment Options
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {data.paymentMethods.filter(method => method.enabled).map((method, index) => {
                  const IconComponent = getPaymentIcon(method.icon);
                  return (
                    <motion.div
                      key={method.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:border-dark-green hover:shadow-md transition-all duration-300"
                    >
                      <IconComponent className="w-10 h-10 mx-auto mb-3 text-dark-green" />
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">
                        {method.name}
                      </h5>
                      <p className="text-sm text-gray-600">
                        {method.description}
                      </p>
                      {method.url && (
                        <button
                          onClick={() => window.open(method.url, '_blank')}
                          className="mt-3 text-dark-green hover:text-emerald font-medium text-sm flex items-center justify-center gap-1"
                        >
                          Click to Pay <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="border-t border-gray-200 pt-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700 font-medium">Secure & Safe</span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6 text-emerald" />
                  <a 
                    href={`mailto:${data.contact.email}`}
                    className="text-dark-green hover:text-emerald transition-colors"
                  >
                    {data.contact.email}
                  </a>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6 text-forest-green" />
                  <a 
                    href={`tel:${data.contact.phone}`}
                    className="text-dark-green hover:text-emerald transition-colors"
                  >
                    {data.contact.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Impact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏕️</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Accommodation</h4>
              <p className="text-gray-600 text-sm">
                Provide comfortable lodging for camp participants
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Meals & Catering</h4>
              <p className="text-gray-600 text-sm">
                Nutritious meals for all attendees throughout the camp
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Materials & Resources</h4>
              <p className="text-gray-600 text-sm">
                Spiritual materials and resources for personal growth
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
