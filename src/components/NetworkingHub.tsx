import React, { useState } from 'react';
import { Users, MessageCircle, Calendar, Star, MapPin, Briefcase, Plus, Search } from 'lucide-react';

export const NetworkingHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('connections');

  const connections = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      mutualConnections: 12,
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'online'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Product Manager',
      company: 'Microsoft',
      location: 'Seattle, WA',
      mutualConnections: 8,
      avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'UX Designer',
      company: 'Apple',
      location: 'Cupertino, CA',
      mutualConnections: 15,
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'online'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Tech Networking Mixer',
      date: '2024-02-15',
      time: '6:00 PM',
      location: 'San Francisco, CA',
      attendees: 45,
      type: 'In-person',
      description: 'Join fellow tech professionals for an evening of networking and career discussions.'
    },
    {
      id: 2,
      title: 'Remote Work Best Practices',
      date: '2024-02-20',
      time: '2:00 PM',
      location: 'Virtual',
      attendees: 120,
      type: 'Virtual',
      description: 'Learn from industry experts about effective remote work strategies.'
    },
    {
      id: 3,
      title: 'AI in Software Development',
      date: '2024-02-25',
      time: '7:00 PM',
      location: 'Austin, TX',
      attendees: 80,
      type: 'In-person',
      description: 'Explore how AI is transforming the software development landscape.'
    }
  ];

  const mentors = [
    {
      id: 1,
      name: 'David Kim',
      title: 'Engineering Director',
      company: 'Netflix',
      experience: '15+ years',
      expertise: ['Leadership', 'System Design', 'Team Building'],
      rating: 4.9,
      sessions: 150,
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Lisa Wang',
      title: 'VP of Engineering',
      company: 'Stripe',
      experience: '12+ years',
      expertise: ['Career Growth', 'Technical Strategy', 'Startups'],
      rating: 4.8,
      sessions: 89,
      avatar: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const tabs = [
    { id: 'connections', label: 'My Network', icon: Users },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'mentors', label: 'Mentors', icon: Star },
    { id: 'messages', label: 'Messages', icon: MessageCircle }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Networking Hub</h2>
            <p className="text-gray-600">Connect with professionals, attend events, and find mentors</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search professionals, companies, or skills..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 flex-1 justify-center ${
                activeTab === tab.id
                  ? 'bg-white text-pink-600 shadow-sm'
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'connections' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Connections List */}
          <div className="lg:col-span-2 space-y-4">
            {connections.map((connection) => (
              <div key={connection.id} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={connection.avatar}
                      alt={connection.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                      connection.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{connection.name}</h3>
                    <p className="text-blue-600 font-medium">{connection.title}</p>
                    <p className="text-gray-600">{connection.company}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{connection.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{connection.mutualConnections} mutual</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors duration-200">
                      Message
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Network Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Connections</span>
                  <span className="font-medium text-gray-900">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">New This Month</span>
                  <span className="font-medium text-green-600">+12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="font-medium text-gray-900">89</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200">
              <h3 className="font-semibold text-gray-900 mb-3">Suggested Connections</h3>
              <p className="text-sm text-gray-700 mb-4">
                Connect with professionals in your field to expand your network
              </p>
              <button className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200">
                Find Connections
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'events' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.type === 'Virtual' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}>
                  {event.type}
                </span>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{event.attendees}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date} at {event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                Register
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'mentors' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                  <p className="text-blue-600 font-medium">{mentor.title}</p>
                  <p className="text-gray-600">{mentor.company}</p>
                  <p className="text-sm text-gray-500">{mentor.experience} experience</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{mentor.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">{mentor.sessions} sessions</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  Book Session
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'messages' && (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="text-center py-12">
            <div className="p-4 bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Messages Yet</h3>
            <p className="text-gray-600 mb-6">Start networking to begin conversations with professionals</p>
            <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
              Find People to Connect
            </button>
          </div>
        </div>
      )}
    </div>
  );
};