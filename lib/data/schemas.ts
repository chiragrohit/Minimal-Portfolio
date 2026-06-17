import { z } from 'zod';

export const ProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  role: z.string().min(1, 'Role is required'),
  tagline: z.string().min(1, 'Tagline is required'),
  bio: z.string().min(1, 'Bio is required'),
  avatar: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  location: z.string().optional(),
});

export const ProjectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  tech: z.array(z.string()).default([]),
  demoUrl: z.string().url().optional().or(z.literal('')),
  githubUrl: z.string().url().optional().or(z.literal('')),
  featured: z.boolean().default(false),
  image: z.string().optional(),
});

export const ExperienceSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  startDate: z.string().min(1),
  endDate: z.string().nullable().optional(),
  description: z.string().min(1),
  technologies: z.array(z.string()).default([]),
});

export const EducationSchema = z.object({
  institution: z.string().min(1),
  degree: z.string().min(1),
  startDate: z.string().min(1),
  endDate: z.string().optional(),
  description: z.string().optional(),
});

export const SkillCategorySchema = z.object({
  name: z.string().min(1),
  skills: z.array(z.string()).default([]),
});

export const SkillsSchema = z.object({
  categories: z.array(SkillCategorySchema).default([]),
});

export const SocialLinksSchema = z.object({
  github: z.string().url().optional().or(z.literal('')),
  linkedin: z.string().url().optional().or(z.literal('')),
  twitter: z.string().url().optional().or(z.literal('')),
  email: z.string().email().optional().or(z.literal('')),
  website: z.string().url().optional().or(z.literal('')),
});

export const AchievementSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().optional(),
  icon: z.string().optional(),
});

export const SiteConfigSchema = z.object({
  siteTitle: z.string().min(1).default('My Portfolio'),
  siteDescription: z.string().min(1).default('Minimalist professional portfolio featuring blog and projects.'),
  theme: z.enum(['light', 'dark', 'system']).default('dark'),
  accentColor: z.string().default('#3b82f6'),
  showBlog: z.boolean().default(true),
  showAchievements: z.boolean().default(true),
  showExperience: z.boolean().default(true),
  showEducation: z.boolean().default(true),
  showSkills: z.boolean().default(true),
  footerText: z.string().default('All rights reserved.'),
});

export type Profile = z.infer<typeof ProfileSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type Skills = z.infer<typeof SkillsSchema>;
export type SocialLinks = z.infer<typeof SocialLinksSchema>;
export type Achievement = z.infer<typeof AchievementSchema>;
export type SiteConfig = z.infer<typeof SiteConfigSchema>;
