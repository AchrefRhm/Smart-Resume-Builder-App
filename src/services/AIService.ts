import { User } from '../context/UserContext';

export class AIService {
  static analyzeJobMatch(jobDescription: string, user: User | null) {
    // Simulate AI analysis
    const keywords = jobDescription.toLowerCase().split(/\s+/);
    const userSkills = user?.skills?.map(s => s.name.toLowerCase()) || [];
    
    const matchedSkills = userSkills.filter(skill => 
      keywords.some(keyword => keyword.includes(skill) || skill.includes(keyword))
    );

    const score = Math.min(95, Math.max(60, (matchedSkills.length / userSkills.length) * 100 + Math.random() * 20));
    
    return {
      score: Math.round(score),
      matchedSkills: matchedSkills.length,
      totalSkills: userSkills.length,
      topSkills: matchedSkills.slice(0, 5),
      atsScore: Math.round(85 + Math.random() * 10),
      recommendations: this.generateRecommendations(jobDescription, user)
    };
  }

  static generateSuggestions(jobDescription: string, user: User | null) {
    const suggestions = [
      {
        title: 'Optimize for ATS Keywords',
        description: 'Add more relevant keywords from the job description to improve ATS compatibility',
        icon: require('lucide-react').Target,
        type: 'keyword'
      },
      {
        title: 'Enhance Experience Descriptions',
        description: 'Use stronger action verbs and quantify your achievements with specific metrics',
        icon: require('lucide-react').TrendingUp,
        type: 'experience'
      },
      {
        title: 'Highlight Relevant Skills',
        description: 'Reorganize your skills section to emphasize the most relevant technologies',
        icon: require('lucide-react').Star,
        type: 'skills'
      },
      {
        title: 'Tailor Professional Summary',
        description: 'Customize your summary to better align with this specific role and company',
        icon: require('lucide-react').Edit,
        type: 'summary'
      }
    ];

    return suggestions.slice(0, 4);
  }

  static generateRecommendations(jobDescription: string, user: User | null) {
    return [
      'Consider highlighting your experience with cloud technologies',
      'Add more quantifiable achievements in your experience section',
      'Include relevant certifications if you have any',
      'Tailor your professional summary to match the job requirements'
    ];
  }

  static optimizeResume(user: User | null, jobDescription: string) {
    // This would contain the actual AI optimization logic
    return {
      optimizedContent: 'AI-optimized resume content would be generated here',
      improvements: [
        'Added industry-specific keywords',
        'Enhanced achievement descriptions',
        'Improved ATS compatibility',
        'Tailored content for target role'
      ]
    };
  }
}