import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SolutionsSection from '../components/SolutionsSection';
import VisionSection from '../components/VisionSection';
import ProductsSection from '../components/ProductsSection';
import InnovationSection from '../components/InnovationSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <VisionSection />
      <ProductsSection />
      <InnovationSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}