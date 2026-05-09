import React from 'react';
import { motion } from 'framer-motion';

export const Clients = () => {
  const logos = [
    'GOOGLE', 'MICROSOFT', 'TCS', 'INFOSYS', 'ACCENTURE', 'WIPRO', 
    'AMAZON', 'FLIPKART', 'META', 'IBM', 'COGNIZANT', 'CAPGEMINI'
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#06152D] mb-4 tracking-tight"
          >
            Trusted By Industry Leaders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium"
          >
            We collaborate with companies, startups, and organizations for training, internships, and placements.
          </motion.p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap items-center gap-20 px-10 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 py-4"
          >
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-3xl font-black tracking-tighter text-[#06152D] hover:text-yellow-500 transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Categories (Static) */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { title: 'Corporate Training', desc: 'Customized training programs for enterprise teams.' },
            { title: 'Internship Partners', desc: 'Companies offering real-world internship opportunities.' },
            { title: 'Placement Drives', desc: 'Direct recruitment drives with top tech companies.' }
          ].map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 text-center hover:border-yellow-500/30 transition-all"
            >
              <h4 className="text-lg font-bold text-[#06152D] mb-2">{cat.title}</h4>
              <p className="text-sm text-slate-500 font-medium">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
