
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Business?</span>
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of successful companies that have already transformed their operations with our innovative solutions. 
          Let's discuss how we can help you achieve your digital transformation goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-white hover:bg-gray-100 text-purple-900 hover:text-purple-800 text-lg px-10 py-6 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group font-semibold">
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white/70 text-white bg-white/10 hover:bg-white/20 hover:border-white/90 text-lg px-10 py-6 rounded-2xl backdrop-blur-sm transition-all duration-300 group font-semibold">
            <Link to="/contact" className="flex items-center gap-2">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
