
import React from 'react';
import { Briefcase, FileText, GraduationCap, Users } from 'lucide-react';

const Hero = () => {
  const quickActions = [
    { icon: Briefcase, title: 'Latest Jobs', count: '500+', color: 'from-blue-500 to-blue-600' },
    { icon: FileText, title: 'Results', count: '200+', color: 'from-green-500 to-green-600' },
    { icon: GraduationCap, title: 'Admissions', count: '150+', color: 'from-purple-500 to-purple-600' },
    { icon: Users, title: 'Answer Keys', count: '300+', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Your Gateway to
            <span className="block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Government Jobs
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest government job notifications, results, and admission announcements. 
            Your career in public service starts here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{action.title}</h3>
              <p className="text-2xl font-bold text-gray-700">{action.count}</p>
              <p className="text-sm text-gray-500">Available Now</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
