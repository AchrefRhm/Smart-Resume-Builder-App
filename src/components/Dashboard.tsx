import React from 'react';
import { FileText, User, Zap, TrendingUp, Award, Clock } from 'lucide-react';
import { useUser } from '../context/UserContext';

interface DashboardProps {
  onNavigate: (view: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { user } = useUser();

  const stats = [
    { label: 'Resumes Created', value: '3', icon: FileText, color: 'text-blue-600' },
    { label: 'ATS Score', value: '92%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Templates Used', value: '5', icon: Award, color: 'text-purple-600' },
    { label: 'Cover Letters', value: '8', icon: Clock, color: 'text-orange-600' },
  ];

  const quickActions = [
    {
      title: 'Create New Resume',
      description: 'Start building your professional resume with AI assistance',
      icon: FileText,
      action: () => onNavigate('builder'),
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Update Profile',
      description: 'Add your latest experience and skills',
      icon: User,
      action: () => onNavigate('profile'),
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Browse Templates',
      description: 'Choose from our ATS-optimized templates',
      icon: Award,
      action: () => onNavigate('templates'),
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.personalInfo?.firstName || 'Professional'}! 👋
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to create your next career opportunity? Let's build something amazing together.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl">
              <Zap className="h-12 w-12 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl bg-gray-100 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-left"
          >
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${action.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
              <action.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
            <p className="text-gray-600">{action.description}</p>
          </button>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'Created "Software Engineer Resume"', time: '2 hours ago', status: 'success' },
            { action: 'Updated profile with new skills', time: '1 day ago', status: 'info' },
            { action: 'Generated cover letter for Google', time: '3 days ago', status: 'success' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50/50">
              <div className={`w-2 h-2 rounded-full ${
                activity.status === 'success' ? 'bg-green-400' : 'bg-blue-400'
              }`} />
              <div className="flex-1">
                <p className="text-gray-900 font-medium">{activity.action}</p>
                <p className="text-gray-500 text-sm">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};