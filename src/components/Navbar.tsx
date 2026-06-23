import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ChevronDown, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from './Logo';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrainingsOpen, setIsTrainingsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (path.startsWith('/')) {
      navigate(path);
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const id = path.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const id = path.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const trainings = [
    { name: 'Java Full Stack', path: '/courses/java-full-stack' },
    { name: 'Python Full Stack', path: '/courses/python-full-stack' },
    { name: 'MERN Stack', path: '/courses/mern-stack' },
    { name: 'Data Science', path: '/courses/data-science' },
    { name: 'AI & ML', path: '/courses/ai-ml' },
    { name: 'Selenium', path: '/courses/selenium' },
    { name: 'Cypress', path: '/courses/cypress' },
  ];

  const routes = [
    { name: 'Home', path: '#' },
    { name: 'Trainings', path: '#courses', hasDropdown: true },
    { name: 'Placements', path: '#placements' },
    { name: 'Internships', path: '/internships' },
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
          <a href="tel:+917702949304" className="flex items-center gap-2 hover:text-[#22C55E] transition-colors font-medium">
            <Phone className="w-3.5 h-3.5" />
            <span>+91-7702949304, 9000926486</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 border-r border-white/20 pr-4">
            <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="hover:text-[#22C55E] transition-colors font-medium">Testimonials</a>
            <a href="#placements" onClick={(e) => handleNavClick(e, '#placements')} className="hover:text-[#22C55E] transition-colors font-medium">Placements</a>
            <a
              href="#blog"
              onClick={(e) => handleNavClick(e, '#about')}
              className="hover:text-[#22C55E] transition-colors font-medium"
            >
              Blog
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#22C55E] transition-colors font-medium">Contact</a>
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
      <div className="relative h-[80px] z-50">
        <div className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 pt-4 px-4 pointer-events-none' : 'absolute top-0 left-0'}`}>
          <nav className={`mx-auto transition-all duration-300 ${isScrolled
              ? 'max-w-[1280px] bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl lg:rounded-full py-2 pointer-events-auto'
              : 'w-full bg-white border-b border-gray-100 py-4 pointer-events-auto'
            }`}>
            <div className={`max-w-[1280px] mx-auto flex justify-between items-center ${isScrolled ? 'px-6 lg:px-8 h-auto' : 'px-4 md:px-8 h-[80px] lg:h-auto'}`}>
              {/* Logo */}
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== '/') {
                    navigate('/');
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }} 
                className="shrink-0"
              >
                <Logo imageClassName={`${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'} w-auto object-contain transition-all duration-300`} textClassName="flex flex-col justify-center" />
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
                          onClick={(e) => handleNavClick(e, route.path)}
                          className="flex items-center gap-1 font-[700] text-[15px] py-2 transition-colors text-[#0F172A] hover:text-[#0B4F9C]"
                        >
                          {route.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${isTrainingsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {/* Dropdown */}
                        <div className={`absolute top-full left-0 bg-white border border-gray-100 shadow-xl rounded-xl py-2 w-56 transition-all duration-200 mt-2 ${isTrainingsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                          }`}>
                          {trainings.map((course) => (
                            <a
                              key={course.name}
                              href={course.path}
                              onClick={(e) => handleNavClick(e, course.path)}
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
                      onClick={(e) => handleNavClick(e, route.path)}
                      className={`font-[700] text-[15px] py-2 transition-colors ${location.pathname === route.path || (route.name === 'Internships' && location.pathname.includes('internships'))
                          ? 'text-[#0B4F9C]'
                          : 'text-[#0F172A] hover:text-[#0B4F9C]'
                        }`}
                    >
                      {route.name}
                    </a>
                  );
                })}
              </div>

              <div className="hidden lg:flex items-center">
                <a
                  href="/internships"
                  onClick={(e) => handleNavClick(e, '/internships')}
                  className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-6 py-2.5 rounded-[14px] font-[800] text-sm tracking-wide transition-all shadow-lg shadow-green-500/20 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Apply Now <span>&rarr;</span>
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
            <div className={`lg:hidden transition-all duration-300 ease-in-out absolute left-0 top-full w-full bg-white shadow-lg ${isMenuOpen ? 'max-h-[800px] opacity-100 border-b border-gray-200' : 'max-h-0 opacity-0 overflow-hidden border-none'
              } ${isScrolled ? 'mt-4 rounded-2xl border' : ''}`}>
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
                        <div className={`pl-4 flex flex-col overflow-hidden transition-all duration-200 bg-slate-50 rounded-lg ${isTrainingsOpen ? 'max-h-[500px] py-2 mb-2' : 'max-h-0'
                          }`}>
                          {trainings.map((course) => (
                            <a
                              key={course.name}
                              href={course.path}
                              onClick={(e) => handleNavClick(e, course.path)}
                              className="text-[15px] font-semibold text-[#0F172A] hover:text-[#0B4F9C] transition-colors py-2 px-2"
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
                      onClick={(e) => handleNavClick(e, route.path)}
                      className={`font-bold text-[15px] py-3 border-b border-slate-50 last:border-none transition-colors ${location.pathname === route.path || (route.name === 'Internships' && location.pathname.includes('internships'))
                          ? 'text-[#0B4F9C]'
                          : 'text-[#0F172A] hover:text-[#0B4F9C]'
                        }`}
                    >
                      {route.name}
                    </a>
                  );
                })}
                <div className="pt-4 pb-2">
                  <a
                    href="/internships"
                    onClick={(e) => handleNavClick(e, '/internships')}
                    className="block w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-5 py-3 rounded-[14px] font-[800] tracking-wide text-sm text-center transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    Apply Now <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
