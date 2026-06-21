import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

export const FinalCTA = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#071A52]">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#0A4DA2] to-transparent blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#22C55E] to-transparent blur-[100px]"></div>
      </motion.div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="bg-[#0F296D]/50 backdrop-blur-xl border border-white/10 rounded-[32px] px-8 md:px-12 h-auto lg:h-[320px] flex flex-col lg:flex-row items-center justify-between gap-12 py-10 lg:py-0">
          
          {/* Left Content */}
          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-[800] text-white leading-tight mb-4 font-['Inter']">
              Ready to Start <br className="hidden lg:block"/> Your Career Journey?
            </h2>
            <p className="text-slate-300 text-lg font-['Inter']">
              Apply now and take the first step towards becoming industry ready.
            </p>
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-[30%] flex justify-center order-first lg:order-none mb-8 lg:mb-0">
            <div className="relative w-64 h-48 md:w-80 md:h-60 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl transform lg:scale-125 lg:-translate-y-8">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content / Buttons */}
          <div className="w-full lg:w-[30%] flex flex-col sm:flex-row lg:flex-col gap-4 items-center lg:items-end justify-center lg:justify-center">
            <button className="w-full sm:w-auto lg:w-full bg-[#0A4DA2] hover:bg-white hover:text-[#0A4DA2] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-lg flex items-center justify-center gap-2 group border border-transparent hover:border-[#0A4DA2]">
              Apply For Internship
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto lg:w-full bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2">
              <PhoneCall className="w-4 h-4" />
              Talk To Counselor
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
