import React from 'react';
import { EdTechHero } from '../components/EdTechHero';
import { WhyStruggle } from '../components/WhyStruggle';
import { Trainings } from '../components/Trainings';
import { Placements } from '../components/Placements';
import { Clients } from '../components/Clients';
import { Events } from '../components/Events';
import { SuccessStories } from '../components/SuccessStories';
import { AboutUs } from '../components/AboutUs';
import { CTABanner } from '../components/CTABanner';
import { Contact } from '../components/Contact';

export const LandingPage = () => {
  return (
    <div className="relative">
      <EdTechHero />
      <WhyStruggle />
      <Trainings />
      <Placements />
      <Clients />
      <Events />
      <SuccessStories />
      <AboutUs />
      <CTABanner />
      <Contact />
    </div>
  );
};
