import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#07294D] font-sans">Get In Touch</h2>
          <p className="text-gray-600 mt-2 font-sans">Have questions? Reach out to us and we'll help you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side - Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#07294D] mb-6 font-sans">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-sans">Full Name</label>
                  <input type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-[#07294D] text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-sans">Email Address</label>
                  <input type="email" className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-[#07294D] text-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-sans">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-[#07294D] text-sm" placeholder="+91-XXXXX XXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-sans">Message</label>
                <textarea rows={4} className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-[#07294D] text-sm" placeholder="How can we help you?"></textarea>
              </div>
              <div>
                <button type="button" className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-md font-bold text-sm transition-colors w-full sm:w-auto">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-bold text-[#07294D] mb-4 font-sans">Contact Information</h3>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#07294D] mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Address</h4>
                  <p className="text-sm text-gray-600 font-sans">Plot No. 12, Above HDFC Bank, Kondapur, Hitech City, Hyderabad - 500084</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#07294D] mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Phone</h4>
                  <p className="text-sm text-gray-600 font-sans">+91-9000926486, 040-XXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#07294D] mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Email</h4>
                  <p className="text-sm text-gray-600 font-sans">rrkithub@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden h-[200px] border border-gray-100">
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
      </div>
    </section>
  );
};
