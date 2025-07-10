import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Counter from './Counter';
import { Target, Eye, Star, Handshake } from 'lucide-react';

const AboutSection = () => {
  const counterStats = [
    { end: 50, suffix: '+', label: 'Projects Completed' },
    { end: 100, suffix: '%', label: 'Client Commitment' },
    { end: 5, suffix: '+', label: 'Experience' },
    { staticValue: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SynergyX</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            SynergyX Services was founded to connect technology with real business growth. For the past years, we've led the way in digital transformation. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We create smart solutions that help businesses succeed in today's digital landscape. Our team blends technical expertise with practical business insight to deliver results that make a difference.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mission</h4>
                  <p className="text-sm text-gray-600">Drive innovation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Eye className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Vision</h4>
                  <p className="text-sm text-gray-600">Future focused</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Star className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                  <p className="text-sm text-gray-600">Quality first</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Handshake className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Partnership</h4>
                  <p className="text-sm text-gray-600">Together we grow</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counter Statistics Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            {counterStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.staticValue ? (
                    stat.staticValue
                  ) : (
                    <Counter end={stat.end} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-sm sm:text-base text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
