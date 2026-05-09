import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    { icon: Phone, title: 'Phone', details: '+91 98765 43210', sub: 'Mon-Sat from 9am to 6pm' },
    { icon: Mail, title: 'Email', details: 'info@vhub.com', sub: 'We reply within 24 hours' },
    { icon: MapPin, title: 'Office Address', details: 'Hitech City, Hyderabad', sub: 'Visit us for a demo session' },
    { icon: Clock, title: 'Working Hours', details: '9:00 AM - 7:00 PM', sub: 'Sunday Closed' }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#06152D] mb-4 tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium"
          >
            Have questions? We are here to help you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE - Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#06152D] mb-6">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-[#FAFAFA] p-6 rounded-2xl border border-slate-100 hover:border-yellow-500/30 transition-all group">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#06152D] group-hover:bg-yellow-500 transition-colors mb-4 shadow-sm">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#06152D] mb-1">{info.title}</h4>
                  <div className="text-sm font-bold text-slate-700 mb-1">{info.details}</div>
                  <p className="text-xs text-slate-500 font-medium">{info.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-[#06152D] mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Name</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Phone</label>
                  <input type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Course Interested In</label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors text-slate-600">
                  <option>Select a course</option>
                  <option>Full Stack Development</option>
                  <option>Python Programming</option>
                  <option>AI & Data Science</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Message</label>
                <textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors h-32" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button className="w-full bg-[#06152D] text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#0c234a] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#06152D]/10">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-[#FAFAFA] h-[300px] rounded-3xl border border-slate-100 flex items-center justify-center text-slate-400 font-medium">
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-slate-300" />
            Interactive Map Placeholder
          </div>
        </div>

      </div>
    </section>
  );
};
