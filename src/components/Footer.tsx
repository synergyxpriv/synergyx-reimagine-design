
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const handleServiceClick = (service: string) => {
    // Scroll to services section on home page or navigate to services page
    if (window.location.pathname === '/') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/services';
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              SynergyX Services
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Empowering businesses through innovative technology solutions, strategic consulting, 
              and comprehensive digital transformation services. Your success is our mission.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@synergyxservices.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Business Ave, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/ventures" className="text-gray-300 hover:text-blue-400 transition-colors">Ventures</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleServiceClick('Digital Transformation')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Digital Transformation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('Cloud Solutions')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Cloud Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('AI Integration')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  AI Integration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('Business Consulting')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Business Consulting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('Data Analytics')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Data Analytics
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 SynergyX Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
