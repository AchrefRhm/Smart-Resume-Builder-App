import React, { useState } from 'react';
import { Mail, Zap, Copy, Download, Sparkles } from 'lucide-react';
import { useUser } from '../context/UserContext';

export const CoverLetterGenerator: React.FC = () => {
  const { user } = useUser();
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [tone, setTone] = useState('professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const letter = generateCoverLetter();
      setGeneratedLetter(letter);
      setIsGenerating(false);
    }, 3000);
  };

  const generateCoverLetter = () => {
    const userName = `${user?.personalInfo?.firstName} ${user?.personalInfo?.lastName}`;
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    return `${currentDate}

Dear Hiring Manager,

I am writing to express my strong interest in the ${jobTitle} position at ${companyName}. With my background in software engineering and passion for innovative technology solutions, I am excited about the opportunity to contribute to your team's success.

In my previous role as Senior Software Engineer at TechCorp Solutions, I successfully led the development of scalable microservices architecture that improved system performance by 40%. My experience with modern technologies including React, Node.js, and cloud platforms aligns perfectly with the requirements outlined in your job posting.

What particularly excites me about ${companyName} is your commitment to pushing the boundaries of technology. I am eager to bring my expertise in ${user?.skills?.slice(0, 3).map(s => s.name).join(', ') || 'JavaScript, React, and cloud technologies'} to help drive your innovative projects forward.

I would welcome the opportunity to discuss how my skills and enthusiasm can contribute to ${companyName}'s continued success. Thank you for considering my application.

Sincerely,
${userName}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
  };

  const downloadLetter = () => {
    const blob = new Blob([generatedLetter], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${jobTitle.replace(/\s+/g, '_')}_cover_letter.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI Cover Letter Generator</h2>
            <p className="text-gray-600">Create personalized cover letters that stand out</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g., Senior Software Engineer"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g., Google"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Writing Tone</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              >
                <option value="professional">Professional</option>
                <option value="enthusiastic">Enthusiastic</option>
                <option value="confident">Confident</option>
                <option value="creative">Creative</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Description (Optional)
              </label>
              <textarea
                rows={6}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here for more personalized content..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={!jobTitle || !companyName || isGenerating}
              className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium text-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  <span>Generating Your Cover Letter...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  <span>Generate Cover Letter</span>
                </>
              )}
            </button>
          </div>

          {/* Preview/Output */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit">
            {generatedLetter ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Your Cover Letter</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <Copy className="h-4 w-4" />
                      <span className="text-sm">Copy</span>
                    </button>
                    <button
                      onClick={downloadLetter}
                      className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <Download className="h-4 w-4" />
                      <span className="text-sm">Download</span>
                    </button>
                  </div>
                </div>
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap text-gray-800 font-sans text-sm leading-relaxed">
                    {generatedLetter}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Generate</h3>
                <p className="text-gray-600 text-sm">
                  Fill in the job details and click generate to create your personalized cover letter
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Zap className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">AI-Powered</h3>
          </div>
          <p className="text-gray-700 text-sm">
            Advanced AI analyzes job requirements and creates tailored content that resonates with employers
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Mail className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Personalized</h3>
          </div>
          <p className="text-gray-700 text-sm">
            Every cover letter is uniquely crafted based on your profile, skills, and the specific job requirements
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Sparkles className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Professional</h3>
          </div>
          <p className="text-gray-700 text-sm">
            Professionally written content that highlights your strengths and matches the company's tone and culture
          </p>
        </div>
      </div>
    </div>
  );
};