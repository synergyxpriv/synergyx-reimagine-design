
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  Globe, 
  Lightbulb, 
  Target,
  ArrowRight,
  ExternalLink,
  Calendar,
  Award
} from 'lucide-react';

const Ventures = () => {
  const ventures = [
    {
      title: "TechFlow Solutions",
      description: "Revolutionary workflow automation platform that transforms how businesses manage their operations through intelligent process optimization.",
      category: "SaaS Platform",
      status: "Active",
      year: "2023",
      image: "/lovable-uploads/3296a7e4-ee25-44e9-8203-51ffdd9272f4.png",
      metrics: {
        users: "10K+",
        growth: "300%",
        funding: "$2.5M"
      },
      gradient: "from-purple-600 to-indigo-600",
      features: [
        "AI-powered automation",
        "Real-time analytics",
        "Enterprise integration",
        "Custom workflows"
      ]
    },
    {
      title: "DataVault Analytics",
      description: "Advanced data intelligence platform providing real-time insights and predictive analytics for enterprise decision-making.",
      category: "Analytics Platform",
      status: "Growing",
      year: "2022",
      image: "/lovable-uploads/3296a7e4-ee25-44e9-8203-51ffdd9272f4.png",
      metrics: {
        users: "5K+",
        growth: "250%",
        funding: "$1.8M"
      },
      gradient: "from-indigo-600 to-blue-600",
      features: [
        "Predictive modeling",
        "Real-time dashboards",
        "Machine learning insights",
        "Custom reporting"
      ]
    },
    {
      title: "CloudSecure Pro",
      description: "Next-generation cybersecurity solution offering comprehensive protection for cloud infrastructure and enterprise applications.",
      category: "Cybersecurity",
      status: "Expanding",
      year: "2024",
      image: "/lovable-uploads/3296a7e4-ee25-44e9-8203-51ffdd9272f4.png",
      metrics: {
        users: "3K+",
        growth: "400%",
        funding: "$3.2M"
      },
      gradient: "from-blue-600 to-cyan-600",
      features: [
        "Zero-trust architecture",
        "24/7 threat monitoring",
        "Compliance automation",
        "Incident response"
      ]
    },
    {
      title: "InnovateLab",
      description: "R&D incubator fostering breakthrough technologies in AI, blockchain, and quantum computing for next-generation solutions.",
      category: "R&D Incubator",
      status: "Research",
      year: "2024",
      image: "/lovable-uploads/3296a7e4-ee25-44e9-8203-51ffdd9272f4.png",
      metrics: {
        projects: "15+",
        patents: "8",
        funding: "$5M"
      },
      gradient: "from-cyan-600 to-teal-600",
      features: [
        "Quantum computing research",
        "AI/ML innovation",
        "Blockchain development",
        "Patent portfolio"
      ]
    }
  ];

  const stats = [
    { label: "Total Ventures", value: "12+", icon: Rocket },
    { label: "Combined Users", value: "50K+", icon: Users },
    { label: "Total Funding", value: "$25M+", icon: TrendingUp },
    { label: "Global Reach", value: "30+ Countries", icon: Globe }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Lightbulb className="w-12 h-12 text-purple-300" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Ventures</span>
          </h1>
          <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed font-light">
            Pioneering innovative solutions across multiple industries, building the future 
            through strategic ventures and breakthrough technologies.
          </p>
        </div>
      </section>

      {/* Transition Spacer */}
      <div className="h-16 bg-gradient-to-b from-purple-900/20 to-gray-50"></div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm lg:text-base text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Portfolio <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Ventures</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse portfolio of innovative ventures across technology, analytics, and emerging sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {ventures.map((venture, index) => (
              <Card key={index} className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${venture.gradient}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${venture.gradient} text-white`}>
                      {venture.status}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {venture.year}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {venture.title}
                  </CardTitle>
                  
                  <div className="text-sm text-purple-600 font-medium mb-2">
                    {venture.category}
                  </div>
                  
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {venture.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    {Object.entries(venture.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {venture.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${venture.gradient} mr-2 flex-shrink-0`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className={`flex-1 bg-gradient-to-r ${venture.gradient} hover:shadow-lg transition-all duration-300 group/btn`}>
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-gray-50">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Spacer */}
      <div className="h-16 bg-gradient-to-b from-gray-50 to-purple-600"></div>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Target className="w-12 h-12 text-purple-200" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Partner With Our Ventures
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Join forces with our innovative ventures and be part of the next generation 
            of technological breakthroughs. Let's build the future together.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-50 text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-xl hover:shadow-white/10 transition-all duration-300 group">
            <Link to="/contact" className="flex items-center gap-2">
              Explore Partnership
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ventures;
