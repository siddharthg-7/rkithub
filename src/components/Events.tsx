import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export const Events = () => {
  const events = [
    { title: 'Full Stack Workshop', type: 'Workshop', date: 'May 15, 2026', loc: 'Online', desc: 'Hands-on session on building full stack apps.' },
    { title: 'Mega Hackathon', type: 'Hackathon', date: 'May 20, 2026', loc: 'Campus', desc: '24-hour coding challenge with prizes.' },
    { title: 'Career Guidance', type: 'Session', date: 'May 22, 2026', loc: 'Online', desc: 'Expert advice on tech career paths.' },
    { title: 'AI Bootcamp', type: 'Bootcamp', date: 'May 25, 2026', loc: 'Campus', desc: 'Intensive training on machine learning.' },
    { title: 'Industry Seminar', type: 'Seminar', date: 'May 28, 2026', loc: 'Hotel Grand', desc: 'Insights from top tech leaders.' },
    { title: 'Mega Placement Drive', type: 'Placement Drive', date: 'June 01, 2026', loc: 'Campus', desc: 'Direct interviews with 10+ companies.' }
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
            Workshops, Bootcamps & Career Events
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium"
          >
            Interactive learning experiences designed to boost skills and confidence.
          </motion.p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/event_banner.png" 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06152D] via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 bg-yellow-500 text-[#06152D] px-3 py-1 rounded-full text-xs font-bold">
                  {event.type}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#06152D] mb-2">{event.title}</h3>
                <p className="text-sm text-slate-500 font-medium mb-4">{event.desc}</p>
                
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{event.loc}</span>
                  </div>
                </div>

                <button className="w-full bg-[#06152D] text-white px-4 py-2.5 rounded-full font-bold text-sm hover:bg-[#0c234a] transition-all flex items-center justify-center gap-2">
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Countdown Banner */}
        <div className="mt-16 bg-[#06152D] text-white p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="text-sm font-bold text-yellow-500 mb-1">Upcoming Mega Event</div>
            <div className="text-xl font-bold">National Tech Symposium 2026</div>
          </div>
          <div className="flex gap-4 text-center">
            {['12 Days', '05 Hours', '43 Mins'].map((time, i) => (
              <div key={i} className="bg-white/10 px-4 py-2 rounded-lg">
                <div className="text-lg font-bold text-white">{time.split(' ')[0]}</div>
                <div className="text-[10px] text-white/50 uppercase font-medium">{time.split(' ')[1]}</div>
              </div>
            ))}
          </div>
          <button className="bg-yellow-500 text-[#06152D] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-all">
            Join Now
          </button>
        </div>

      </div>
    </section>
  );
};
