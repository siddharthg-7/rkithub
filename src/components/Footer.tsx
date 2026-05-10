import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#07294D] text-white pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="RK IT Training HUB" className="h-12 w-auto object-contain" />
              <span className="font-bold text-lg">RK IT HUB</span>
            </Link>
            <p className="text-blue-100/70 text-sm leading-relaxed mb-6">
              Empowering students with industry-ready skills and placement-focused learning since 2015.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#22C55E] hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Placements', 'Projects', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-blue-100/70 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trainings */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Trainings</h4>
            <ul className="space-y-2">
              {['Java Full Stack', 'Python Full Stack', 'MERN Stack', 'Data Science', 'AI & ML', 'Selenium'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-blue-100/70 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Contact Details</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-blue-100/70">
                <MapPin className="w-4 h-4 text-[#22C55E] mt-0.5" />
                <span>Kondapur, Hitech City, Hyderabad</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100/70">
                <Phone className="w-4 h-4 text-[#22C55E]" />
                <span>+91-9000926486</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100/70">
                <Mail className="w-4 h-4 text-[#22C55E]" />
                <span>rrkithub@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/50">
          <div>© {new Date().getFullYear()} RK IT Training HUB. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
