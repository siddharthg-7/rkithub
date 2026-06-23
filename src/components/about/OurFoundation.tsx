import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* ─── ANIMATED BEAM SVG ─────────────────────────────────────────────────────── */
const BeamConnection: React.FC<{ 
  startX: string, startY: string, endX: string, endY: string, isHovered: boolean, delay: number 
}> = ({ 
  startX, startY, endX, endY, isHovered, delay 
}) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      {/* Background Track Line */}
      <line 
        x1={startX} y1={startY} x2={endX} y2={endY} 
        stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" 
      />
      {/* Glowing Moving Beam */}
      <motion.line
        x1={startX} y1={startY} x2={endX} y2={endY}
        stroke="url(#beam-gradient)" strokeWidth="2" strokeLinecap="round"
        initial={{ strokeDasharray: "0 100", opacity: 0 }}
        animate={{ 
          strokeDasharray: ["0 100", "100 100"], 
          strokeDashoffset: [100, -100],
          opacity: isHovered ? [0, 1, 0] : [0, 0.4, 0]
        }}
        transition={{ duration: isHovered ? 1.5 : 3, repeat: Infinity, ease: "linear", delay }}
      />
      <defs>
        <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#0D5EFF" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
};

/* ─── PHILOSOPHY NETWORK ─────────────────────────────────────────────────────── */
const PhilosophyNetwork = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, label: 'Excellence', desc: 'Deliver quality learning experiences and practical outcomes.', x: '50%', y: '5%' },
    { id: 2, label: 'Innovation', desc: 'Continuously adapt to emerging technologies and industry needs.', x: '10%', y: '35%' },
    { id: 3, label: 'Impact', desc: 'Focus on career transformation rather than course completion.', x: '90%', y: '35%' },
    { id: 4, label: 'Growth', desc: 'Help learners continuously improve and evolve.', x: '25%', y: '85%' },
    { id: 5, label: 'Trust', desc: 'Build long-term relationships through transparency and support.', x: '75%', y: '85%' },
  ];

  return (
    <div className="relative w-full max-w-[800px] h-[500px] md:h-[600px] mx-auto mt-20 mb-32">
      
      {/* Central Orb Glow */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400 rounded-full blur-[150px] opacity-10 pointer-events-none" />

      {/* SVG Beams Container */}
      {nodes.map((node, i) => (
        <BeamConnection 
          key={node.id} 
          startX="50%" startY="55%" 
          endX={node.x} endY={node.y} 
          isHovered={hoveredNode === node.id}
          delay={i * 0.5}
        />
      ))}

      {/* Center Orb */}
      <motion.div 
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
        animate={{ y: ['-50%', 'calc(-50% - 10px)', '-50%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-white/40 backdrop-blur-xl border border-white shadow-[0_0_40px_rgba(13,94,255,0.2)] flex items-center justify-center relative overflow-hidden group">
          {/* Shine Border effect */}
          <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(13,94,255,0.4)_360deg)] animate-[spin_4s_linear_infinite]" />
          <div className="absolute inset-1 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-center p-6">
            <div>
              <div className="text-[12px] font-[800] text-[#0D5EFF] tracking-widest uppercase mb-1">Core Philosophy</div>
              <h3 className="text-[18px] md:text-[22px] font-[800] text-[#0F172A] leading-tight">Empower<br/>Learners</h3>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Surrounding Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute z-10 w-[140px] md:w-[180px] transform -translate-x-1/2 -translate-y-1/2 cursor-default"
          style={{ left: node.x, top: node.y }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <motion.div 
            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xl text-center group transition-colors"
            animate={{ scale: hoveredNode === node.id ? 1.05 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className={`text-[14px] md:text-[16px] font-[800] mb-2 transition-colors ${hoveredNode === node.id ? 'text-[#0D5EFF]' : 'text-[#0F172A]'}`}>{node.label}</h4>
            <p className="text-[11px] md:text-[12px] text-slate-500 font-[500] leading-snug">{node.desc}</p>
          </motion.div>
        </motion.div>
      ))}

    </div>
  );
};


/* ─── BELIEF TIMELINE ────────────────────────────────────────────────────────── */
const BeliefTimeline = () => {
  const steps = ['Learn', 'Practice', 'Build', 'Experience', 'Grow'];

  return (
    <div className="w-full flex flex-col gap-6 relative py-4 pl-4">
      {/* Continuous Vertical Beam */}
      <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-slate-100 rounded-full" />
      <div className="absolute left-8 top-8 bottom-8 w-[2px] overflow-hidden rounded-full">
        <motion.div 
          className="w-full h-[120px] bg-gradient-to-b from-transparent via-[#0D5EFF] to-transparent"
          animate={{ y: ['-100%', '400%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Animated List Nodes */}
      {steps.map((step, i) => (
        <motion.div 
          key={i}
          className="flex items-center gap-8 relative z-10"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: i * 0.15 }}
        >
          <div className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[12px] font-[800] text-slate-400">
            0{i + 1}
          </div>
          <div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] w-full max-w-[200px]">
            <span className="text-[16px] font-[800] text-[#0F172A]">{step}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};


/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────────── */
export const OurFoundation = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#FAFAFA] font-sans overflow-hidden">
      
      {/* Background DotPattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
           style={{ backgroundImage: 'radial-gradient(#0F172A 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

      {/* Giant Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[100px] md:text-[220px] font-[800] text-[#0F172A] opacity-[0.02] tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none font-['Clash_Display',sans-serif]">
        FOUNDATION
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-[800] tracking-widest uppercase mb-6"
          >
            Our Foundation
          </motion.div>
          <motion.h2 
            className="text-[36px] md:text-[56px] font-[800] text-[#0F172A] leading-[1.1] tracking-tight mb-6 max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            More Than Training —<br />Building Confidence, Careers & Opportunities
          </motion.h2>
          <motion.p 
            className="text-[18px] md:text-[20px] font-[400] text-[#64748B] leading-[1.7] max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            For over a decade, RK IT Training HUB has focused on one simple belief: every learner deserves practical skills, real opportunities and the confidence to succeed in the technology industry.
          </motion.p>
        </div>

        {/* Philosophy Network (Part 1) */}
        <PhilosophyNetwork />

        {/* Split Layout (Part 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-[1100px] mx-auto mt-12 md:mt-0">
          
          {/* Left: Huge Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <span className="absolute -top-12 -left-8 text-[120px] text-[#0D5EFF] font-serif opacity-10 leading-none pointer-events-none">"</span>
            <p className="text-[28px] md:text-[42px] font-[600] text-[#0F172A] leading-[1.3] tracking-tight">
              We don't measure success by the number of courses completed.<br/><br/>
              We measure success by the careers launched, the confidence built and the opportunities created.
            </p>
          </motion.div>

          {/* Right: Vertical Belief Timeline */}
          <div className="flex justify-center lg:justify-end">
            <BeliefTimeline />
          </div>

        </div>

      </div>
    </section>
  );
};
