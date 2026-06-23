import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const SeleniumPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-900 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none" style={{ background: 'rgba(59,130,246,0.08)' }}></div>

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 inline-block">
            Course Page
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Selenium Automation
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Automate web testing seamlessly, build test automation frameworks, and ensure software quality using Selenium WebDriver with Java or Python.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="px-8 py-3.5 bg-[#0B4F9C] hover:bg-[#093A74] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
              Go to Home
            </Link>
            <Link to="/internships" className="px-8 py-3.5 bg-slate-900 border border-slate-800 text-white font-bold rounded-xl hover:bg-slate-850 transition-all flex items-center gap-2">
              Explore Internships <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
