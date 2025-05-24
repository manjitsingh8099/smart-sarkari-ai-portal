
import React from 'react';
import { Clock, ArrowRight, Star } from 'lucide-react';

const LatestUpdates = () => {
  const updates = [
    {
      title: 'IBPS Clerk Recruitment 2024 - 6128 Posts',
      category: 'Banking',
      date: '2024-05-23',
      isNew: true,
      isImportant: true
    },
    {
      title: 'SSC CHSL Result 2024 Declared',
      category: 'Result',
      date: '2024-05-22',
      isNew: true,
      isImportant: false
    },
    {
      title: 'Railway Group D Admit Card 2024',
      category: 'Admit Card',
      date: '2024-05-21',
      isNew: false,
      isImportant: true
    },
    {
      title: 'UPSC Civil Services Prelims 2024 Answer Key',
      category: 'Answer Key',
      date: '2024-05-20',
      isNew: false,
      isImportant: true
    },
    {
      title: 'NEET UG 2024 Registration Extended',
      category: 'Admission',
      date: '2024-05-19',
      isNew: false,
      isImportant: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Banking': return 'bg-blue-100 text-blue-800';
      case 'Result': return 'bg-green-100 text-green-800';
      case 'Admit Card': return 'bg-purple-100 text-purple-800';
      case 'Answer Key': return 'bg-orange-100 text-orange-800';
      case 'Admission': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Updates</h2>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {updates.map((update, index) => (
            <div
              key={index}
              className="group bg-gray-50/50 hover:bg-white border border-gray-200/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(update.category)}`}>
                    {update.category}
                  </span>
                  {update.isNew && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                      NEW
                    </span>
                  )}
                  {update.isImportant && (
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  )}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {update.date}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                {update.title}
              </h3>
              <div className="flex items-center justify-between">
                <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                  Read More
                </button>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
