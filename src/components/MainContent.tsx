
import React from 'react';
import { useLocation } from 'react-router-dom';
import LatestUpdates from './LatestUpdates';
import JobCategories from './JobCategories';
import ResultsSection from './ResultsSection';
import AdmissionsSection from './AdmissionsSection';

const MainContent = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getPageTitle = () => {
    switch (currentPath) {
      case '/jobs':
        return 'Latest Jobs';
      case '/results':
        return 'Results';
      case '/admissions':
        return 'Admissions';
      case '/answer-keys':
        return 'Answer Keys';
      default:
        return 'Welcome to SarkariResult';
    }
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/jobs':
        return (
          <div className="space-y-6 lg:space-y-8">
            <JobCategories />
            <LatestUpdates />
          </div>
        );
      case '/results':
        return <ResultsSection />;
      case '/admissions':
        return <AdmissionsSection />;
      case '/answer-keys':
        return (
          <div className="py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl text-[#2D2D2F] mb-4 sm:mb-6 lg:mb-8 font-inter font-medium">
                  Answer keys will be displayed here
                </h3>
                <p className="text-sm sm:text-base text-[#2D2D2F] opacity-70 font-inter max-w-2xl mx-auto">
                  Check back soon for the latest answer keys and solutions.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl text-[#2D2D2F] mb-4 sm:mb-6 lg:mb-8 font-inter font-medium">
                  Select an option from the sidebar to view content
                </h3>
                <p className="text-sm sm:text-base text-[#2D2D2F] opacity-70 font-inter max-w-2xl mx-auto">
                  Choose from Latest Jobs, Results, Admissions, or Answer Keys to get started.
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      <div className="py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2D2D2F] mb-4 sm:mb-6 lg:mb-8 font-inter">
            {getPageTitle()}
          </h1>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default MainContent;
