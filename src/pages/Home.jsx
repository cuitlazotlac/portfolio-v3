import React from "react";
import ConfsquareSection from "../sections/ConfsquareSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsCarouselSection from "../sections/ProjectsCarouselSection";
// import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from "../components/ContactBanner";
import HeroSection from "../sections/HeroSection";

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
