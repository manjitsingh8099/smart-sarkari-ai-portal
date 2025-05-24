
import React from 'react';
import { BookOpen, Calendar, Users, ExternalLink } from 'lucide-react';

const AdmissionsSection = () => {
  const admissions = [
    {
      title: 'NEET UG 2024 Application',
      organization: 'National Testing Agency',
      lastDate: '2024-06-15',
      eligibility: '12th Pass with PCB',
      fees: '₹1,700',
      seats: '1,08,940'
    },
    {
      title: 'JEE Main 2024 Session 2',
      organization: 'National Testing Agency',
      lastDate: '2024-06-10',
      eligibility: '12th Pass with PCM',
      fees: '₹1,000',
      seats: '1,25,000'
    },
    {
      title: 'AIIMS MBBS 2024',
      organization: 'All India Institute of Medical Sciences',
      lastDate: '2024-06-05',
      eligibility: '12th Pass with PCB',
      fees: '₹2,500',
      seats: '1,207'
    },
    {
      title: 'UPSC IES 2024',
      organization: 'Union Public Service Commission',
      lastDate: '2024-05-30',
      eligibility: 'Engineering Graduate',
      fees: '₹300',
      seats: '495'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Admissions & Entrance Exams</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Apply for top government colleges and institutions across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {admissions.map((admission, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      {admission.title}
                    </h3>
                    <p className="text-sm text-gray-600">{admission.organization}</p>
                  </div>
                </div>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                  Open
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Last Date</p>
                  <p className="font-medium text-gray-900 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {admission.lastDate}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Total Seats</p>
                  <p className="font-medium text-gray-900 flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {admission.seats}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Eligibility</p>
                  <p className="font-medium text-gray-900">{admission.eligibility}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Application Fee</p>
                  <p className="font-medium text-gray-900">{admission.fees}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
                  <span>Apply Now</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
