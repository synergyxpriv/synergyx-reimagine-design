
import React from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Cpu, 
  Server, 
  Wifi,
  Monitor,
  Settings,
  Lock,
  Layers,
  Rocket,
  Bot
} from 'lucide-react';

const IconScroller = () => {
  const icons = [
    { Icon: Code, name: 'Development' },
    { Icon: Smartphone, name: 'Mobile' },
    { Icon: Cloud, name: 'Cloud' },
    { Icon: Database, name: 'Database' },
    { Icon: Shield, name: 'Security' },
    { Icon: Zap, name: 'Performance' },
    { Icon: Globe, name: 'Web' },
    { Icon: Cpu, name: 'Processing' },
    { Icon: Server, name: 'Infrastructure' },
    { Icon: Wifi, name: 'Connectivity' },
    { Icon: Monitor, name: 'Analytics' },
    { Icon: Settings, name: 'Configuration' },
    { Icon: Lock, name: 'Privacy' },
    { Icon: Layers, name: 'Architecture' },
    { Icon: Rocket, name: 'Innovation' },
    { Icon: Bot, name: 'AI/ML' }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Our Technology Stack
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Cutting-edge technologies and tools we use to deliver exceptional solutions
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of icons */}
          {icons.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-6 p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center">
                <item.Icon 
                  size={40} 
                  className="mx-auto mb-3 text-purple-600 group-hover:text-indigo-600 transition-colors duration-300" 
                />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {icons.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-6 p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center">
                <item.Icon 
                  size={40} 
                  className="mx-auto mb-3 text-purple-600 group-hover:text-indigo-600 transition-colors duration-300" 
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
