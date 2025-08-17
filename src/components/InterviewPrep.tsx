import React, { useState } from 'react';
import { Brain, Play, Pause, RotateCcw, CheckCircle, AlertCircle, Mic, Video } from 'lucide-react';

export const InterviewPrep: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('behavioral');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);

  const categories = [
    { id: 'behavioral', name: 'Behavioral', count: 25 },
    { id: 'technical', name: 'Technical', count: 30 },
    { id: 'situational', name: 'Situational', count: 20 },
    { id: 'company', name: 'Company-Specific', count: 15 }
  ];

  const questions = {
    behavioral: [
      "Tell me about a time when you had to work with a difficult team member.",
      "Describe a situation where you had to meet a tight deadline.",
      "Give me an example of when you showed leadership skills.",
      "Tell me about a time you failed and how you handled it.",
      "Describe a situation where you had to learn something new quickly."
    ],
    technical: [
      "Explain the difference between REST and GraphQL APIs.",
      "How would you optimize a slow-performing database query?",
      "Describe your approach to debugging a complex issue.",
      "What are the key principles of clean code?",
      "How do you ensure code quality in a team environment?"
    ],
    situational: [
      "How would you handle a project that's falling behind schedule?",
      "What would you do if you disagreed with your manager's decision?",
      "How would you approach working with a team in different time zones?",
      "What would you do if you discovered a security vulnerability?",
      "How would you handle conflicting priorities from different stakeholders?"
    ],
    company: [
      "Why do you want to work for our company?",
      "How do you see yourself contributing to our team?",
      "What do you know about our recent product launches?",
      "How do our company values align with your personal values?",
      "Where do you see our industry heading in the next 5 years?"
    ]
  };

  const tips = [
    {
      title: "STAR Method",
      description: "Structure your answers using Situation, Task, Action, Result",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Be Specific",
      description: "Use concrete examples and quantify your achievements",
      icon: AlertCircle,
      color: "text-blue-600"
    },
    {
      title: "Practice Out Loud",
      description: "Record yourself to improve delivery and confidence",
      icon: Mic,
      color: "text-purple-600"
    }
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions[selectedCategory as keyof typeof questions].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start recording logic would go here
    } else {
      // Stop recording and mark question as completed
      setCompletedQuestions([...completedQuestions, currentQuestion]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI Interview Preparation</h2>
            <p className="text-gray-600">Practice with AI-powered mock interviews and get instant feedback</p>
          </div>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentQuestion(0);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestion + 1} of {questions[selectedCategory as keyof typeof questions].length}
            </span>
            <span className="text-sm text-gray-500">
              {completedQuestions.length} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions[selectedCategory as keyof typeof questions].length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Interview Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Question Panel */}
        <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Current Question</h3>
              {completedQuestions.includes(currentQuestion) && (
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Completed</span>
                </div>
              )}
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 mb-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                {questions[selectedCategory as keyof typeof questions][currentQuestion]}
              </p>
            </div>
          </div>

          {/* Recording Controls */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button
              onClick={toggleRecording}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                isRecording
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
              }`}
            >
              {isRecording ? (
                <>
                  <Pause className="h-5 w-5" />
                  <span>Stop Recording</span>
                </>
              ) : (
                <>
                  <Play className="h-5 w-5" />
                  <span>Start Recording</span>
                </>
              )}
            </button>
            
            <button
              onClick={() => setCurrentQuestion(0)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <RotateCcw className="h-5 w-5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <div className="flex space-x-2">
              {questions[selectedCategory as keyof typeof questions].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-200 ${
                    index === currentQuestion
                      ? 'bg-purple-600 text-white'
                      : completedQuestions.includes(index)
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              disabled={currentQuestion === questions[selectedCategory as keyof typeof questions].length - 1}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>

        {/* Tips and Feedback */}
        <div className="space-y-6">
          {/* Tips */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Interview Tips</h3>
            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0">
                    <tip.icon className={`h-4 w-4 ${tip.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{tip.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Feedback */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Feedback</h3>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Strengths</span>
                </div>
                <p className="text-xs text-green-700">
                  Good use of specific examples and clear structure
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="flex items-center space-x-2 mb-1">
                  <AlertCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Improvements</span>
                </div>
                <p className="text-xs text-blue-700">
                  Try to quantify your achievements with numbers
                </p>
              </div>
            </div>
          </div>

          {/* Mock Interview */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Video className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Live Mock Interview</h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Schedule a live mock interview with our AI interviewer for real-time feedback
            </p>
            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Schedule Mock Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};