
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Digital Transformation",
      description: "Comprehensive digital modernization strategies that transform your business processes, customer experiences, and operational efficiency.",
      icon: "🚀",
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
      icon: "☁️",
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
      icon: "🤖",
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
      icon: "💼",
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
      icon: "📊",
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
      icon: "🔒",
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth, 
            optimize operations, and drive digital transformation success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="text-6xl mb-6">{service.icon}</div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Link to="/contact">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
                    <CardContent className="p-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6">Benefits & Results</h4>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                            <span className="text-gray-700 text-lg">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help transform your business. 
            Contact us today for a free consultation and custom solution proposal.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
