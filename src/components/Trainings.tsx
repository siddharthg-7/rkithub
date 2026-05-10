import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Terminal, 
  Cpu, 
  ClipboardCheck, 
  Megaphone,
  ArrowRight
} from 'lucide-react';

export const Trainings = () => {
  const programs = [
    { icon: Terminal, title: 'Java Development', desc: 'Master Java from basics to advanced frameworks.' },
    { icon: Globe, title: 'Full Stack Development', desc: 'Frontend and backend development with modern stacks.' },
    { icon: Cpu, title: 'Python Programming', desc: 'Learn Python for web, data, and automation.' },
    { icon: ClipboardCheck, title: 'Testing Tools', desc: 'Comprehensive testing methodologies and tools.' },
    { icon: Terminal, title: 'Selenium', desc: 'Automated testing with Selenium WebDriver.' },
    { icon: Megaphone, title: 'Digital Marketing', desc: 'SEO, social media, and digital strategy.' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
        backgroundSize: '20px 20px' 
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#06152D] mb-4 tracking-tight"
          >
            Industry-Focused Training Programs
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium"
          >
            Learn from experts and work on real-world projects designed for career growth.
          </motion.p>
        </div>

        {/* PROGRAMS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((prog, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
              className="bg-white p-6 rounded-2xl border border-slate-100 transition-all hover:border-yellow-500/30 group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#06152D] group-hover:bg-yellow-500 transition-colors mb-4">
                <prog.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#06152D] mb-2">{prog.title}</h4>
              <p className="text-sm text-slate-500 font-medium mb-4">{prog.desc}</p>
              <button className="text-sm font-bold text-[#06152D] flex items-center gap-1 hover:text-yellow-600 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};;
