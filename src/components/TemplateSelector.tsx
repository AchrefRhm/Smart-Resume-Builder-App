import React, { useState } from 'react';
import { CheckCircle, Star, Zap, Award } from 'lucide-react';

interface TemplateSelectorProps {
  onSelect: (template: string) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelect }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  const templates = [
    {
      id: 'modern',
      name: 'Modern Professional',
      description: 'Clean, contemporary design perfect for tech and creative roles',
      features: ['ATS Optimized', 'Clean Layout', 'Perfect for Tech'],
      premium: false,
      rating: 4.9,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'executive',
      name: 'Executive Elite',
      description: 'Sophisticated design for senior leadership positions',
      features: ['Executive Focus', 'Premium Feel', 'Leadership Roles'],
      premium: true,
      rating: 4.8,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'creative',
      name: 'Creative Pro',
      description: 'Stand out with this unique design for creative professionals',
      features: ['Creative Layout', 'Visual Appeal', 'Design Roles'],
      premium: true,
      rating: 4.7,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'academic',
      name: 'Academic Scholar',
      description: 'Traditional format ideal for academic and research positions',
      features: ['Publication Focus', 'Research Friendly', 'Academic Style'],
      premium: false,
      rating: 4.6,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'startup',
      name: 'Startup Innovator',
      description: 'Dynamic design for startup and entrepreneurial roles',
      features: ['Innovation Focus', 'Dynamic Layout', 'Startup Culture'],
      premium: true,
      rating: 4.8,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 'classic',
      name: 'Classic Professional',
      description: 'Timeless design that works for any industry',
      features: ['Universal Appeal', 'Professional', 'All Industries'],
      premium: false,
      rating: 4.5,
      gradient: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Template</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Select from our collection of ATS-optimized templates designed by career experts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl cursor-pointer relative overflow-hidden ${
              selectedTemplate === template.id
                ? 'border-blue-500 shadow-lg transform -translate-y-2'
                : 'border-white/20 hover:border-blue-200'
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            {template.premium && (
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <Award className="h-3 w-3" />
                  <span>Premium</span>
                </div>
              </div>
            )}

            <div className={`w-full h-48 bg-gradient-to-br ${template.gradient} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10" />
              <div className="text-white font-bold text-lg z-10">{template.name}</div>
              {selectedTemplate === template.id && (
                <div className="absolute top-4 left-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{template.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm">{template.description}</p>

              <div className="space-y-2">
                {template.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(template.id);
                }}
                className={`w-full mt-4 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedTemplate === template.id
                    ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {selectedTemplate === template.id ? 'Selected' : 'Select Template'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-xl">
            <Zap className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Optimization</h3>
            <p className="text-gray-600">
              All templates are automatically optimized for ATS systems and include AI-generated content suggestions
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => onSelect(selectedTemplate)}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
        >
          Continue with {templates.find(t => t.id === selectedTemplate)?.name}
        </button>
      </div>
    </div>
  );
};