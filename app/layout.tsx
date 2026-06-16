import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer',
  description: 'Minimalist professional portfolio featuring blog and projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground selection:bg-muted-foreground selection:text-background flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <footer className="py-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
