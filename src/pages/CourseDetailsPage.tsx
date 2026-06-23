import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  CheckCircle2, 
  ChevronDown, 
  Code, 
  Trophy, 
  ArrowRight,
  Monitor
} from 'lucide-react';
import { SEO } from '../components/SEO';

const modules = [
  {
    title: 'Phase 1: Getting Started',
    lessons: ['Orientation & Tools', 'First Principles', 'Industry Standards']
  },
  {
    title: 'Phase 2: Core Fundamentals',
    lessons: ['Deep Dive into Basics', 'Architecture Patterns', 'Optimization']
  },
  {
    title: 'Phase 3: Advanced Systems',
    lessons: ['Scalability', 'Distributed Computing', 'AI Integration']
  }
];

export const CourseDetailsPage: React.FC = () => {
  const { slug } = useParams();
  const [activeModule, setActiveModule] = useState<number | null>(0);
  
  const courseName = slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Course';

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title={`${courseName} Certification Course`}
        description={`Enroll in the ${courseName} course at RK IT HUB. Get hands-on training, real-time projects, and 100% placement support in Hyderabad.`}
        keywords={`${courseName.toLowerCase()}, course, training, certification, software institute`}
      />
      
      {/* Hero Header */}
      <section className="pt-40 pb-12 md:pb-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-10 relative z-10 grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-lg text-[10px] font-bold text-white tracking-widest uppercase mb-8 border border-white/10">
              Tech Elite Path
            </div>
            <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-8">
              {slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </h1>
            <div className="flex flex-wrap items-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <Star className="text-amber-400" size={18} fill="currentColor" />
                <span className="font-bold">4.9/5.0</span>
                <span className="text-slate-400 text-sm">(1.2k Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-slate-400" size={18} />
                <span className="font-bold">6 Months</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-slate-400" size={18} />
                <span className="font-bold">Advanced</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-5">
              <Link to="/signup" className="px-10 py-4 bg-white text-navy-900 font-extrabold rounded-2xl shadow-2xl hover:bg-slate-50 transition-all flex items-center gap-2">
                Enroll Now <ArrowRight size={18} />
              </Link>
              <button className="px-10 py-4 bg-white/10 border border-white/10 text-white font-extrabold rounded-2xl hover:bg-white/20 transition-all flex items-center gap-2">
                <Play className="text-blue-400" size={18} fill="currentColor" />
                Watch Preview
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative"
          >
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl shadow-2xl">
              <div className="aspect-video bg-navy-800 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <Play size={64} className="text-white relative z-10 drop-shadow-2xl" fill="currentColor" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Preview</p>
                  <p className="text-lg font-bold">Course Overview & Vision</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-2xl font-extrabold text-white">12</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry Projects</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-2xl font-extrabold text-white">1:1</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mentor Sessions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-12 md:py-24 max-w-[1280px] mx-auto px-10 grid lg:grid-cols-3 gap-8 md:gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-extrabold text-navy-900 tracking-tight mb-12">Curriculum Timeline</h2>
          <div className="space-y-4">
            {modules.map((module, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-slate-100 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setActiveModule(activeModule === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-navy-900 text-white rounded-xl flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <span className="text-xl font-bold text-navy-900">{module.title}</span>
                  </div>
                  <ChevronDown className={`text-slate-400 transition-transform ${activeModule === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeModule === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-slate-50/50 border-t border-slate-100 space-y-4">
                        {module.lessons.map((lesson, li) => (
                          <div key={li} className="flex items-center gap-4 text-slate-600 font-medium">
                            <Play size={16} className="text-blue-600" />
                            {lesson}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {/* Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-extrabold text-navy-900 mb-8">Course Inquiry</h3>
            <form className="space-y-6">
              <div className="floating-label-group">
                <input type="text" id="inq-name" className="floating-label-input" placeholder=" " />
                <label htmlFor="inq-name" className="floating-label">Full Name</label>
              </div>
              <div className="floating-label-group">
                <input type="email" id="inq-email" className="floating-label-input" placeholder=" " />
                <label htmlFor="inq-email" className="floating-label">Email Address</label>
              </div>
              <Link to="/signup" className="btn-primary w-full shadow-navy-900/10 flex justify-center mt-6">
                Register Interest
              </Link>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-10 bg-slate-50 rounded-[2.5rem]"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-8">Placement Support</h3>
            <div className="space-y-6">
              {[
                { label: 'Avg. Package', val: '6.5 LPA' },
                { label: 'Companies', val: '150+' },
                { label: 'Mock Interviews', val: 'Unlimited' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{item.label}</span>
                  <span className="font-extrabold text-navy-900">{item.val}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-10 border-t border-slate-200">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Partners Include</p>
               <div className="flex gap-4 grayscale opacity-40">
                  <div className="font-black italic text-sm">GOOGLE</div>
                  <div className="font-black italic text-sm">MICROSOFT</div>
                  <div className="font-black italic text-sm">AWS</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-10">
          <h2 className="text-4xl font-extrabold text-navy-900 tracking-tight mb-16">Projects Included</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Cloud-Native Platform', tech: 'AWS, Docker, K8s', diff: 'Hard' },
              { title: 'FinTech Dashboard', tech: 'React, Node.js, SQL', diff: 'Medium' },
              { title: 'AI Recommendation Eng.', tech: 'Python, ML, Redis', diff: 'Expert' }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-xl group hover:border-blue-600"
              >
                <div className="w-12 h-12 bg-navy-900 text-white rounded-xl flex items-center justify-center mb-6">
                  <Code size={24} />
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">{p.title}</h4>
                <p className="text-sm text-slate-500 font-medium mb-6">{p.tech}</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-navy-900 uppercase">
                    {p.diff}
                  </span>
                  <button className="text-sm font-bold text-navy-900 border-b-2 border-transparent hover:border-navy-900 transition-all">
                    Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
