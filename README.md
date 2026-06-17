# Minimal Portfolio

A minimal, clean portfolio framework built with Next.js, Tailwind CSS, and TypeScript.

## Architecture

This project separates **framework code** from **user content**:

- **Framework** (`src/`, `app/`, `components/`, `lib/`) - UI components, layouts, styling, routing
- **User Content** (`data/`) - Personal information, projects, experience, blog posts

This separation allows you to receive upstream framework updates without losing your personal data.

## Quick Start

```bash
git clone <repo-url>
cd Minimal-Portfolio
cp -r data.example data
npm install
npm run dev
```

## Customization

All personal data lives in the `data/` directory:

### Configuration (`data/config.json`)

```json
{
  "siteTitle": "My Portfolio",
  "siteDescription": "Minimalist professional portfolio",
  "theme": "dark",
  "accentColor": "#3b82f6",
  "showBlog": true,
  "showAchievements": true,
  "showExperience": true,
  "showEducation": true,
  "showSkills": true,
  "footerText": "All rights reserved."
}
```

### Profile (`data/profile.json`)

```json
{
  "name": "Your Name",
  "role": "Software Engineer",
  "tagline": "Building high-performance web applications",
  "bio": "Your bio here...",
  "avatar": "/assets/profile.jpg",
  "email": "hello@example.com",
  "location": "San Francisco, CA"
}
```

### Projects (`data/projects.json`)

```json
[
  {
    "id": "my-project",
    "title": "My Project",
    "description": "Project description",
    "tech": ["React", "TypeScript"],
    "demoUrl": "https://demo.example.com",
    "githubUrl": "https://github.com/you/repo",
    "featured": true,
    "image": "/assets/project-images/my-project.jpg"
  }
]
```

### Experience (`data/experience.json`)

```json
[
  {
    "company": "Acme Corp",
    "role": "Senior Software Engineer",
    "startDate": "2022-01",
    "endDate": null,
    "description": "Your role description",
    "technologies": ["React", "TypeScript"]
  }
]
```

### Education (`data/education.json`)

```json
[
  {
    "institution": "University of Example",
    "degree": "B.S. Computer Science",
    "startDate": "2015-09",
    "endDate": "2019-05",
    "description": "Your education details"
  }
]
```

### Skills (`data/skills.json`)

```json
{
  "categories": [
    {
      "name": "Frontend",
      "skills": ["React", "Next.js", "TypeScript"]
    },
    {
      "name": "Backend",
      "skills": ["Node.js", "PostgreSQL"]
    }
  ]
}
```

### Social Links (`data/socials.json`)

```json
{
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername",
  "twitter": "https://twitter.com/yourusername",
  "email": "hello@example.com"
}
```

### Achievements (`data/achievements.json`)

```json
[
  {
    "title": "Open Source Contributor",
    "description": "Contributed to 10+ projects",
    "date": "2024",
    "icon": "github"
  }
]
```

### Blog Posts (`data/blog/index.ts`)

Blog posts use JSX for rich content:

```tsx
import * as React from 'react';
import type { BlogPost } from '../../src/lib/data/types';

export const POSTS: BlogPost[] = [
  {
    slug: 'my-first-post',
    date: 'Jan 01, 2026',
    title: 'My First Blog Post',
    desc: 'A short description',
    content: (
      <>
        <p>Your content here...</p>
      </>
    ),
  },
];
```

## Updating Framework

When updates are available:

```bash
git fetch upstream
git merge upstream/main
```

Your `data/` directory will not be affected.

## Pages

- `/` - Homepage with hero, featured projects, latest posts
- `/projects` - All projects
- `/experience` - Work experience
- `/education` - Educational background
- `/skills` - Technical skills
- `/achievements` - Awards and recognitions
- `/blog` - Blog posts
- `/blog/[slug]` - Individual blog post

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide Icons

## Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run linter
```

## License

MIT
