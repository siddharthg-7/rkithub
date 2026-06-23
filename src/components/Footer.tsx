import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { motion } from 'framer-motion';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '#' },
    { name: 'About Us', path: '#about' },
    { name: 'Internships', path: '/internships' },
    { name: 'Placements', path: '#placements' },
    { name: 'Contact', path: '#contact' },
  ];
  
  const legalLinks = [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms & Conditions', path: '#' },
    { name: 'Refund Policy', path: '#' },
  ];

  return (
    <footer className="bg-[var(--color-bg-dark)] text-white pt-20 pb-8 font-sans border-t border-gray-900">
      <div className="max-w-[1440px] mx-auto px-[80px]">
        {/* Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-gray-800"
        >
          
          {/* Brand Info */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="lg:pr-8">
            <a href="#" className="flex items-center mb-6">
              <Logo light={true} imageClassName="h-12 w-auto object-contain bg-white rounded p-1" />
            </a>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-8 font-['Inter']">
              RK IT HUB - Launching careers with premium tech internships and 100% placement support. We build the tech leaders of tomorrow.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all hover:-translate-y-1 border border-gray-800 hover:border-transparent">
                  <Icon className="w-4 h-4 text-gray-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
            <h4 className="text-white font-[700] mb-6 text-lg tracking-wide font-['Inter']">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-gray-400 hover:text-[var(--color-accent)] text-[15px] transition-colors flex items-center gap-2 group font-['Inter']">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[var(--color-accent)]" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
            <h4 className="text-white font-[700] mb-6 text-lg tracking-wide font-['Inter']">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-gray-400 hover:text-[var(--color-accent)] text-[15px] transition-colors flex items-center gap-2 group font-['Inter']">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[var(--color-accent)]" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
            <h4 className="text-white font-[700] mb-6 text-lg tracking-wide font-['Inter']">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] border border-gray-800 group-hover:border-transparent transition-colors">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)] group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] text-gray-400 leading-relaxed pt-1 font-['Inter']">
                    Hive Space 2.0, Whitefield<br/>
                    Ramalayam Temple Road<br/>
                    HITECH City, Hyderabad TG-500084
                  </span>
                  <div className="mt-4 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#1e293b]/50 border border-gray-800 shadow-sm w-fit group-hover:border-gray-700 transition-colors">
                    <span className="text-[11px] font-bold tracking-wider text-gray-400 uppercase">Powered By</span>
                    <div className="h-3 w-[1px] bg-gray-700"></div>
                    <img src="/VHUB_Logo.svg" alt="V-HUB" className="h-4 object-contain grayscale-[40%] group-hover:grayscale-0 transition-all" />
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] border border-gray-800 group-hover:border-transparent transition-colors">
                  <Phone className="w-4 h-4 text-[var(--color-accent)] group-hover:text-white" />
                </div>
                <div className="flex flex-col font-['Inter']">
                  <span className="text-[15px] text-gray-400">+91-7702949304</span>
                  <span className="text-[15px] text-gray-400">+91-9000926486</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] border border-gray-800 group-hover:border-transparent transition-colors">
                  <Mail className="w-4 h-4 text-[var(--color-accent)] group-hover:text-white" />
                </div>
                <span className="text-[15px] text-gray-400 font-['Inter']">rrkithub@gmail.com</span>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-gray-500 font-['Inter']">
          <div>© {new Date().getFullYear()} RK IT Training HUB. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Made in India</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
