import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { BookOpen, Code, Terminal, CheckCircle2, ArrowRight, PlayCircle, Shield, Globe, Zap, Layers, Cpu } from 'lucide-react';

export const LandingPage = () => {
  return (
    <div className="relative">
      
      {/* Floating Aurora Background Behind Everything */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] bg-indigo-400/15 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] left-[20%] w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[120px]" />
      </div>



      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[45%_55%] gap-16 lg:gap-12 items-center">
            
            {/* LEFT SIDE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50/50 backdrop-blur-sm border border-blue-100/80 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-700 mb-6 shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                Industry-Focused Learning Platform
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
                Build Your IT <br className="hidden lg:block"/>
                Career with <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Industry-Focused</span> <br className="hidden lg:block"/>
                Training
              </h1>
              
              {/* Description */}
              <p className="text-[1.05rem] text-slate-500 font-medium leading-relaxed mb-8 max-w-[420px]">
                Master Full Stack, Python, Java, AI, and Placement Skills through real projects, mentorship, and structured learning.
              </p>
              
              {/* CTA Buttons - Premium clean style */}
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/signup" className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-slate-800 shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset,0_4px_10px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset,0_8px_15px_-4px_rgba(0,0,0,0.3)] text-[15px]">
                  Start Learning
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#demo" className="inline-flex items-center gap-2 bg-white text-slate-700 border border-slate-200 shadow-sm px-6 py-3 rounded-full font-medium hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-colors text-[15px]">
                  <PlayCircle className="w-4 h-4 text-slate-400" />
                  Book Demo
                </a>
              </div>
              
              {/* Stats Badges */}
              <div className="mt-12 flex items-center gap-8">
                 {[
                   { val: '98%', label: 'Placement Rate' },
                   { val: '150+', label: 'Hiring Partners' },
                   { val: '6.5 LPA', label: 'Avg Package' }
                 ].map((stat, i) => (
                   <div key={i}>
                     <div className="text-2xl font-bold text-slate-900 tracking-tight">{stat.val}</div>
                     <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE - Authentic Dashboard Mockup + Lottie */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full flex justify-center lg:justify-end perspective-[1000px] mt-10 lg:mt-0"
            >
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none z-[-2]" />

              {/* Clean Browser Mockup (21st.dev style) */}
              <div className="relative z-10 w-full max-w-[560px] rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                </div>
                
                {/* Window Body with Lottie & Skeleton */}
                <div className="bg-white relative overflow-hidden flex flex-col p-6 sm:p-8 aspect-[4/3] sm:aspect-auto sm:h-[380px]">
                  
                  <div className="flex justify-between items-start w-full mb-8">
                    {/* Skeletons on left */}
                    <div className="flex flex-col gap-4 pt-4 w-1/3">
                      <div className="w-full h-6 rounded bg-slate-100" />
                      <div className="w-3/4 h-6 rounded bg-slate-100" />
                      <div className="w-full h-6 rounded bg-slate-100" />
                    </div>
                    
                    {/* Lottie Animation on right */}
                    <div className="w-2/3 flex justify-end -mt-4 relative z-10">
                      <div className="w-[300px] h-[300px] translate-x-4">
                        <DotLottieReact
                          src="https://lottie.host/3906af3a-4955-44e2-9bea-526ba9bbd196/uAeijquVKt.lottie"
                          loop={true}
                          autoplay={true}
                          segment={[0, 169]}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Skeleton boxes */}
                  <div className="flex gap-4 mt-auto relative z-20">
                    <div className="flex-1 h-24 rounded-xl bg-slate-50 border border-slate-100" />
                    <div className="flex-1 h-24 rounded-xl bg-slate-50 border border-slate-100" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Moving Logos */}
      <section className="py-10 bg-white border-y border-slate-100/60 overflow-hidden flex flex-col items-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by Top Tech Companies</p>
        <div className="relative w-full max-w-7xl overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap items-center gap-24 px-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            {['LINEAR', 'VERCEL', 'RAYCAST', 'FRAMER', 'GITHUB', 'STRIPE', 'NOTION', 'LINEAR', 'VERCEL', 'RAYCAST', 'FRAMER', 'GITHUB', 'STRIPE', 'NOTION'].map((logo, i) => (
              <span key={i} className="text-2xl font-black tracking-tighter text-slate-900">{logo}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Spotlight Cards / Bento Grid (21st.dev style) */}
      <section id="features" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
            >
              Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Excellence</span>
            </motion.h2>
            <p className="text-lg text-slate-500 font-medium">Enterprise-grade education with modern tools and 21st-century methodologies.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Bento 1: Large Spotlight Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="md:col-span-2 rounded-[2rem] bg-white border border-slate-200/60 p-8 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-500">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Modern Tech Stack</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">Master React 18, Next.js, Tailwind CSS, and Framer Motion. Build what top companies are building today.</p>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Terminal className="absolute right-8 bottom-8 w-40 h-40 text-slate-100/50 -rotate-12 group-hover:scale-110 group-hover:text-blue-100 transition-all duration-700" />
            </motion.div>

            {/* Bento 2: Small Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-[2rem] bg-white border border-slate-200/60 p-8 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Global Reach</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">Join a vibrant community of worldwide learners and mentors.</p>
              </div>
            </motion.div>

            {/* Bento 3: Small Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="rounded-[2rem] bg-white border border-slate-200/60 p-8 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Enterprise Security</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">Learn authentication, authorization, and secure coding practices.</p>
              </div>
            </motion.div>

            {/* Bento 4: Large Dark Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="md:col-span-2 rounded-[2rem] bg-slate-900 text-white border border-slate-800 p-8 relative overflow-hidden group shadow-[0_20px_40px_rgb(0,0,0,0.2)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 shadow-sm flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500 backdrop-blur-md">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Interactive Curriculum</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-md">Ditch the boring lectures. Learn by doing with our immersive, gamified learning experience designed by FAANG engineers.</p>
                </div>
              </div>
              <Cpu className="absolute right-8 bottom-8 w-48 h-48 text-slate-800 rotate-12 group-hover:scale-110 group-hover:text-slate-700 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
