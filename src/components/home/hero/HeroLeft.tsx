import React from 'react';
import { ArrowRight, Sparkles, Award, Users, Briefcase } from 'lucide-react';
import { JOURNEY_STEPS, ACCENT_GRADIENTS } from './types';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useApplicationModal } from '../../../contexts/ApplicationContext';

/* ─── HERO STATS CARDS ──────────────────────────────────────────────────────── */
const CardYears = () => {
  return (
    <div className="relative h-full min-h-[160px] flex-1 rounded-[20px] bg-white border border-[#E2E8F0] shadow-sm p-4 flex flex-col items-center justify-center overflow-hidden group hover:border-[#0D5EFF]/30 transition-colors">
      <div className="text-center relative z-10">
        <div className="relative w-[80px] h-[80px] flex items-center justify-center mb-3">
          {/* Animated SVG Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#F1F5F9" strokeWidth="6" />
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#0D5EFF"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ strokeDasharray: '0 300' }}
              whileInView={{ strokeDasharray: '289 300' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.2 }}
            />
          </svg>
          {/* Number */}
          <div className="text-2xl lg:text-3xl font-[800] text-[#0F172A] tracking-tighter flex items-baseline">
            <CountUp end={10} duration={2.5} />
            <span className="text-[#0D5EFF] ml-0.5">+</span>
          </div>
        </div>
        <div className="text-[11px] font-[700] text-[#475569] tracking-wider uppercase leading-tight">Years<br/>Excellence</div>
      </div>
    </div>
  );
};

const CardInterns = () => {
  const interns = ["Frontend Intern", "Python Intern", "QA Intern", "Cloud Intern", "Java Full Stack", "Data Analyst"];
  
  return (
    <div className="relative h-full min-h-[160px] flex-1 rounded-[20px] bg-white border border-[#E2E8F0] shadow-sm p-3 flex flex-col overflow-hidden group hover:border-[#0D5EFF]/30 transition-colors">
      
      {/* Background Gradient to mask scrolling */}
      <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Scrolling List */}
      <div className="relative h-[90px] w-full overflow-hidden flex flex-col items-center mt-12">
        <motion.div
          className="flex flex-col gap-2 w-full items-center absolute"
          animate={{ y: [0, -200] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          {/* Render twice for seamless loop */}
          {[...interns, ...interns, ...interns].map((role, idx) => (
            <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1.5 rounded-lg text-[11px] font-[600] text-[#0F172A] flex items-center gap-1.5 shadow-sm whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {role}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
        <div className="text-2xl lg:text-3xl font-[800] text-[#0F172A] tracking-tight leading-none">500+</div>
        <div className="text-[9px] font-[700] text-[#475569] tracking-wider uppercase text-right w-16 leading-tight">Internship Learners</div>
      </div>
    </div>
  );
};

const CardTrained = () => {
  const gradients = [
    'from-blue-400 to-blue-600',
    'from-emerald-400 to-emerald-600',
    'from-purple-400 to-purple-600',
    'from-orange-400 to-orange-600',
    'from-pink-400 to-pink-600',
    'from-indigo-400 to-indigo-600'
  ];

  return (
    <div className="relative h-full min-h-[160px] flex-1 rounded-[20px] bg-white border border-[#E2E8F0] shadow-sm p-4 flex flex-col justify-between overflow-hidden group hover:border-[#0D5EFF]/30 transition-colors">
      <div>
        <div className="text-2xl lg:text-3xl font-[800] text-[#0F172A] tracking-tight leading-none">3000+</div>
        <div className="text-[10px] font-[700] text-[#475569] tracking-wider uppercase mt-1 leading-tight">Students Trained & Placed</div>
      </div>

      <div className="flex -space-x-3 mt-4 justify-center">
        {gradients.map((grad, i) => (
          <motion.div
            key={i}
            className={`w-10 h-10 rounded-full border-2 border-white shadow-md bg-gradient-to-br ${grad} flex items-center justify-center`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Users size={16} className="text-white/50" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/**
 * HeroLeft — statically renders all states layered absolutely.
 * Animations are now entirely controlled by the parent Hero.tsx master timeline.
 */
export const HeroLeft: React.FC = () => {
  const { openApplyModal } = useApplicationModal();
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white z-10 w-full max-w-[620px] mx-auto lg:mx-0">
      {/* 1. BADGE REMOVED */}

      {/* 2. HEADING & DESCRIPTION (ABSOLUTE LAYERS) */}
      <div className="relative min-h-[350px] sm:min-h-[280px] md:min-h-[260px] flex flex-col justify-start mb-6 w-full">
        {JOURNEY_STEPS.map((step, i) => {
          const titleWords = step.heading.split(' ');
          const normalWords = titleWords.slice(0, -1).join(' ');
          const highlightWord = titleWords[titleWords.length - 1];

          return (
            <div
              key={i}
              className={`absolute top-0 left-0 w-full hero-step-${i}`}
              style={{
                opacity: i === 0 ? 1 : 0,
                pointerEvents: i === 0 ? 'auto' : 'none',
                visibility: i === 0 ? 'visible' : 'hidden',
              }}
            >
              <h1 className="font-bold font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.2] tracking-tight m-0 mb-5 flex flex-wrap justify-center lg:justify-start">
                <span className="flex flex-wrap justify-center lg:justify-start">
                  {normalWords.split(' ').filter(Boolean).map((word, j) => (
                    <span
                      key={`n-${i}-${j}`}
                      className="inline-block mr-[0.3em] hero-word will-change-transform font-bold"
                    >
                      {word}
                    </span>
                  ))}
                  <span className="inline-block mr-[0.3em] hero-word will-change-transform font-extrabold">
                    <span
                      style={{
                        background: ACCENT_GRADIENTS[i],
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        fontWeight: 800, // Explicitly 800 per user instructions
                      }}
                    >
                      {highlightWord}
                    </span>
                  </span>
                </span>
              </h1>
              <p
                className="hero-desc font-sans font-medium text-base sm:text-lg leading-[1.75] max-w-[520px] m-0 mx-auto lg:mx-0 text-center lg:text-left"
                style={{ color: 'rgba(255,255,255,.75)' }}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* 4. CTA BUTTONS */}
      <div className="hero-ctas flex flex-col sm:flex-row flex-wrap gap-4 mb-14 w-full justify-center lg:justify-start">
        <button
          onClick={openApplyModal}
          className="group w-full sm:w-auto h-[50px] px-8 rounded-[12px] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(37,99,235,0.28)]"
          style={{
            backgroundColor: '#2563EB',
            boxShadow: '0 12px 30px rgba(37,99,235,0)',
          }}
        >
          Apply Now
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[6px]" />
        </button>

        <a
          href="#consultation-hub"
          className="group w-full sm:w-auto h-[50px] px-8 rounded-[12px] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 bg-transparent hover:bg-white/5"
          style={{ border: '1px solid rgba(255,255,255,.18)' }}
        >
          Talk to Counselor
        </a>
      </div>

      {/* 5. STATS */}
      <div className="hero-stats flex flex-col sm:flex-row gap-4 mt-auto flex-wrap justify-center lg:justify-start w-full">
        <CardYears />
        <CardInterns />
        <CardTrained />
      </div>
    </div>
  );
};
