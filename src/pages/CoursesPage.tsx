import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, Filter, BookOpen, Clock, Users, Star, ArrowRight } from 'lucide-react';

const courses = [
  {
    slug: 'full-stack-development',
    title: 'Full Stack Development',
    description: 'Master MERN stack with industry-grade projects and real-time deployment.',
    duration: '6 Months',
    level: 'Advanced',
    mentor: 'Arjun Reddy',
    projects: 12,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    category: 'Full Stack',
    badges: ['Placement Support', 'Live Projects']
  },
  {
    slug: 'python-programming',
    title: 'Python Programming',
    description: 'From basics to advanced automation, data analysis, and backend systems.',
    duration: '3 Months',
    level: 'Beginner',
    mentor: 'Suresh Kumar',
    projects: 8,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    category: 'Python',
    badges: ['Certification', 'Beginner Friendly']
  },
  {
    slug: 'java-dsa',
    title: 'Java + DSA',
    description: 'Comprehensive Java training focused on data structures and interview problems.',
    duration: '4 Months',
    level: 'Intermediate',
    mentor: 'Priya Sharma',
    projects: 6,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    category: 'Java',
    badges: ['Interview Prep', 'Problem Solving']
  },
  {
    slug: 'ai-ml-foundations',
    title: 'AI & ML Foundations',
    description: 'Deep dive into machine learning algorithms, neural networks, and AI integration.',
    duration: '5 Months',
    level: 'Advanced',
    mentor: 'Dr. Vivek Rao',
    projects: 5,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
    category: 'AI/ML',
    badges: ['Deep Learning', 'PyTorch']
  },
  {
    slug: 'sdet-training',
    title: 'SDET Training',
    description: 'Learn Selenium, Cucumber, and automated testing frameworks for enterprise apps.',
    duration: '3 Months',
    level: 'Intermediate',
    mentor: 'Neeta Reddy',
    projects: 10,
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=600',
    category: 'SDET',
    badges: ['Automation', 'QA Support']
  }
];

export const CoursesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Top Section */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-extrabold text-navy-900 tracking-tight mb-6">
              Explore Career-Focused Courses
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Industry-aligned programs designed for placements, projects, and real-world skills.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-10 py-20 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-10 shrink-0">
          <div>
            <h3 className="text-sm font-bold text-navy-900 uppercase tracking-widest mb-6">Categories</h3>
            <div className="space-y-3">
              {['Full Stack', 'Python', 'Java', 'AI/ML', 'SDET'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-slate-600 font-medium group-hover:text-navy-900 transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-navy-900 uppercase tracking-widest mb-6">Skill Level</h3>
            <div className="space-y-3">
              {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <label key={level} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-slate-600 font-medium group-hover:text-navy-900 transition-colors">{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <label className="flex items-center justify-between cursor-pointer group">
              <span className="font-bold text-navy-900">Placement Support</span>
              <input type="checkbox" className="w-10 h-5 bg-slate-200 rounded-full appearance-none checked:bg-blue-600 transition-colors relative" />
            </label>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-10">
          {/* Search Bar */}
          <div className="floating-label-group">
            <input 
              type="text" 
              className="floating-label-input" 
              placeholder="Search courses..." 
              id="course-search"
            />
            <label htmlFor="course-search" className="floating-label">Search for courses, skills, or mentors</label>
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {course.badges.map((badge, bi) => (
                      <span key={bi} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-navy-900 shadow-sm">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-2 py-1 bg-blue-50 rounded-lg">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Clock size={14} />
                      <span className="text-xs font-bold">{course.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-900 mb-2 leading-tight">{course.title}</h3>
                  <p className="text-slate-500 text-sm font-medium mb-6 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-navy-900">
                        {course.mentor.charAt(0)}
                      </div>
                      <span className="text-xs font-bold text-navy-900">{course.mentor}</span>
                    </div>
                    <Link 
                      to={`/courses/${course.slug}`}
                      className="text-sm font-bold text-navy-900 flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Enroll <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};
