import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Trainings', path: '/courses' },
    { name: 'Placements', path: '/placements' },
    { name: 'Clients', path: '/clients' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-lg border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-6 py-3 w-[92%] max-w-6xl flex justify-between items-center transition-all">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <img src="/logo.png" alt="RK IT Training HUB" className="h-14 w-auto object-contain" />
      </Link>

      {/* Center Routes */}
      <div className="hidden md:flex items-center gap-6">
        {routes.map((route) => {
          const isActive = location.pathname === route.path;
          return (
            <Link 
              key={route.name} 
              to={route.path} 
              className={`relative text-[14px] font-semibold transition-colors hover:text-[#06152D] py-2 ${
                isActive ? 'text-[#06152D]' : 'text-slate-600'
              }`}
            >
              {route.name}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-yellow-500 transition-all duration-300 ${
                isActive ? 'w-full' : 'w-0 hover:w-full'
              } rounded-full`} />
            </Link>
          );
        })}
      </div>

      {/* Right Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="text-[14px] font-semibold text-slate-600 hover:text-[#06152D] transition-colors">
          Talk to Counselor
        </button>
        <Link to="/signup" className="bg-[#06152D] text-white px-5 py-2 rounded-full font-bold text-[14px] hover:bg-[#0c234a] transition-all shadow-lg shadow-[#06152D]/10 hover:shadow-[#06152D]/20 active:scale-95">
          Enroll Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#06152D] p-2"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200/60 shadow-xl p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {routes.map((route) => (
              <Link 
                key={route.name} 
                to={route.path} 
                className="text-[14px] font-semibold text-slate-600 hover:text-[#06152D] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <hr className="border-slate-100 my-1" />
            <button className="text-[14px] font-semibold text-slate-600 hover:text-[#06152D] transition-colors text-left">
              Talk to Counselor
            </button>
            <Link 
              to="/signup" 
              className="bg-[#06152D] text-white px-5 py-2 rounded-full font-bold text-[14px] hover:bg-[#0c234a] transition-all text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
