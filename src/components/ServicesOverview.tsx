
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesOverview = () => {
  const services = [
    {
      title: "Digital Transformation",
      description: "Modernize your business processes with cutting-edge digital solutions that streamline operations and enhance customer experiences.",
      icon: "🚀",
      features: ["Process Automation", "Legacy System Migration", "Digital Strategy"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services that reduce costs while improving performance and security.",
      icon: "☁️",
      features: ["Cloud Migration", "Infrastructure Management", "Security & Compliance"]
    },
    {
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.",
      icon: "🤖",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation"]
    },
    {
      title: "Business Consulting",
      description: "Strategic guidance and expert consulting to optimize your business operations and achieve sustainable growth.",
      icon: "💼",
      features: ["Strategic Planning", "Process Optimization", "Change Management"]
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics solutions that drive informed decision-making.",
      icon: "📊",
      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      icon: "🔒",
      features: ["Threat Assessment", "Security Audits", "Compliance Management"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
