import React from 'react';
import { motion } from 'motion/react';
import { Trophy, TrendingUp, Users, DollarSign, ArrowRight, Star, Linkedin, Quote } from 'lucide-react';

const stats = [
  { label: 'Average Package', value: '6.5 LPA', icon: DollarSign },
  { label: 'Highest Package', value: '18 LPA', icon: TrendingUp },
  { label: 'Hiring Partners', value: '150+', icon: Users },
  { label: 'Placement Rate', value: '98%', icon: Trophy }
];

const successStories = [
  {
    name: 'Siddharth G.',
    role: 'SDE-II',
    company: 'Microsoft',
    salary: '32 LPA',
    image: 'https://picsum.photos/seed/user1/150/150',
    text: "RK IT Hub's mentors provided the exact roadmap I needed to crack FAANG. The projects were industry-grade."
  },
  {
    name: 'Anjali R.',
    role: 'Cloud Architect',
    company: 'AWS',
    salary: '24 LPA',
    image: 'https://picsum.photos/seed/user2/150/150',
    text: "The placement support is unmatched. Multiple mock interviews and career coaching helped me land my dream role."
  },
  {
    name: 'Rohit K.',
    role: 'Frontend Engineer',
    company: 'Stripe',
    salary: '18 LPA',
    image: 'https://picsum.photos/seed/user3/150/150',
    text: "Learning the MERN stack through real-world projects made me confident during interviews. Best decision ever."
  }
];

export const PlacementsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-slate-50 overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-10 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              Career Launchpad
            </div>
            <h1 className="text-7xl font-extrabold text-navy-900 tracking-tight leading-[1.1] mb-10">
              Turning Learners Into <span className="text-blue-600">Professionals</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              Our placement record speaks for itself. We don't just teach code; we build careers at world-class companies.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="btn-primary">View Success Stories</button>
              <button className="btn-secondary">Hiring Partners</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-10">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all text-center"
            >
              <div className="w-14 h-14 bg-navy-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <stat.icon size={24} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <h3 className="text-4xl font-extrabold text-navy-900 tracking-tight">{stat.value}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-16 px-10 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10">Top Companies Hiring Our Alumni</p>
          <div className="flex flex-wrap items-center justify-center gap-16 opacity-30 grayscale filter pointer-events-none">
            {['GOOGLE', 'MICROSOFT', 'AWS', 'STRIPE', 'VERCEL', 'META', 'ADOBE'].map(company => (
              <div key={company} className="text-3xl font-black italic tracking-tighter">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Style Cards */}
      <section className="py-32 max-w-[1280px] mx-auto px-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-navy-900 tracking-tight mb-6">Alumni Success Stories</h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">See how our alumni transformed their careers through the RK IT Hub ecosystem.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {successStories.map((story, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm flex flex-col hover:shadow-2xl transition-all"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <img src={story.image} alt={story.name} className="w-14 h-14 rounded-2xl object-cover shadow-md" />
                  <div>
                    <h4 className="font-bold text-navy-900">{story.name}</h4>
                    <p className="text-xs font-medium text-slate-500">{story.role}</p>
                  </div>
                </div>
                <Linkedin size={24} className="text-blue-600" fill="currentColor" />
              </div>
              
              <div className="mb-10 relative">
                <Quote className="absolute -top-4 -left-4 text-slate-100 w-12 h-12 -z-10" />
                <p className="text-slate-600 font-medium leading-relaxed italic">
                  "{story.text}"
                </p>
              </div>
              
              <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Company</p>
                  <p className="font-extrabold text-navy-900 text-lg">{story.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Package</p>
                  <p className="font-extrabold text-blue-600 text-lg">{story.salary}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Placement Timeline */}
      <section className="py-32 bg-navy-900 text-white">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-extrabold tracking-tight mb-10">Your Journey from Learning to Earning</h2>
              <div className="space-y-12">
                {[
                  { step: '01', title: 'Intensive Training', desc: 'Master foundational and advanced concepts through project-based learning.' },
                  { step: '02', title: 'Portfolio Building', desc: 'Craft high-quality GitHub repositories and a professional online presence.' },
                  { step: '03', title: 'Mock Drill', desc: 'Regular aptitude tests and technical interviews with industry veterans.' },
                  { step: '04', title: 'Career Launch', desc: 'Final interviews and negotiation support for multiple offer letters.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-3xl font-black text-white/20 group-hover:text-blue-400 transition-colors">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-extrabold mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 backdrop-blur-xl">
                 <div className="mb-10 text-center">
                    <h3 className="text-2xl font-extrabold mb-4">Placement Statistics 2024</h3>
                    <p className="text-slate-400 font-medium">Verified by third-party audit.</p>
                 </div>
                 <div className="space-y-8">
                    {[
                      { l: 'MNC Placements', p: '72%' },
                      { l: 'Product Startups', p: '24%' },
                      { l: 'International Roles', p: '4%' }
                    ].map((stat, i) => (
                      <div key={i} className="space-y-2">
                         <div className="flex justify-between items-center px-1">
                            <span className="text-sm font-bold opacity-60 uppercase tracking-widest">{stat.l}</span>
                            <span className="font-black text-blue-400">{stat.p}</span>
                         </div>
                         <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: stat.p }}
                              transition={{ duration: 1, delay: i * 0.2 }}
                              className="h-full bg-blue-600 rounded-full" 
                            />
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="mt-12 p-6 bg-white/10 rounded-2xl flex items-center justify-center gap-4 border border-white/10">
                    <Star className="text-amber-400" fill="currentColor" />
                    <span className="font-extrabold text-sm uppercase tracking-widest font-sans">98% Overall Placement Satisfaction</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
