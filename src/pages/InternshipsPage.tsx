import React from 'react';
import { HeroSection } from '@/src/components/internships/HeroSection';
import { PartnershipTrustBar } from '@/src/components/internships/PartnershipTrustBar';
import { HiringPartners } from '@/src/components/internships/HiringPartners';
import { LearningJourney } from '@/src/components/internships/LearningJourney';
import { CareerTracks } from '@/src/components/internships/CareerTracks';
import { InternshipProcess } from '@/src/components/internships/InternshipProcess';

import { MentorEcosystem } from '@/src/components/internships/MentorEcosystem';
import { ImpactMetrics } from '@/src/components/internships/ImpactMetrics';
import { InternshipJourney } from '@/src/components/internships/InternshipJourney';
import { SuccessWall } from '@/src/components/internships/SuccessWall';
import { ComparisonSection } from '@/src/components/internships/ComparisonSection';
import { PricingSection } from '@/src/components/internships/PricingSection';
import { FinalCTA } from '@/src/components/internships/FinalCTA';

export const InternshipsPage = () => {
  return (
    <div className="bg-[var(--color-bg-light)] min-h-screen font-sans overflow-hidden selection:bg-[var(--color-primary)] selection:text-white">
      <HeroSection />
      <PartnershipTrustBar />
      <HiringPartners />
      <LearningJourney />
      <CareerTracks />
      <InternshipProcess />
      
      {/* 2-Column Section: Mentor + Impact */}
      <div className="flex flex-col lg:flex-row bg-[#f8fafc]">
        <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
          <MentorEcosystem />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <ImpactMetrics />
        </div>
      </div>

      <InternshipJourney />

      {/* 2-Column Section: Success Wall + Comparison */}
      <div className="flex flex-col lg:flex-row bg-[#f8fafc] border-t border-[#E2E8F0]">
        <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[#E2E8F0] flex flex-col items-center py-24">
          <SuccessWall />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center py-24">
          <ComparisonSection />
        </div>
      </div>

      <PricingSection />
      <FinalCTA />
    </div>
  );
};
