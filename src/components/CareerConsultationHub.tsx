import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle, Calendar, MapPin, Mail, X } from 'lucide-react';
import { useApplicationModal } from '../contexts/ApplicationContext';

export const CareerConsultationHub = () => {
  const { openApplyModal } = useApplicationModal();
  const [isCounselorSheetOpen, setIsCounselorSheetOpen] = useState(false);

  const contactCards = [
    { icon: Phone, title: "Call Us", desc: "+91 77029 49304", action: "Tap to Call", href: "tel:+917702949304" },
    { icon: MessageCircle, title: "WhatsApp", desc: "Instant Support", action: "Tap to Chat", href: "https://wa.me/917702949304" },
    { icon: MapPin, title: "Visit Campus", desc: "V-HUB IT Consulting", action: "Open Google Maps", href: "https://maps.app.goo.gl/j9HfADGXWF71kjwD6" },
    { icon: Mail, title: "Email", desc: "rrkithub@gmail.com", action: "Reply within 24 hrs", href: "mailto:rrkithub@gmail.com" },
  ];

  return (
    <section id="consultation-hub" className="relative w-full bg-[#0F172A] pt-16 md:pt-32 pb-12 md:pb-24 overflow-hidden font-sans border-t border-white/10">
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[200px] left-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top CTA Section */}
        <div className="text-center flex flex-col items-center mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
              Ready to Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Tech Career?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
              Join thousands of students building successful careers through real-time projects and expert mentorship.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative"
          >
            <button 
              onClick={openApplyModal}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-2xl font-bold text-[16px] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Apply Now 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => setIsCounselorSheetOpen(true)}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-[16px] transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Talk to Counselor
            </button>

            {/* Counselor Action Sheet Dropdown */}
            <AnimatePresence>
              {isCounselorSheetOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-[120%] left-0 sm:left-auto sm:right-0 w-full sm:w-[280px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 z-50 text-left"
                >
                  <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <span className="font-bold text-slate-900 text-sm">Contact Support</span>
                    <button onClick={() => setIsCounselorSheetOpen(false)} className="text-slate-400 hover:text-slate-900"><X className="w-4 h-4" /></button>
                  </div>
                  <div className="p-2 flex flex-col gap-1">
                    <a href="tel:+917702949304" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 font-semibold group">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform"><Phone className="w-4 h-4" /></div>
                      Call Support
                    </a>
                    <a href="https://wa.me/917702949304" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 font-semibold group">
                      <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform"><MessageCircle className="w-4 h-4" /></div>
                      WhatsApp
                    </a>
                    <button onClick={openApplyModal} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 font-semibold group w-full text-left">
                      <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform"><Calendar className="w-4 h-4" /></div>
                      Schedule Callback
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-10 md:mb-20" />

        {/* Contact Info & Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Contact Cards */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, i) => (
                <motion.a
                  href={card.href}
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-2xl backdrop-blur-sm transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-1">{card.title}</h4>
                  <p className="text-slate-400 text-sm mb-4">{card.desc}</p>
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider group-hover:text-blue-300 transition-colors">
                    {card.action}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200"
          >
            <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">V-HUB IT CONSULTING SERVICES</h4>
                <p className="text-slate-500 text-sm">Kukatpally, Hyderabad</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex-grow w-full min-h-[300px] relative bg-slate-200">
              {/* Premium styling without hover grayscale */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.074520434008!2d78.3696126!3d17.456146999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb932ebcef3f5d%3A0xab71fbf93a01fba2!2sV-HUB%20IT%20CONSULTING%20SERVICES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1782503683442!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <a 
              href="https://goo.gl/maps/something" 
              target="_blank" 
              rel="noreferrer"
              className="p-4 bg-white text-center font-bold text-blue-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
