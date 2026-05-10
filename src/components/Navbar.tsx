import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrainingsOpen, setIsTrainingsOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Home', path: '/' },
    { name: 'Trainings', path: '#', hasDropdown: true },
    { name: 'Placements', path: '/placements' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full font-sans">
      {/* Top Header Bar */}
      <div className="bg-[#07294D] text-white text-sm py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="mailto:rrkithub@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">rrkithub@gmail.com</span>
          </a>
          <a href="tel:+919000926486" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Phone className="w-4 h-4" />
            <span>+91-9000926486</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/testimonials" className="hover:text-blue-200 transition-colors">Testimonials</Link>
          <Link to="/placements" className="hover:text-blue-200 transition-colors">Placements</Link>
          <Link to="/blog" className="hover:text-blue-200 transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#07294D]">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
            <span className="hidden sm:inline">RK IT TRAINING HUB</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {routes.map((route) => {
              const isActive = location.pathname === route.path;
              if (route.hasDropdown) {
                return (
                  <div 
                    key={route.name}
                    className="relative group"
                    onMouseEnter={() => setIsTrainingsOpen(true)}
                    onMouseLeave={() => setIsTrainingsOpen(false)}
                  >
                    <button 
                      className={`flex items-center gap-1 font-semibold text-sm py-6 transition-colors hover:text-[#07294D] ${
                        isActive ? 'text-[#07294D]' : 'text-gray-600'
                      }`}
                    >
                      {route.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isTrainingsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Dropdown */}
                    <div className={`absolute top-full left-0 bg-white border border-gray-100 shadow-lg rounded-md py-2 w-56 transition-all duration-200 ${
                      isTrainingsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {trainings.map((course) => (
                        <Link
                          key={course.name}
                          to={course.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#07294D] transition-colors"
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link 
                  key={route.name} 
                  to={route.path} 
                  className={`font-semibold text-sm py-6 transition-colors hover:text-[#07294D] ${
                    isActive ? 'text-[#07294D]' : 'text-gray-600'
                  }`}
                >
                  {route.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/courses" 
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-5 py-2.5 rounded-md font-bold text-sm transition-colors shadow-sm"
            >
              NEW BATCHES
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#07294D] p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[800px] border-b border-gray-200' : 'max-h-0 overflow-hidden'
        }`}>
          <div className="bg-white px-4 py-4 flex flex-col gap-3">
            {routes.map((route) => {
              if (route.hasDropdown) {
                return (
                  <div key={route.name} className="flex flex-col">
                    <button 
                      onClick={() => setIsTrainingsOpen(!isTrainingsOpen)}
                      className="flex justify-between items-center font-semibold text-sm text-gray-600 py-2 text-left"
                    >
                      {route.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isTrainingsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`pl-4 flex flex-col gap-2 overflow-hidden transition-all duration-200 ${
                      isTrainingsOpen ? 'max-h-[500px] py-2' : 'max-h-0'
                    }`}>
                      {trainings.map((course) => (
                        <Link
                          key={course.name}
                          to={course.path}
                          className="text-sm text-gray-600 hover:text-[#07294D] transition-colors py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link 
                  key={route.name} 
                  to={route.path} 
                  className="font-semibold text-sm text-gray-600 hover:text-[#07294D] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </Link>
              );
            })}
            <hr className="border-gray-100 my-1" />
            <Link 
              to="/courses" 
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-5 py-2.5 rounded-md font-bold text-sm text-center transition-colors shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              NEW BATCHES
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
