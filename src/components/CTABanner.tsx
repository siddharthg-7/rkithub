import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export const CTABanner = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-[#06152D] rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          
          {/* Background Glows */}
          <div className="absolute top-[-50%] left-[-20%] w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-50%] right-[-20%] w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-[100px]" />
          
          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            >
              Ready to Start Your Career Journey?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 font-medium text-lg mb-10 leading-relaxed"
            >
              Join industry-focused training programs and accelerate your path to success.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="group bg-yellow-500 text-[#06152D] px-6 py-3.5 rounded-full font-bold text-[15px] hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 active:scale-95 flex items-center gap-2">
                Enroll Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent text-white border border-white/30 px-6 py-3.5 rounded-full font-bold text-[15px] hover:bg-white/5 hover:border-white transition-all active:scale-95 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Book Free Counseling
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
