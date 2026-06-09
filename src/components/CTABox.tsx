import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTABox = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full bg-[#0F172A] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
    >
      {/* Background accents */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500 rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-green-500 rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-center">
        <h2 className="text-[28px] md:text-[32px] font-[800] leading-[1.15] mb-6">
          Ready to Start<br/>Your IT Career?
        </h2>
        
        <p className="text-gray-300 text-[15px] leading-relaxed mb-8 font-medium">
          Join our upcoming batches and take the first step towards your dream career.
        </p>
        
        <div className="mt-auto">
          <a 
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#1CA345] text-white px-8 py-4 rounded-lg font-bold text-[15px] transition-all shadow-lg shadow-green-600/20 hover:-translate-y-0.5 w-max"
          >
            Join New Batch <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
