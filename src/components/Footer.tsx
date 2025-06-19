
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-blue-400">CRC</div>
              <div className="text-sm text-gray-300">Market Research</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with data-driven insights since 2013. Right Data, Right Decision.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail size={16} />
                <span>info@crcresearch.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin size={16} />
                <span>123 Research Ave, Business District</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </Link>
              <Link to="/career" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Career
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest market insights.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CRC Market Research. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
