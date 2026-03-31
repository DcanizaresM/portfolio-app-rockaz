export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  url?: string;
  liveUrl?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  social: {
    github: string;
    linkedin: string;
  };
  projects: Project[];
}