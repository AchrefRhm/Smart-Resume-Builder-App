import React from 'react';
import { FileText, User, Layout, Mail, Eye, BarChart3, Brain, Target, Briefcase, TrendingUp, Search, Users } from 'lucide-react';

interface HeaderProps {
  activeView: string;
  onNavigate: (view: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'templates', label: 'Templates', icon: Layout },
    { id: 'builder', label: 'Builder', icon: FileText },
    { id: 'cover-letter', label: 'Cover Letter', icon: Mail },
    { id: 'preview', label: 'Preview', icon: Eye },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'interview-prep', label: 'Interview Prep', icon: Brain },
    { id: 'skills', label: 'Skills Test', icon: Target },
    { id: 'jobs', label: 'Job Match', icon: Briefcase },
    { id: 'insights', label: 'Career Insights', icon: TrendingUp },
    { id: 'scanner', label: 'Resume Scanner', icon: Search },
    { id: 'networking', label: 'Networking', icon: Users },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Smart Resume Builder
              </h1>
              <p className="text-xs text-gray-500">AI-Powered Career Enhancement</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeView === id
                    ? 'bg-blue-100 text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
              Export Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};