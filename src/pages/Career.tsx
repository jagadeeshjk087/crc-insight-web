import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, DollarSign, Users, Star, TrendingUp, Heart, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Career = () => {
  const {
    toast
  } = useToast();
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const jobListings = [{
    id: 1,
    title: "Senior Market Research Analyst",
    department: "Research",
    type: "Full-time",
    location: "New York, NY",
    salary: "$75,000 - $90,000",
    experience: "3-5 years",
    description: "Lead comprehensive market analysis projects and provide strategic insights to Fortune 500 clients.",
    requirements: ["Master's degree in Economics, Business, or related field", "3+ years market research experience", "Proficiency in statistical analysis software"]
  }, {
    id: 2,
    title: "Data Scientist",
    department: "Analytics",
    type: "Full-time",
    location: "San Francisco, CA",
    salary: "$95,000 - $120,000",
    experience: "2-4 years",
    description: "Develop advanced analytics models and machine learning solutions for market intelligence.",
    requirements: ["PhD/Master's in Data Science, Statistics, or related field", "Python/R programming expertise", "Experience with ML frameworks"]
  }, {
    id: 3,
    title: "Regulatory Affairs Specialist",
    department: "Regulatory",
    type: "Full-time",
    location: "Washington, DC",
    salary: "$70,000 - $85,000",
    experience: "2-3 years",
    description: "Support clients with regulatory compliance and market entry strategies across global markets.",
    requirements: ["Bachelor's degree in Life Sciences or related field", "Knowledge of FDA/EMA regulations", "Strong communication skills"]
  }, {
    id: 4,
    title: "Junior Research Associate",
    department: "Research",
    type: "Full-time",
    location: "Boston, MA",
    salary: "$50,000 - $60,000",
    experience: "0-2 years",
    description: "Support senior analysts with data collection, analysis, and report preparation.",
    requirements: ["Bachelor's degree in Business, Economics, or related field", "Strong analytical skills", "Proficiency in Excel and PowerPoint"]
  }, {
    id: 5,
    title: "Business Development Manager",
    department: "Sales",
    type: "Full-time",
    location: "Chicago, IL",
    salary: "$80,000 - $100,000",
    experience: "4-6 years",
    description: "Drive new client acquisition and expand relationships with existing accounts.",
    requirements: ["Bachelor's degree in Business or Marketing", "4+ years B2B sales experience", "Proven track record in client relationship management"]
  }, {
    id: 6,
    title: "Chemical Industry Analyst",
    department: "Research",
    type: "Contract",
    location: "Houston, TX",
    salary: "$40 - $60 /hour",
    experience: "3-5 years",
    description: "Provide specialized analysis for our Chemxpert database and chemical industry clients.",
    requirements: ["Degree in Chemical Engineering or Chemistry", "Industry experience in petrochemicals", "Technical writing skills"]
  }];
  const benefits = [{
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, vision, and wellness programs"
  }, {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Professional development opportunities, training programs, and clear advancement paths"
  }, {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Market-leading salaries, performance bonuses, and equity participation"
  }, {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote work options, and generous PTO policy"
  }, {
    icon: Award,
    title: "Recognition",
    description: "Employee recognition programs, spot bonuses, and achievement awards"
  }, {
    icon: Users,
    title: "Collaborative Culture",
    description: "Team-building events, mentorship programs, and inclusive work environment"
  }];
  const testimonials = [{
    name: "Sarah Martinez",
    role: "Senior Research Analyst",
    quote: "CRC has provided me with incredible opportunities to grow professionally while working on meaningful projects that impact real businesses."
  }, {
    name: "David Chen",
    role: "Data Scientist",
    quote: "The collaborative environment and cutting-edge technology make CRC an ideal place for innovation and professional development."
  }, {
    name: "Lisa Thompson",
    role: "Regulatory Specialist",
    quote: "I appreciate the company's commitment to work-life balance and the supportive team culture that helps me excel in my role."
  }];
  const applicationSteps = [{
    step: 1,
    title: "Apply Online",
    description: "Submit your application through our career portal with your resume and cover letter."
  }, {
    step: 2,
    title: "Initial Screening",
    description: "Our HR team will review your application and contact qualified candidates within 1 week."
  }, {
    step: 3,
    title: "Interview Process",
    description: "Participate in 2-3 interviews including technical assessment and culture fit evaluation."
  }, {
    step: 4,
    title: "Final Decision",
    description: "Receive feedback and offer details within 3-5 business days after final interview."
  }];
  const filteredJobs = jobListings.filter(job => {
    const departmentMatch = selectedDepartment === "all" || job.department.toLowerCase() === selectedDepartment;
    const typeMatch = selectedType === "all" || job.type.toLowerCase() === selectedType;
    return departmentMatch && typeMatch;
  });
  const handleApply = (jobTitle: string) => {
    toast({
      title: "Application Started!",
      description: `Thank you for your interest in the ${jobTitle} position. You'll be redirected to our application portal.`
    });
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Build your career with CRC Market Research and help shape the future of data-driven business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600">Find your perfect role in our growing team</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="research">Research</SelectItem>
                <SelectItem value="analytics">Analytics</SelectItem>
                <SelectItem value="regulatory">Regulatory</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
              </SelectContent>
            </Select>

            <Input placeholder="Search positions..." className="w-full sm:w-64" />
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map(job => <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription>{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.experience} experience
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.slice(0, 2).map((req, index) => <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {req}
                        </li>)}
                    </ul>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => handleApply(job.title)}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work at CRC?</h2>
            <p className="text-xl text-gray-600">We believe in creating an environment where talent thrives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>

          {/* Employee Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-bottom-0.5 -mb-12 ">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Here's what to expect when you apply to CRC</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Career;