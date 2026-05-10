import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#06152D] text-white pt-24 pb-12 overflow-hidden font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img src="/logo.png" alt="RK IT Training HUB" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-white/60 font-medium text-sm leading-relaxed mb-6 max-w-sm">
              Empowering students with industry-ready skills and placement-focused learning. Join us to accelerate your tech career.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-[#06152D] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Trainings', 'Placements', 'Clients', 'About Us', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm font-medium text-white/70 hover:text-white hover:underline transition-all">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trainings */}
          <div>
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-4">Trainings</h4>
            <ul className="space-y-3">
              {['Java Development', 'Full Stack Dev', 'Python Pro', 'Testing Tools', 'Selenium', 'Digital Marketing'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm font-medium text-white/70 hover:text-white hover:underline transition-all">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span>+91-9000926486</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="w-4 h-4 text-yellow-500" />
                <span>rrkithub@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-yellow-500 mt-0.5" />
                <span>Kondapur, Hitech City</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40">
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
