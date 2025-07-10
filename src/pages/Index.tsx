import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import AboutSection from '@/components/AboutSection';
import BrandScroller from '@/components/BrandScroller';
import VenturesPreview from '@/components/VenturesPreview';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import IconScroller from '@/components/IconScroller';
import AIBanner from '@/components/AIBanner';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen relative">
      {/* Faded logo background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.03] select-none">
          <div className="w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center">
              <div className="w-1/2 h-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <AIBanner />
        <ServicesOverview />
        <AboutSection />
        {/* <BrandScroller /> */}
        <IconScroller />
        <VenturesPreview />
        <Testimonials />
        <ContactCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
