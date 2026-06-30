import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Link as LinkIcon, Zap, ShieldCheck, TrendingUp, Award, Building2 } from 'lucide-react';

export const PartnershipSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const rkFeatures = [
    { text: 'Real-time Training', icon: Award },
    { text: 'Live Projects', icon: Zap },
    { text: 'Expert Mentorship', icon: TrendingUp },
    { text: 'Assured Internships', icon: Building2 }
  ];
  const vhubFeatures = [
    { text: 'Tech Consulting', icon: Building2 },
    { text: 'Talent Acquisition', icon: ShieldCheck },
    { text: 'Corporate Upskilling', icon: Award },
    { text: 'Direct Placements', icon: TrendingUp }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#FAFBFC] font-sans overflow-hidden" ref={ref}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.15] animate-blob" />
        <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-green-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.15] animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-widest uppercase mb-6 shadow-sm"
          >
            <LinkIcon className="w-4 h-4 mr-2" />
            Official Partnership
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Industry Collaboration</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center max-w-6xl mx-auto">
          {/* RK IT Card */}
          <motion.div
            className="relative rounded-[2.5rem] bg-white p-10 flex flex-col items-center gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group hover:shadow-[0_20px_60px_rgb(13,94,255,0.12)] transition-all duration-500"
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative h-24 w-full flex items-center justify-center">
              <img src="/logo.webp" alt="RK IT Hub" className="h-20 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div className="text-center relative z-10 w-full pb-6 border-b border-slate-100">
              <div className="font-extrabold text-2xl text-[#0B4F9C] mb-1" style={{ fontFamily: '"Cinzel", serif' }}>RK IT</div>
              <div className="text-xs font-semibold text-slate-500 tracking-[0.2em] uppercase" style={{ fontFamily: '"Cinzel", serif' }}>Training Hub</div>
              <div className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase mt-2">Education Partner</div>
            </div>
            
            <div className="w-full space-y-4 relative z-10">
              {rkFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/item:bg-blue-600 transition-colors duration-300">
                    <f.icon className="w-4 h-4 text-blue-600 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[15px] font-[600] text-slate-700">{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dynamic Connection Indicator */}
          <motion.div
            className="hidden lg:flex flex-col items-center justify-center relative w-24 h-full"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* The animated connecting line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-gradient-to-r from-blue-100 via-green-200 to-green-100 rounded-full" />
            
            {/* The glowing pulse effect */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-1 overflow-hidden">
              <motion.div 
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500 to-green-500 blur-[2px]"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            {/* The center emblem */}
            <motion.div 
              className="relative z-10 w-16 h-16 rounded-full bg-white shadow-[0_0_30px_rgb(0,0,0,0.1)] border border-slate-100 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-green-500 opacity-10 animate-pulse" />
              <LinkIcon className="w-6 h-6 text-slate-400" />
            </motion.div>
          </motion.div>

          {/* V-HUB Card */}
          <motion.div
            className="relative rounded-[2.5rem] bg-white p-10 flex flex-col items-center gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group hover:shadow-[0_20px_60px_rgb(10,77,162,0.12)] transition-all duration-500"
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative h-24 w-full flex items-center justify-center">
              <img src="/VHUB_Logo.svg" alt="V-HUB" className="h-16 md:h-20 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div className="text-center relative z-10 w-full pb-6 border-b border-slate-100 flex justify-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0A4DA2] text-[11px] font-bold tracking-[0.2em] uppercase mt-2 border border-blue-100/50 shadow-sm">
                Industry Partner
              </div>
            </div>
            
            <div className="w-full space-y-4 relative z-10">
              {vhubFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/item:bg-[#0A4DA2] transition-colors duration-300">
                    <f.icon className="w-4 h-4 text-[#0A4DA2] group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[15px] font-[600] text-slate-700">{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="absolute -left-4 -top-4 text-6xl text-slate-200 font-serif leading-none opacity-50">"</div>
          <p className="text-center text-lg md:text-xl font-medium text-slate-600 leading-relaxed px-8">
            RK IT Training HUB proudly serves as the training and talent development partner of <span className="font-bold text-slate-900">V-HUB IT Consulting Services Pvt. Ltd.</span>, creating a complete ecosystem for learning, internships, and career opportunities.
          </p>
          <div className="absolute -right-4 -bottom-8 text-6xl text-slate-200 font-serif leading-none opacity-50 rotate-180">"</div>
        </motion.div>
      </div>
    </section>
  );
};
