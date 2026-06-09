import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { LogOut, LayoutDashboard, Settings, User, ShieldCheck, BookOpen, MessageSquare, FolderPlus, Bell } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../lib/firebase';

export const Sidebar: React.FC = () => {
  const { profile, isAdmin } = useAuth();
  const location = useLocation();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.error('Sign out failed', err);
    }
  };

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { label: 'Notifications', icon: Bell, path: '/notifications' },
    { label: 'Profile', icon: User, path: '/profile' },
    { label: 'Settings', icon: Settings, path: '/settings' },
  ];

  const adminNavItems = [
    { label: 'Admin Panel', icon: ShieldCheck, path: '/admin' },
    { label: 'Manage Courses', icon: FolderPlus, path: '/admin/courses' },
    { label: 'Send Broadcast', icon: MessageSquare, path: '/admin/notifications' },
  ];

  return (
    <div className="w-64 bg-navy-900 text-white h-screen fixed left-0 top-0 hidden md:flex flex-col border-r border-white/10 shadow-2xl z-40">
      <div className="p-8 pb-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
            <BookOpen className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">RK IT Hub</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-4 mb-4">Main Menu</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative group ${
                isActive 
                  ? 'bg-white/10 text-white shadow-xl shadow-black/20 border border-white/5' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-sidebar"
                  className="absolute left-0 w-1 h-6 bg-white rounded-r-full"
                />
              )}
              <Icon size={20} className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'} />
              <span className="font-bold text-sm tracking-tight">{item.label}</span>
            </Link>
          );
        })}
        {isAdmin && (
          <>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-4 mt-8 mb-4">Administration</div>
            {adminNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative group ${
                    isActive 
                      ? 'bg-white/10 text-white shadow-xl shadow-black/20 border border-white/5' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="active-sidebar"
                      className="absolute left-0 w-1 h-6 bg-white rounded-r-full"
                    />
                  )}
                  <Icon size={20} className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'} />
                  <span className="font-bold text-sm tracking-tight">{item.label}</span>
                </Link>
              );
            })}
          </>
        )}
      </nav>

      <div className="p-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-4 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-navy-700 to-navy-800 border border-white/20 flex items-center justify-center text-white font-bold text-lg">
              {profile?.name?.charAt(0) ?? '?'}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate text-white">{profile?.name ?? ''}</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{profile?.role ?? ''}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-black bg-white font-bold text-xs hover:bg-slate-100 transition-all shadow-lg"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
