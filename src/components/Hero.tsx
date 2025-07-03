
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#8B5CF6" fill-opacity="0.1"><circle cx="20" cy="20" r="1.5"/></g></g></svg>')}")`
        }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/3296a7e4-ee25-44e9-8203-51ffdd9272f4.png" 
              alt="SynergyX Services" 
              className="h-20 mx-auto mb-4"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in leading-tight">
            Transform Your Business
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mt-2">
              Digital Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed animate-fade-in max-w-4xl mx-auto font-light" style={{animationDelay: '0.2s'}}>
            Empowering enterprises through cutting-edge technology, strategic innovation, 
            and comprehensive digital transformation services that drive measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg px-10 py-6 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group">
              <Link to="/services" className="flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-10 py-6 rounded-2xl backdrop-blur-sm transition-all duration-300 group">
              <Link to="/contact" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Free Consultation
              </Link>
            </Button>
          </div>

          <div className="mt-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex justify-center space-x-12 text-white/60">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm uppercase tracking-wider">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
