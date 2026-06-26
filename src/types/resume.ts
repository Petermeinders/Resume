export interface Experience {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface Contact {
  email: string;
  location: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
}

export interface Education {
  school: string;
  degree: string;
  graduationDate: string;
  location: string;
}

export interface Project {
  name: string;
  description: string;
  url: string;
}

export interface FeaturedProject {
  name: string;
  url: string;
  image: string;
  createdDate: string;
}

export interface Resume {
  name: string;
  title: string;
  overview: string;
  language: string;
  highlights: string[];
  contact: Contact;
  education: Education;
  experience: Experience[];
  skills: string[];
  tools: string[];
  projects: Project[];
  featuredProjects: FeaturedProject[];
}
