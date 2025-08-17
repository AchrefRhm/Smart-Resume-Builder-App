import React, { useState } from 'react';
import { Target, Clock, Award, CheckCircle, X, Brain, TrendingUp } from 'lucide-react';

export const SkillAssessment: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState('javascript');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const skills = [
    { id: 'javascript', name: 'JavaScript', level: 'Intermediate', questions: 15, time: '15 min' },
    { id: 'react', name: 'React', level: 'Advanced', questions: 12, time: '12 min' },
    { id: 'python', name: 'Python', level: 'Beginner', questions: 10, time: '10 min' },
    { id: 'nodejs', name: 'Node.js', level: 'Intermediate', questions: 13, time: '13 min' },
    { id: 'sql', name: 'SQL', level: 'Advanced', questions: 8, time: '8 min' },
    { id: 'aws', name: 'AWS', level: 'Beginner', questions: 10, time: '10 min' }
  ];

  const questions = {
    javascript: [
      {
        question: "What is the difference between 'let', 'const', and 'var' in JavaScript?",
        options: [
          "They are all the same",
          "let and const are block-scoped, var is function-scoped",
          "var is the newest syntax",
          "const can be reassigned"
        ],
        correct: 1
      },
      {
        question: "What does the '===' operator do in JavaScript?",
        options: [
          "Checks for equality without type conversion",
          "Assigns a value",
          "Checks for inequality",
          "Performs type conversion then checks equality"
        ],
        correct: 0
      },
      {
        question: "What is a closure in JavaScript?",
        options: [
          "A way to close the browser",
          "A function that has access to variables in its outer scope",
          "A type of loop",
          "A method to end a program"
        ],
        correct: 1
      }
    ]
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: string) => {
    setAnswers({ ...answers, [currentQuestion]: answerIndex });
  };

  const handleNext = () => {
    if (currentQuestion < questions[selectedSkill as keyof typeof questions].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const skillQuestions = questions[selectedSkill as keyof typeof questions];
    let correct = 0;
    skillQuestions.forEach((q, index) => {
      if (parseInt(answers[index]) === q.correct) {
        correct++;
      }
    });
    return Math.round((correct / skillQuestions.length) * 100);
  };

  if (showResults) {
    const score = calculateScore();
    const level = score >= 80 ? 'Expert' : score >= 60 ? 'Advanced' : score >= 40 ? 'Intermediate' : 'Beginner';
    
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl text-center">
          <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Award className="h-10 w-10 text-green-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Complete!</h2>
          <p className="text-gray-600 mb-8">Here are your results for {skills.find(s => s.id === selectedSkill)?.name}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">{score}%</div>
              <div className="text-sm text-gray-600">Overall Score</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">{level}</div>
              <div className="text-sm text-gray-600">Skill Level</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {Object.keys(answers).length}/{questions[selectedSkill as keyof typeof questions].length}
              </div>
              <div className="text-sm text-gray-600">Questions Answered</div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setAnswers({});
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Take Another Assessment
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
              View Detailed Report
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Skill Assessment</h2>
            <p className="text-gray-600">Test your technical skills and get personalized recommendations</p>
          </div>
        </div>

        {/* Skill Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => setSelectedSkill(skill.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedSkill === skill.id
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 bg-white hover:border-orange-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  skill.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {skill.level}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{skill.questions} questions</span>
                <span>{skill.time}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Assessment Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Question Panel */}
        <div className="lg:col-span-3 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Question {currentQuestion + 1} of {questions[selectedSkill as keyof typeof questions].length}
              </h3>
              <p className="text-sm text-gray-600">{skills.find(s => s.id === selectedSkill)?.name} Assessment</p>
            </div>
            <div className="flex items-center space-x-2 text-orange-600">
              <Clock className="h-5 w-5" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div
              className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions[selectedSkill as keyof typeof questions].length) * 100}%`
              }}
            />
          </div>

          {/* Question */}
          <div className="mb-8">
            <h4 className="text-xl text-gray-900 mb-6 leading-relaxed">
              {questions[selectedSkill as keyof typeof questions][currentQuestion]?.question}
            </h4>

            <div className="space-y-3">
              {questions[selectedSkill as keyof typeof questions][currentQuestion]?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index.toString())}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    answers[currentQuestion] === index.toString()
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 bg-white hover:border-orange-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index.toString()
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQuestion] === index.toString() && (
                        <CheckCircle className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <span className="text-gray-900">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions[selectedSkill as keyof typeof questions].length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Overview */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Progress</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Completed</span>
                <span className="font-medium text-gray-900">
                  {Object.keys(answers).length}/{questions[selectedSkill as keyof typeof questions].length}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Time Remaining</span>
                <span className="font-medium text-orange-600">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Assessment Tips</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <Brain className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Read each question carefully before selecting an answer</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Manage your time wisely - you can always come back</span>
              </div>
              <div className="flex items-start space-x-2">
                <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Your results will help improve your resume</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};