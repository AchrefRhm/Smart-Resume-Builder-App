import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, Clock, Star, ExternalLink, Filter, Search } from 'lucide-react';

export const JobMatcher: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    salary: '',
    experience: '',
    remote: false
  });

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$120k - $180k',
      type: 'Full-time',
      remote: true,
      posted: '2 days ago',
      match: 95,
      description: 'We are looking for a senior software engineer to join our growing team...',
      requirements: ['React', 'Node.js', 'TypeScript', 'AWS'],
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      salary: '$90k - $130k',
      type: 'Full-time',
      remote: false,
      posted: '1 week ago',
      match: 87,
      description: 'Join our innovative startup as a full stack developer...',
      requirements: ['JavaScript', 'Python', 'React', 'PostgreSQL'],
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      title: 'Frontend Engineer',
      company: 'Design Co.',
      location: 'Austin, TX',
      salary: '$80k - $120k',
      type: 'Full-time',
      remote: true,
      posted: '3 days ago',
      match: 82,
      description: 'We need a talented frontend engineer to create amazing user experiences...',
      requirements: ['React', 'CSS', 'JavaScript', 'Figma'],
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      location: 'Seattle, WA',
      salary: '$110k - $160k',
      type: 'Full-time',
      remote: true,
      posted: '5 days ago',
      match: 78,
      description: 'Looking for a DevOps engineer to help scale our infrastructure...',
      requirements: ['AWS', 'Docker', 'Kubernetes', 'Python'],
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const getMatchColor = (match: number) => {
    if (match >= 90) return 'text-green-600 bg-green-100';
    if (match >= 80) return 'text-blue-600 bg-blue-100';
    if (match >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI Job Matcher</h2>
            <p className="text-gray-600">Find jobs that perfectly match your skills and experience</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <select
            value={selectedFilters.location}
            onChange={(e) => setSelectedFilters({...selectedFilters, location: e.target.value})}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            <option value="remote">Remote</option>
            <option value="sf">San Francisco</option>
            <option value="ny">New York</option>
            <option value="austin">Austin</option>
          </select>

          <select
            value={selectedFilters.salary}
            onChange={(e) => setSelectedFilters({...selectedFilters, salary: e.target.value})}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Salaries</option>
            <option value="0-80k">$0 - $80k</option>
            <option value="80k-120k">$80k - $120k</option>
            <option value="120k+">$120k+</option>
          </select>
        </div>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Jobs List */}
        <div className="lg:col-span-2 space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(job.match)}`}>
                  {job.match}% match
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                  {job.remote && <span className="text-green-600 font-medium">• Remote</span>}
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{job.posted}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.requirements.map((req, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                  >
                    {req}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.8 company rating</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Save
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    <span>Apply</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Match Statistics */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Match Profile</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Skill Match</span>
                  <span className="text-sm font-medium text-gray-900">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Experience Level</span>
                  <span className="text-sm font-medium text-gray-900">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Location Preference</span>
                  <span className="text-sm font-medium text-gray-900">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Skills */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Skills</h3>
            <div className="space-y-3">
              {['Machine Learning', 'Docker', 'GraphQL', 'Kubernetes'].map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{skill}</span>
                  <span className="text-xs text-blue-600 font-medium">+23% demand</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200">
              Take Skill Assessment
            </button>
          </div>

          {/* Job Alerts */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Alerts</h3>
            <p className="text-sm text-gray-700 mb-4">
              Get notified when new jobs match your profile
            </p>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
              Set Up Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};