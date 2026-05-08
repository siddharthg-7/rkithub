import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 bg-[#FAFAFA] relative overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col w-full relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
