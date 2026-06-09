import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '#' },
    { name: 'About Us', path: '#about' },
    { name: 'Placements', path: '#placements' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-8 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Section - Newsletter/CTA */}
        <div className="bg-[#1E293B] rounded-2xl p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-700/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B4F9C]/20 blur-3xl rounded-full"></div>
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-[700] mb-2 text-white">Subscribe to our newsletter</h3>
            <p className="text-gray-400">Get the latest updates on new courses, batches, and tech industry insights.</p>
          </div>
          <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-5 py-3.5 bg-[#0F172A] border border-gray-600 rounded-xl focus:outline-none focus:border-[#22C55E] text-white w-full sm:w-72"
            />
            <button className="bg-[#22C55E] hover:bg-[#1CA345] text-white px-6 py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="lg:pr-8">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="RK IT Training HUB" className="h-12 w-auto object-contain bg-white rounded p-1" />
              <span className="font-[800] text-xl tracking-tight">RK IT HUB</span>
            </a>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
              Transforming careers with industry-ready skills and placement-focused learning since 2015. We build the tech leaders of tomorrow.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-[#1E293B] rounded-full flex items-center justify-center hover:bg-[#0B4F9C] hover:text-white transition-all hover:-translate-y-1">
                  <Icon className="w-4 h-4 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-[700] mb-6 text-lg tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-gray-400 hover:text-[#22C55E] text-[15px] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#22C55E]" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trainings */}
          <div>
            <h4 className="text-white font-[700] mb-6 text-lg tracking-wide">Popular Courses</h4>
            <ul className="space-y-4">
              {['Java Full Stack', 'Python Full Stack', 'MERN Stack', 'Data Science', 'AI & Machine Learning', 'Selenium Automation'].map((item) => (
                <li key={item}>
                  <a href="#courses" className="text-gray-400 hover:text-[#22C55E] text-[15px] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#22C55E]" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-[700] mb-6 text-lg tracking-wide">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B4F9C] transition-colors">
                  <MapPin className="w-4 h-4 text-[#22C55E] group-hover:text-white" />
                </div>
                <span className="text-[15px] text-gray-400 leading-relaxed pt-1">Plot No. 12, Above HDFC Bank, Kondapur, Hyderabad - 500084</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B4F9C] transition-colors">
                  <Phone className="w-4 h-4 text-[#22C55E] group-hover:text-white" />
                </div>
                <span className="text-[15px] text-gray-400">+91-9000926486</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B4F9C] transition-colors">
                  <Mail className="w-4 h-4 text-[#22C55E] group-hover:text-white" />
                </div>
                <span className="text-[15px] text-gray-400">rrkithub@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-gray-500">
          <div>© {new Date().getFullYear()} RK IT Training HUB. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
