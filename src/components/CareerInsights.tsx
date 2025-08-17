import React, { useState } from 'react';
import { TrendingUp, DollarSign, MapPin, Users, Award, Target, BarChart3, Lightbulb } from 'lucide-react';

export const CareerInsights: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('software-engineer');

  const roles = [
    { id: 'software-engineer', name: 'Software Engineer', growth: '+15%' },
    { id: 'data-scientist', name: 'Data Scientist', growth: '+22%' },
    { id: 'product-manager', name: 'Product Manager', growth: '+18%' },
    { id: 'devops-engineer', name: 'DevOps Engineer', growth: '+25%' }
  ];

  const insights = {
    'software-engineer': {
      averageSalary: '$125,000',
      salaryRange: '$85k - $180k',
      jobGrowth: '+15%',
      openPositions: '45,000+',
      topSkills: ['JavaScript', 'React', 'Python', 'AWS', 'Node.js'],
      topCompanies: ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'],
      locations: [
        { city: 'San Francisco', salary: '$165k', jobs: 8500 },
        { city: 'Seattle', salary: '$145k', jobs: 6200 },
        { city: 'New York', salary: '$140k', jobs: 7800 },
        { city: 'Austin', salary: '$125k', jobs: 4200 }
      ]
    }
  };

  const currentInsights = insights[selectedRole as keyof typeof insights];

  const marketTrends = [
    {
      title: 'Remote Work Surge',
      description: 'Remote positions increased by 300% in the last year',
      icon: MapPin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'AI/ML Skills in Demand',
      description: 'Machine learning skills show 45% salary premium',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Cloud Expertise Premium',
      description: 'AWS/Azure certifications add $15k average salary',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Career Insights</h2>
            <p className="text-gray-600">Data-driven insights to guide your career decisions</p>
          </div>
        </div>

        {/* Role Selection */}
        <div className="flex flex-wrap gap-3">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedRole === role.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {role.name}
              <span className="ml-2 text-xs opacity-75">{role.growth}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Salary</p>
              <p className="text-2xl font-bold text-gray-900">{currentInsights.averageSalary}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Range: {currentInsights.salaryRange}</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Job Growth</p>
              <p className="text-2xl font-bold text-gray-900">{currentInsights.jobGrowth}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Next 5 years</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Open Positions</p>
              <p className="text-2xl font-bold text-gray-900">{currentInsights.openPositions}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Currently available</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-orange-100 rounded-xl">
              <BarChart3 className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Competition</p>
              <p className="text-2xl font-bold text-gray-900">Medium</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Market competitiveness</p>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Skills */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Most In-Demand Skills</h3>
          <div className="space-y-4">
            {currentInsights.topSkills.map((skill, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-900">{skill}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${100 - index * 15}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">{100 - index * 15}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Locations */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Top Paying Locations</h3>
          <div className="space-y-4">
            {currentInsights.locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{location.city}</h4>
                  <span className="text-lg font-bold text-green-600">{location.salary}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{location.jobs.toLocaleString()} open positions</span>
                  <span className="text-blue-600">View Jobs →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Trends */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Market Trends & Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketTrends.map((trend, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`p-2 rounded-lg ${trend.bgColor}`}>
                  <trend.icon className={`h-5 w-5 ${trend.color}`} />
                </div>
                <h4 className="font-semibold text-gray-900">{trend.title}</h4>
              </div>
              <p className="text-sm text-gray-700">{trend.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Personalized Recommendations */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-indigo-100 rounded-xl">
            <Lightbulb className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Personalized Recommendations</h3>
            <p className="text-gray-600">Based on your profile and market trends</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-indigo-200">
            <h4 className="font-semibold text-gray-900 mb-3">Skill Development</h4>
            <p className="text-sm text-gray-700 mb-4">
              Adding "Machine Learning" to your skillset could increase your salary potential by $20k
            </p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Start Learning
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 border border-indigo-200">
            <h4 className="font-semibold text-gray-900 mb-3">Career Path</h4>
            <p className="text-sm text-gray-700 mb-4">
              Consider transitioning to "Senior Software Engineer" role for 25% salary increase
            </p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Explore Path
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};