import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { getConfig } from '@/lib/data';

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

const config = getConfig();

export const metadata: Metadata = {
  title: `${config.siteTitle}`,
  description: config.siteDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground selection:bg-muted-foreground selection:text-background flex flex-col">
        <ThemeProvider defaultTheme={config.theme}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <footer className="py-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {config.siteTitle}. {config.footerText}</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
