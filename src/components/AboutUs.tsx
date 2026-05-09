import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, History, Users, CheckCircle2 } from 'lucide-react';

export const AboutUs = () => {
  const blocks = [
    { icon: Target, title: 'Our Vision', desc: 'To be the leading training platform that empowers every student with industry-ready skills.' },
    { icon: Compass, title: 'Our Mission', desc: 'To bridge the gap between academic education and industry requirements through practical training.' }
  ];

  const points = [
    'Expert Mentors from Top Companies',
    'Real-time Project Based Learning',
    'Dedicated Placement Support',
    'Lifetime Community Access'
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#06152D] mb-4 tracking-tight"
          >
            About Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium"
          >
            Empowering students with industry-ready skills and placement-focused learning.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#06152D] mb-6">Building the Future of Tech Education</h3>
            <p className="text-slate-600 font-medium text-[15px] leading-relaxed mb-8">
              Founded by industry veterans, V-HUB is dedicated to transforming how students prepare for tech careers. We don't just teach theory; we build practical skills through real-world projects and mentorship.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {blocks.map((block, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-[#06152D]">
                    <block.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#06152D]">{block.title}</h4>
                  <p className="text-sm text-slate-500 font-medium">{block.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="font-semibold text-[#06152D] text-[15px]">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - Image & Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src="/classroom_training.png" 
                alt="Classroom Training" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06152D] via-transparent to-transparent opacity-40" />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-10 bg-white text-[#06152D] p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-bold">50+</div>
                <div className="text-xs font-medium text-slate-500">Expert Mentors</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 -right-5 bg-[#06152D] text-white p-4 rounded-xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-yellow-500">
                <History className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-bold">5+ Years</div>
                <div className="text-xs font-medium text-white/50">Of Excellence</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
