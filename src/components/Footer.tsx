import React from 'react';
import { BookOpen } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200/60 mt-auto w-full z-10 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold tracking-tight text-slate-900 text-xl">RK IT Hub</span>
        </div>
        <p className="text-sm text-slate-500 font-medium">© {new Date().getFullYear()} RK IT Hub. Built with ❤️ and Code.</p>
      </div>
    </footer>
  );
};
