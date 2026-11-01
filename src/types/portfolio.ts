export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'Frontend / UI' | 'Open Source' | 'AI / Systems';
  year: string;
  description: string;
  longDescription: string;
  role: string;
  metrics?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string; // 'Full-time' | 'Contract' | 'Founding'
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface Article {
  id: string;
  title: string;
  publication: string;
  date: string;
  readTime: string;
  summary: string;
  link: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  editorialQuote: string;
  bioParagraphs: string[];
  status: {
    available: boolean;
    text: string;
  };
  location: {
    city: string;
    country: string;
    timezone: string;
  };
  email: string;
  socials: {
    name: string;
    label: string;
    url: string;
    handle: string;
  }[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  articles: Article[];
}
