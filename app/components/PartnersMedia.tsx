'use client';

import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const logosPartners = [
  { src: '/photo_2025-07-28_22-58-58.jpg', url: 'https://t.me/boinker_bot' },
  { src: '/photo_2025-07-28_22-58-59.jpg', url: 'https://t.me/unijump_bot' },
  { src: '/photo_2025-07-28_22-59-00.jpg', url: 'https://t.me/pokergram' },
  { src: '/photo_2025-07-28_22-59-01.jpg', url: 'https://t.me/playdeck_en' },
  { src: '/photo_2025-07-28_22-59-03.jpg', url: 'https://t.me/nutsfarm_bot' },
  { src: '/photo_2025-07-28_22-59-04.jpg', url: 'https://t.me/p00ls_games_bot' },
  { src: '/photo_2025-07-28_22-59-05.jpg', url: 'https://t.me/LabradorAdventuresBot' },
  { src: '/photo_2025-07-28_22-59-06.jpg', url: 'https://ggate.media/' }
];

const logosMedia = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940'
];

export const PartnersMedia: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations('partnersMedia');

  return (
    <section
      className={clsx(
        'max-w-7xl mx-auto px-6 py-20',
        theme === 'dark' ? ' text-white' : ' text-gray-900'
      )}
    >
      <h2
        className={clsx(
          'text-3xl font-semibold mb-12 text-center',
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        )}
      >
        {t('partnersTitle')}
      </h2>

      <div className="flex gap-16 items-center justify-center flex-wrap">
  {logosPartners.map((logo, i) => (
    <motion.div
      key={logo.src}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
      className="flex items-center justify-center"
    >
      <a href={logo.url} target="_blank" rel="noopener noreferrer">
        <Image
          width={66}
          height={66}
          src={logo.src}
          alt={`Partner ${i + 1}`}
          className="w-16 h-16 object-cover rounded-full transition duration-300"
        />
      </a>
    </motion.div>
  ))}
</div>


      <h2
        className={clsx(
          'text-3xl font-semibold mt-20 mb-12 text-center',
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        )}
      >
        {t('mediaTitle')}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
        {logosMedia.map((logo, i) => (
          <motion.div
            key={logo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <Image
              width={96}
              height={96}
              src={logo}
              alt={`Media ${i + 1}`}
              className="max-h-12 object-contain filter grayscale hover:filter-none transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
