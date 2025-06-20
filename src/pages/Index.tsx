
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Database, Shield, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Market Research Analysis",
      description: "Comprehensive market analysis and consumer insights to drive strategic decision-making."
    },
    {
      icon: Database,
      title: "Chemxpert Database",
      description: "Advanced techno-commercial insights database for chemical industry professionals."
    },
    {
      icon: Shield,
      title: "Regulatory Services",
      description: "Expert regulatory guidance and compliance solutions for global markets."
    }
  ];

  const stats = [
    { number: "11+", label: "Years of Excellence" },
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Global Clients" },
    { number: "50+", label: "Industry Experts" }
  ];

  const bannerImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Scrolling Banner */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        {/* Scrolling Background Images */}
        <div className="absolute inset-0">
          <div className="flex animate-[scroll_15s_linear_infinite] w-[300%]">
            {[...bannerImages, ...bannerImages, ...bannerImages].map((image, index) => (
              <div
                key={index}
                className="w-1/3 h-screen bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                Right Data,<br />
                <span className="text-blue-300">Right Decision</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                Empowering businesses with comprehensive market research and data-driven insights since 2013. Transform your strategic decisions with our expert analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  Discover Our Insights
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 hover:scale-105 transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative animate-[fade-in_1s_ease-out_0.5s_both]">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center hover:scale-110 transition-transform duration-300">
                      <div className="text-3xl font-bold text-blue-300">{stat.number}</div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About CRC Market Research</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established in 2013, CRC has been at the forefront of market research innovation, 
              committed to delivering growth-oriented insights that empower businesses to make informed decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Award-winning research methodologies and industry recognition for quality insights.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Growth Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dedicated to identifying growth opportunities and market trends for our clients.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Industry veterans with deep expertise across multiple sectors and markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your market research and business intelligence needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Data-Driven Decisions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust CRC for their market research needs. 
            Let's transform your business insights together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
