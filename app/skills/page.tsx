import { Layers } from 'lucide-react';
import type { Metadata } from 'next';
import { getSkills } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Skills | Portfolio',
  description: 'My technical skills and expertise.',
};

const skills = getSkills();

export default function SkillsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-20 font-sans">
      <div className="flex flex-col gap-6 max-w-2xl mb-24">
        <h1 className="text-6xl font-serif italic tracking-tighter text-foreground flex items-center gap-4">
          <Layers className="h-10 w-10 text-muted-foreground mt-2" />
          Skills.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          Technologies and tools I work with.
        </p>
      </div>

      {skills.categories.length === 0 ? (
        <p className="text-muted-foreground">No skills found. Add your skills to <code>data/skills.json</code>.</p>
      ) : (
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category) => (
            <article key={category.name} className="flex flex-col gap-6 border-t border-border pt-8">
              <h2 className="text-2xl font-serif text-foreground">
                {category.name}
              </h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-3 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
