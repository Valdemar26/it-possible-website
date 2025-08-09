export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  experience: number;
  technologies: string[];
  imageUrl: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  imageUrl: string;
  isHighlight?: boolean;
  completedDate: Date;
  duration: string;
  teamSize: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  technologies: string[];
  pricing?: {
    starting: number;
    currency: string;
    unit: string;
  };
  estimatedTime: string;
  isPopular?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  agreeToTerms: boolean;
}
