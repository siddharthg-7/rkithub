import React from 'react';
import { motion } from 'framer-motion';
import { 
  FlaskConical, 
  Code, 
  MessageSquare, 
  Compass, 
  Split,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const WhyStruggle = () => {
  const problems = [
    { icon: FlaskConical, title: 'No practical exposure', desc: 'Academics focus on theory, leaving students unprepared for real-world tasks.' },
    { icon: Code, title: 'No real-time projects', desc: 'Lack of experience on actual production systems and team workflows.' },
    { icon: MessageSquare, title: 'Poor interview confidence', desc: 'Struggle to communicate technical skills and clear coding rounds.' },
    { icon: Compass, title: 'Lack of placement guidance', desc: 'No clear roadmap or support to connect with hiring companies.' },
    { icon: Split, title: 'Confused career direction', desc: 'Overwhelmed by choices and unsure which tech stack to master.' }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - Problems */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#06152D] mb-10 tracking-tight"
            >
              Why Most Students Struggle After College?
            </motion.h2>

            <div className="space-y-4">
              {problems.map((prob, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                  className="bg-white border border-slate-100 p-4 rounded-xl flex items-start gap-4 transition-all group hover:border-yellow-500/30"
                >
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-[#06152D] group-hover:bg-yellow-500 group-hover:text-[#06152D] transition-colors">
                    <prob.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#06152D] mb-1">{prob.title}</h3>
                    <p className="text-sm text-slate-500 font-medium">{prob.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Solution */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Arrow Connection (Decorative) */}
            <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 text-yellow-500 opacity-30">
              <ArrowRight className="w-8 h-8" />
            </div>

            <div className="bg-[#06152D] text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl">
              {/* Background Glow */}
              <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1.5 rounded-full text-xs font-semibold text-yellow-400 mb-6">
                  Our Solution
                </div>

                <h3 className="text-2xl font-bold mb-4">We bridge the gap between academics and industry</h3>
                <p className="text-white/70 font-medium text-[15px] leading-relaxed mb-8">
                  We provide practical training, real projects, mentorship, and placement-focused learning to make you job-ready.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Hands-on Training',
                    'Live Projects',
                    'Mock Interviews',
                    'Resume Building',
                    'Placement Mentoring'
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="font-semibold text-white/90 text-[15px]">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Mentor Image/Illustration */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img 
                    src="/mentor_guidance.png" 
                    alt="Mentor Guidance" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06152D] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm font-bold">Expert Mentorship</div>
                    <div className="text-xs text-white/70">Learn from industry veterans</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
