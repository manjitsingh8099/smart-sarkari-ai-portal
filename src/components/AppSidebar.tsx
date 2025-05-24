
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
      ? 'bg-gray-100 text-gray-900 font-medium'
      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900';

  return (
    <Sidebar className={collapsed ? 'w-14' : 'w-64'} collapsible>
      <div className="p-4 border-b border-gray-200">
        <SidebarTrigger className="mb-2" />
        {!collapsed && (
          <h2 className="text-lg font-semibold text-gray-900">SarkariResult</h2>
        )}
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) => `flex items-center px-3 py-2 rounded-md text-sm transition-colors ${getNavClass(isActive)}`}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {!collapsed && <span>{item.title}</span>}
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
