
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Rocket, Cloud, Brain, Briefcase, BarChart3, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Business Intelligence",
      description: "Turn data into actionable insights with customized Power BI dashboards for strategic decision-making.",
      icon: Rocket,
      features: ["Actionable Insights", "Interactive Dashboards", "Data-Driven Decisions"],
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      title: "Website Development",
      description: "Build a powerful online presence with expertly crafted, user-friendly websites designed for your business.",
      icon: Cloud,
      features: ["Mobile Responsive Design", "Conversion-Focused Layouts", "Strong Brand Identity"],
      gradient: "from-indigo-600 to-blue-600",
    },
    {
      title: "Social Media Management",
      description: "Boost your brand’s visibility with strategic social media management and engaging content.",
      icon: Brain,
      features: ["Audience Engagement", "Consistent Posting", "Brand Awareness Growth"],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Paid Ads Marketing",
      description: "Maximize your reach with targeted paid ads that drive conversions and boost ROI.",
      icon: Briefcase,
      features: ["Precise Targeting", "Maximized ROI", "Scalable Campaigns"],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "E‑Commerce Store Setup",
      description: "Streamline your sales with seamless ecommerce store setup and effective management solutions.",
      icon: BarChart3,
      features: ["Seamless Checkout", "Smart Inventory", "Increased Online Sales"],
      gradient: "from-indigo-600 to-blue-600",
    },
    {
      title: "Graphics Designing",
      description: "From logos to full-scale marketing materials, we ensure every element communicates your message.",
      icon: Shield,
      features: ["Visual Identity", "Brand Consistency", "Creative Impact"],
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      title: "Local SEO",
      description: "Improve local search rankings with expert SEO and efficient Google Business Profile management.",
      icon: Shield,
      features: ["Better Local Visibility", "Optimized Listings", "Local Traffic Boost"],
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      title: "YouTube Optimization",
      description: "Maximize the reach and impact of your videos by enhancing visibility, keywords, thumbnails, and compelling titles/descriptions.",
      icon: Shield,
      features: ["Eye-Catching Thumbnails", "Effective Keywords", "More Organic Views"],
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      title: "Copy Writing",
      description: "High-quality copies for blogs, posts, Emails, etc that drive conversions and strengthen your brand voice.",
      icon: Shield,
      features: ["Clear Messaging", "Persuasive Content", "Authentic Tone"],
      gradient: "from-blue-600 to-cyan-600"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive technology solutions designed to accelerate your business growth, 
            optimize operations, and drive digital transformation success.
          </p>
        </div>
      </section>

      {/* Transition Spacer */}
      <div className="h-16 bg-gradient-to-b from-purple-900/20 to-gray-50"></div>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}></div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className={`bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 group/btn`}>
                      <Link to="/explore-our-work" className="flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transition Spacer */}
      <div className="h-16 bg-gradient-to-b from-gray-50 to-purple-600"></div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Let's discuss how our services can help transform your business. 
            Contact us today for a free consultation and custom solution proposal.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-50 text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-xl hover:shadow-white/10 transition-all duration-300 group">
            <Link to="/contact" className="flex items-center gap-2">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
