import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Database, Smartphone, Cloud, FileCheck, PenTool, ArrowRight } from 'lucide-react';

export const CareerTracks = () => {
  const tracks = [
    {
      icon: <Laptop className="w-8 h-8 text-[#0A4DA2]" strokeWidth={1.5} />,
      title: 'Java Full Stack',
      description: 'Master Java, Spring Boot, Hibernate, and Angular/React.',
      tags: ['Java', 'Spring Boot', 'React']
    },
    {
      icon: <Laptop className="w-8 h-8 text-[#0A4DA2]" strokeWidth={1.5} />,
      title: 'Python Full Stack',
      description: 'Learn Python, Django, Flask, and frontend technologies.',
      tags: ['Python', 'Django', 'Vue.js']
    },
    {
      icon: <Database className="w-8 h-8 text-[#0A4DA2]" strokeWidth={1.5} />,
      title: 'MERN Stack',
      description: 'Become a full-stack developer with MongoDB, Express.js, React, and Node.js.',
      tags: ['MongoDB', 'Express', 'React']
    },
    {
      icon: <Database className="w-8 h-8 text-[#0A4DA2]" strokeWidth={1.5} />,
      title: 'Data Science',
      description: 'Learn Data Analysis, Machine Learning, and statistics with real-time projects.',
      tags: ['Python', 'Data Analysis', 'Stats']
    },
    {
      icon: <Cloud className="w-8 h-8 text-[#0A4DA2]" strokeWidth={1.5} />,
      title: 'AI & ML',
      description: 'Build intelligent systems, neural networks, and deep learning models.',
      tags: ['AI', 'Deep Learning', 'PyTorch']
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#0A4DA2]" strokeWidth={1.5} />,
      title: 'Selenium',
      description: 'Automate web testing seamlessly and ensure software quality.',
      tags: ['Selenium', 'Automation', 'Java']
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#0A4DA2]" strokeWidth={1.5} />,
      title: 'Cypress',
      description: 'Modern front-end testing for the modern web.',
      tags: ['Cypress', 'JavaScript', 'Testing']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-4 max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-[32px] md:text-[40px] font-[800] text-[#0F172A] mb-4 leading-tight font-['Inter']">
            Choose Your Career Track
          </h2>
          <p className="text-lg text-[#64748B] font-['Inter']">
            Select a domain that matches your passion and build your future.
          </p>
        </div>
        <button className="flex items-center gap-2 text-[#0A4DA2] font-semibold hover:text-[#071A52] transition-colors group">
          View All Tracks
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {tracks.map((track, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white border border-[#E2E8F0] rounded-[24px] p-8 hover:shadow-xl hover:-translate-y-2 hover:border-[#0A4DA2]/30 transition-all duration-300 flex flex-col h-full group"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-[#0A4DA2]/10 transition-colors">
              {track.icon}
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 font-['Inter']">
              {track.title}
            </h3>
            <p className="text-[#64748B] mb-8 flex-grow font-['Inter'] leading-relaxed text-[15px]">
              {track.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {track.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-xs font-semibold rounded-full uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
