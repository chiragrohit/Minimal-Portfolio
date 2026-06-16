'use client';

import * as React from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    let initialTheme: 'light' | 'dark' = 'light';
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      initialTheme = savedTheme;
    } else {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      initialTheme = mediaQuery.matches ? 'dark' : 'light';
    }
    
    // We only update if it is different from the initial 'light' value to avoid unnecessary re-renders.
    if (initialTheme !== 'light') {
      setTimeout(() => setTheme(initialTheme), 0);
    }
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

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
