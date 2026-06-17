import { CodeSquare, ExternalLink, Github } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getProjects, getConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'A collection of my recent software engineering work.',
};

const config = getConfig();
const projects = getProjects();

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-20 font-sans">
      <div className="flex flex-col gap-6 max-w-2xl mb-24">
        <h1 className="text-6xl font-serif italic tracking-tighter text-foreground flex items-center gap-4">
          <CodeSquare className="h-10 w-10 text-muted-foreground mt-2" />
          Projects.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          Open-source tools, design systems, and full-stack applications.
        </p>
      </div>

      {projects.length === 0 ? (
        <p className="text-muted-foreground">No projects found. Add your projects to <code>data/projects.json</code>.</p>
      ) : (
        <div className="grid gap-16 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} id={project.id} className="flex flex-col gap-6 group">
              <div className="aspect-[4/3] w-full border border-border bg-muted/20 relative group-hover:border-foreground/50 transition-colors flex flex-col justify-end p-6">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <div className="w-24 h-24 rounded-full border border-border"></div>
                  </div>
                )}
                <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-widest text-muted-foreground z-10">Project Canvas</div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <h2 className="text-2xl font-serif text-foreground">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Github link">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live demo">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
