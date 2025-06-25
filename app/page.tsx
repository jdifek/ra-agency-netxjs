'use client';

import React from 'react';
import clsx from 'clsx';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Cases } from './components/Cases';
import { Reviews } from './components/Reviews';
import { ContactForm } from './components/ContactForm';
import { AchievementsAndTeam } from './components/AchievementsAndTeam';

export default function Home() {
  return (
    <ThemeProvider>
      {(theme) => (
        <div
          className={clsx(
            'min-h-screen',
            theme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'
          )}
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <AchievementsAndTeam />
            <Cases />
            <Reviews />
            <ContactForm />
          </main>
          <footer
            className={clsx(
              'relative mt-32 pt-16 pb-16 border-t',
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            )}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg flex items-center justify-center">
                      <span className="text-black font-bold text-sm">RA</span>
                    </div>
                    <span
                      className={clsx(
                        'font-bold',
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      )}
                    >
                      RA AGENCY
                    </span>
                  </div>
                  <div
                    className={clsx(
                      'space-y-2 text-sm',
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    )}
                  >
                    <p>Політика конфіденційності</p>
                    <p>Допустимі клієнти</p>
                  </div>
                </div>
                <div>
                  <h3
                    className={clsx(
                      'font-medium mb-4',
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    )}
                  >
                    Сервіси
                  </h3>
                  <div
                    className={clsx(
                      'space-y-2 text-sm',
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    )}
                  >
                    <p>Про нас</p>
                    <p>Ресурси</p>
                    <p>Партнерам</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 text-gray-400">
                  <p className="pt-4">© RA AGENCY 2025.</p>
                  <p>ALL RIGHTS RESERVED</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </ThemeProvider>
  );
}