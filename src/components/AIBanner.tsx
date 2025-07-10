import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Transform Your Business with AI
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
          Automate processes, unlock insights, and stay ahead of the curve.
          Future-ready solutions designed for real results.
          </p>

          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-lg px-10 py-6 rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 group"
          >
            <Link to="/ai" className="flex items-center gap-2">
              Explore AI Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIBanner;
