
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LatestUpdates from '../components/LatestUpdates';
import JobCategories from '../components/JobCategories';
import ResultsSection from '../components/ResultsSection';
import AdmissionsSection from '../components/AdmissionsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <Hero />
      <LatestUpdates />
      <JobCategories />
      <ResultsSection />
      <AdmissionsSection />
      <Footer />
    </div>
  );
};

export default Index;
