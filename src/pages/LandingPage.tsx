import React from 'react';
import { Hero } from '../components/home/hero/Hero';
import { PopularCourses } from '../components/PopularCourses';
import { WhyChoose } from '../components/WhyChoose';
import { PlacementSuccess } from '../components/PlacementSuccess';
import { CompanyTrust } from '../components/CompanyTrust';
import { Testimonials } from '../components/Testimonials';
import { SEO } from '../components/SEO';
import { CTABox } from '../components/CTABox';
import { BottomConversionBlock } from '../components/BottomConversionBlock';
import { ContactSection } from '../components/ContactSection';

export const LandingPage = () => {
  return (
    <div className="relative bg-white flex flex-col min-h-screen">
      <SEO 
        title="Best Software Training Institute in Hyderabad"
        description="RK IT HUB provides top-rated software training, real-time projects, internships, and 100% placement support for Java, Python, MERN Stack, Data Science, and Testing."
        keywords="software training hyderabad, java full stack training, python full stack course, mern stack training, automation testing institute, placement support"
      />
      <main className="flex-grow">
        {/* 1. Hero Area */}
        <Hero />
        
        {/* 2. Company Trust (Agency-Level Bridge) */}
        <CompanyTrust />

        {/* 4. Popular Courses */}
        <PopularCourses />
        
        {/* 5 & 6. Trust & Placements Split */}
        <section className="py-12 md:py-24 bg-white font-sans">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-start">
              <WhyChoose />
              <PlacementSuccess />
            </div>
          </div>
        </section>
        
        {/* 7. Testimonials & CTA Split */}
        <section className="py-12 md:py-24 bg-[#FAFAFA] font-sans">
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
