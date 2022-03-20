import React from "react";
import ConfsquareSection from "../components/ConfsquareSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
// import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from "../components/ContactBanner";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ConfsquareSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactBanner />
    </div>
  );
}
