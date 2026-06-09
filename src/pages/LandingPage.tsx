import React from 'react';
import { CorporateHero } from '../components/CorporateHero';
import { StatsSection } from '../components/StatsSection';
import { TrainingModes } from '../components/TrainingModes';
import { PopularCourses } from '../components/PopularCourses';
import { WhyChoose } from '../components/WhyChoose';
import { PlacementSuccess } from '../components/PlacementSuccess';
import { Testimonials } from '../components/Testimonials';
import { CTABox } from '../components/CTABox';
import { BottomConversionBlock } from '../components/BottomConversionBlock';
import { ContactSection } from '../components/ContactSection';

export const LandingPage = () => {
  return (
    <div className="relative bg-white flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* 1. Hero Area */}
        <CorporateHero />
        
        {/* 2. Stats Bar */}
        <StatsSection />
        
        {/* 3. Training Modes */}
        <TrainingModes />

        {/* 4. Popular Courses */}
        <PopularCourses />
        
        {/* 5 & 6. Trust & Placements Split */}
        <section className="py-24 bg-white font-sans">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-start">
              <WhyChoose />
              <PlacementSuccess />
            </div>
          </div>
        </section>
        
        {/* 7. Testimonials & CTA Split */}
        <section className="py-24 bg-[#FAFAFA] font-sans">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center">
              <Testimonials />
              <CTABox />
            </div>
          </div>
        </section>
        
        {/* 8. Side-by-side About & CTA */}
        <BottomConversionBlock />

        {/* 9. Contact */}
        <ContactSection />
      </main>
    </div>
  );
};
