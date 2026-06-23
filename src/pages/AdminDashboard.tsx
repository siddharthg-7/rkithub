import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sidebar } from '../components/Sidebar';
import { 
  Users, 
  BookOpen, 
  Plus, 
  Trash2, 
  Edit, 
  MoreVertical,
  Activity,
  ArrowUpRight,
  Filter,
  Download
} from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { UserProfile } from '../types';

export const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userData: UserProfile[] = [];
        querySnapshot.forEach((doc) => {
          userData.push(doc.data() as UserProfile);
        });
        setUsers(userData);
      } catch (err) {
        console.error('Failed to fetch users', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div>
            <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">System Administration</h1>
            <p className="text-slate-500 font-medium text-lg mt-2">Global platform overview and resource management.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 rounded-2xl text-navy-900 font-bold hover:bg-slate-50 transition-all shadow-sm">
              <Download size={18} /> <span className="hidden sm:inline">Export</span>
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-900 text-white rounded-2xl font-bold hover:bg-navy-800 transition-all shadow-xl shadow-navy-900/10">
              <Plus size={18} /> New Course
            </button>
          </div>
        </header>

        {/* Admin Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { label: 'Total Revenue', value: '$84,200', trend: '+12.5%', icon: Activity },
            { label: 'Active Students', value: users.length.toString(), trend: '+18.2%', icon: Users },
            { label: 'Content Hours', value: '420h', trend: '+4.5%', icon: BookOpen }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start justify-between group hover:shadow-xl hover:shadow-slate-200/50 transition-all"
            >
              <div>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-4">{stat.label}</p>
                <h3 className="text-4xl font-extrabold text-navy-900 mb-3 tracking-tight">{stat.value}</h3>
                <div className="flex items-center gap-1.5 text-navy-900 text-sm font-extrabold bg-navy-900/5 px-2.5 py-1 rounded-full w-fit">
                  <ArrowUpRight size={14} strokeWidth={3} />
                  <span>{stat.trend}</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-navy-900 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-navy-900/20 group-hover:scale-110 transition-transform">
                <stat.icon size={26} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* User Management Table */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden mb-12">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white">
            <div>
              <h2 className="text-2xl font-extrabold text-navy-900 tracking-tight flex items-center gap-4">
                User Directory
                <span className="px-3 py-1 bg-navy-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">{users.length} Total</span>
              </h2>
            </div>
            <div className="flex gap-3">
              <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-navy-900 hover:border-navy-900 transition-all shadow-sm">
                <Filter size={20} />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-10 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50/30">User</th>
                  <th className="px-10 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50/30">Status/Role</th>
                  <th className="px-10 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50/30">Email Address</th>
                  <th className="px-10 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50/30">Joined Date</th>
                  <th className="px-10 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50/30 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {users.map((user, i) => (
                  <tr key={user.uid} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-10 py-7">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-navy-900 to-navy-800 flex items-center justify-center font-bold text-white shadow-lg overflow-hidden border border-white/10">
                          {user.name.charAt(0)}
                        </div>
                        <span className="font-extrabold text-navy-900 tracking-tight">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-10 py-7">
                      <span className={`px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${
                        user.role === 'admin' 
                          ? 'bg-navy-900 text-white border-navy-900 shadow-md shadow-navy-900/10' 
                          : 'bg-white text-navy-900 border-slate-100 shadow-sm'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-10 py-7 text-slate-500 font-bold text-sm">{user.email}</td>
                    <td className="px-10 py-7 text-slate-400 font-bold text-sm">
                      {user.createdAt ? new Date(user.createdAt.seconds * 1000).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'}
                    </td>
                    <td className="px-10 py-7 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                        <button className="p-2.5 text-slate-400 hover:text-navy-900 hover:bg-white border hover:border-slate-200 rounded-xl transition-all shadow-hover-sm">
                          <Edit size={18} />
                        </button>
                        <button className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-white border hover:border-red-100 rounded-xl transition-all shadow-hover-sm">
                          <Trash2 size={18} />
                        </button>
                        <button className="p-2.5 text-slate-400 hover:bg-slate-100 rounded-xl">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && !loading && (
                  <tr>
                    <td colSpan={5} className="px-10 py-8 md:py-16 md:py-32 text-center text-slate-400 font-bold uppercase tracking-widest text-xs">
                      No users found in the system data.
                    </td>
                  </tr>
                )}
                {loading && (
                  <tr>
                    <td colSpan={5} className="px-10 py-8 md:py-16 md:py-32 text-center">
                      <div className="w-8 h-8 border-4 border-navy-900/20 border-t-navy-900 rounded-full animate-spin mx-auto" />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
