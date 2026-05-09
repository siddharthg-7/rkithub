import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Briefcase, 
  Star, 
  TrendingUp, 
  Award,
  BookMarked
} from 'lucide-react';

export const EdTechHero = () => {
  return (
    <div className="relative bg-[#06152D] text-white overflow-hidden min-h-screen flex flex-col font-sans">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px]" />
        
        {/* Dotted Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }} />
        
        {/* Glowing Circles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full blur-sm animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-indigo-400 rounded-full blur-sm animate-pulse delay-1000" />
      </div>

      {/* HERO SECTION */}
      <div className="flex-grow flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE CONTENT */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-bold leading-[1.1] tracking-tight mb-6 text-white">
                Build Skills.<br />
                Get Trained.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Get Placed.</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-[1.05rem] text-white/70 font-medium leading-relaxed mb-8 max-w-xl">
                Real-time projects, expert mentors, internship opportunities, and placement-focused programs designed for future tech professionals.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
                <button className="group bg-yellow-500 text-[#06152D] px-6 py-3.5 rounded-full font-bold text-[15px] hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 active:scale-95 flex items-center gap-2">
                  Explore Trainings
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-transparent text-white border border-white/30 px-6 py-3.5 rounded-full font-bold text-[15px] hover:bg-white/5 hover:border-white transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95">
                  Placement Records
                </button>
              </div>
              
              {/* Trust Indicators Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {[
                  { icon: Users, val: '1000+', label: 'Students Trained' },
                  { icon: Briefcase, val: '50+', label: 'Hiring Partners' },
                  { icon: Star, val: '95%', label: 'Satisfaction Rate' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl flex flex-col gap-2 group transition-all"
                  >
                    <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                      <stat.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{stat.val}</div>
                      <div className="text-[11px] font-medium text-white/50 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE CONTENT */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
            >
              <div className="relative w-full max-w-[500px]">
                {/* Circular Gradient Backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-blue-600/30 to-indigo-600/10 rounded-full blur-2xl z-0" />
                
                {/* Student Image */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="/placement_students.png" 
                    alt="Placement Ready Students" 
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay gradient to blend with background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06152D] via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Cards */}
                {/* Card 1 */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 bg-white text-[#06152D] p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">500+</div>
                    <div className="text-xs font-medium text-slate-500">Placements</div>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-12 -right-6 bg-white text-[#06152D] p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Live Projects</div>
                    <div className="text-xs font-medium text-slate-500">Industry Standard</div>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 left-10 bg-white text-[#06152D] p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100"
                >
                  <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Industry Mentors</div>
                    <div className="text-xs font-medium text-slate-500">Expert Guidance</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
