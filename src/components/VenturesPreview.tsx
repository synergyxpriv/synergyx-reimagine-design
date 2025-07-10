
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  TrendingUp, 
  Shield, 
  Brain,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const VenturesPreview = () => {
  const featuredVentures = [
    {
      title: "SynergyX Academy",
      description: "Revolutionary workflow automation platform transforming business operations.",
      icon: Rocket,
      gradient: "from-purple-600 to-indigo-600",
      metrics: "100+ Learners"
    },
    {
      title: "SynergyX Digital Store", 
      description: "Advanced data intelligence platform with predictive analytics capabilities.",
      icon: TrendingUp,
      gradient: "from-indigo-600 to-blue-600",
      metrics: "Premium-Quality Digital Products"
    },
    {
      title: "SynergyX SkillBuilders",
      description: "Next-generation cybersecurity solution for cloud infrastructure protection.",
      icon: Shield,
      gradient: "from-blue-600 to-cyan-600",
      metrics: "Programs & Workshops"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20 translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Ventures</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Pioneering innovative solutions across multiple industries, building the future 
            through strategic ventures and breakthrough technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {featuredVentures.map((venture, index) => {
            const IconComponent = venture.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${venture.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${venture.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {venture.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 leading-relaxed">
                    {venture.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-purple-600">
                      {venture.metrics}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group">
            <Link to="/ventures" className="flex items-center gap-2">
              Explore All Ventures
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VenturesPreview;
