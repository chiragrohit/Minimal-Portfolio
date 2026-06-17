'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './theme-toggle';
import { getProfile, getConfig } from '@/lib/data';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const profile = getProfile();
  const config = getConfig();

  const navLinks = [
    { href: '/projects', label: 'Projects', show: true },
    { href: '/experience', label: 'Experience', show: config.showExperience },
    { href: '/blog', label: 'Blog', show: config.showBlog },
  ].filter(link => link.show);

  return (
    <header className="sticky top-0 z-50 w-full mb-8 pt-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xs tracking-[0.3em] uppercase font-bold">{profile.name} — <span className="text-muted-foreground font-normal italic font-serif capitalize">{profile.role}</span></span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-muted-foreground text-foreground">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ml-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="container mx-auto max-w-5xl flex flex-col items-center space-y-6 py-6 text-[11px] uppercase tracking-[0.2em] font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-muted-foreground text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
