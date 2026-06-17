import { Trophy } from 'lucide-react';
import type { Metadata } from 'next';
import { getAchievements } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Achievements | Portfolio',
  description: 'My achievements and accomplishments.',
};

const achievements = getAchievements();

export default function AchievementsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-20 font-sans">
      <div className="flex flex-col gap-6 max-w-2xl mb-24">
        <h1 className="text-6xl font-serif italic tracking-tighter text-foreground flex items-center gap-4">
          <Trophy className="h-10 w-10 text-muted-foreground mt-2" />
          Achievements.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          Awards, recognitions, and milestones.
        </p>
      </div>

      {achievements.length === 0 ? (
        <p className="text-muted-foreground">No achievements found. Add your achievements to <code>data/achievements.json</code>.</p>
      ) : (
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <article key={index} className="flex flex-col gap-4 border-t border-border pt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif text-foreground">
                  {achievement.title}
                </h2>
                {achievement.date && (
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                    {achievement.date}
                  </div>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {achievement.description}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
