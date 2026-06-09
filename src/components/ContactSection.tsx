import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white font-sans border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[40px] font-[800] text-[#0F172A] mb-3">
            Get In Touch
          </h2>
          <p className="text-[#475569] text-base font-medium">Reach out to our counselors for any queries regarding batches, fees, or placements.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Column 1 - Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-[800] text-[#0F172A] mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-[13px] font-[700] text-[#0F172A]">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F9C]/20 focus:border-[#0B4F9C] transition-all text-[14px] text-[#0F172A]" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[13px] font-[700] text-[#0F172A]">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F9C]/20 focus:border-[#0B4F9C] transition-all text-[14px] text-[#0F172A]" 
                  placeholder="john@example.com" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[13px] font-[700] text-[#0F172A]">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F9C]/20 focus:border-[#0B4F9C] transition-all text-[14px] text-[#0F172A]" 
                  placeholder="+91 XXXXX XXXXX" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[13px] font-[700] text-[#0F172A]">Your Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F9C]/20 focus:border-[#0B4F9C] transition-all text-[14px] text-[#0F172A] resize-none" 
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              <div className="pt-2">
                <button 
                  type="button" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0B4F9C] hover:bg-[#093A74] text-white px-6 py-3.5 rounded-lg font-[800] text-[14px] transition-all shadow-md hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Column 2 - Contact Info */}
          <div className="bg-[#FAFAFA] border border-gray-200 rounded-xl p-8 flex flex-col justify-center space-y-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0 flex items-center justify-center text-[#0B4F9C] shadow-sm border border-gray-100">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-[800] text-[#0F172A] text-[15px] mb-1">Our Location</h4>
                <p className="text-[#475569] text-[13px] leading-relaxed font-medium">Plot No. 12, Above HDFC Bank, Kondapur, Hitech City, Hyderabad - 500084</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0 flex items-center justify-center text-[#22C55E] shadow-sm border border-gray-100">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-[800] text-[#0F172A] text-[15px] mb-1">Phone Number</h4>
                <p className="text-[#475569] text-[13px] leading-relaxed font-medium">+91-9000926486<br/>040-XXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0 flex items-center justify-center text-[#0B4F9C] shadow-sm border border-gray-100">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-[800] text-[#0F172A] text-[15px] mb-1">Email Address</h4>
                <p className="text-[#475569] text-[13px] leading-relaxed font-medium">rrkithub@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Column 3 - Map */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 min-h-[300px] lg:min-h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.262534898116!2d78.36444831487713!3d17.447154988042435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a206ea7603%3A0x7d6b38f8c057635e!2sKondapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620641234567!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};
