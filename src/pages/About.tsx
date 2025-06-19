
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones that shaped CRC into the industry leader we are today</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
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
