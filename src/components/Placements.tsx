import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Building, 
  TrendingUp, 
  CheckCircle2,
  BookOpen,
  Code,
  MessageSquare,
  FileText,
  Briefcase,
  Star
} from 'lucide-react';

export const Placements = () => {
  const stats = [
    { val: '1000+', label: 'Placements', icon: Users },
    { val: '50+', label: 'Hiring Companies', icon: Building },
    { val: '10 LPA', label: 'Highest Package', icon: TrendingUp },
    { val: '95%', label: 'Placement Support', icon: CheckCircle2 }
  ];

  const timeline = [
    { icon: BookOpen, title: 'Training', desc: 'Industry-aligned curriculum' },
    { icon: Code, title: 'Live Projects', desc: 'Real-world exposure' },
    { icon: MessageSquare, title: 'Mock Interviews', desc: 'Confidence building' },
    { icon: FileText, title: 'Resume Preparation', desc: 'Professional branding' },
    { icon: Briefcase, title: 'Placement Drives', desc: 'Direct interviews' }
  ];

  const students = [
    {
      image: '/placed_student_1.png',
      name: 'Rahul Sharma',
      college: 'VNR VJIET',
      company: 'TCS',
      package: '6.5 LPA',
      testimonial: 'The practical training and mock interviews helped me crack the interview with confidence.'
    },
    {
      image: '/placed_student_2.png',
      name: 'Priya Patel',
      college: 'CBIT',
      company: 'Accenture',
      package: '5.5 LPA',
      testimonial: 'Working on live projects gave me the edge over other candidates.'
    }
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
            Placement Assistance That Delivers Results
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium"
          >
            Our students get trained, mentored, and hired by top companies.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#FAFAFA] p-6 rounded-2xl text-center border border-slate-100 group hover:border-yellow-500/30 transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#06152D] group-hover:bg-yellow-500 transition-colors mx-auto mb-4 shadow-sm">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-[#06152D] mb-1">{stat.val}</div>
              <div className="text-sm font-medium text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#06152D] mb-10 text-center">Our Placement Process</h3>
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-slate-100 text-center group hover:border-yellow-500/30 transition-all"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#06152D] group-hover:bg-yellow-500 transition-colors mx-auto mb-4 border-2 border-white shadow-md">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#06152D] mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Students Cards */}
        <div>
          <h3 className="text-2xl font-bold text-[#06152D] mb-8 text-center">Recent Placed Students</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {students.map((student, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-4 items-center group hover:border-yellow-500/30 transition-all"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-slate-100">
                  <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="text-lg font-bold text-[#06152D]">{student.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{student.college}</p>
                    </div>
                    <div className="bg-yellow-500/10 text-yellow-600 px-2 py-1 rounded text-xs font-bold">
                      {student.package}
                    </div>
                  </div>
                  <div className="text-sm font-bold text-[#06152D] mb-1">Placed at {student.company}</div>
                  <p className="text-xs text-slate-600 italic">"{student.testimonial}"</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#success-stories" className="inline-flex items-center gap-2 bg-[#06152D] text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 hover:text-[#06152D] transition-all">
              View More Success Stories
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
