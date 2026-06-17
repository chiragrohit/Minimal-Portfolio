import * as React from 'react';

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  avatar?: string;
  email?: string;
  location?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  technologies?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  website?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
  icon?: string;
}

export interface BlogPost {
  slug: string;
  date: string;
  title: string;
  desc: string;
  content: React.ReactNode;
}

export interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
  theme: 'light' | 'dark' | 'system';
  accentColor: string;
  showBlog: boolean;
  showAchievements: boolean;
  showExperience: boolean;
  showEducation: boolean;
  showSkills: boolean;
  footerText: string;
}
