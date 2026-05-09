import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-6 py-3.5 w-[92%] max-w-5xl flex justify-between items-center transition-all">
      <Link to="/" onClick={() => window.scrollTo(0,0)} className="flex items-center gap-2.5 group">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:bg-blue-700 transition-colors">
          <BookOpen className="w-4 h-4 text-white" />
        </div>
        <span className="text-[17px] font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">RK IT Hub</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        {[
          { name: 'Home', path: '/' },
          { name: 'Courses', path: '/courses' },
          { name: 'Placements', path: '/placements' },
          { name: 'Projects', path: '/projects' },
          { name: 'About', path: '/about' }
        ].map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            onClick={() => window.scrollTo(0,0)}
            className="relative text-[14px] font-semibold text-slate-500 transition-colors hover:text-slate-900 group"
          >
            {item.name}
            <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
        ))}
      </div>
      
      <div className="flex items-center gap-5">
        <Link to="/login" onClick={() => window.scrollTo(0,0)} className="text-[14px] font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          Login
        </Link>
        <Link to="/signup" onClick={() => window.scrollTo(0,0)} className="text-[14px] font-bold bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95">
          Get Started
        </Link>
      </div>
    </nav>
  );
};
