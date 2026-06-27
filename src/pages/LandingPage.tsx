import React from 'react';
import { Hero } from '../components/home/hero/Hero';
import { PopularCourses } from '../components/PopularCourses';
import { WhyChoose } from '../components/WhyChoose';
import { PlacementSuccess } from '../components/PlacementSuccess';
import { CompanyTrust } from '../components/CompanyTrust';
import { SEO } from '../components/SEO';
import { CareerConsultationHub } from '../components/CareerConsultationHub';
import { OurFoundation } from '../components/about/OurFoundation';

export const LandingPage = () => {
  return (
    <div className="relative bg-white flex flex-col min-h-screen">
      <SEO
        title="Rk-IT Training Hub"
        description="Transform your career with RK IT HUB's industry-aligned software training in Hyderabad. Real-time projects, internships, and 100% placement support for Java, Python, MERN Stack, Data Science, and Testing."
        keywords="software training hyderabad, java full stack training, python full stack course, mern stack training, automation testing institute, placement support"
      />
      <main className="flex-grow">
        {/* 1. Hero Area */}
        <Hero />

        {/* 2. Company Trust (Agency-Level Bridge) */}
        <CompanyTrust />

        {/* 3. Our Foundation */}
        <OurFoundation />

        {/* 4. Popular Courses */}
        <PopularCourses />

        {/* 5. Why RK IT Hub (What Makes Us Different) */}
        <WhyChoose />

        {/* 6. Placement Success & Student Voices */}
        <PlacementSuccess />

        {/* 7. High-Impact Career Consultation Hub */}
        <CareerConsultationHub />
      </main>
    </div>
  );
};
