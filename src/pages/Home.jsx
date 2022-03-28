import React from "react";
import ConfsquareSection from "../components/ConfsquareSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsCarouselSection from "../components/ProjectsCarouselSection";
// import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from "../components/ContactBanner";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ConfsquareSection />
      <ServicesSection />
      <ProjectsCarouselSection />
      {/* <TestimonialsSection /> */}
      <ContactBanner />
    </div>
  );
}
