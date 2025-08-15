import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, CheckCircle } from 'lucide-react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    rating: 0
  });
  const [errors, setErrors] = useState({});
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjects = [
    { value: '', label: 'Select a subject' },
    { value: 'general', label: 'General Feedback' },
    { value: 'technical', label: 'Technical Issue' },
    { value: 'suggestion', label: 'Suggestion' },
    { value: 'compliment', label: 'Compliment' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (formData.rating === 0) {
      newErrors.rating = 'Please provide a rating';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Submit to Google Sheets via Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbzwgNniFjlXzPV5Pj_pWvydyi-WbdpV7VjANSjMxFRJAVoixgRzGMCsvnAjPaJa2O-0og/exec', {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          rating: formData.rating,
          timestamp: new Date().toISOString()
        })
      });

      setSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          rating: 0
        });
        setErrors({});
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setIsSubmitting(false);
      // You might want to show an error message to the user here
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
    
    if (errors.rating) {
      setErrors(prev => ({
        ...prev,
        rating: ''
      }));
    }
  };

  if (submitted) {
    return (
      <section id="feedback" className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white rounded-2xl shadow-xl p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 text-lg mb-4">
              Your feedback has been submitted successfully. We appreciate your input and will review it shortly.
            </p>
            <p className="text-blue-600 font-medium">
              📧 Please check your email for confirmation that your contact message was received.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="feedback" className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Share Your <span className="text-yellow-600">Feedback</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your thoughts and suggestions help us improve the camp meeting experience. 
            We value every voice in our community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                  aria-describedby={errors.name ? 'name-error' : null}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                  aria-describedby={errors.email ? 'email-error' : null}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                aria-describedby={errors.subject ? 'subject-error' : null}
              >
                {subjects.map((subject) => (
                  <option key={subject.value} value={subject.value}>
                    {subject.label}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating *
              </label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        star <= (hoveredRating || formData.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </motion.button>
                ))}
                <span className="ml-3 text-sm text-gray-600">
                  {formData.rating > 0 && `${formData.rating} star${formData.rating !== 1 ? 's' : ''}`}
                </span>
              </div>
              {errors.rating && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.rating}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                  errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Share your thoughts, suggestions, or experiences..."
                aria-describedby={errors.message ? 'message-error' : null}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Feedback
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
