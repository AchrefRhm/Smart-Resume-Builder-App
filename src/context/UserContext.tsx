import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
  gpa?: string;
}

interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft' | 'language';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

interface User {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

interface UserContextType {
  user: User | null;
  updateUser: (userData: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    personalInfo: {
      firstName: 'Alex',
      lastName: 'Johnson',
      email: 'alex.johnson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      summary: 'Passionate software engineer with 5+ years of experience building scalable web applications and leading cross-functional teams. Expertise in modern JavaScript frameworks, cloud architecture, and agile development practices.',
    },
    experience: [
      {
        id: '1',
        company: 'TechCorp Solutions',
        position: 'Senior Software Engineer',
        startDate: '2021-03',
        endDate: '',
        current: true,
        description: 'Led development of microservices architecture resulting in 40% performance improvement. Managed team of 8 developers and delivered critical features for 1M+ users.',
      }
    ],
    education: [
      {
        id: '1',
        institution: 'Stanford University',
        degree: 'Master of Science',
        field: 'Computer Science',
        graduationDate: '2019-06',
      }
    ],
    skills: [
      { id: '1', name: 'JavaScript', category: 'technical', proficiency: 'expert' },
      { id: '2', name: 'React', category: 'technical', proficiency: 'expert' },
      { id: '3', name: 'Node.js', category: 'technical', proficiency: 'advanced' },
      { id: '4', name: 'Python', category: 'technical', proficiency: 'advanced' },
      { id: '5', name: 'AWS', category: 'technical', proficiency: 'intermediate' },
    ]
  });

  const updateUser = (userData: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...userData } : null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};