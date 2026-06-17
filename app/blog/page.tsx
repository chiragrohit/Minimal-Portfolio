import { PenLine } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts, getConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog | Portfolio',
  description: 'Thoughts on software engineering, design, and architecture.',
};

const config = getConfig();
const posts = getBlogPosts();

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-20 font-sans">
      <div className="flex flex-col gap-6 max-w-2xl mb-24">
        <h1 className="text-6xl font-serif italic tracking-tighter text-foreground flex items-center gap-4">
          <PenLine className="h-10 w-10 text-muted-foreground mt-2" />
          Journal.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          Essays and technical notes on full-stack development, design systems, and mostly building things on the web.
        </p>
      </div>

      <div className="flex flex-col border-t border-border pt-8">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-8 font-bold">Journal ({posts.length.toString().padStart(2, '0')})</div>
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No blog posts found. Add your posts to <code>data/blog/</code>.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-4 cursor-pointer"
              >
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                  {post.date}
                </div>
                <h2 className="text-2xl font-serif italic text-foreground group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light text-sm mt-2">
                  {post.desc}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
