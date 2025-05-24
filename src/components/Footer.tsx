
import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Latest Jobs', 'Results', 'Admit Cards', 'Answer Keys', 'Syllabus', 'Previous Papers'
  ];

  const categories = [
    'Banking Jobs', 'Railway Jobs', 'SSC Jobs', 'UPSC Jobs', 'Teaching Jobs', 'Defence Jobs'
  ];

  const resources = [
    'Exam Calendar', 'Study Material', 'Mock Tests', 'Current Affairs', 'GK Updates', 'Career Guidance'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              SarkariResult
            </h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner for government job notifications, results, and career guidance. 
              Stay updated with the latest opportunities in public service.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Job Categories</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">info@sarkariresult.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SarkariResult. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
