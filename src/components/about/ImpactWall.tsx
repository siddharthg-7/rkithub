import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Briefcase, FileCode2, LineChart, Target, UserPlus, Users } from 'lucide-react';

/* ─── CARD 1: 10+ YEARS ──────────────────────────────────────────────────────── */
const CardYears = () => {
  return (
    <div className="relative h-full min-h-[220px] rounded-[24px] bg-white border border-[#E2E8F0] shadow-sm p-6 flex flex-col items-center justify-center overflow-hidden group hover:border-[#0D5EFF]/30 transition-colors">
      <div className="text-center relative z-10">
        <div className="relative w-[140px] h-[140px] flex items-center justify-center mb-4">
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
          <div className="text-[48px] font-[800] text-[#0F172A] tracking-tighter flex items-baseline">
            <CountUp end={10} duration={2.5} />
            <span className="text-[#0D5EFF] ml-1">+</span>
          </div>
        </div>
        <div className="text-[14px] font-[700] text-[#475569] tracking-wider uppercase">Years Excellence</div>
      </div>
    </div>
  );
};

/* ─── CARD 2: 500+ INTERNSHIP LEARNERS ───────────────────────────────────────── */
const CardInterns = () => {
  const interns = ["Frontend Intern", "Python Intern", "QA Intern", "Cloud Intern", "Java Full Stack", "Data Analyst"];
  
  return (
    <div className="relative h-full min-h-[220px] rounded-[24px] bg-white border border-[#E2E8F0] shadow-sm p-6 flex flex-col items-center justify-center overflow-hidden group hover:border-[#0D5EFF]/30 transition-colors">
      
      {/* Background Gradient to mask scrolling */}
      <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Scrolling List */}
      <div className="relative h-[150px] w-full overflow-hidden flex flex-col items-center mt-6">
        <motion.div
          className="flex flex-col gap-3 w-full items-center absolute"
          animate={{ y: [0, -280] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          {/* Render twice for seamless loop */}
          {[...interns, ...interns, ...interns].map((role, idx) => (
            <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2 rounded-xl text-[13px] font-[600] text-[#0F172A] flex items-center gap-2 shadow-sm whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {role}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-4 left-6 right-6 flex justify-between items-center z-20">
        <div className="text-[32px] font-[800] text-[#0F172A] tracking-tight">500+</div>
        <div className="text-[11px] font-[700] text-[#475569] tracking-wider uppercase text-right w-24 leading-tight">Internship Learners</div>
      </div>
    </div>
  );
};

/* ─── CARD 3: HUNDREDS TRAINED ───────────────────────────────────────────────── */
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
    <div className="relative h-full min-h-[220px] rounded-[24px] bg-white border border-[#E2E8F0] shadow-sm p-6 flex flex-col justify-between overflow-hidden group hover:border-[#0D5EFF]/30 transition-colors">
      <div>
        <div className="text-[32px] font-[800] text-[#0F172A] tracking-tight">Hundreds</div>
        <div className="text-[13px] font-[700] text-[#475569] tracking-wider uppercase mt-1">Students Trained</div>
      </div>

      <div className="flex -space-x-4 mt-6">
        {gradients.map((grad, i) => (
          <motion.div
            key={i}
            className={`w-12 h-12 rounded-full border-2 border-white shadow-md bg-gradient-to-br ${grad} flex items-center justify-center`}
            initial={{ opacity: 0, x: -20 }}
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

/* ─── CARD 4: CENTERPIECE (INDUSTRY READY ECOSYSTEM) ─────────────────────────── */
const CardEcosystem = () => {
  const steps = [
    { label: 'Training', icon: FileCode2 },
    { label: 'Projects', icon: Target },
    { label: 'Internship', icon: Users },
    { label: 'Career', icon: Briefcase }
  ];

  return (
    <div className="relative w-full rounded-[32px] bg-[#0F172A] border border-[#1E293B] shadow-2xl p-8 md:p-12 overflow-hidden col-span-1 md:col-span-3">
      {/* Background Grid for Dark Theme */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent z-0" />
      
      {/* Glows */}
      <div className="absolute left-[20%] top-[20%] w-[200px] h-[200px] bg-[#0D5EFF] rounded-full blur-[100px] opacity-30" />
      <div className="absolute right-[20%] bottom-[20%] w-[200px] h-[200px] bg-[#22C55E] rounded-full blur-[100px] opacity-20" />

      <div className="relative z-10 mb-12 text-center md:text-left">
        <div className="text-[12px] font-[800] text-[#0D5EFF] tracking-widest uppercase mb-3">Our Core Engine</div>
        <h3 className="text-[28px] md:text-[36px] font-[800] text-white tracking-tight leading-tight">Industry-Ready Learning Ecosystem</h3>
      </div>

      <div className="relative z-10 w-full max-w-[900px] mx-auto py-8">
        {/* The Path Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          
          {/* Background Track Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#1E293B] -translate-y-1/2 hidden md:block" />
          
          {/* Animated Beam (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 overflow-hidden hidden md:block">
            <motion.div
              className="w-[30%] h-full bg-gradient-to-r from-transparent via-[#0D5EFF] to-[#22C55E]"
              animate={{ x: ['-100%', '350%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Background Track Line (Mobile) */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#1E293B] -translate-x-1/2 md:hidden" />

          {/* Nodes */}
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4 bg-[#0F172A] py-2">
                <motion.div
                  className="w-[64px] h-[64px] rounded-2xl bg-[#1E293B] border border-[#334155] flex items-center justify-center shadow-[0_0_30px_rgba(13,94,255,0.15)] relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <Icon size={28} className="text-white" />
                  {/* Subtle pulse ring */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border border-[#0D5EFF]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                </motion.div>
                <div className="text-[14px] font-[600] text-[#94A3B8] tracking-wide">{step.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ─── CARD 5: REAL-TIME PROJECTS ─────────────────────────────────────────────── */
const CardProjects = () => {
  return (
    <div className="relative h-full min-h-[220px] rounded-[24px] bg-white border border-[#E2E8F0] shadow-sm p-6 flex flex-col justify-between overflow-hidden group hover:border-[#0D5EFF]/30 transition-colors">
      <div>
        <div className="text-[20px] font-[800] text-[#0F172A] tracking-tight">Real-Time Projects</div>
        <div className="text-[12px] font-[600] text-[#64748B] mt-1">Practical hands-on execution</div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 h-[60px] flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-full flex justify-between items-center">
              <div className="w-1/2 h-1.5 bg-[#CBD5E1] rounded-full" />
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="w-3/4 h-1 bg-[#E2E8F0] rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ─── CARD 6: PLACEMENT SUPPORT ──────────────────────────────────────────────── */
const CardPlacement = () => {
  return (
    <div className="relative h-full min-h-[220px] rounded-[24px] bg-[#0D5EFF] border border-[#0050D5] shadow-sm p-6 flex flex-col justify-between overflow-hidden group">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      <div className="relative z-10">
        <div className="text-[20px] font-[800] text-white tracking-tight">Placement Support</div>
        <div className="text-[12px] font-[500] text-blue-100 mt-1">From resume to job offer</div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 mt-6 pl-2">
        <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-blue-400/30">
          <motion.div 
            className="w-full h-1/3 bg-white blur-[2px]"
            animate={{ y: [0, 80, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {['Resume Prep', 'Mock Interview', 'Hired'].map((step, i) => (
          <div key={i} className="flex items-center gap-4 relative">
            <div className={`w-[18px] h-[18px] rounded-full border-4 border-[#0D5EFF] ${i === 2 ? 'bg-emerald-400' : 'bg-white'} z-10 shadow-sm`} />
            <div className="text-[13px] font-[600] text-white">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── CARD 7: CORPORATE TRAINING ─────────────────────────────────────────────── */
const CardCorporate = () => {
  const chips = ['Enterprise Learning', 'Upskilling', 'Recruitment', 'Workshops', 'Team Building'];

  return (
    <div className="relative h-full min-h-[220px] rounded-[24px] bg-white border border-[#E2E8F0] shadow-sm p-6 flex flex-col overflow-hidden group hover:border-[#0D5EFF]/30 transition-colors">
      <div className="mb-6">
        <div className="text-[20px] font-[800] text-[#0F172A] tracking-tight">Corporate Training</div>
        <div className="text-[12px] font-[600] text-[#64748B] mt-1">Empowering modern teams</div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex-1 flex flex-col justify-center gap-3">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div
          className="flex gap-3 whitespace-nowrap w-max"
          animate={{ x: [0, -400] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          {[...chips, ...chips, ...chips].map((chip, idx) => (
            <div key={idx} className="bg-slate-100 px-4 py-2 rounded-full text-[13px] font-[600] text-[#334155] border border-slate-200">
              {chip}
            </div>
          ))}
        </motion.div>
        
        <motion.div
          className="flex gap-3 whitespace-nowrap w-max"
          animate={{ x: [-200, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          {[...chips, ...chips, ...chips].map((chip, idx) => (
            <div key={idx} className="bg-slate-800 px-4 py-2 rounded-full text-[13px] font-[600] text-white border border-slate-700">
              {chip}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────────── */
export const ImpactWall = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="relative py-20 md:py-32 bg-[#FAFAFA] font-sans overflow-hidden" ref={ref}>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Floating BlurFade Badges */}
      <div className="absolute top-[10%] left-[5%] hidden md:block">
        <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} whileInView={{ opacity: 0.6, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 1 }} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-500 shadow-sm">Industry-Oriented Curriculum</motion.div>
      </div>
      <div className="absolute top-[20%] right-[10%] hidden md:block">
        <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} whileInView={{ opacity: 0.6, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 1 }} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-500 shadow-sm">Hands-On Learning</motion.div>
      </div>
      <div className="absolute bottom-[10%] left-[15%] hidden md:block">
        <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} whileInView={{ opacity: 0.6, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 1 }} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-500 shadow-sm">Career Guidance</motion.div>
      </div>
      <div className="absolute bottom-[20%] right-[5%] hidden md:block">
        <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} whileInView={{ opacity: 0.6, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 1 }} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-500 shadow-sm">Mentorship</motion.div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-[80px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase mb-6"
          >
            Our Impact
          </motion.div>
          <motion.h2 
            className="text-[36px] md:text-[56px] font-[800] text-[#0F172A] leading-[1.1] tracking-tight mb-6 max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A Decade of Building Careers
          </motion.h2>
          <motion.p 
            className="text-[18px] md:text-[20px] font-[400] text-[#64748B] leading-[1.7] max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Over the years, RK IT Training HUB has helped students, graduates and professionals gain practical skills, industry exposure and career opportunities through a proven learning ecosystem.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }}>
            <CardYears />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.6 }}>
            <CardInterns />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.6 }}>
            <CardTrained />
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.6 }} className="md:col-span-3">
            <CardEcosystem />
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7, duration: 0.6 }}>
            <CardProjects />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.6 }}>
            <CardPlacement />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9, duration: 0.6 }}>
            <CardCorporate />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
