import Link from 'next/link';
import { ArrowRight, Github, CodeSquare, PenLine } from 'lucide-react';
import { POSTS } from '@/lib/blog';

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-24 sm:py-32 flex flex-col gap-24 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col gap-8 items-start max-w-4xl">
        <h1 className="text-5xl sm:text-[90px] leading-[0.9] font-serif italic tracking-tighter text-foreground">
          Software Engineer <br className="hidden sm:inline" /> 
          <span className="not-italic font-sans font-bold tracking-tight text-foreground">& Interaction Designer.</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-light mb-4">
          I build high-performance web applications with a focus on polished user interfaces, accessible design, and robust architecture.
        </p>
        <div className="flex gap-6 mt-4 items-center">
          <Link
            href="/projects"
            className="text-[10px] uppercase tracking-widest font-medium text-background bg-foreground px-6 py-3 border border-foreground hover:bg-background hover:text-foreground transition-all duration-300"
          >
            View Projects
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] uppercase tracking-widest font-medium text-foreground bg-transparent px-6 py-3 border border-border hover:border-foreground transition-colors flex items-center"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </div>
      </section>

      {/* Selected Work */}
      <section className="flex flex-col gap-8 border-t border-border pt-12">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2 font-bold">
            <CodeSquare className="h-4 w-4" />
            Selected Work
          </h2>
          <Link href="/projects" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
            All Projects <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              title: 'E-Commerce Dashboard',
              desc: 'A full-stack analytics dashboard for modern retailers.',
              href: '/projects',
            },
            {
              title: 'TypeFlow',
              desc: 'Minimalist markdown editor with cloud sync.',
              href: '/projects',
            },
          ].map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex flex-col justify-end border border-border bg-transparent p-8 min-h-[240px] transition-all hover:bg-muted/30 relative"
            >
              <div className="flex flex-col gap-3 relative z-10">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Featured Project</div>
                <h3 className="text-2xl font-serif text-foreground transition-colors group-hover:text-muted-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Writing */}
      <section className="flex flex-col gap-8 border-t border-border pt-12">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2 font-bold">
            <PenLine className="h-4 w-4" />
            Latest Writing (03)
          </h2>
          <Link href="/blog" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
            All Posts <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {POSTS.slice(0, 3).map((post) => (
            <Link
              key={post.title}
              href={`/blog/${post.slug}`}
              className="group cursor-pointer flex flex-col gap-2"
            >
              <div className="text-[10px] text-muted-foreground mb-1 font-mono uppercase tracking-widest">{post.date}</div>
              <h3 className="text-lg font-serif italic text-foreground group-hover:text-muted-foreground transition-colors">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
