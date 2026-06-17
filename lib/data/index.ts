import type { BlogPost, Profile, Project, Experience, Education, Skills, SocialLinks, Achievement, SiteConfig } from './types';

// Default fallback data
const defaultConfig: SiteConfig = {
  siteTitle: 'My Portfolio',
  siteDescription: 'Minimalist professional portfolio featuring blog and projects.',
  theme: 'dark',
  accentColor: '#3b82f6',
  showBlog: true,
  showAchievements: true,
  showExperience: true,
  showEducation: true,
  showSkills: true,
  footerText: 'All rights reserved.',
};

const defaultProfile: Profile = {
  name: 'Your Name',
  role: 'Software Engineer',
  tagline: 'Building high-performance web applications',
  bio: 'I build high-performance web applications with a focus on polished user interfaces, accessible design, and robust architecture.',
};

// Cached data accessors (loaded once at build time)
let _config: SiteConfig | null = null;
let _profile: Profile | null = null;
let _projects: Project[] | null = null;
let _experience: Experience[] | null = null;
let _education: Education[] | null = null;
let _skills: Skills | null = null;
let _socials: SocialLinks | null = null;
let _achievements: Achievement[] | null = null;
let _blogPosts: BlogPost[] | null = null;

export function getConfig(): SiteConfig {
  if (!_config) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      _config = require('../../data/config.json') as SiteConfig;
    } catch {
      console.warn('[Portfolio] Could not load data/config.json, using defaults. Run: cp -r data.example data');
      _config = defaultConfig;
    }
  }
  return _config;
}

export function getProfile(): Profile {
  if (!_profile) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      _profile = require('../../data/profile.json') as Profile;
    } catch {
      console.warn('[Portfolio] Could not load data/profile.json, using defaults.');
      _profile = defaultProfile;
    }
  }
  return _profile;
}

export function getProjects(): Project[] {
  if (!_projects) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      _projects = require('../../data/projects.json') as Project[];
    } catch {
      console.warn('[Portfolio] Could not load data/projects.json, using empty array.');
      _projects = [];
    }
  }
  return _projects;
}

export function getExperience(): Experience[] {
  if (!_experience) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      _experience = require('../../data/experience.json') as Experience[];
    } catch {
      console.warn('[Portfolio] Could not load data/experience.json, using empty array.');
      _experience = [];
    }
  }
  return _experience;
}

export function getEducation(): Education[] {
  if (!_education) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      _education = require('../../data/education.json') as Education[];
    } catch {
      console.warn('[Portfolio] Could not load data/education.json, using empty array.');
      _education = [];
    }
  }
  return _education;
}

export function getSkills(): Skills {
  if (!_skills) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      _skills = require('../../data/skills.json') as Skills;
    } catch {
      console.warn('[Portfolio] Could not load data/skills.json, using empty skills.');
      _skills = { categories: [] };
    }
  }
  return _skills;
}

export function getSocials(): SocialLinks {
  if (!_socials) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      _socials = require('../../data/socials.json') as SocialLinks;
    } catch {
      console.warn('[Portfolio] Could not load data/socials.json, using empty socials.');
      _socials = {};
    }
  }
  return _socials;
}

export function getAchievements(): Achievement[] {
  if (!_achievements) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      _achievements = require('../../data/achievements.json') as Achievement[];
    } catch {
      console.warn('[Portfolio] Could not load data/achievements.json, using empty array.');
      _achievements = [];
    }
  }
  return _achievements;
}

export function getBlogPosts(): BlogPost[] {
  if (!_blogPosts) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const mod = require('../../data/blog/index');
      _blogPosts = (mod.POSTS || mod.default || []) as BlogPost[];
    } catch {
      console.warn('[Portfolio] Could not load data/blog/index.ts, using empty array.');
      _blogPosts = [];
    }
  }
  return _blogPosts;
}
