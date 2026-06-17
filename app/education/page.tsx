import { GraduationCap } from 'lucide-react';
import type { Metadata } from 'next';
import { getEducation } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Education | Portfolio',
  description: 'My educational background and qualifications.',
};

const education = getEducation();

export default function EducationPage() {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-20 font-sans">
      <div className="flex flex-col gap-6 max-w-2xl mb-24">
        <h1 className="text-6xl font-serif italic tracking-tighter text-foreground flex items-center gap-4">
          <GraduationCap className="h-10 w-10 text-muted-foreground mt-2" />
          Education.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          My academic background and qualifications.
        </p>
      </div>

      {education.length === 0 ? (
        <p className="text-muted-foreground">No education found. Add your education to <code>data/education.json</code>.</p>
      ) : (
        <div className="flex flex-col gap-16">
          {education.map((edu, index) => (
            <article key={index} className="flex flex-col gap-6 border-t border-border pt-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-serif text-foreground">
                    {edu.degree}
                  </h2>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                    {edu.startDate} — {edu.endDate || 'Present'}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {edu.institution}
                </div>
              </div>
              {edu.description && (
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {edu.description}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
