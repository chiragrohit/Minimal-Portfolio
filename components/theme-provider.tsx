'use client';

import * as React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
}

export function ThemeProvider({ children, defaultTheme = 'dark' }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    let initialTheme: 'light' | 'dark' = 'light';
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (defaultTheme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      initialTheme = mediaQuery.matches ? 'dark' : 'light';
    } else {
      initialTheme = defaultTheme;
    }
    
    if (initialTheme !== 'light') {
      setTimeout(() => setTheme(initialTheme), 0);
    }
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, [defaultTheme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const ThemeContext = React.createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => React.useContext(ThemeContext);
