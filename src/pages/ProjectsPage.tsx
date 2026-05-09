import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Code, Layers, User, Star, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'CloudScale CRM',
    student: 'Aravind K.',
    tech: ['React', 'AWS', 'Node.js', 'Redshift'],
    image: 'https://picsum.photos/seed/project1/800/600',
    description: 'A high-concurrency CRM platform designed for enterprise scalability using microservices architecture.',
    stars: 124,
    difficulty: 'Expert'
  },
  {
    title: 'DeFi Wallet Connect',
    student: 'Priya S.',
    tech: ['TypeScript', 'Ethers.js', 'Solidity'],
    image: 'https://picsum.photos/seed/project2/800/600',
    description: 'Secure open-source wallet adapter supporting multiple chains and advanced gas optimization.',
    stars: 89,
    difficulty: 'Advanced'
  },
  {
    title: 'AI Content Guard',
    student: 'Samuel T.',
    tech: ['Python', 'PyTorch', 'FastAPI'],
    image: 'https://picsum.photos/seed/project3/800/600',
    description: 'Real-time content moderation system using customized BERT models for toxic speech detection.',
    stars: 215,
    difficulty: 'Expert'
  },
  {
    title: 'PixelArt Engine',
    student: 'Meera R.',
    tech: ['Canvas API', 'Rust', 'Wasm'],
    image: 'https://picsum.photos/seed/project4/800/600',
    description: 'High-performance pixel art creation engine compiled to WebAssembly for zero-latency editing.',
    stars: 56,
    difficulty: 'Intermediate'
  }
];

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-6">
              Production Showcase
            </div>
            <h1 className="text-6xl font-extrabold text-navy-900 tracking-tight mb-8">
              Student <span className="text-blue-600">Innovation</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Explore the advanced software and systems built by our elite cohorts. These aren't just tutorials; they're production-ready projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 max-w-[1280px] mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 bg-white group-hover:shadow-2xl transition-all duration-500">
                <div className="h-72 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                     <button className="p-4 bg-white rounded-full text-navy-900 shadow-xl hover:scale-110 transition-transform">
                        <Github size={24} />
                     </button>
                     <button className="p-4 bg-white rounded-full text-navy-900 shadow-xl hover:scale-110 transition-transform">
                        <ExternalLink size={24} />
                     </button>
                  </div>
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-navy-900 shadow-sm uppercase tracking-widest">
                      {project.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                           <span key={t} className="px-2 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg">
                              {t}
                           </span>
                        ))}
                     </div>
                     <div className="flex items-center gap-1 text-amber-500">
                        <Star size={16} fill="currentColor" />
                        <span className="text-sm font-bold">{project.stars}</span>
                     </div>
                  </div>
                  
                  <h3 className="text-3xl font-extrabold text-navy-900 mb-4 tracking-tight leading-tight">{project.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                     {project.description}
                  </p>
                  
                  <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center font-bold text-white shadow-lg overflow-hidden border border-white/10">
                           {project.student.charAt(0)}
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Architect</p>
                           <p className="text-sm font-bold text-navy-900">{project.student}</p>
                        </div>
                     </div>
                     <button className="text-navy-900 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all group-hover:text-blue-600">
                        Case Study <ArrowRight size={18} />
                     </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
            <button className="px-10 py-5 border-2 border-navy-900 text-navy-900 font-extrabold rounded-2xl hover:bg-navy-900 hover:text-white transition-all transform active:scale-95">
               Load More Innovation
            </button>
        </div>
      </section>

    </div>
  );
};
