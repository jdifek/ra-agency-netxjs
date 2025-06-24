'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const cases = [
  {
    title: 'Telegram Pro: Проєкт A',
    description: 'Збільшення охоплення на 200% за 3 місяці через таргетовану рекламу в Telegram Ads. Запуск по гео, інтересам і поведінці.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
    platform: 'Telegram',
    metrics: [
      { label: 'Охоплення', value: '+200%' },
      { label: 'Підписники', value: '50K+' },
      { label: 'CPC', value: '↓ 37%' },
    ],
  },
  {
    title: 'Facebook Ads: Проєкт B',
    description: 'Оптимізація рекламного бюджету на 30% із підвищенням конверсій завдяки A/B тестуванню креативів і цільової аудиторії.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png',
    platform: 'Facebook',
    metrics: [
      { label: 'Бюджет', value: '−30%' },
      { label: 'Ліди', value: '10K+' },
      { label: 'Конверсія', value: '+18%' },
    ],
  },
  {
    title: 'Мультилонч: Проєкт C',
    description: 'Запуск вірусної кампанії одночасно на Facebook і Telegram з охопленням 500K і залученням 20K користувачів.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png',
    platform: 'FB + Telegram',
    metrics: [
      { label: 'Перегляди', value: '500K' },
      { label: 'Взаємодій', value: '20K+' },
      { label: 'ROI', value: '4.2x' },
    ],
  },
];

export const Cases: React.FC = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section
      id="cases"
      className={clsx(
        'relative py-24 overflow-hidden',
        theme === 'dark' ? 'bg-black' : 'bg-gray-100'
      )}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={clsx(
            'text-4xl md:text-5xl font-light mb-12 text-center leading-tight',
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}
        >
          Наші Кейси
        </motion.h2>
        <div className="relative">
        <motion.div
  key={currentIndex}
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.5 }}
  className={clsx(
    'p-8 rounded-2xl border shadow-xl max-w-3xl mx-auto backdrop-blur-sm',
    theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
  )}
>
  <div className="flex flex-col items-center text-center space-y-4">
    <img
      src={cases[currentIndex].logo}
      alt={cases[currentIndex].platform}
      className="w-20 h-20 object-contain"
    />
    <span className={clsx('text-sm uppercase tracking-wider font-semibold', theme === 'dark' ? 'text-amber-400' : 'text-amber-600')}>
      {cases[currentIndex].platform}
    </span>
    <h3 className={clsx('text-2xl font-bold', theme === 'dark' ? 'text-white' : 'text-gray-900')}>
      {cases[currentIndex].title}
    </h3>
    <p className={clsx('text-base max-w-xl', theme === 'dark' ? 'text-gray-300' : 'text-gray-600')}>
      {cases[currentIndex].description}
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 w-full">
      {cases[currentIndex].metrics.map((m, idx) => (
        <div
          key={idx}
          className={clsx(
            'rounded-lg py-3 px-4 text-center shadow-sm',
            theme === 'dark' ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-900'
          )}
        >
          <div className="text-sm opacity-80">{m.label}</div>
          <div className="text-xl font-semibold">{m.value}</div>
        </div>
      ))}
    </div>
  </div>
</motion.div>

          <div className="flex justify-between mt-6">
  <button
    onClick={prevSlide}
    className={clsx(
      'px-4 py-2 cursor-pointer rounded-full transition-colors duration-200',
      theme === 'dark'
        ? 'bg-white/10 text-white hover:bg-white/20'
        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
    )}
  >
    Попередній
  </button>
  <button
    onClick={nextSlide}
    className={clsx(
      'px-4 py-2 cursor-pointer rounded-full transition-colors duration-200',
      theme === 'dark'
        ? 'bg-white/10 text-white hover:bg-white/20'
        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
    )}
  >
    Наступний
  </button>
</div>

        </div>
      </div>
    </section>
  );
};