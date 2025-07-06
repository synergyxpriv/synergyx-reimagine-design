import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ExploreOurWork = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      category: "Digital Transformation",
      title: "Enterprise Software Modernization",
      description: "Complete legacy system overhaul for a Fortune 500 company, improving efficiency by 40%",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop&crop=center",
      tags: ["Enterprise", "Legacy Migration", "Process Automation"]
    },
    {
      category: "Cloud Solutions",
      title: "Multi-Cloud Infrastructure",
      description: "Scalable cloud architecture supporting 1M+ users with 99.9% uptime",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center",
      tags: ["AWS", "Azure", "Kubernetes", "DevOps"]
    },
    {
      category: "AI Integration",
      title: "Intelligent Customer Support System",
      description: "AI-powered chatbot reducing support tickets by 60% while improving satisfaction",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&crop=center",
      tags: ["Machine Learning", "NLP", "Automation"]
    },
    {
      category: "Business Consulting",
      title: "Digital Strategy Roadmap",
      description: "Comprehensive digital transformation strategy for retail chain expansion",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop&crop=center",
      tags: ["Strategy", "Consulting", "Roadmap"]
    },
    {
      category: "Data Analytics",
      title: "Real-time Business Intelligence",
      description: "Advanced analytics dashboard providing real-time insights across all business units",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop&crop=center",
      tags: ["BI", "Real-time", "Dashboards"]
    },
    {
      category: "Cybersecurity",
      title: "Enterprise Security Framework",
      description: "Comprehensive security implementation protecting against 99.9% of threats",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop&crop=center",
      tags: ["Security", "Compliance", "Risk Management"]
    }
  ];

  const categories = ['All', 'Digital Transformation', 'Cloud Solutions', 'AI Integration', 'Business Consulting', 'Data Analytics', 'Cybersecurity'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Explore Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            Discover the innovative solutions we've delivered for our clients across various industries and technologies.
          </p>
          <div className="mt-8">
            <Button variant="secondary" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:text-white font-medium px-6 py-2 transition-all duration-300">
              <Link to="/services" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white text-purple-600 hover:bg-gray-50">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Let's discuss how we can bring your vision to life with innovative solutions tailored to your business needs.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-50 text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-xl hover:shadow-white/10 transition-all duration-300">
            <Link to="/contact">
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExploreOurWork;
