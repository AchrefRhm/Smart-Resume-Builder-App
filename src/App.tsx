import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { ResumeBuilder } from './components/ResumeBuilder';
import { TemplateSelector } from './components/TemplateSelector';
import { CoverLetterGenerator } from './components/CoverLetterGenerator';
import { UserProfile } from './components/UserProfile';
import { ResumePreview } from './components/ResumePreview';
import { Analytics } from './components/Analytics';
import { InterviewPrep } from './components/InterviewPrep';
import { SkillAssessment } from './components/SkillAssessment';
import { JobMatcher } from './components/JobMatcher';
import { CareerInsights } from './components/CareerInsights';
import { ResumeScanner } from './components/ResumeScanner';
import { NetworkingHub } from './components/NetworkingHub';
import { UserProvider } from './context/UserContext';

type ActiveView = 'dashboard' | 'profile' | 'builder' | 'templates' | 'cover-letter' | 'preview' | 'analytics' | 'interview-prep' | 'skills' | 'jobs' | 'insights' | 'scanner' | 'networking';

function App() {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');

  const renderActiveView = () => {
    switch (activeView) {
      case 'profile':
        return <UserProfile onNext={() => setActiveView('builder')} />;
      case 'builder':
        return <ResumeBuilder onNext={() => setActiveView('preview')} />;
      case 'templates':
        return <TemplateSelector onSelect={() => setActiveView('builder')} />;
      case 'cover-letter':
        return <CoverLetterGenerator />;
      case 'preview':
        return <ResumePreview />;
      case 'analytics':
        return <Analytics />;
      case 'interview-prep':
        return <InterviewPrep />;
      case 'skills':
        return <SkillAssessment />;
      case 'jobs':
        return <JobMatcher />;
      case 'insights':
        return <CareerInsights />;
      case 'scanner':
        return <ResumeScanner />;
      case 'networking':
        return <NetworkingHub />;
      default:
        return <Dashboard onNavigate={setActiveView} />;
    }
  };

  return (
    <UserProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header activeView={activeView} onNavigate={setActiveView} />
        <main className="container mx-auto px-4 py-8">
          {renderActiveView()}
        </main>
      </div>
    </UserProvider>
  );
}

export default App;