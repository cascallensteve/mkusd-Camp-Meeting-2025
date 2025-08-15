import { useState } from 'react';
import { Download, FileText, Calendar, DollarSign, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const BudgetDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const budgetItems = [
    { category: 'Accommodation', amount: 150000, description: 'Lodging for attendees' },
    { category: 'Meals & Catering', amount: 120000, description: 'Breakfast, lunch, dinner for 3 days' },
    { category: 'Speakers & Transportation', amount: 80000, description: 'Guest speakers and travel costs' },
    { category: 'Venue & Equipment', amount: 45000, description: 'Sound system, projectors, seating' },
    { category: 'Materials & Resources', amount: 15000, description: 'Bibles, books, handouts' },
    { category: 'Emergency Fund', amount: 7235, description: 'Contingency for unexpected costs' }
  ];

  const totalBudget = budgetItems.reduce((sum, item) => sum + item.amount, 0);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download delay
    setTimeout(() => {
      // Create a downloadable budget document
      const budgetContent = generateBudgetPDF();
      const blob = new Blob([budgetContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'MKU-SDA-Camp-Meeting-2025-Budget.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setIsDownloading(false);
    }, 1500);
  };

  const generateBudgetPDF = () => {
    return `
MKU SDA CAMP MEETING 2025 - DETAILED BUDGET
============================================

Event: MKU SDA Camp Meeting 2025
Date: September 27-29, 2025
Location: Mount Kenya University, Thika Campus

BUDGET BREAKDOWN:
================

${budgetItems.map(item => 
  `${item.category.padEnd(25)} KSh ${item.amount.toLocaleString().padStart(10)}
   - ${item.description}`
).join('\n\n')}

TOTAL BUDGET: KSh ${totalBudget.toLocaleString()}

FUNDING SOURCES:
===============
- Individual Contributions: KSh ${Math.round(totalBudget * 0.7).toLocaleString()}
- Church Support: KSh ${Math.round(totalBudget * 0.2).toLocaleString()}
- Sponsorships: KSh ${Math.round(totalBudget * 0.1).toLocaleString()}

NOTES:
======
- All amounts are in Kenyan Shillings (KSh)
- Budget includes 10% contingency for emergencies
- Contributions are managed transparently
- Regular updates provided to contributors

For questions about the budget, contact:
Email: mkusdachurch@gmail.com
Phone: +254 712 128 912

Generated on: ${new Date().toLocaleDateString()}
    `.trim();
  };

  return (
    <section id="budget" className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-green mb-4">
            Camp Meeting Budget
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transparency is important to us. Download our detailed budget breakdown to see how every contribution helps make this camp meeting possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Budget Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-6 lg:p-8"
          >
            <h3 className="text-2xl font-bold text-forest-green mb-6 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-gold" />
              Budget Overview
            </h3>

            <div className="space-y-4 mb-6">
              {budgetItems.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-between items-center p-3 bg-green-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-forest-green">{item.category}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-forest-green">KSh {item.amount.toLocaleString()}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-xl font-bold text-forest-green">
                <span>Total Budget:</span>
                <span className="text-gold">KSh {totalBudget.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-6 lg:p-8"
          >
            <h3 className="text-2xl font-bold text-forest-green mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-gold" />
              Download Budget
            </h3>

            <div className="space-y-6">
              {/* Budget Info */}
              <div className="bg-gold/10 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="font-semibold text-forest-green">Camp Meeting 2025</span>
                </div>
                <p className="text-slate-600 mb-4">
                  Complete budget breakdown including all expenses, funding sources, and allocation details for the MKU SDA Camp Meeting 2025.
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-3">
                    <div className="font-semibold text-forest-green">Total Budget</div>
                    <div className="text-gold font-bold">KSh {totalBudget.toLocaleString()}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="font-semibold text-forest-green">Categories</div>
                    <div className="text-gold font-bold">{budgetItems.length} Items</div>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full bg-gradient-to-r from-forest-green to-emerald hover:from-dark-green hover:to-forest-green text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download Detailed Budget
                  </>
                )}
              </motion.button>

              {/* Transparency Note */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">Transparency Commitment</h4>
                    <p className="text-sm text-blue-700">
                      We believe in complete transparency. This budget shows exactly how your contributions will be used to make our camp meeting successful and meaningful.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact for Questions */}
              <div className="text-center text-sm text-slate-600">
                <p className="mb-2">Questions about the budget?</p>
                <p className="font-semibold text-forest-green">
                  Contact us: 
                  <a href="mailto:mkusdachurch@gmail.com" className="text-gold hover:underline ml-1">
                    mkusdachurch@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BudgetDownload;
