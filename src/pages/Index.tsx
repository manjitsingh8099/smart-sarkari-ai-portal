
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import NewsPanel from '../components/NewsPanel';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col lg:flex-row w-full bg-[#F7F7F8]">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0 order-2 lg:order-none">
          <Header />
          <main className="flex-1">
            <MainContent />
          </main>
          <Footer />
        </div>
        
        {/* News panel - hidden on mobile, visible on larger screens */}
        <div className="hidden xl:block order-3">
          <NewsPanel />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
