import { Briefcase } from 'lucide-react';
import type { Metadata } from 'next';
import { getExperience } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Experience | Portfolio',
  description: 'My professional experience and work history.',
};

const experience = getExperience();

export default function ExperiencePage() {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-20 font-sans">
      <div className="flex flex-col gap-6 max-w-2xl mb-24">
        <h1 className="text-6xl font-serif italic tracking-tighter text-foreground flex items-center gap-4">
          <Briefcase className="h-10 w-10 text-muted-foreground mt-2" />
          Experience.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          My professional journey and work history.
        </p>
      </div>

      {experience.length === 0 ? (
        <p className="text-muted-foreground">No experience found. Add your experience to <code>data/experience.json</code>.</p>
      ) : (
        <div className="flex flex-col gap-16">
          {experience.map((exp, index) => (
            <article key={index} className="flex flex-col gap-6 border-t border-border pt-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-serif text-foreground">
                    {exp.role}
                  </h2>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                    {exp.startDate} — {exp.endDate || 'Present'}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {exp.company}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {exp.description}
              </p>
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
