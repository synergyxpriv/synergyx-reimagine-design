
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: "John Davidson",
      title: "CEO & Founder",
      bio: "With over 15 years of experience in technology leadership, John founded SynergyX with a vision to help businesses harness the power of digital transformation.",
      expertise: ["Strategic Leadership", "Digital Transformation", "Business Development"]
    },
    {
      name: "Sarah Mitchell",
      title: "CTO",
      bio: "Sarah leads our technical strategy with deep expertise in cloud architecture, AI implementation, and enterprise-scale solution design.",
      expertise: ["Cloud Architecture", "AI/ML Solutions", "Enterprise Systems"]
    },
    {
      name: "Michael Torres",
      title: "Head of Consulting",
      bio: "Michael brings extensive consulting experience, helping organizations optimize their processes and achieve operational excellence.",
      expertise: ["Business Process Optimization", "Change Management", "Strategic Planning"]
    },
    {
      name: "Jennifer Liu",
      title: "Lead Data Scientist",
      bio: "Jennifer specializes in turning complex data into actionable insights, leading our analytics and AI integration initiatives.",
      expertise: ["Data Analytics", "Machine Learning", "Predictive Modeling"]
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of technology to deliver cutting-edge solutions that give our clients a competitive advantage.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, ensuring quality outcomes that exceed expectations.",
      icon: "⭐"
    },
    {
      title: "Partnership",
      description: "We work as an extension of your team, building long-term relationships based on trust and mutual success.",
      icon: "🤝"
    },
    {
      title: "Results",
      description: "We focus on delivering measurable outcomes that drive real business value and sustainable growth.",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SynergyX</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses through innovative technology solutions and strategic expertise 
            that drive digital transformation and sustainable growth.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2014, SynergyX Services emerged from a simple yet powerful vision: to bridge the gap 
                between cutting-edge technology and real business results. What started as a small team of passionate 
                technologists has grown into a comprehensive digital transformation partner serving enterprises across industries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our journey began when our founders recognized that many businesses were struggling to leverage new 
                technologies effectively. While the tools and platforms were powerful, the expertise to implement 
                them strategically was often missing. This gap inspired us to create a company that would not just 
                provide technology solutions, but would serve as a true strategic partner.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we've helped over 150 organizations transform their operations, modernize their infrastructure, 
                and harness the power of data and AI to drive innovation. Our success is measured not just by the 
                projects we complete, but by the lasting impact we create for our clients and their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're guided by a clear mission and strong values that shape every decision we make.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive sustainable growth, 
                  operational excellence, and competitive advantage in an increasingly digital world.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in technology, consulting, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                      <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default About;
