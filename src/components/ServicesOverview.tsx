
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Cloud, Brain, Briefcase, BarChart3, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      title: "Digital Transformation",
      description: "Modernize your business processes with cutting-edge digital solutions that streamline operations and enhance customer experiences.",
      icon: Rocket,
      features: ["Process Automation", "Legacy System Migration", "Digital Strategy"],
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services that reduce costs while improving performance and security.",
      icon: Cloud,
      features: ["Cloud Migration", "Infrastructure Management", "Security & Compliance"],
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.",
      icon: Brain,
      features: ["Machine Learning", "Predictive Analytics", "Process Automation"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Business Consulting",
      description: "Strategic guidance and expert consulting to optimize your business operations and achieve sustainable growth.",
      icon: Briefcase,
      features: ["Strategic Planning", "Process Optimization", "Change Management"],
      gradient: "from-cyan-600 to-teal-600"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics solutions that drive informed decision-making.",
      icon: BarChart3,
      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling"],
      gradient: "from-teal-600 to-green-600"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      icon: Shield,
      features: ["Threat Assessment", "Security Audits", "Compliance Management"],
      gradient: "from-green-600 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Our <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden relative"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="pb-4 relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn text-purple-600 hover:text-purple-700 hover:bg-purple-50 font-semibold p-0 h-auto"
                    asChild
                  >
                    <Link to="/services" className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg px-12 py-6 rounded-2xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
