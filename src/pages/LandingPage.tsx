import React from 'react';
import { CorporateHero } from '../components/CorporateHero';
import { LiveBatchStrip } from '../components/LiveBatchStrip';
import { TrainingModes } from '../components/TrainingModes';
import { PopularCourses } from '../components/PopularCourses';
import { WhyChoose } from '../components/WhyChoose';
import { Testimonials } from '../components/Testimonials';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';

export const LandingPage = () => {
  return (
    <div className="relative">
      <CorporateHero />
      <LiveBatchStrip />
      <TrainingModes />
      <PopularCourses />
      <WhyChoose />
      <Testimonials />
      <AboutSection />
      <ContactSection />
    </div>
  );
};
