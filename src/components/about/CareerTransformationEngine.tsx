import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, TrendingUp, Code2, Users, Database } from 'lucide-react';

/* ─── MINI COMPONENTS ────────────────────────────────────────────────────────── */

const AvatarStack = () => {
  const avatars = [
    'https://i.pravatar.cc/150?u=1',
    'https://i.pravatar.cc/150?u=2',
    'https://i.pravatar.cc/150?u=3',
    'https://i.pravatar.cc/150?u=4'
  ];
  return (
    <div className="flex -space-x-4">
      {avatars.map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          alt={`Student ${idx}`}
        />
      ))}
      <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 z-10">
        +500
      </div>
    </div>
  );
};

const AutoMarquee = () => {
  const techs = ['Java', 'Python', 'React', 'Node.js', 'AWS', 'Testing', 'Docker', 'SQL'];
  return (
    <div className="w-full overflow-hidden relative flex bg-gray-50/50 rounded-xl py-3 px-2 border border-gray-100 shadow-inner">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: [0, -400] }}
        transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
      >
        {[...techs, ...techs].map((tech, idx) => (
          <span key={idx} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs font-semibold text-gray-700 shadow-sm">
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const MiniBentoGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-2 w-full h-full">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-2 flex flex-col items-center justify-center">
        <Code2 size={16} className="text-blue-500 mb-1" />
        <span className="text-[10px] font-bold text-blue-700">Frontend</span>
      </div>
      <div className="bg-green-50 border border-green-100 rounded-lg p-2 flex flex-col items-center justify-center">
        <Database size={16} className="text-green-500 mb-1" />
        <span className="text-[10px] font-bold text-green-700">Backend</span>
      </div>
      <div className="col-span-2 bg-purple-50 border border-purple-100 rounded-lg p-2 flex items-center gap-2">
        <TrendingUp size={16} className="text-purple-500 shrink-0" />
        <div className="h-1.5 w-full bg-purple-200 rounded-full overflow-hidden">
          <motion.div className="h-full bg-purple-500" initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1 }} />
        </div>
      </div>
    </div>
  );
};

const OfferList = () => {
  const offers = ['Frontend Dev', 'QA Intern', 'Python Dev', 'Cloud Intern'];
  return (
    <div className="w-full h-[80px] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-white to-transparent z-10" />
      <motion.div
        animate={{ y: [0, -120] }}
        transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
        className="flex flex-col gap-2 pt-2"
      >
        {[...offers, ...offers].map((offer, idx) => (
          <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-md px-3 py-2 flex items-center justify-between text-xs">
            <span className="font-semibold text-gray-700">{offer}</span>
            <Award size={12} className="text-yellow-500" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MetricTicker = ({ value, label }: { value: number, label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    const duration = 2000;
    const incrementTime = (duration / end) * 5;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-black text-emerald-600 font-['Plus_Jakarta_Sans']">
        {count}%
      </div>
      <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{label}</div>
    </div>
  );
};

const AnimatedBeam = () => {
  return (
    <>
      {/* Mobile Vertical Beam */}
      <div className="relative w-1 h-12 my-2 overflow-hidden rounded-full bg-gray-100 flex lg:hidden items-center justify-center shrink-0">
        <motion.div
          className="absolute bg-gradient-to-b from-transparent via-blue-400 to-transparent w-full h-[200%]"
          animate={{ top: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          style={{ filter: 'blur(2px)' }}
        />
      </div>
      {/* Desktop Horizontal Beam */}
      <div className="relative h-1 w-8 lg:w-16 mx-2 overflow-hidden rounded-full bg-gray-100 hidden lg:flex items-center justify-center shrink-0">
        <motion.div
          className="absolute bg-gradient-to-r from-transparent via-blue-400 to-transparent h-full w-[200%]"
          animate={{ left: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          style={{ filter: 'blur(2px)' }}
        />
      </div>
    </>
  );
};

const WorkflowNode = ({ title, icon: Icon, children, delay }: { title: string, icon: any, children: React.ReactNode, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center w-full max-w-[200px]"
    >
      <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 w-[180px] h-[160px] flex flex-col relative z-10 hover:-translate-y-1 transition-transform">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 bg-blue-50 rounded-lg">
            <Icon size={16} className="text-blue-600" />
          </div>
          <span className="font-bold text-gray-900 text-sm tracking-tight">{title}</span>
        </div>
        <div className="flex-1 flex items-center justify-center relative w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────────── */

export const CareerTransformationEngine = () => {
  return (
    <section className="relative py-10 md:py-16 font-sans bg-[#FAFAFA] overflow-hidden">
      
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Magic UI Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ backgroundImage: 'radial-gradient(#0F172A 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
        />
        
        {/* Giant Watermark */}
        <div className="absolute text-[90px] md:text-[220px] font-[800] text-[#0F172A] opacity-5 tracking-tighter whitespace-nowrap z-0 font-['Clash_Display',sans-serif] pointer-events-none select-none">
          CAREER ENGINE
        </div>
      </div>


      <div className="max-w-[1440px] mx-auto px-6 md:px-[80px] relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6"
          >
            How We Create Industry-Ready Professionals
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#0F172A] mb-5 tracking-tight leading-tight max-w-4xl mx-auto font-['Plus_Jakarta_Sans']"
          >
            From Learning to Hiring —<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              A Complete Career Transformation System
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-[#64748B] font-medium max-w-3xl mx-auto leading-relaxed"
          >
            We don't just teach technologies. We build a structured pathway that transforms learners into industry-ready professionals through practical training, projects, internships and placement support.
          </motion.p>
        </div>

        {/* Workflow Diagram */}
        <div className="flex flex-col lg:flex-row items-center justify-center relative w-full pt-8">
          
          <WorkflowNode title="STUDENT" icon={GraduationCap} delay={0.3}>
            <AvatarStack />
          </WorkflowNode>

          <AnimatedBeam />

          <WorkflowNode title="TRAINING" icon={Code2} delay={0.5}>
            <AutoMarquee />
          </WorkflowNode>

          <AnimatedBeam />

          <WorkflowNode title="PROJECTS" icon={Database} delay={0.7}>
            <MiniBentoGrid />
          </WorkflowNode>

          <AnimatedBeam />

          <WorkflowNode title="INTERNSHIP" icon={Briefcase} delay={0.9}>
            <OfferList />
          </WorkflowNode>

          <AnimatedBeam />

          <WorkflowNode title="PLACEMENT" icon={TrendingUp} delay={1.1}>
            <div className="flex gap-4">
              <MetricTicker value={100} label="Readiness" />
            </div>
          </WorkflowNode>

        </div>

      </div>
    </section>
  );
};
