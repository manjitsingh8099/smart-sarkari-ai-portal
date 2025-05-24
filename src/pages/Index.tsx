
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LatestUpdates from '../components/LatestUpdates';
import JobCategories from '../components/JobCategories';
import ResultsSection from '../components/ResultsSection';
import AdmissionsSection from '../components/AdmissionsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1">
            <Hero />
            <LatestUpdates />
            <JobCategories />
            <ResultsSection />
            <AdmissionsSection />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
