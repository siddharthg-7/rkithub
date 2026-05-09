import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Trophy, TrendingUp, Users, DollarSign, ArrowRight, Star, Linkedin, Quote, CheckCircle2 } from 'lucide-react';

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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
        const gap = 32; // gap-8 is 32px
        
        // If we are at the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

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

      {/* Premium Horizontal Testimonials Section */}
      <section className="py-32 relative overflow-hidden bg-slate-50">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1280px] mx-auto px-10 mb-16 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100/80 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-700 mb-4 shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
              </span>
              Career Transformations
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-extrabold text-navy-900 tracking-tight mb-6"
            >
              Alumni Success Stories
            </motion.h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              See how our alumni transformed their careers through the RK IT Hub ecosystem.
            </p>
          </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="relative w-full overflow-x-auto hide-scrollbar flex gap-8 px-[10%] py-10" 
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {successStories.map((story, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex-shrink-0 w-[350px] md:w-[450px] bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* Top Section */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={story.image} alt={story.name} className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-white" />
                    <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border-2 border-white">
                      <CheckCircle2 size={12} fill="currentColor" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-lg">{story.name}</h4>
                    <p className="text-sm font-medium text-slate-500">{story.role}</p>
                  </div>
                </div>
                <button className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-blue-600 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50 transition-colors shadow-sm">
                  <Linkedin size={18} fill="currentColor" />
                </button>
              </div>
              
              {/* Middle Section */}
              <div className="mb-8 relative min-h-[120px]">
                <Quote className="absolute -top-4 -left-4 text-slate-100 w-16 h-16 -z-10 opacity-50" />
                <p className="text-slate-600 font-medium leading-relaxed italic text-[1.05rem] relative z-10">
                  "{story.text}"
                </p>
              </div>
              
              {/* Bottom Section: Premium Stats Row */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Company</p>
                  <p className="font-extrabold text-navy-900">{story.company}</p>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Package</p>
                  <p className="font-extrabold text-blue-600">{story.salary}</p>
                </div>
                <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 hidden md:block">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                  <p className="font-extrabold text-slate-700">Placed</p>
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
