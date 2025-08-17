import React, { useState, useCallback } from 'react';
import { Upload, FileText, CheckCircle, AlertTriangle, X, Download, Zap } from 'lucide-react';

export const ResumeScanner: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<any>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFile = (file: File) => {
    if (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setUploadedFile(file);
      scanResume(file);
    } else {
      alert('Please upload a PDF or DOCX file');
    }
  };

  const scanResume = async (file: File) => {
    setIsScanning(true);
    
    // Simulate AI scanning
    setTimeout(() => {
      setScanResults({
        overallScore: 78,
        atsScore: 85,
        readabilityScore: 72,
        keywordScore: 80,
        sections: {
          contact: { score: 95, status: 'excellent', issues: [] },
          summary: { score: 70, status: 'good', issues: ['Could be more specific about achievements'] },
          experience: { score: 85, status: 'excellent', issues: [] },
          skills: { score: 60, status: 'needs-improvement', issues: ['Missing trending technologies', 'Skills not categorized'] },
          education: { score: 90, status: 'excellent', issues: [] }
        },
        keywords: {
          found: ['JavaScript', 'React', 'Node.js', 'Python'],
          missing: ['TypeScript', 'AWS', 'Docker', 'Kubernetes'],
          suggestions: ['Add cloud computing skills', 'Include more specific frameworks']
        },
        improvements: [
          {
            type: 'critical',
            title: 'Add Missing Keywords',
            description: 'Your resume is missing key industry terms that ATS systems look for',
            impact: 'High'
          },
          {
            type: 'warning',
            title: 'Quantify Achievements',
            description: 'Add specific numbers and metrics to your accomplishments',
            impact: 'Medium'
          },
          {
            type: 'info',
            title: 'Improve Formatting',
            description: 'Use consistent bullet points and spacing throughout',
            impact: 'Low'
          }
        ]
      });
      setIsScanning(false);
    }, 3000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'good':
        return <CheckCircle className="h-5 w-5 text-yellow-600" />;
      case 'needs-improvement':
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI Resume Scanner</h2>
            <p className="text-gray-600">Upload your resume for instant AI-powered analysis and optimization tips</p>
          </div>
        </div>

        {/* Upload Area */}
        {!uploadedFile && (
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
              dragActive 
                ? 'border-emerald-500 bg-emerald-50' 
                : 'border-gray-300 hover:border-emerald-400 hover:bg-emerald-50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="p-4 bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Upload className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Your Resume</h3>
            <p className="text-gray-600 mb-4">Drag and drop your resume here, or click to browse</p>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => e.target.files && handleFile(e.target.files[0])}
              className="hidden"
              id="resume-upload"
            />
            <label
              htmlFor="resume-upload"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200 cursor-pointer"
            >
              <Upload className="h-4 w-4" />
              <span>Choose File</span>
            </label>
            <p className="text-xs text-gray-500 mt-2">Supports PDF and DOCX files up to 10MB</p>
          </div>
        )}

        {/* File Info */}
        {uploadedFile && !scanResults && (
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">{uploadedFile.name}</h3>
                  <p className="text-sm text-gray-600">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setUploadedFile(null);
                  setScanResults(null);
                }}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {isScanning && (
              <div className="mt-4 flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-600 border-t-transparent" />
                <span className="text-blue-600 font-medium">Analyzing your resume...</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Scan Results */}
      {scanResults && (
        <div className="space-y-8">
          {/* Overall Scores */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg text-center">
              <div className={`text-3xl font-bold mb-2 ${getScoreColor(scanResults.overallScore)}`}>
                {scanResults.overallScore}%
              </div>
              <p className="text-sm text-gray-600">Overall Score</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg text-center">
              <div className={`text-3xl font-bold mb-2 ${getScoreColor(scanResults.atsScore)}`}>
                {scanResults.atsScore}%
              </div>
              <p className="text-sm text-gray-600">ATS Compatibility</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg text-center">
              <div className={`text-3xl font-bold mb-2 ${getScoreColor(scanResults.readabilityScore)}`}>
                {scanResults.readabilityScore}%
              </div>
              <p className="text-sm text-gray-600">Readability</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg text-center">
              <div className={`text-3xl font-bold mb-2 ${getScoreColor(scanResults.keywordScore)}`}>
                {scanResults.keywordScore}%
              </div>
              <p className="text-sm text-gray-600">Keyword Match</p>
            </div>
          </div>

          {/* Section Analysis */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Section Analysis</h3>
            <div className="space-y-4">
              {Object.entries(scanResults.sections).map(([section, data]: [string, any]) => (
                <div key={section} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(data.status)}
                    <div>
                      <h4 className="font-medium text-gray-900 capitalize">{section}</h4>
                      {data.issues.length > 0 && (
                        <p className="text-sm text-gray-600">{data.issues[0]}</p>
                      )}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBackground(data.score)} ${getScoreColor(data.score)}`}>
                    {data.score}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Keywords Found</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {scanResults.keywords.found.map((keyword: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    ✓ {keyword}
                  </span>
                ))}
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-3">Missing Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {scanResults.keywords.missing.map((keyword: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    ✗ {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Improvement Suggestions</h3>
              <div className="space-y-4">
                {scanResults.improvements.map((improvement: any, index: number) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    improvement.type === 'critical' ? 'border-red-500 bg-red-50' :
                    improvement.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                    'border-blue-500 bg-blue-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{improvement.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        improvement.impact === 'High' ? 'bg-red-100 text-red-800' :
                        improvement.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {improvement.impact} Impact
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{improvement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Optimize?</h3>
                <p className="text-gray-600">Use our AI Resume Builder to implement these improvements automatically</p>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Download className="h-4 w-4" />
                  <span>Download Report</span>
                </button>
                <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  <Zap className="h-4 w-4" />
                  <span>Optimize Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};