import React from 'react';
import { BookOpen, Globe, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="py-16 bg-white border-t border-slate-100 mt-auto w-full z-10 relative font-sans">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                <BookOpen className="w-4 h-4" fill="currentColor" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">RK IT Hub</span>
            </div>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
              Empowering the next generation of software engineers through immersive training and industry-led curriculum.
            </p>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-colors">
                <Globe className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Programs</h4>
            <ul className="space-y-3">
              {['Full Stack Web Dev', 'Data Science & AI', 'Python Backend', 'Cloud Engineering'].map((item) => (
                <li key={item}>
                  <Link to="/courses" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Blog', 'Success Stories', 'Documentation', 'Student Portal'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Support</h4>
            <ul className="space-y-3">
              {['Contact Us', 'Terms of Service', 'Privacy Policy', 'Careers'].map((item) => (
                <li key={item}>
                  <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-slate-400">
            © {new Date().getFullYear()} RK IT Hub. Built with <span className="text-red-500">❤️</span> and Code.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors">System Status</Link>
            <Link to="/" className="text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors">Community</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

