
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <Navigation />
      
      {/* Back button */}
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <Button variant="outline" className="border-white/20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              with AI
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover how artificial intelligence can revolutionize your business operations, 
            enhance productivity, and drive unprecedented growth.
          </p>

          {/* Placeholder content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-200">Custom AI implementations tailored to your business needs.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-200">Advanced ML models to predict and optimize your operations.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Automation</h3>
              <p className="text-gray-200">Streamline processes with intelligent automation systems.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AI;
