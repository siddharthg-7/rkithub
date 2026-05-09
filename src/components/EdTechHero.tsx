import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export const EdTechHero = () => {
  // Combined data for a single rich row
  const row = [
    { title: "Live Coding Sessions", img: "/rkithub_coding_session.png" },
    { title: "Students Working on Laptops", img: "/classroom_training.png" },
    { title: "UI/UX Collaboration", img: "/mentor_guidance.png" },
    { title: "Mock Interviews", img: "/placement_students.png" },
    { title: "AI & Data Science Labs", img: "/rkithub_coding_session.png" },
    { title: "Internship Workspaces", img: "/classroom_training.png" },
    { title: "Cloud & DevOps Training", img: "/rkithub_coding_session.png" },
    { title: "Hackathon Environments", img: "/classroom_training.png" },
    { title: "Real-time Discussions", img: "/mentor_guidance.png" },
    { title: "Mentors Guiding Students", img: "/mentor_guidance.png" },
  ];

  const items = [...row, ...row];

  // Card width 260px, Gap 16px
  // 10 items = 10 * 260 + 10 * 16 = 2760px
  const scrollVariants = {
    animate: {
      x: [0, -2760],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative bg-[#020617] text-white overflow-hidden min-h-screen flex flex-col font-sans">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-blue-900/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }} />
      </div>

      {/* HERO SECTION */}
      <div className="flex-grow flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE CONTENT (50% Ratio) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-800/50 px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">RKITHUB Platform</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-6">
                Build Industry Skills.<br />
                Work on Real Projects.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500">
                  Get Hired Faster.
                </span>
              </h1>
              
              {/* Supporting Text */}
              <p className="text-[1.05rem] text-slate-400 font-normal leading-relaxed mb-8 max-w-xl">
                Immersive training programs designed by industry experts. Train on live production environments, get mentored by tech leaders, and secure your dream role at top-tier companies.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#020617] px-7 py-3.5 rounded-xl font-bold text-[15px] hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 active:scale-95 flex items-center gap-2">
                  Explore Programs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-7 py-3.5 rounded-xl font-bold text-[15px] hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 flex items-center gap-2">
                  View Placements
                  <Play className="w-3.5 h-3.5 text-yellow-500" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-slate-500 border-t border-white/10 pt-6 w-full">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-yellow-500" />
                  <span>95% Success Rate</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-yellow-500" />
                  <span>50+ Hiring Partners</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE CONTENT: Vertical Cards in Horizontal Scroll (50% Ratio) */}
            <div className="h-[500px] flex flex-col justify-center overflow-hidden relative mask-fade-h">
              
              <div className="relative w-full overflow-hidden">
                <motion.div 
                  variants={scrollVariants}
                  animate="animate"
                  className="flex gap-4 w-max"
                >
                  {items.map((item, i) => (
                    <div key={i} className="relative group rounded-2xl overflow-hidden glass-card w-[260px] h-[380px] flex-shrink-0">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-sm font-bold text-white tracking-wide">{item.title}</p>
                      </div>
                      
                      {/* Interactive indicator like in the reference image */}
                      <div className="absolute bottom-4 right-4 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-3 h-3 text-white fill-white" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Gradient Overlays to fade horizontal edges */}
              <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent z-10 pointer-events-none" />
            </div>

          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.03);
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.01), 0 10px 40px rgba(0, 0, 0, 0.4);
        }
        
        .mask-fade-h {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
};
