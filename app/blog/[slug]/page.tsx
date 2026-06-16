import { POSTS } from '@/lib/blog';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const p = await params;
  const post = POSTS.find((p_local) => p_local.slug === p.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Journal`,
    description: post.desc,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const p = await params;
  const post = POSTS.find((p_local) => p_local.slug === p.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-6 py-20 font-sans">
      <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-16 font-bold">
        <ArrowLeft className="h-3 w-3" />
        Back to Journal
      </Link>
      
      <article className="flex flex-col gap-8">
        <header className="flex flex-col gap-6 mb-8 border-b border-border pb-12">
          <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
            {post.date}
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif italic tracking-tighter text-foreground leading-[1.1]">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            {post.desc}
          </p>
        </header>
        
        <div className="prose dark:prose-invert max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}
