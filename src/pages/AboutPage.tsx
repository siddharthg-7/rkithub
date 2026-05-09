import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Rocket, Target, TrendingUp, Briefcase, Code, Cpu, Globe } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Mission Section */}
      <section className="pt-48 pb-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-8">
              We're Bridging the Gap Between <span className="text-blue-600">Learning</span> and <span className="text-blue-600">Industry</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              RK IT Hub is a premium tech education ecosystem designed to transform ambitious learners into world-class engineers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 max-w-[1280px] mx-auto px-10">
        <div className="grid md:grid-cols-3 gap-16">
          {[
            { icon: Rocket, title: 'Our Mission', desc: 'To provide high-impact, industry-aligned technical training that guarantees professional growth.' },
            { icon: Target, title: 'Our Vision', desc: 'To become the global standard for modern engineering education and career transformation.' },
            { icon: Users, title: 'Our Community', desc: 'A thriving ecosystem of 12k+ alumni, mentors, and hiring partners worldwide.' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-navy-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Trainers */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-navy-900 tracking-tight mb-6">Expert Mentors</h2>
            <p className="text-lg text-slate-500 font-medium">Learn from senior engineers who have built systems at world-class companies.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Arjun Reddy', role: 'Head of Full Stack', company: 'ex-Google' },
              { name: 'Suresh Kumar', role: 'Python Architect', company: 'ex-Microsoft' },
              { name: 'Priya Sharma', role: 'DSA Specialist', company: 'ex-Amazon' },
              { name: 'Dr. Vivek Rao', role: 'AI Research Lead', company: 'ex-NVIDIA' }
            ].map((mentor, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center group">
                <div className="w-20 h-20 bg-slate-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-all">
                  {mentor.name.charAt(0)}
                </div>
                <h4 className="font-bold text-navy-900 text-lg mb-1">{mentor.name}</h4>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">{mentor.role}</p>
                <div className="px-3 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest inline-block">
                  {mentor.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology / Philosophy Section */}
      <section className="py-32 px-10 relative overflow-hidden bg-white">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6 shadow-sm border border-blue-100">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Why Students Trust RK IT Hub
            </div>
            
            <h2 className="text-5xl font-extrabold text-navy-900 mb-10 tracking-tight leading-tight">
              Our Philosophy
            </h2>
            
            <div className="relative space-y-12">
              {/* Vertical Timeline Line */}
              <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-100 via-blue-50 to-transparent"></div>
              
              {[
                { title: 'Project-First Learning', desc: 'We believe in learning by doing. Our curriculum is built around real-world projects.' },
                { title: 'Industry-Vetted Standards', desc: 'Every module is reviewed by senior professionals to ensure industry relevance.' },
                { title: 'Holistic Career Support', desc: 'From technical training to soft skills and interview prep, we cover everything.' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-8 relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Icon with glowing background on hover */}
                  <div className="w-8 h-8 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1 z-10 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Immersive Visual Panel */}
          <div className="relative h-[600px] lg:h-[650px] w-full">
            {/* Background Glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/5 blur-3xl opacity-50 rounded-[3rem]"></div>
            
            {/* Main Container (Simulating the Dashboard Scene) */}
            <div className="absolute inset-0 bg-navy-900 rounded-[3rem] p-12 flex flex-col justify-between text-white shadow-2xl overflow-hidden border border-navy-800">
              
              {/* Animated Grid Texture */}
              <div className="absolute inset-0 opacity-10" style={{ 
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
              
              {/* Moving Radial Gradients (Cinematic Effect) */}
              <motion.div 
                className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px]"
                animate={{
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              {/* Top Section of Dashboard (Mock UI) */}
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>live_placement_tracker.sh</span>
                </div>
              </div>

              {/* Center: Animated Graph / Visualization */}
              <div className="relative z-10 flex-1 flex items-center justify-center">
                {/* Simulated Graph Line (SVG) */}
                <svg className="w-full h-[150px] opacity-30" viewBox="0 0 400 200">
                  <motion.path
                    d="M 0 150 Q 50 120 100 160 T 200 80 T 300 120 T 400 30"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="50%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Bottom: Main Stat Card */}
              <div className="relative z-10">
                <p className="text-7xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">98%</p>
                <p className="text-sm font-bold opacity-60 uppercase tracking-widest flex items-center">
                  <TrendingUp size={16} className="mr-2 text-blue-400" />
                  Placement Success Rate
                </p>
              </div>

              {/* Floating Glassmorphism Cards (Positioned Safely) */}
              
              {/* Card 1: 150+ Hiring Partners */}
              <motion.div 
                className="absolute top-16 right-4 bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 shadow-xl flex items-center space-x-3 w-[220px]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold">150+</p>
                  <p className="text-xs text-slate-400">Hiring Partners</p>
                </div>
              </motion.div>

              {/* Card 2: Real Industry Projects */}
              <motion.div 
                className="absolute bottom-16 right-4 bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 shadow-xl flex items-center space-x-3 w-[240px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400">
                  <Code size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold">Real-World</p>
                  <p className="text-xs text-slate-400">Industry Projects</p>
                </div>
              </motion.div>

              {/* Card 3: AI + Full Stack */}
              <motion.div 
                className="absolute top-16 left-4 bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 shadow-xl flex items-center space-x-3 w-[220px]"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400">
                  <Cpu size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold">AI + Full Stack</p>
                  <p className="text-xs text-slate-400">Modern Curriculum</p>
                </div>
              </motion.div>

              {/* Card 4: Internship Support */}
              <motion.div 
                className="absolute bottom-[160px] left-4 bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 shadow-xl flex items-center space-x-3 w-[200px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center text-green-400">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold">Global</p>
                  <p className="text-xs text-slate-400">Internship Support</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
