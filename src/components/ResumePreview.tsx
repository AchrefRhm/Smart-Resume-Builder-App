import React from 'react';
import { Download, Eye, Edit3, Share, Star, CheckCircle } from 'lucide-react';
import { useUser } from '../context/UserContext';

export const ResumePreview: React.FC = () => {
  const { user } = useUser();

  const handleDownload = (format: 'pdf' | 'docx') => {
    // This would integrate with document generation service
    console.log(`Downloading resume as ${format.toUpperCase()}`);
  };

  const atsScore = 94;
  const designScore = 88;
  const contentScore = 91;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Resume Preview */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-8">
              {/* Header */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  {user?.personalInfo?.firstName} {user?.personalInfo?.lastName}
                </h1>
                <p className="text-lg text-blue-600 font-medium mt-1">Senior Software Engineer</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                  <span>{user?.personalInfo?.email}</span>
                  <span>{user?.personalInfo?.phone}</span>
                  <span>{user?.personalInfo?.location}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Professional Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  {user?.personalInfo?.summary || 
                   "Experienced software engineer with a passion for creating scalable solutions and leading high-performing teams. Proven track record of delivering complex projects on time and exceeding business objectives."}
                </p>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Work Experience</h2>
                <div className="space-y-4">
                  {user?.experience?.length ? user.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-4">
                      <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-2">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </p>
                      <p className="text-gray-700 text-sm">{exp.description}</p>
                    </div>
                  )) : (
                    <div className="border-l-2 border-blue-200 pl-4">
                      <h3 className="font-semibold text-gray-900">Senior Software Engineer</h3>
                      <p className="text-blue-600 font-medium">TechCorp Solutions</p>
                      <p className="text-sm text-gray-500 mb-2">2021 - Present</p>
                      <p className="text-gray-700 text-sm">
                        Led development of scalable microservices architecture, resulting in 40% improvement in system performance. 
                        Managed team of 8 developers and collaborated with cross-functional teams to deliver critical features.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {user?.skills?.length ? user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {skill.name}
                    </span>
                  )) : (
                    ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL'].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Education</h2>
                {user?.education?.length ? user.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-green-200 pl-4">
                    <h3 className="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                    <p className="text-green-600 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.graduationDate}</p>
                  </div>
                )) : (
                  <div className="border-l-2 border-green-200 pl-4">
                    <h3 className="font-semibold text-gray-900">Master of Science in Computer Science</h3>
                    <p className="text-green-600 font-medium">Stanford University</p>
                    <p className="text-sm text-gray-500">2019</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Actions */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
            <div className="space-y-3">
              <button
                onClick={() => handleDownload('pdf')}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
              
              <button
                onClick={() => handleDownload('docx')}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                <Download className="h-4 w-4" />
                <span>Download DOCX</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                <Share className="h-4 w-4" />
                <span>Share Resume</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                <Edit3 className="h-4 w-4" />
                <span>Edit Resume</span>
              </button>
            </div>
          </div>

          {/* AI Analysis */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Analysis</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">ATS Score</span>
                  <span className="text-sm font-bold text-green-600">{atsScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: `${atsScore}%` }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Design Score</span>
                  <span className="text-sm font-bold text-blue-600">{designScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${designScore}%` }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Content Score</span>
                  <span className="text-sm font-bold text-purple-600">{contentScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${contentScore}%` }} />
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">Excellent Resume!</span>
              </div>
              <p className="text-xs text-green-700 mt-1">
                Your resume is well-optimized for ATS systems and has strong visual appeal.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resume Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Word Count</span>
                <span className="text-sm font-medium text-gray-900">324</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Sections</span>
                <span className="text-sm font-medium text-gray-900">5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Skills Listed</span>
                <span className="text-sm font-medium text-gray-900">{user?.skills?.length || 8}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Experience Years</span>
                <span className="text-sm font-medium text-gray-900">5+</span>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-2 text-yellow-600">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};