
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl -translate-x-24 sm:-translate-x-32 -translate-y-24 sm:-translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl translate-x-32 sm:translate-x-48 translate-y-32 sm:translate-y-48"></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight px-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg sm:text-xl text-purple-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4">
          Let's discuss how SynergyX Services can help you achieve your digital transformation goals. 
          Get started with a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-purple-700 hover:bg-gray-50 text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-xl hover:shadow-white/10 transition-all duration-300 group">
            <Link to="/contact" className="flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" className="w-full sm:w-auto bg-white/20 border-2 border-white/50 text-white hover:bg-white/30 hover:border-white/70 backdrop-blur-sm text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-2xl transition-all duration-300">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
