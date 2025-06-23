
import React from 'react';
import clsx from 'clsx';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';

export const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50 backdrop-blur-md',
      theme === 'dark' ? 'bg-black/20 border-gold/10' : 'bg-white/10 border-gray-200'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className={clsx(
            'text-xl font-bold',
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            RA Agency
          </span>
       
          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Services', 'Cases', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={clsx(
                  'transition-colors duration-300 hover:text-gold',
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                )}
              >
                {item}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
