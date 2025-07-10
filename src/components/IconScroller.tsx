import React from 'react';

const techStack = [
  { name: 'HTML5', logo: '/html5.svg' },
  { name: 'CSS3', logo: '/Css3.svg' },
  { name: 'JavaScript', logo: '/javascript.svg' },
  { name: 'React.js', logo: '/react.svg' },
  { name: 'Next.js', logo: '/nextjs.svg' },
  { name: 'Node.js', logo: '/nodejs.svg' },
  { name: 'Tailwind CSS', logo: '/tailwindCss.svg' },
  { name: 'WordPress', logo: '/wordpress.svg' },
  { name: 'Microsoft Power BI', logo: '/powerbi.svg' },
  { name: 'Microsoft Excel', logo: '/excel.svg' },
  { name: 'Google Analytics', logo: '/google-analytics.svg' },
  { name: 'Google Search Console', logo: '/google-search-console.svg' },
  { name: 'SEMrush', logo: '/semrush.svg' },
  { name: 'Meta Ads Manager', logo: '/meta.svg' },
  { name: 'Adobe Photoshop', logo: '/photoshop.svg' },
  { name: 'Adobe Illustrator', logo: '/illustrator.svg' },
  { name: 'Canva', logo: '/canva.svg' },
  { name: 'Grammarly', logo: '/grammarly.svg' },
  { name: 'ChatGPT', logo: '/chatgpt.svg' },
  { name: 'Microsoft Word', logo: '/word.svg' },
];

const IconScroller = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Our Technology Stack
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          The tools and platforms we use to deliver exceptional solutions
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll techstack-scroller">
          {/* First set of logos */}
          {techStack.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-6 p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center">
                <img
                  src={item.logo}
                  alt={item.name + ' logo'}
                  className="mx-auto mb-3 h-10 w-10 object-contain"
                  loading="lazy"
                />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {techStack.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-6 p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center">
                <img
                  src={item.logo}
                  alt={item.name + ' logo'}
                  className="mx-auto mb-3 h-10 w-10 object-contain"
                  loading="lazy"
                />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconScroller;
