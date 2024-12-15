import React from 'react';
import { LayoutGrid, Users, BarChart2, Settings, Briefcase, Calendar, Wallet, GraduationCap } from 'lucide-react';

const menuItems = [
  { icon: LayoutGrid, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Profile', path: '/profile' },
  { icon: BarChart2, label: 'Analytics', path: '/analytics' },
  { icon: Briefcase, label: 'Projects', path: '/projects' },
  { icon: Calendar, label: 'Calendar', path: '/calendar' },
  { icon: Wallet, label: 'Finance', path: '/finance' },
  { icon: GraduationCap, label: 'Courses', path: '/courses' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  return (
    <aside className="bg-white h-screen w-64 border-r border-gray-200 fixed left-0 top-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-blue-600">abilityEX</h2>
      </div>
      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;