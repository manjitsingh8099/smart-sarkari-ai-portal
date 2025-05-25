
import React, { useState } from 'react';
import { Search, Menu, X, Bell, Newspaper } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NewsPanel from './NewsPanel';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Left section: Sidebar trigger and Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
            <SidebarTrigger className="h-8 w-8 sm:h-10 sm:w-10" />
            <div className="flex-shrink-0 min-w-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent truncate">
                SarkariResult
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {['Syllabus', 'Notifications', 'About'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-900 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100 whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right section: Search, Actions, Mobile menu */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            {/* Desktop Search */}
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search jobs, results..."
                className="pl-10 pr-4 py-2 w-48 xl:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white/70 backdrop-blur-sm text-sm"
              />
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 touch-manipulation"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* News Panel for Mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="xl:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 touch-manipulation">
                  <Newspaper className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0">
                <NewsPanel />
              </SheetContent>
            </Sheet>

            {/* Notifications */}
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 touch-manipulation">
              <Bell className="w-5 h-5" />
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 touch-manipulation"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden py-3 border-t border-gray-200/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search jobs, results..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white/70 backdrop-blur-sm text-base"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200/50">
            <div className="flex flex-col space-y-2">
              {['Syllabus', 'Notifications', 'About'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-gray-900 px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-100 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
