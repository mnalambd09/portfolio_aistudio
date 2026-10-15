export type Language = 'en' | 'bn';

export interface Project {
  id: string;
  title: string;
  titleBn: string;
  tagline: string;
  taglineBn: string;
  description: string;
  descriptionBn: string;
  category: 'all' | 'ai' | 'fullstack' | 'cloud' | 'mobile';
  tags: string[];
  metrics: {
    label: string;
    labelBn: string;
    value: string;
  }[];
  architectureSummary: string;
  architectureSummaryBn: string;
  architectureComponents: {
    layer: string;
    tech: string;
    detail: string;
  }[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  color: string;
}

export interface SkillCategory {
  title: string;
  titleBn: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // percentage
    years: string;
    highlight?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  roleBn: string;
  company: string;
  companyBn: string;
  location: string;
  period: string;
  periodBn: string;
  type: string;
  typeBn: string;
  responsibilities: string[];
  responsibilitiesBn: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  quoteBn: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  modelUsed?: string;
  thinkingMode?: string;
  timestamp: string;
}
