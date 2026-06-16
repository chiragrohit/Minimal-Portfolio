import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full mb-8 pt-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xs tracking-[0.3em] uppercase font-bold">DevPortfolio — <span className="text-muted-foreground font-normal italic font-serif capitalize">Software Engineer</span></span>
        </Link>
        <nav className="flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          <Link href="/projects" className="transition-colors hover:text-muted-foreground text-foreground">
            Projects
          </Link>
          <Link href="/blog" className="transition-colors hover:text-muted-foreground text-foreground">
            Blog
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
