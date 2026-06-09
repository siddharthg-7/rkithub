import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ChevronDown, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrainingsOpen, setIsTrainingsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trainings = [
    { name: 'Java Full Stack', path: '#courses' },
    { name: 'Python Full Stack', path: '#courses' },
    { name: 'MERN Stack', path: '#courses' },
    { name: 'Data Science', path: '#courses' },
    { name: 'AI & ML', path: '#courses' },
    { name: 'Selenium', path: '#courses' },
    { name: 'Cypress', path: '#courses' },
  ];

  const routes = [
    { name: 'Home', path: '#' },
    { name: 'Trainings', path: '#courses', hasDropdown: true },
    { name: 'Placements', path: '#placements' },
    { name: 'Projects', path: '#projects' },
    { name: 'About Us', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header className="w-full font-sans relative z-50">
      {/* Top Announcement Bar - Section 1 */}
      <div className="bg-[#0B4F9C] text-white text-xs py-2.5 px-4 md:px-8 flex justify-between items-center transition-all">
        <div className="flex items-center gap-6">
          <a href="mailto:rrkithub@gmail.com" className="flex items-center gap-2 hover:text-[#22C55E] transition-colors font-medium">
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">rrkithub@gmail.com</span>
          </a>
          <a href="tel:+919000926486" className="flex items-center gap-2 hover:text-[#22C55E] transition-colors font-medium">
            <Phone className="w-3.5 h-3.5" />
            <span>+91-9000926486</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 border-r border-white/20 pr-4">
            <a href="#testimonials" className="hover:text-[#22C55E] transition-colors font-medium">Testimonials</a>
            <a href="#placements" className="hover:text-[#22C55E] transition-colors font-medium">Placements</a>
            <a href="#blog" className="hover:text-[#22C55E] transition-colors font-medium">Blog</a>
            <a href="#contact" className="hover:text-[#22C55E] transition-colors font-medium">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#22C55E] transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-[#22C55E] transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-[#22C55E] transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-[#22C55E] transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Sticky Navbar - Section 2 */}
      <nav className={`sticky top-0 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-2' : 'bg-white border-b border-gray-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 font-bold text-2xl text-[#0B4F9C]">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
            <span className="hidden sm:inline tracking-tight">RK IT HUB</span>
          </a>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {routes.map((route) => {
              if (route.hasDropdown) {
                return (
                  <div 
                    key={route.name}
                    className="relative group"
                    onMouseEnter={() => setIsTrainingsOpen(true)}
                    onMouseLeave={() => setIsTrainingsOpen(false)}
                  >
                    <button 
                      className="flex items-center gap-1 font-[700] text-[15px] py-2 transition-colors text-[#0F172A] hover:text-[#0B4F9C]"
                    >
                      {route.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isTrainingsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Dropdown */}
                    <div className={`absolute top-full left-0 bg-white border border-gray-100 shadow-xl rounded-xl py-2 w-56 transition-all duration-200 mt-2 ${
                      isTrainingsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {trainings.map((course) => (
                        <a
                          key={course.name}
                          href={course.path}
                          className="block px-5 py-2.5 text-sm text-[#0F172A] hover:bg-blue-50 hover:text-[#0B4F9C] font-semibold transition-colors"
                        >
                          {course.name}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <a 
                  key={route.name} 
                  href={route.path} 
                  className="font-[700] text-[15px] py-2 transition-colors text-[#0F172A] hover:text-[#0B4F9C]"
                >
                  {route.name}
                </a>
              );
            })}
          </div>

          {/* Right Side Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href="#courses" 
              className="bg-[#22C55E] hover:bg-[#1CA345] text-white px-6 py-2.5 rounded-lg font-[800] text-sm tracking-wide transition-all shadow-lg shadow-green-500/20 hover:-translate-y-0.5"
            >
              NEW BATCHES
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#0B4F9C] p-2 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out absolute w-full bg-white border-b border-gray-200 shadow-lg ${
          isMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-4 flex flex-col gap-2">
            {routes.map((route) => {
              if (route.hasDropdown) {
                return (
                  <div key={route.name} className="flex flex-col border-b border-slate-50 last:border-none">
                    <button 
                      onClick={() => setIsTrainingsOpen(!isTrainingsOpen)}
                      className="flex justify-between items-center font-bold text-[15px] text-[#0F172A] py-3 text-left w-full"
                    >
                      {route.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isTrainingsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`pl-4 flex flex-col overflow-hidden transition-all duration-200 bg-slate-50 rounded-lg ${
                      isTrainingsOpen ? 'max-h-[500px] py-2 mb-2' : 'max-h-0'
                    }`}>
                      {trainings.map((course) => (
                        <a
                          key={course.name}
                          href={course.path}
                          className="text-[15px] font-semibold text-[#0F172A] hover:text-[#0B4F9C] transition-colors py-2 px-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {course.name}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <a 
                  key={route.name} 
                  href={route.path} 
                  className="font-bold text-[15px] text-[#0F172A] hover:text-[#0B4F9C] transition-colors py-3 border-b border-slate-50 last:border-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </a>
              );
            })}
            <div className="pt-4 pb-2">
              <a 
                href="#courses" 
                className="block w-full bg-[#22C55E] hover:bg-[#1CA345] text-white px-5 py-3 rounded-lg font-[800] tracking-wide text-sm text-center transition-colors shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                NEW BATCHES
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
