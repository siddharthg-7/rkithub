import React from 'react';
import { CoverflowHero } from '../components/CoverflowHero';
import { WhyStruggle } from '../components/WhyStruggle';
import { Trainings } from '../components/Trainings';
import { Placements } from '../components/Placements';
import { Clients } from '../components/Clients';
import { SuccessStories } from '../components/SuccessStories';
import { AboutUs } from '../components/AboutUs';
import { CTABanner } from '../components/CTABanner';
import { Contact } from '../components/Contact';

export const LandingPage = () => {
  return (
    <div className="relative">
      <CoverflowHero />
      <WhyStruggle />
      <Trainings />
      <Placements />
      <Clients />
      <SuccessStories />
      <AboutUs />
      <CTABanner />
      <Contact />
    </div>
  );
};
