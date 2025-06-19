
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2013",
      title: "Company Founded",
      description: "CRC Market Research was established with a vision to provide data-driven insights."
    },
    {
      year: "2015",
      title: "First Major Client",
      description: "Secured our first Fortune 500 client, establishing credibility in the industry."
    },
    {
      year: "2017",
      title: "International Expansion",
      description: "Expanded services globally, serving clients across three continents."
    },
    {
      year: "2019",
      title: "Chemxpert Launch",
      description: "Launched our proprietary Chemxpert database for chemical industry insights."
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Implemented advanced analytics and AI-powered research methodologies."
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading market research firm with 500+ successful projects."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      expertise: "Strategic Planning & Market Analysis",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Research",
      expertise: "Quantitative Analysis & Data Science",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Director of Regulatory Affairs",
      expertise: "Compliance & Market Entry Strategies",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "James Park",
      role: "Senior Market Analyst",
      expertise: "Chemical Industry & Technology Trends",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver accurate, actionable insights that drive real business results."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Our methodologies are clear, and our findings are presented with full transparency."
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Consistent quality and timely delivery you can count on, project after project."
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "We work as an extension of your team, invested in your long-term success."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CRC Market Research</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pioneering market research excellence since 2013, empowering businesses with the insights they need to thrive in competitive markets.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              At CRC, we believe that the right data leads to the right decisions. Our mission is to provide 
              comprehensive, accurate, and actionable market intelligence that empowers our clients to make 
              informed strategic decisions and achieve sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Our Evolution Journey
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - witness our transformation through the years
            </p>
          </div>
          
          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full transform -translate-y-1/2 z-0"></div>
            
            {/* Timeline cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {timeline.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Connector dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-white shadow-lg z-20 group-hover:scale-125 transition-all duration-300"></div>
                  
                  {/* Card */}
                  <div className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                    index % 2 === 0 ? 'mt-16' : 'mb-16'
                  }`}>
                    {/* Year badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold rounded-full shadow-lg">
                        {item.year}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="pt-8">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional decorative elements */}
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of industry experts brings decades of combined experience in market research, 
              data analysis, and strategic consulting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
