import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Rocket, TrendingUp, Shield, Lightbulb, CheckCircle2 } from 'lucide-react';

import { useState } from 'react';

/* ─── ANIMATED BEAM SVG ─────────────────────────────────────────────────────── */
const BeamConnection: React.FC<{
  startX: string, startY: string, endX: string, endY: string, isHovered: boolean, delay: number
}> = ({
  startX, startY, endX, endY, isHovered, delay
}) => {
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <line
          x1={startX} y1={startY} x2={endX} y2={endY}
          stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4"
        />
        <motion.line
          x1={startX} y1={startY} x2={endX} y2={endY}
          stroke="url(#beam-gradient)" strokeWidth="2" strokeLinecap="round"
          initial={{ strokeDasharray: "0 100", opacity: 0 }}
          animate={{
            strokeDasharray: ["0 100", "100 100"],
            strokeDashoffset: [100, -100],
            opacity: isHovered ? [0, 1, 0] : [0, 0.5, 0]
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
    { id: 1, label: 'Excellence', desc: 'Deliver quality learning experiences.', x: '50%', y: '10%' },
    { id: 2, label: 'Innovation', desc: 'Adapt to emerging technologies.', x: '10%', y: '40%' },
    { id: 3, label: 'Impact', desc: 'Focus on career transformation.', x: '90%', y: '40%' },
    { id: 4, label: 'Growth', desc: 'Help learners improve and evolve.', x: '25%', y: '85%' },
    { id: 5, label: 'Trust', desc: 'Build long-term relationships.', x: '75%', y: '85%' },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto transform scale-[0.65] sm:scale-[0.8] md:scale-100 origin-center lg:origin-left -mt-16 md:mt-12 -mb-20 md:mb-12">

      {/* Central Orb Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-400 rounded-full blur-[100px] opacity-10 pointer-events-none" />

      {/* SVG Beams Container */}
      {nodes.map((node, i) => (
        <BeamConnection
          key={node.id}
          startX="50%" startY="50%"
          endX={node.x} endY={node.y}
          isHovered={hoveredNode === node.id}
          delay={i * 0.5}
        />
      ))}

      {/* Center Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
        animate={{ y: ['-50%', 'calc(-50% - 10px)', '-50%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full bg-white/60 backdrop-blur-xl border border-white shadow-[0_0_30px_rgba(13,94,255,0.15)] flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(13,94,255,0.3)_360deg)] animate-[spin_4s_linear_infinite]" />
          <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center text-center p-4">
            <div>
              <div className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mb-1">Core</div>
              <h3 className="text-[16px] md:text-[18px] font-extrabold text-slate-900 leading-tight">Empower<br />Learners</h3>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Surrounding Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute z-10 w-[120px] md:w-[140px] transform -translate-x-1/2 -translate-y-1/2 cursor-default"
          style={{ left: node.x, top: node.y }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <motion.div
            className="bg-white p-3 rounded-xl border border-slate-200 shadow-lg text-center group transition-colors"
            animate={{ scale: hoveredNode === node.id ? 1.05 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className={`text-[12px] md:text-[14px] font-extrabold mb-1 transition-colors ${hoveredNode === node.id ? 'text-blue-600' : 'text-slate-800'}`}>{node.label}</h4>
            <p className="text-[10px] md:text-[11px] text-slate-500 font-medium leading-snug">{node.desc}</p>
          </motion.div>
        </motion.div>
      ))}

    </div>
  );
};

const Timeline = () => {
  const steps = ["Learn", "Practice", "Build", "Experience", "Grow"];

  return (
    <div className="mt-12 md:mt-16 w-full">
      <h3 className="text-xl font-bold text-slate-900 mb-8 sm:mb-14 text-center lg:text-left tracking-tight">The Journey</h3>
      
      <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center w-full max-w-2xl mx-auto lg:mx-0 gap-8 sm:gap-0 pl-4 sm:pl-0">
        
        {/* Mobile Vertical Line */}
        <div className="absolute left-[35px] top-4 bottom-4 w-1 bg-slate-200 rounded-full sm:hidden" />
        <motion.div 
          className="absolute left-[35px] top-4 bottom-4 w-1 bg-gradient-to-b from-blue-600 to-indigo-500 rounded-full origin-top sm:hidden"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Desktop Horizontal Line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full hidden sm:block" />
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full origin-left hidden sm:block w-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex flex-row sm:flex-col items-center gap-6 sm:gap-0 group cursor-default">
            
            <div className="relative">
              {/* Outer pulsing ring */}
              <div className="absolute -inset-3 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" />
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.15), type: "spring", stiffness: 200, damping: 15 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-[3px] border-slate-200 flex items-center justify-center relative transition-all duration-300 group-hover:border-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] z-10"
              >
                <div className="absolute inset-1 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-[13px] md:text-[15px] font-extrabold text-slate-400 group-hover:text-blue-600 transition-colors">
                  0{i + 1}
                </span>
              </motion.div>
            </div>
            
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (i * 0.15) }}
              className="sm:absolute sm:top-16 text-[16px] sm:text-[13px] md:text-[15px] font-extrabold text-slate-500 group-hover:text-slate-900 transition-colors sm:whitespace-nowrap"
            >
              {step}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const OurFoundation = () => {
  return (
    <section className="relative py-12 md:py-24 bg-[#FAFAFA] font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-[12px] font-bold tracking-widest uppercase mb-6 w-max"
            >
              Our Foundation
            </motion.div>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              More Than Training —<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Building Confidence, Careers & Opportunities
              </span>
            </motion.h2>
            
            <motion.p
              className="text-base sm:text-lg font-medium text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              For over a decade, RK IT Training HUB has focused on one simple belief: every learner deserves practical skills, real opportunities and the confidence to succeed in the technology industry.
            </motion.p>

            <PhilosophyNetwork />
            <Timeline />
          </div>

          {/* RIGHT COLUMN: Sticky Quote */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="lg:sticky lg:top-32">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[28px] md:rounded-[32px] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden"
              >
                {/* Decorative background elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />
                
                <span className="absolute -top-6 -left-2 text-[120px] md:-top-8 md:-left-2 md:text-[160px] text-white/10 font-serif leading-none pointer-events-none select-none">"</span>
                
                <div className="relative z-10 flex flex-col h-full justify-center">
                  <p className="text-[20px] sm:text-[24px] md:text-[32px] font-bold leading-snug tracking-tight">
                    We don't measure success by the number of courses completed.<br/><br/>
                    We measure success by the <span className="text-blue-200">careers launched</span>, the confidence built and the opportunities created.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
