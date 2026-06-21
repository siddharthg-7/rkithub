import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Clock, Target, ArrowRight, Code2, BookOpen, TrendingUp } from 'lucide-react';
import { Ripple } from '@/src/components/ui/ripple';

export const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white w-full min-h-[750px]">
      {/* Background Abstract Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layer 5: Dot Pattern (Top Right) */}
        <div 
          className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] opacity-15"
          style={{
            backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
            backgroundSize: '14px 14px'
          }}
        />
        {/* Layer 2: Gradient Glow */}
        <div 
          className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)'
          }}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        
        {/* Left Content (45%) */}
        <div className="w-full lg:w-[45%] flex flex-col items-start z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#0A4DA2] font-semibold text-sm tracking-wide mb-6 uppercase"
          >
            Internship Program
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-[800] leading-[1.05] text-[#0F172A] mb-6 font-['Inter']">
              Real Experience.<br />
              Real Projects.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">Real Growth.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#64748B] mb-10 max-w-[520px] leading-relaxed font-['Inter']"
          >
            Step into the industry with our internship program and build skills that get you hired.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
          >
            <button className="w-full sm:w-auto bg-[#0A4DA2] hover:bg-[#071A52] text-white px-8 py-4 rounded-xl font-medium text-base transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group">
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white border border-[#E2E8F0] hover:border-[#0A4DA2] hover:text-[#0A4DA2] text-[#0F172A] px-8 py-4 rounded-xl font-medium text-base transition-all flex items-center justify-center">
              Explore Tracks
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-8 w-full"
          >
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0A4DA2]">
                <Briefcase size={20} />
              </div>
              <span className="text-sm font-semibold text-[#0F172A]">Live Projects</span>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0A4DA2]">
                <Users size={20} />
              </div>
              <span className="text-sm font-semibold text-[#0F172A]">Expert Mentors</span>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0A4DA2]">
                <Clock size={20} />
              </div>
              <span className="text-sm font-semibold text-[#0F172A]">Flexible Duration</span>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0A4DA2]">
                <Target size={20} />
              </div>
              <span className="text-sm font-semibold text-[#0F172A]">Placement Support</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content (55%) */}
        <div className="w-full lg:w-[55%] relative h-[500px] lg:h-[650px] mt-10 lg:mt-0 flex items-center justify-center">
          
          {/* Layer 3: Circular Rings (Ripple) */}
          <Ripple mainCircleSize={210} mainCircleOpacity={0.24} numCircles={8} />

          {/* Layer 4: Dashed Orbit Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <svg viewBox="0 0 500 500" className="w-full h-full max-w-[500px] max-h-[500px] animate-[spin_40s_linear_infinite] opacity-30">
              <circle cx="250" cy="250" r="220" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="10 10" />
              <circle cx="250" cy="250" r="160" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" />
            </svg>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="relative w-full h-full max-w-[800px] mx-auto overflow-visible transform lg:scale-110 lg:translate-x-12">
              {/* Layer 6: Hero Image */}
              <img 
                src="/interns_hero.png" 
                alt="Students collaborating" 
                className="w-full h-full object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-[10%] right-[-5%] lg:right-[-2%] bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]"
          >
            <div className="w-12 h-12 rounded-full bg-[#0A4DA2]/10 flex items-center justify-center text-[#0A4DA2] shrink-0">
              <Code2 size={24} />
            </div>
            <div>
              <p className="text-[#071A52] font-bold text-sm">Build</p>
              <p className="text-xs text-[#64748B]">Industry Grade Projects</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-[20%] left-[-5%] lg:left-[-10%] bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]"
          >
            <div className="w-12 h-12 rounded-full bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-[#071A52] font-bold text-sm">Learn</p>
              <p className="text-xs text-[#64748B]">Expert Guidance</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute bottom-[5%] right-[10%] bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]"
          >
            <div className="w-12 h-12 rounded-full bg-[#0A4DA2]/10 flex items-center justify-center text-[#0A4DA2] shrink-0">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-[#071A52] font-bold text-sm">Grow</p>
              <p className="text-xs text-[#64748B]">Career Opportunities</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
