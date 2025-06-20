import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Database, Shield, Users, TrendingUp, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      title: "Market Intelligence",
      subtitle: "Data-Driven Decisions",
      description: "Transform your business strategy with comprehensive market research and consumer insights that drive growth.",
      primaryButton: "Explore Market Data",
      secondaryButton: "View Case Studies"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      title: "Industry Expertise",
      subtitle: "11+ Years of Excellence",
      description: "Leading chemical industry research with deep technical knowledge and regulatory compliance expertise.",
      primaryButton: "Our Expertise",
      secondaryButton: "Industry Reports"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      title: "Global Reach",
      subtitle: "Worldwide Solutions",
      description: "Serving 150+ global clients with tailored research solutions and strategic business intelligence.",
      primaryButton: "Global Services",
      secondaryButton: "Client Success"
    }
  ];

  // Auto-rotate banners every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

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

  return (
    <div className="min-h-screen">
      {/* Hero Section with Banner Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Banner Images */}
        <div className="absolute inset-0">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-600/50"></div>
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                  {banners[currentBanner].title}
                  <br />
                  <span className="text-blue-300">{banners[currentBanner].subtitle}</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  {banners[currentBanner].description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  {banners[currentBanner].primaryButton}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 hover:scale-105 transition-all duration-300">
                  {banners[currentBanner].secondaryButton}
                </Button>
              </div>
            </div>
            <div className="relative">
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

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Banner Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
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
