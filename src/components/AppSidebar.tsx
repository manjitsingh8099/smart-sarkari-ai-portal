
import React from 'react';
import { Briefcase, FileText, GraduationCap, Key, Home } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

const navigationItems = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Latest Jobs', url: '/jobs', icon: Briefcase },
  { title: 'Results', url: '/results', icon: FileText },
  { title: 'Admissions', url: '/admissions', icon: GraduationCap },
  { title: 'Answer Keys', url: '/answer-keys', icon: Key },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === 'collapsed';

  const isActive = (path: string) => currentPath === path;
  const getNavClass = (isActiveRoute: boolean) =>
    isActiveRoute
      ? 'bg-[#E5F0FF] text-[#2D2D2F] font-semibold'
      : 'text-[#2D2D2F] hover:bg-[#DDEEFF] hover:text-[#2D2D2F]';

  return (
    <Sidebar className={collapsed ? 'w-14' : 'w-64'} collapsible="icon">
      <div className="p-3 sm:p-4 border-b border-[#D1D5DB] bg-[#F7F7F8]">
        <SidebarTrigger className="mb-2 h-8 w-8" />
        {!collapsed && (
          <h2 className="text-base sm:text-lg font-semibold text-[#2D2D2F] font-inter truncate">
            SarkariResult
          </h2>
        )}
      </div>

      <SidebarContent className="bg-[#F7F7F8]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#2D2D2F] font-inter font-medium text-xs sm:text-sm">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) => 
                        `flex items-center px-3 py-3 sm:py-2 rounded-xl text-sm transition-colors font-inter touch-manipulation active:scale-95 ${getNavClass(isActive)}`
                      }
                    >
                      <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                      {!collapsed && (
                        <span className="truncate text-sm sm:text-base">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
