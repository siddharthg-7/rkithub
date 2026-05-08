import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, HelpCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      <section className="pt-48 pb-32">
        <div className="max-w-[1280px] mx-auto px-10 grid lg:grid-cols-2 gap-24">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-8">
              Connect With Us
            </div>
            <h1 className="text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-10">
              Let's Start Your <span className="text-blue-600">Tech Journey</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-lg">
              Have questions about our curriculum or placement process? Our team is here to help you navigate your career path.
            </p>
            
            <div className="space-y-8 mb-16">
              {[
                { icon: Mail, label: 'Email Us', val: 'admissions@rkyithub.com' },
                { icon: Phone, label: 'Call Us', val: '+91 98765 43210' },
                { icon: MapPin, label: 'Visit Us', val: 'Tech Hub Park, Road No. 12, Hyderabad, TS' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 text-navy-900 rounded-2xl flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition-all shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-navy-900">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-2xl relative"
          >
            <h3 className="text-2xl font-extrabold text-navy-900 mb-10">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="floating-label-group">
                  <input type="text" id="contact-name" className="floating-label-input" placeholder=" " />
                  <label htmlFor="contact-name" className="floating-label">Full Name</label>
                </div>
                <div className="floating-label-group">
                  <input type="email" id="contact-email" className="floating-label-input" placeholder=" " />
                  <label htmlFor="contact-email" className="floating-label">Email Address</label>
                </div>
              </div>
              <div className="floating-label-group">
                <select id="contact-course" className="floating-label-input appearance-none">
                  <option value="">Select a Course of Interest</option>
                  <option value="full-stack">Full Stack Development</option>
                  <option value="python">Python Programming</option>
                  <option value="java">Java + DSA</option>
                  <option value="ai">AI & ML Foundations</option>
                </select>
                <label htmlFor="contact-course" className="floating-label">Course Interest</label>
              </div>
              <div className="floating-label-group">
                <textarea id="contact-message" className="floating-label-input h-32" placeholder=" "></textarea>
                <label htmlFor="contact-message" className="floating-label">How can we help you?</label>
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-3">
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Mini FAQ Sidebar style */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-[1280px] mx-auto px-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-extrabold text-navy-900">Frequently Asked Questions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               {[
                 { q: 'Is there a placement guarantee?', a: 'We offer a placement guarantee for our flagship programs, backed by intensive mock drills and industry partners.' },
                 { q: 'Can I attend a demo session?', a: 'Yes! You can book a free demo session to experience our learning methodology first-hand.' },
                 { q: 'Do you offer online classes?', a: 'We provide hybrid learning options including live interactive sessions and self-paced modules.' },
                 { q: 'What is the refund policy?', a: 'We offer a full refund if requested within the first week of the course commencement.' }
               ].map((faq, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex gap-6">
                    <HelpCircle className="text-blue-600 shrink-0" size={24} />
                    <div>
                       <h4 className="font-bold text-navy-900 mb-3">{faq.q}</h4>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};
