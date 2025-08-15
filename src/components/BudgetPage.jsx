import { useState } from 'react';
import { Download, FileText, Calendar, DollarSign, AlertCircle, ArrowLeft, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BudgetPage = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Food Items Budget
  const foodItems = [
    { item: 'PORRIDGE FLOOR', quantity: '8 KGS', amount: 1200 },
    { item: 'WHEAT FLOOR', quantity: '11 BALES', amount: 24000 },
    { item: 'MAIZE', quantity: '150 KG', amount: 7000 },
    { item: 'SUKUMA WIKI', quantity: '', amount: 3000 },
    { item: 'KIENYEJI', quantity: '', amount: 1000 },
    { item: 'CABBAGE', quantity: '50 HEADS', amount: 2500 },
    { item: 'MINJI', quantity: '4 KGS', amount: 800 },
    { item: 'BEANS', quantity: '100 KGS', amount: 20000 },
    { item: 'GREENGRAMS', quantity: '50KGS', amount: 7500 },
    { item: 'COOKING OIL', quantity: '80L', amount: 22000 },
    { item: 'RICE', quantity: '100 KG', amount: 11000 },
    { item: 'EGGS', quantity: '2 1/2 CRATES', amount: 1000 },
    { item: 'NDUMA', quantity: '', amount: 1500 },
    { item: 'SWEET POTATOES', quantity: '', amount: 1500 },
    { item: 'WARU', quantity: '3 BACKETS', amount: 900 },
    { item: 'SOSSI', quantity: '30 PACKETS', amount: 1500 },
    { item: 'SOYA', quantity: '', amount: 600 },
    { item: 'MILK', quantity: '', amount: 1000 },
    { item: 'MELON', quantity: '8', amount: 3200 },
    { item: 'MATOKE', quantity: '3 BUNCHES', amount: 1000 },
    { item: 'NJUGU', quantity: '', amount: 1500 },
    { item: 'SUGAR', quantity: '12KGS', amount: 2040 },
    { item: 'SALT', quantity: '10 KGS', amount: 1000 },
    { item: 'NYANYA', quantity: '', amount: 1500 },
    { item: 'GARLIC/GINGER', quantity: '', amount: 400 },
    { item: 'CARROTS', quantity: '', amount: 700 },
    { item: 'HOHO', quantity: '', amount: 300 },
    { item: 'ONIONS', quantity: '', amount: 1000 },
    { item: 'BAKING POWDER', quantity: '', amount: 35 }
  ];

  // Other Items Budget
  const otherItems = [
    { item: 'CHARCOAL', quantity: '', amount: 2000 },
    { item: 'FIREWOOD', quantity: '', amount: 5000 },
    { item: 'TENT', quantity: '3', amount: 30000 },
    { item: 'ACCOMMODATION', quantity: '', amount: 40000 },
    { item: 'BANNERS', quantity: '2', amount: 2600 },
    { item: 'POSTERS', quantity: '20', amount: 600 },
    { item: 'LONGISTICS', quantity: '', amount: 25000 },
    { item: 'APPRECIATION', quantity: '', amount: 82000 },
    { item: 'LIVESTREAMING +HDMI', quantity: '', amount: 43000 },
    { item: 'VENUE(WATER,ELECTRICTY)', quantity: '', amount: 20000 },
    { item: 'MISLELLAEOUS', quantity: '', amount: 46360 }
  ];

  const budgetItems = [...foodItems, ...otherItems];
  const foodTotal = foodItems.reduce((sum, item) => sum + item.amount, 0);
  const otherTotal = otherItems.reduce((sum, item) => sum + item.amount, 0);

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

FOOD ITEMS:
===========

${foodItems.map(item => 
  `${item.item.padEnd(25)} ${item.quantity.padEnd(15)} KSh ${item.amount.toLocaleString().padStart(8)}`
).join('\n')}

FOOD TOTAL: KSh ${foodTotal.toLocaleString()}

OTHER ITEMS:
============

${otherItems.map(item => 
  `${item.item.padEnd(25)} ${item.quantity.padEnd(15)} KSh ${item.amount.toLocaleString().padStart(8)}`
).join('\n')}

OTHER TOTAL: KSh ${otherTotal.toLocaleString()}

GRAND TOTAL: KSh ${totalBudget.toLocaleString()}

FUNDING SOURCES:
===============
- Individual Contributions: KSh ${Math.round(totalBudget * 0.7).toLocaleString()}
- Church Support: KSh ${Math.round(totalBudget * 0.2).toLocaleString()}
- Sponsorships: KSh ${Math.round(totalBudget * 0.1).toLocaleString()}

NOTES:
======
- All amounts are in Kenyan Shillings (KSh)
- Budget includes miscellaneous items for emergencies
- Contributions are managed transparently
- Regular updates provided to contributors

For questions about the budget, contact:
Email: mkusdachurch@gmail.com
Phone: +254 712 128 912

Generated on: ${new Date().toLocaleDateString()}
    `.trim();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-10">
            <div className="container-custom py-4">
              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="flex items-center gap-2 text-forest-green hover:text-dark-green font-medium"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Home
                </motion.button>
                
                <h1 className="text-2xl lg:text-3xl font-bold text-forest-green">
                  Camp Meeting Budget
                </h1>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="py-8 lg:py-12">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Transparency is important to us. Here's our detailed budget breakdown showing how every contribution helps make this camp meeting possible.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Budget Summary */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-forest-green mb-6 flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-gold" />
                    Budget Overview
                  </h3>

                  {/* Food Items Section */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-forest-green mb-4 bg-gradient-to-r from-green-100 to-emerald-100 p-2 rounded-lg">
                      Food Items ({foodItems.length} items)
                    </h4>
                    <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
                      {foodItems.map((item, index) => (
                        <motion.div
                          key={item.item}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.02 }}
                          className="flex justify-between items-center p-2 bg-green-50 rounded-lg text-sm hover:shadow-sm transition-shadow"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-forest-green">{item.item}</span>
                            {item.quantity && <span className="text-slate-600 ml-2">({item.quantity})</span>}
                          </div>
                          <div className="font-semibold text-forest-green">KSh {item.amount.toLocaleString()}</div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="bg-green-100 p-3 rounded-lg">
                      <div className="flex justify-between items-center font-bold text-forest-green">
                        <span>Food Total:</span>
                        <span>KSh {foodTotal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Other Items Section */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-forest-green mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 p-2 rounded-lg">
                      Other Items ({otherItems.length} items)
                    </h4>
                    <div className="space-y-2 mb-4">
                      {otherItems.map((item, index) => (
                        <motion.div
                          key={item.item}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          className="flex justify-between items-center p-2 bg-blue-50 rounded-lg text-sm hover:shadow-sm transition-shadow"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-forest-green">{item.item}</span>
                            {item.quantity && <span className="text-slate-600 ml-2">({item.quantity})</span>}
                          </div>
                          <div className="font-semibold text-forest-green">KSh {item.amount.toLocaleString()}</div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <div className="flex justify-between items-center font-bold text-forest-green">
                        <span>Other Total:</span>
                        <span>KSh {otherTotal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-xl font-bold bg-gradient-to-r from-gold/20 to-yellow-400/20 p-4 rounded-lg">
                      <span className="text-forest-green">Grand Total:</span>
                      <span className="text-gold">KSh {totalBudget.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Download Section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-forest-green mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-gold" />
                    Download Budget
                  </h3>

                  <div className="space-y-6">
                    {/* Budget Info */}
                    <div className="bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-lg p-4">
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
                          <div className="text-gold font-bold">Food & Other</div>
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleDownload}
                      disabled={isDownloading}
                      className="w-full bg-gradient-to-r from-forest-green to-emerald hover:from-dark-green hover:to-forest-green text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
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
                    <div className="text-center text-sm text-slate-600 bg-gray-50 rounded-lg p-4">
                      <p className="mb-2 font-medium">Questions about the budget?</p>
                      <p className="text-forest-green">
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BudgetPage;
