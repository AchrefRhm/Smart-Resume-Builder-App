import React, { useState } from 'react';
import { Brain, CheckCircle, AlertCircle, Lightbulb, FileText } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { AIService } from '../services/AIService';

interface ResumeBuilderProps {
  onNext: () => void;
}

export const ResumeBuilder: React.FC<ResumeBuilderProps> = ({ onNext }) => {
  const { user } = useUser();
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const aiAnalysis = AIService.analyzeJobMatch(jobDescription, user);
      setAnalysis(aiAnalysis);
      setSuggestions(AIService.generateSuggestions(jobDescription, user));
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleOptimize = () => {
    // This would integrate with actual AI service
    onNext();
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI Resume Builder</h2>
            <p className="text-gray-600">Let AI optimize your resume for maximum impact</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Job Description (Optional)
            </label>
            <textarea
              rows={8}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here to get AI-powered recommendations for your resume..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !jobDescription.trim()}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4" />
                  <span>Analyze Job Match</span>
                </>
              )}
            </button>

            <button
              onClick={handleOptimize}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              <FileText className="h-4 w-4" />
              <span>Generate Resume</span>
            </button>
          </div>
        </div>
      </div>

      {analysis && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-2 rounded-lg ${
                analysis.score >= 80 ? 'bg-green-100 text-green-600' :
                analysis.score >= 60 ? 'bg-yellow-100 text-yellow-600' :
                'bg-red-100 text-red-600'
              }`}>
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Match Score</h3>
                <p className="text-2xl font-bold text-gray-900">{analysis.score}%</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  analysis.score >= 80 ? 'bg-green-500' :
                  analysis.score >= 60 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${analysis.score}%` }}
              />
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Skills Match</h3>
                <p className="text-sm text-gray-600">{analysis.matchedSkills} / {analysis.totalSkills}</p>
              </div>
            </div>
            <div className="space-y-2">
              {analysis.topSkills.map((skill: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-sm text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">ATS Score</h3>
                <p className="text-2xl font-bold text-gray-900">{analysis.atsScore}%</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {analysis.atsScore >= 90 ? 'Excellent ATS compatibility' :
               analysis.atsScore >= 70 ? 'Good ATS compatibility' :
               'Needs ATS optimization'}
            </p>
          </div>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">AI Suggestions</h3>
              <p className="text-gray-600">Personalized recommendations to improve your resume</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <suggestion.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{suggestion.title}</h4>
                    <p className="text-gray-700 text-sm mb-3">{suggestion.description}</p>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors duration-200">
                      Apply Suggestion →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Create Your Resume?</h3>
            <p className="text-gray-600">
              Your profile is complete and optimized. Let's generate your professional resume!
            </p>
          </div>
          <button
            onClick={handleOptimize}
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            Generate Resume
          </button>
        </div>
      </div>
    </div>
  );
};