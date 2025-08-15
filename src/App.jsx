import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CampPoster from './components/CampPoster';

import Speakers from './components/Speakers';
import Choirs from './components/Choirs';
import PledgeSection from './components/PledgeSection';
import LivePreview from './components/LivePreview';
import ChairMessage from './components/ChairMessage';
import Support from './components/Support';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import CampCommittee from './components/CampCommittee.jsx';
import BudgetPage from './components/BudgetPage';

function App() {
  const [showBudget, setShowBudget] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar onBudgetClick={() => setShowBudget(true)} />
      
      {/* Main Content */}
      <main className="pt-0">
        {/* Hero Section */}
        <Hero />
        
        {/* Camp Poster Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CampPoster />
        </motion.div>
        
        {/* Speakers Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Speakers />
        </motion.div>
        
        {/* Camp Committee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CampCommittee />
        </motion.div>
        
        {/* Choirs Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Choirs />
        </motion.div>
        
        {/* Pledge Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PledgeSection />
        </motion.div>
        
        {/* Live Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <LivePreview />
        </motion.div>
        
        {/* Chairperson Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ChairMessage />
        </motion.div>
        
        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Support />
        </motion.div>
        
        {/* Feedback Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Feedback />
        </motion.div>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Budget Page Modal */}
      <BudgetPage isOpen={showBudget} onClose={() => setShowBudget(false)} />
    </div>
  );
}

export default App;
