
import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';

const NewsPanel = () => {
  const newsItems = [
    {
      title: 'IBPS PO Result 2024 Released',
      time: '2 hours ago',
      category: 'Result',
      isBreaking: true
    },
    {
      title: 'SSC CGL 2024 Notification Out',
      time: '4 hours ago',
      category: 'Recruitment',
      isBreaking: false
    },
    {
      title: 'Railway RRB NTPC Exam Date Announced',
      time: '6 hours ago',
      category: 'Exam',
      isBreaking: false
    },
    {
      title: 'UPSC CSE 2024 Final Result',
      time: '8 hours ago',
      category: 'Result',
      isBreaking: true
    },
    {
      title: 'Bank PO Recruitment 2024',
      time: '12 hours ago',
      category: 'Banking',
      isBreaking: false
    },
    {
      title: 'Teaching Jobs in Government Schools',
      time: '1 day ago',
      category: 'Education',
      isBreaking: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Result': return 'bg-green-100 text-green-800';
      case 'Recruitment': return 'bg-blue-100 text-blue-800';
      case 'Exam': return 'bg-purple-100 text-purple-800';
      case 'Banking': return 'bg-orange-100 text-orange-800';
      case 'Education': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full xl:w-80 bg-[#F7F7F8] xl:border-l border-[#D1D5DB] flex flex-col flex-shrink-0 h-full xl:h-[calc(100vh-64px)]">
      <div className="p-3 sm:p-4 border-b border-[#D1D5DB]">
        <h2 className="text-lg sm:text-xl font-semibold text-[#2D2D2F] font-inter">Latest News</h2>
        <p className="text-sm text-[#2D2D2F] opacity-70 font-inter">Stay updated with government job news</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3">
        {newsItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-3 sm:p-4 border border-[#D1D5DB] hover:shadow-md transition-shadow cursor-pointer touch-manipulation active:scale-95"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2 flex-wrap gap-1">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium font-inter ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
                {item.isBreaking && (
                  <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded-full text-xs font-medium font-inter">
                    BREAKING
                  </span>
                )}
              </div>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-[#2D2D2F] opacity-50 flex-shrink-0 ml-2" />
            </div>
            
            <h3 className="text-sm sm:text-base font-medium text-[#2D2D2F] mb-2 font-inter leading-tight">
              {item.title}
            </h3>
            
            <div className="flex items-center text-xs text-[#2D2D2F] opacity-60 font-inter">
              <Clock className="w-3 h-3 mr-1 flex-shrink-0" />
              {item.time}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 sm:p-4 border-t border-[#D1D5DB]">
        <button className="w-full text-center text-sm sm:text-base text-[#10A37F] font-medium font-inter hover:text-[#0d8a6b] transition-colors py-2 touch-manipulation active:scale-95">
          View All News
        </button>
      </div>
    </div>
  );
};

export default NewsPanel;
