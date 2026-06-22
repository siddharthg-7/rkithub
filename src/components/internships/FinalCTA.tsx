import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

export const FinalCTA = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section className="relative py-24 px-[80px] overflow-hidden bg-[var(--color-bg-dark)] flex items-center justify-center font-sans border-t border-[#1e293b]">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[var(--color-primary)] to-transparent blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[var(--color-accent)] to-transparent blur-[100px]"></div>
      </motion.div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 text-left">
          <h2 className="text-[32px] md:text-[40px] font-[800] text-white leading-tight mb-4 font-['Inter']">
            Your First Job Starts<br/>With Your First Project.
          </h2>
          <p className="text-gray-400 text-base font-['Inter'] max-w-[400px]">
            Join the internship experience designed to make you industry ready.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-start md:items-end w-full">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-[12px] font-semibold text-[15px] transition-all flex items-center justify-center gap-2 border border-transparent">
              Apply For Internship
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent border border-gray-600 hover:border-gray-400 hover:bg-white/5 text-white px-8 py-3.5 rounded-[12px] font-semibold text-[15px] transition-all flex items-center justify-center gap-2">
              Talk To Counselor
              <div className="w-4 h-4 border border-current rounded flex items-center justify-center text-[10px]">...</div>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-xs font-semibold tracking-wide">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-gray-500 flex items-center justify-center text-[8px]">✓</div>
              100% Practical Training
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-gray-500 flex items-center justify-center text-[8px]">✓</div>
              Certificate Included
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-gray-500 flex items-center justify-center text-[8px]">✓</div>
              Mentor Support
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-gray-500 flex items-center justify-center text-[8px]">✓</div>
              Placement Assistance
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
