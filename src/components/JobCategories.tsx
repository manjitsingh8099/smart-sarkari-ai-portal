
import React from 'react';
import { Building2, Shield, GraduationCap, Stethoscope, Train, Briefcase, Users, BookOpen } from 'lucide-react';

const JobCategories = () => {
  const categories = [
    { icon: Building2, name: 'Banking', count: 45, color: 'from-blue-500 to-blue-600' },
    { icon: Shield, name: 'Defence', count: 32, color: 'from-green-500 to-green-600' },
    { icon: GraduationCap, name: 'Teaching', count: 67, color: 'from-purple-500 to-purple-600' },
    { icon: Stethoscope, name: 'Medical', count: 28, color: 'from-red-500 to-red-600' },
    { icon: Train, name: 'Railway', count: 89, color: 'from-orange-500 to-orange-600' },
    { icon: Briefcase, name: 'Central Govt', count: 156, color: 'from-indigo-500 to-indigo-600' },
    { icon: Users, name: 'State Govt', count: 234, color: 'from-pink-500 to-pink-600' },
    { icon: BookOpen, name: 'Research', count: 23, color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore opportunities across various government sectors and find your perfect career match
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-2xl font-bold text-gray-700 mb-1">{category.count}</p>
              <p className="text-sm text-gray-500">Active Jobs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
