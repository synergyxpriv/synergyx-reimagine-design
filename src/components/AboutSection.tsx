
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Counter from './Counter';

const AboutSection = () => {
  const stats = [
    { number: "150+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" }
  ];

  const counterStats = [
    { end: 500, suffix: "+", label: "Projects Completed" },
    { end: 98, suffix: "%", label: "Client Satisfaction" },
    { label: "24/7", staticValue: "24/7", description: "Support Available" }
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
              Founded with a vision to bridge the gap between technology and business success, 
              SynergyX Services has been at the forefront of digital transformation for over a decade.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in delivering innovative solutions that empower businesses to thrive 
              in an increasingly digital world. Our team of experts combines deep technical knowledge 
              with strategic business insight to deliver results that matter.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive 
                  sustainable growth and competitive advantage in the digital age.
                </p>
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
                    <Counter end={stat.end!} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-sm sm:text-base text-gray-600 uppercase tracking-wider">
                  {stat.description || stat.label}
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
