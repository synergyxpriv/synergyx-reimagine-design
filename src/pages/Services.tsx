
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Rocket, Cloud, Brain, Briefcase, BarChart3, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Digital Transformation",
      description: "Comprehensive digital modernization strategies that transform your business processes, customer experiences, and operational efficiency.",
      icon: Rocket,
      gradient: "from-purple-600 to-indigo-600",
      features: [
        "Legacy System Modernization",
        "Process Automation & Optimization",
        "Digital Strategy Development",
        "Change Management Support",
        "Technology Roadmap Planning",
        "Digital Culture Transformation"
      ],
      benefits: [
        "Reduced operational costs by 30-50%",
        "Improved customer satisfaction",
        "Streamlined business processes",
        "Enhanced competitive advantage"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure design, migration services, and ongoing management that reduces costs while improving performance and security.",
      icon: Cloud,
      gradient: "from-indigo-600 to-blue-600",
      features: [
        "Cloud Migration Strategy",
        "Infrastructure as Code",
        "Multi-Cloud Architecture",
        "Cloud Security Implementation",
        "Cost Optimization",
        "24/7 Monitoring & Support"
      ],
      benefits: [
        "40% reduction in infrastructure costs",
        "99.9% uptime guarantee",
        "Scalable on-demand resources",
        "Enhanced security and compliance"
      ]
    },
    {
      title: "AI Integration",
      description: "Advanced artificial intelligence and machine learning solutions that automate processes, provide predictive insights, and drive innovation.",
      icon: Brain,
      gradient: "from-blue-600 to-cyan-600",
      features: [
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Process Automation",
        "AI Strategy Consulting"
      ],
      benefits: [
        "60% faster decision-making",
        "Automated routine tasks",
        "Predictive business insights",
        "Enhanced customer experiences"
      ]
    },
    {
      title: "Business Consulting",
      description: "Strategic guidance and expert consulting services to optimize operations, improve efficiency, and drive sustainable business growth.",
      icon: Briefcase,
      gradient: "from-cyan-600 to-teal-600",
      features: [
        "Strategic Planning & Roadmapping",
        "Process Optimization",
        "Change Management",
        "Technology Assessment",
        "Risk Management",
        "Performance Optimization"
      ],
      benefits: [
        "Improved operational efficiency",
        "Strategic technology alignment",
        "Reduced business risks",
        "Accelerated growth trajectory"
      ]
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable business insights with advanced analytics, visualization, and business intelligence solutions.",
      icon: BarChart3,
      gradient: "from-teal-600 to-green-600",
      features: [
        "Business Intelligence Platforms",
        "Data Warehouse Design",
        "Advanced Analytics",
        "Real-time Dashboards",
        "Predictive Modeling",
        "Data Governance"
      ],
      benefits: [
        "Data-driven decision making",
        "Real-time business insights",
        "Improved forecasting accuracy",
        "Competitive market advantage"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain business continuity.",
      icon: Shield,
      gradient: "from-green-600 to-purple-600",
      features: [
        "Security Assessment & Auditing",
        "Threat Detection & Response",
        "Compliance Management",
        "Security Training",
        "Incident Response Planning",
        "Continuous Monitoring"
      ],
      benefits: [
        "99.9% threat detection rate",
        "Full regulatory compliance",
        "Reduced security incidents",
        "Protected business reputation"
      ]
    }
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
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={`transform transition-all duration-700 hover:scale-105 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white/80 backdrop-blur-sm">
                      <CardHeader className="pb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base lg:text-lg text-gray-600 leading-relaxed">
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
                          <Link to="/contact" className="flex items-center gap-2">
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className={`transform transition-all duration-700 hover:scale-105 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <Card className={`h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-gray-50 to-white`}>
                      <CardContent className="p-6 lg:p-8">
                        <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors duration-300">
                          Benefits & Results
                        </h4>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start group/item">
                              <CheckCircle className="text-green-500 w-6 h-6 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                              <span className="text-gray-700 text-base lg:text-lg leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
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
