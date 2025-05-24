
import React from 'react';
import { Award, TrendingUp, Calendar, Download } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    {
      title: 'SSC MTS Result 2024',
      organization: 'Staff Selection Commission',
      publishDate: '2024-05-20',
      status: 'Final Result',
      candidates: '45,678'
    },
    {
      title: 'IBPS PO Prelims Result 2024',
      organization: 'Institute of Banking Personnel Selection',
      publishDate: '2024-05-18',
      status: 'Prelims Result',
      candidates: '67,890'
    },
    {
      title: 'Railway Group C Result 2024',
      organization: 'Railway Recruitment Board',
      publishDate: '2024-05-15',
      status: 'Final Result',
      candidates: '89,234'
    },
    {
      title: 'UPSC CAPF Result 2024',
      organization: 'Union Public Service Commission',
      publishDate: '2024-05-12',
      status: 'Written Result',
      candidates: '23,456'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Results</h2>
            <p className="text-lg text-gray-600">Check your exam results and download scorecards</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">Live Updates</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="group bg-gray-50/50 hover:bg-white border border-gray-200/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      {result.title}
                    </h3>
                    <p className="text-sm text-gray-600">{result.organization}</p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  {result.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{result.publishDate}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">{result.candidates} candidates</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                  <span>Check Result</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors duration-200">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
