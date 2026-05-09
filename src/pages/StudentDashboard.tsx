import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sidebar } from '../components/Sidebar';
import { 
  BookOpen, 
  TrendingUp, 
  Clock, 
  Award, 
  Search, 
  Bell,
  ChevronRight,
  Play
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/firebase';
import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore';

export const StudentDashboard: React.FC = () => {
  const { profile } = useAuth();
  const [courses, setCourses] = useState<any[]>([]);

  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const q = query(collection(db, 'courses'), orderBy('createdAt', 'desc'), limit(3));
        const snapshot = await getDocs(q);
        const fetchedCourses: any[] = [];
        snapshot.forEach(doc => {
          fetchedCourses.push({ id: doc.id, ...doc.data() });
        });
        setCourses(fetchedCourses);
      } catch (err) {
        console.error("Failed to fetch courses", err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div>
            <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">Good Morning, {profile?.name.split(' ')[0]} 👋</h1>
            <p className="text-slate-500 font-medium text-lg mt-2">Continue your learning journey where you left off.</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative group flex-1 md:flex-none">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-navy-900 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-navy-900/10 transition-all w-full md:w-72 shadow-sm text-sm font-medium"
              />
            </div>
            <button className="relative w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-navy-900 hover:bg-slate-50 transition-all shadow-sm">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-navy-900 rounded-full border-2 border-white shadow-sm shadow-navy-900/20" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Courses', value: '4', icon: BookOpen, color: 'bg-navy-900 text-white' },
            { label: 'Hours', value: '42.5', icon: Clock, color: 'bg-navy-900/5 text-navy-900' },
            { label: 'Progress', value: '78%', icon: TrendingUp, color: 'bg-navy-900/5 text-navy-900' },
            { label: 'Awards', value: '12', icon: Award, color: 'bg-navy-900/5 text-navy-900' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-default"
            >
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-navy-900/5`}>
                <stat.icon size={22} />
              </div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-extrabold text-navy-900 mt-2">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-2xl font-extrabold text-navy-900 tracking-tight">Recent Courses</h2>
              <button className="text-sm font-bold text-navy-900 border-b border-transparent hover:border-navy-900 transition-all">View All</button>
            </div>
            <div className="space-y-6">
              {courses.length > 0 ? courses.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6 group hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer"
                >
                  <div className="w-16 h-16 bg-slate-50 text-navy-900 rounded-2xl flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition-all shadow-inner overflow-hidden relative">
                    {course.image ? <img src={course.image} className="w-full h-full object-cover opacity-50 mix-blend-multiply" alt="course" /> : <Play size={24} fill="currentColor" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy-900 leading-tight mb-2">{course.title}</h3>
                    <div className="flex items-center gap-4">
                      <p className="text-xs font-bold text-slate-400 capitalize">{course.instructor || 'RK IT Hub'}</p>
                      <span className="w-1 h-1 bg-slate-200 rounded-full" />
                      <p className="text-xs font-extrabold text-navy-900">0% Completed</p>
                    </div>
                    <div className="mt-5 w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                      <div className="h-full bg-navy-900 rounded-full shadow-sm" style={{ width: `0%` }} />
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-navy-900 group-hover:translate-x-1 transition-all mr-2" />
                </motion.div>
              )) : (
                <div className="p-8 text-center bg-white border border-slate-100 rounded-2xl text-slate-500 font-medium">
                  No recent courses available. Enroll in a course to get started!
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="bg-navy-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-navy-900/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />
              <div className="relative z-10">
                <div className="inline-flex items-center px-2 py-1 bg-white/10 rounded-lg text-[10px] font-bold tracking-widest uppercase mb-6 border border-white/10">
                  Coming Up Next
                </div>
                <h3 className="text-2xl font-extrabold mb-3 tracking-tight">Live Workshop</h3>
                <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">Mastering System Design: Advanced Scalability Patterns with Alex Chen.</p>
                <button className="w-full bg-white py-4 rounded-2xl font-extrabold text-navy-900 shadow-xl hover:bg-slate-50 transition-all transform active:scale-[0.98]">
                  Join Live Session
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
               <h3 className="text-lg font-bold text-navy-900 mb-6">Learning Goal</h3>
               <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-slate-400">Monthly Progress</span>
                  <span className="text-sm font-extrabold text-navy-900">12/15 hrs</span>
               </div>
               <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden mb-6">
                  <div className="h-full bg-navy-900 rounded-full" style={{ width: '80%' }} />
               </div>
               <p className="text-xs font-medium text-slate-400 leading-relaxed">You're ahead of your goal! Keep it up to finish the Advanced React course this week.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
