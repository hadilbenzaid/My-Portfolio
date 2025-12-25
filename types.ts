
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  gallery?: string[]; 
  techStack: string[];
  githubLink: string;
  liveDemo: string | null;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}