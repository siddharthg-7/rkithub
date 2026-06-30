import React from 'react';
import { Hero } from '../components/home/hero/Hero';
import { PopularCourses } from '../components/PopularCourses';
import { PlacementSuccess } from '../components/PlacementSuccess';
import { CompanyTrust } from '../components/CompanyTrust';
import { SEO } from '../components/SEO';
import { CareerConsultationHub } from '../components/CareerConsultationHub';

export const LandingPage = () => {
  return (
    <div className="relative bg-white flex flex-col min-h-screen">
      <SEO
        title="Best IT Training Institute in Hyderabad"
        description="RK IT HUB provides top-tier IT courses in Java Full Stack, Python, MERN Stack, Data Science, and AI. Get trained by industry experts with 100% placement support."
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "RK IT HUB",
          "url": "https://rkithub.com",
          "logo": "https://rkithub.com/VHUB_Logo.svg",
          "description": "Leading software training institute offering real-time, project-based IT training with 100% placement support.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          }
        }}
      />
      <main className="flex-grow">
        {/* 1. Hero Area */}
        <Hero />

        {/* 2. Company Trust (Agency-Level Bridge) */}
        <CompanyTrust />

        {/* 4. Popular Courses */}
        <PopularCourses />

        {/* 6. Placement Success & Student Voices */}
        <PlacementSuccess />

        {/* 7. High-Impact Career Consultation Hub */}
        <CareerConsultationHub />
      </main>
    </div>
  );
};
