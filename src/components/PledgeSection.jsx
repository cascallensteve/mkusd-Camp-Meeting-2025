import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, User, Mail, Phone, DollarSign, ChevronDown, ChevronUp, Send, Package } from 'lucide-react';

const PledgeSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    item: '',
    amount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create a hidden form to bypass CORS
      const form = document.createElement('form');
      form.action = 'https://script.google.com/macros/s/AKfycbzJex6kUSMQRvBJuLF9778I2OuhQRYgwGne9wim6uqHMBleMFn6NSq2zVlYeeaZ0ZZ-/exec';
      form.method = 'POST';
      form.target = 'hidden_iframe';
      form.style.display = 'none';

      // Add form fields
      const fields = [
        { name: 'name', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone },
        { name: 'item', value: formData.item },
        { name: 'amount', value: formData.amount }
      ];

      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
      });

      // Create hidden iframe for form submission
      let iframe = document.getElementById('hidden_iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.name = 'hidden_iframe';
        iframe.id = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Submit form
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // Simulate processing time
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting pledge:', error);
      alert('There was an error submitting your pledge. Please try again.');
      setIsSubmitting(false);
    }
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        item: '',
        amount: '',
        message: ''
      });
      setIsFormVisible(false);
    }, 5000);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <section id="pledge" className="section-padding bg-gradient-to-br from-gold/5 to-dark-green/5">
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold to-yellow-400 rounded-full mb-6"
          >
            <Gift className="w-8 h-8 text-black" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">Pledge</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Make your pledge commitment to support our camp meeting today
          </p>
        </motion.div>



        {/* Pledge Form Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleForm}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-dark-green to-emerald text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Gift className="w-6 h-6" />
            {isFormVisible ? 'Hide Pledge Form' : 'Make Pledges'}
            {isFormVisible ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </motion.div>

        {/* Pledge Form */}
        <AnimatePresence>
          {isFormVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-dark-green to-emerald p-6 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Make Your Pledge</h3>
                  <p className="text-green-100">Fill out the form below to commit your support</p>
                </div>

                <div className="p-6 sm:p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h4>
                      <p className="text-gray-600">Your pledge has been received. We'll be in touch soon!</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all duration-200"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all duration-200"
                            placeholder="Enter your email"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all duration-200"
                            placeholder="Enter your phone number"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            <Package className="w-4 h-4 inline mr-2" />
                            Pledge Item *
                          </label>
                          <select
                            name="item"
                            value={formData.item}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select pledge item</option>
                            <option value="General Fund">General Fund</option>
                            <option value="Accommodation">Accommodation</option>
                            <option value="Meals">Meals</option>
                            <option value="Transport">Transport</option>
                            <option value="Equipment">Equipment</option>
                            <option value="Sound System">Sound System</option>
                            <option value="Decorations">Decorations</option>
                            <option value="Security">Security</option>
                            <option value="Guest Speakers">Guest Speakers</option>
                            <option value="Medical Support">Medical Support</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            <DollarSign className="w-4 h-4 inline mr-2" />
                            Pledge Amount (KSh) *
                          </label>
                          <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            required
                            min="100"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all duration-200"
                            placeholder="Enter amount in KSh"
                          />
                          <p className="text-sm text-gray-500 mt-1">Our goal is KSh 417,235</p>
                        </div>
                      </div>



                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Message (Optional)
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all duration-200"
                          placeholder="Share your thoughts or special requests..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-dark-green to-emerald text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Submitting Pledge...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-3">
                            <Send className="w-5 h-5" />
                            Submit My Pledge
                          </div>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gold/10 to-dark-green/10 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border border-gold/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Every Pledge Brings Us Closer to Our Goal
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Your pledge commitment helps us reach our goal of KSh 417,235 and ensures we can provide 
              the best possible camp meeting experience. Thank you for your faithfulness!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
              <div>✓ Secure pledge processing</div>
              <div>✓ Flexible payment options</div>
              <div>✓ Receipt provided</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PledgeSection;
