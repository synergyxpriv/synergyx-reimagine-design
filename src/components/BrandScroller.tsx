
import React from 'react';

const BrandScroller = () => {
  const brands = [
    'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Tesla', 'Netflix', 'Adobe',
    'Salesforce', 'Oracle', 'IBM', 'Intel', 'Nvidia', 'PayPal', 'Zoom', 'Spotify'
  ];

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          We're proud to work with industry leaders who trust us with their digital transformation
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-xl font-semibold text-gray-700 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-xl font-semibold text-gray-700 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandScroller;
