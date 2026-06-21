import React from 'react';
import { HeroSection } from '@/src/components/internships/HeroSection';
import { ValueStrip } from '@/src/components/internships/ValueStrip';
import { CareerTracks } from '@/src/components/internships/CareerTracks';
import { InternshipProcess } from '@/src/components/internships/InternshipProcess';
import { LiveProjects } from '@/src/components/internships/LiveProjects';
import { ImpactMetrics } from '@/src/components/internships/ImpactMetrics';
import { Testimonials } from '@/src/components/internships/Testimonials';
import { HiringPartners } from '@/src/components/internships/HiringPartners';
import { FinalCTA } from '@/src/components/internships/FinalCTA';

export const InternshipsPage = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans overflow-hidden">
      <HeroSection />
      <ValueStrip />
      <CareerTracks />
      <InternshipProcess />
      <LiveProjects />
      <ImpactMetrics />
      <Testimonials />
      <HiringPartners />
      <FinalCTA />
    </div>
  );
};
