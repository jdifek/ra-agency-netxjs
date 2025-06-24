'use client';

import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={clsx(
        'relative py-24 overflow-hidden',
        theme === 'dark' ? 'bg-black' : 'bg-gray-100'
      )}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={clsx(
            'text-4xl md:text-5xl font-light mb-4 leading-tight',
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}
        >
          Про RA Agency
        </motion.h2>

        {/* Тонкая линия под заголовком */}
        <div
          className={clsx(
            'mx-auto mb-12 h-1 w-20 rounded-full',
            theme === 'dark' ? 'bg-amber-500' : 'bg-amber-600'
          )}
        ></div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={clsx(
            'text-lg max-w-3xl mx-auto leading-relaxed',
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          )}
        >
          RA Agency — це{' '}
          <strong className={clsx(theme === 'dark' ? 'text-white' : 'text-gray-900')}>
            маркетингове агентство
          </strong>
          , яке спеціалізується на просуванні через{' '}
          <strong className={clsx(theme === 'dark' ? 'text-amber-400' : 'text-amber-600')}>
            Telegram Ads
          </strong>
          . Ми допомагаємо брендам досягати їхньої аудиторії з максимальною ефективністю, створюючи стратегії, що приносять{' '}
          <strong className={clsx(theme === 'dark' ? 'text-amber-400' : 'text-amber-600')}>
            реальні результати
          </strong>
          .
        </motion.p>
      </div>
    </section>
  );
};
