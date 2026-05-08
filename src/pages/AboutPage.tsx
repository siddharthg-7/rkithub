import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Rocket, Target } from 'lucide-react';

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

      {/* Methodology */}
      <section className="py-32 px-10">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-navy-900 mb-10 tracking-tight">Our Philosophy</h2>
            <div className="space-y-8">
              {[
                { title: 'Project-First Learning', desc: 'We believe in learning by doing. Our curriculum is built around real-world projects.' },
                { title: 'Industry-Vetted Standards', desc: 'Every module is reviewed by senior professionals to ensure industry relevance.' },
                { title: 'Holistic Career Support', desc: 'From technical training to soft skills and interview prep, we cover everything.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-navy-900 rounded-[3rem] p-12 flex flex-col justify-end text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
               <div className="relative z-10">
                  <p className="text-6xl font-black mb-4">98%</p>
                  <p className="text-xl font-bold opacity-60 uppercase tracking-widest">Placement Success Rate</p>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
