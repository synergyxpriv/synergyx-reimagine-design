
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextRotator from './TextRotator';

const Hero = () => {
  const rotatingTexts = [
    "Digital Excellence",
    "Innovation Solutions", 
    "Strategic Growth",
    "Technology Leadership"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-indigo-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-5 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
            Transform Your Business
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mt-2 min-h-[1.2em]">
              <TextRotator texts={rotatingTexts} interval={3000} />
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed animate-fade-in max-w-3xl mx-auto font-light px-4" style={{animationDelay: '0.2s'}}>
            Empowering enterprises through cutting-edge technology, strategic innovation, 
            and comprehensive digital transformation services that drive measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in px-4" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group font-semibold">
              <Link to="/services" className="flex items-center justify-center gap-2">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white/70 text-white bg-white/10 hover:bg-white/20 hover:border-white/90 text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 rounded-2xl backdrop-blur-sm transition-all duration-300 group font-semibold">
              <Link to="/contact" className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
