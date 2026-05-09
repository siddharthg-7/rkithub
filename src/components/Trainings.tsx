import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Terminal, 
  Cpu, 
  ClipboardCheck, 
  Cloud, 
  PenTool,
  Megaphone,
  BarChart2,
  Coins,
  Users,
  MessageCircle,
  Brain,
  ArrowRight
} from 'lucide-react';

export const Trainings = () => {
  const techPrograms = [
    { icon: Globe, title: 'Full Stack Development', desc: 'Master frontend and backend with React, Node.js, and databases.' },
    { icon: Terminal, title: 'Python Programming', desc: 'Learn Python from basics to advanced frameworks like Django.' },
    { icon: Cpu, title: 'AI & Data Science', desc: 'Dive into machine learning, data analysis, and neural networks.' },
    { icon: ClipboardCheck, title: 'Software Testing', desc: 'Manual and automated testing with Selenium and modern tools.' },
    { icon: Cloud, title: 'Cloud & DevOps', desc: 'AWS, Docker, Kubernetes, and CI/CD pipelines.' },
    { icon: PenTool, title: 'UI/UX Design', desc: 'Create stunning user interfaces and experiences with Figma.' }
  ];

  const nonTechPrograms = [
    { icon: Megaphone, title: 'Digital Marketing', desc: 'SEO, SEM, social media marketing, and content strategy.' },
    { icon: BarChart2, title: 'Business Analytics', desc: 'Data visualization, Excel, Power BI, and business insights.' },
    { icon: Coins, title: 'Finance & Accounting', desc: 'Tally, GST, corporate finance, and financial modeling.' },
    { icon: Users, title: 'HR Management', desc: 'Recruitment, payroll, employee relations, and HR policies.' },
    { icon: MessageCircle, title: 'Communication Skills', desc: 'Soft skills, presentation, and professional communication.' },
    { icon: Brain, title: 'Aptitude Training', desc: 'Quantitative, logical reasoning, and problem-solving.' }
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

        {/* TECH PROGRAMS */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#06152D] mb-8 border-l-4 border-yellow-500 pl-3">Tech Programs</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {techPrograms.map((prog, i) => (
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

        {/* NON-TECH PROGRAMS */}
        <div>
          <h3 className="text-2xl font-bold text-[#06152D] mb-8 border-l-4 border-yellow-500 pl-3">Non-Tech Programs</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {nonTechPrograms.map((prog, i) => (
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
      </div>
    </section>
  );
};
