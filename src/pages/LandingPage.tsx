import React from 'react';
import { Hero } from '../components/home/hero/Hero';
import { PopularCourses } from '../components/PopularCourses';
import { WhyChoose } from '../components/WhyChoose';
import { PlacementSuccess } from '../components/PlacementSuccess';
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
        
        {/* Soft Divider from Hero to Light Section */}
        <div className="w-full h-12 sm:h-16 lg:h-24 bg-gradient-to-b from-[#0B1630] to-white" style={{ marginTop: '-2px' }}>
          <svg className="w-full h-full fill-white" preserveAspectRatio="none" viewBox="0 0 1440 74">
            <path d="M0,0 C240,74 720,74 1440,0 L1440,74 L0,74 Z" />
          </svg>
        </div>

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
