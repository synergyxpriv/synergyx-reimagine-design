import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Brain, Zap, BarChart3, Shield, Database, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AI = () => {
  const aiServices = [
    {
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI roadmaps tailored to your business objectives and industry requirements.",
      icon: Brain
    },
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions that reduce costs and improve efficiency.",
      icon: Zap
    },
    {
      title: "Predictive Analytics",
      description: "Leverage machine learning to forecast trends, optimize resources, and make data-driven decisions.",
      icon: BarChart3
    },
    {
      title: "AI Security Solutions",
      description: "Implement robust AI-powered security systems to protect your digital assets and data.",
      icon: Shield
    },
    {
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights using advanced AI and machine learning algorithms.",
      icon: Database
    },
    {
      title: "Conversational AI",
      description: "Build intelligent chatbots and voice assistants to enhance customer experience and support.",
      icon: MessageSquare
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Recommendation Engine",
      description: "Implemented AI-powered product recommendations that increased sales by 35% for a major online retailer.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      results: "35% increase in sales, 50% improvement in customer engagement"
    },
    {
      title: "Manufacturing Quality Control",
      description: "Deployed computer vision AI to detect defects in real-time, reducing quality issues by 80%.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      results: "80% reduction in defects, $2M annual savings"
    },
    {
      title: "Healthcare Diagnostic Assistant",
      description: "Created an AI system that assists doctors in early disease detection with 95% accuracy.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop",
      results: "95% diagnostic accuracy, 40% faster diagnosis time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Enhanced Technology Pattern Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white/25 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 left-1/3 w-20 h-20 border border-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-60 right-1/3 w-28 h-28 border-2 border-white/25 rounded-lg animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-80 right-10 w-12 h-12 bg-white/15 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-indigo-400/30 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-3/4 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
        
        {/* Circuit-like patterns with more complexity */}
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20h60v60h-60z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
              <circle cx="50" cy="50" r="3" fill="rgba(255,255,255,0.25)"/>
              <path d="M50 20v15M50 65v15M20 50h15M65 50h15" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
            </pattern>
            <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.2)"/>
            </pattern>
            <pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
          <rect width="100%" height="100%" fill="url(#dots)" opacity="0.6"/>
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.4"/>
        </svg>
        
        {/* Diagonal lines and tech patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent transform rotate-12"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent transform -rotate-12"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/6 to-transparent"></div>
        </div>
      </div>

      <Navigation />
      
      {/* Back button */}
      <div className="pt-24 pb-8 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <Button variant="outline" className="border-white/20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Main AI Audit Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Get yourself or your business an
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              AI Audit
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover untapped opportunities and identify areas where AI can transform your business operations, 
            increase efficiency, and drive growth with our comprehensive AI audit.
          </p>

          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-purple/25 transition-all duration-300">
            <Link to="/contact">Schedule Your AI Audit</Link>
          </Button>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              AI Solutions
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive AI services designed to revolutionize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real-world AI implementations that delivered measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4">{study.description}</p>
                  <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg p-3 border border-white/10">
                    <p className="text-sm font-semibold text-purple-300">Results:</p>
                    <p className="text-sm text-white">{study.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI;
