import React, { useState } from 'react';
import { TrendingUp, Eye, Download, Target, Users, Calendar, Award, ArrowUp, ArrowDown } from 'lucide-react';

export const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const stats = [
    { 
      label: 'Resume Views', 
      value: '2,847', 
      change: '+23%', 
      trend: 'up',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      label: 'Downloads', 
      value: '1,234', 
      change: '+18%', 
      trend: 'up',
      icon: Download,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      label: 'Interview Invites', 
      value: '47', 
      change: '+35%', 
      trend: 'up',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    { 
      label: 'ATS Pass Rate', 
      value: '94%', 
      change: '+12%', 
      trend: 'up',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const chartData = [
    { month: 'Jan', views: 120, applications: 8, interviews: 2 },
    { month: 'Feb', views: 180, applications: 12, interviews: 4 },
    { month: 'Mar', views: 240, applications: 15, interviews: 6 },
    { month: 'Apr', views: 320, applications: 18, interviews: 8 },
    { month: 'May', views: 280, applications: 22, interviews: 12 },
    { month: 'Jun', views: 380, applications: 25, interviews: 15 }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Career Analytics</h2>
            <p className="text-gray-600">Track your job search performance and optimize your strategy</p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Chart */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Trends</h3>
          <div className="space-y-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Views: {data.views}</span>
                    <span>Applications: {data.applications}</span>
                    <span>Interviews: {data.interviews}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(data.views / 400) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Rate */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Success Metrics</h3>
          <div className="space-y-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="75, 100"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">75%</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Interview Success Rate</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Response Rate</span>
                <span className="text-sm font-medium text-gray-900">68%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">ATS Pass Rate</span>
                <span className="text-sm font-medium text-gray-900">94%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Callback Rate</span>
                <span className="text-sm font-medium text-gray-900">42%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights and Recommendations */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <h3 className="text-xl font-bold text-gray-900 mb-6">AI Insights & Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Award className="h-5 w-5 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Peak Performance</h4>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Your resume performs best on Tuesdays and Wednesdays. Consider timing your applications accordingly.
            </p>
            <button className="text-green-600 text-sm font-medium hover:text-green-700">
              View Details →
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Skill Gap Analysis</h4>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Adding "Machine Learning" and "Docker" skills could increase your match rate by 23%.
            </p>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
              Add Skills →
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Market Trends</h4>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Remote work opportunities in your field have increased by 45% this quarter.
            </p>
            <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
              Explore Jobs →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};