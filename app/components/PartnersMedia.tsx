'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type Partner = {
  id: number;
  logo: string;
  link: string;
};

const logosMedia = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940'
];

export const PartnersMedia: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations('partnersMedia');

  const [partners, setPartners] = useState<Partner[]>([]);
  const [visiblePartners, setVisiblePartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch('https://ra-agency-back-production-246f.up.railway.app/partners');
        const data: Partner[] = await res.json();
        setPartners(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке партнеров:', error);
        setIsLoading(false);
      }
    };

    fetchPartners();
  }, []);

  useEffect(() => {
    const updateVisiblePartners = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisiblePartners(partners.slice(0, 15));
      } else {
        setVisiblePartners(partners.slice(0, 30));
      }
    };

    updateVisiblePartners();
    window.addEventListener('resize', updateVisiblePartners);
    return () => window.removeEventListener('resize', updateVisiblePartners);
  }, [partners]);

  const skeletonCount = 20;

  return (
    <section
      className={clsx(
        'max-w-7xl mx-auto px-6 py-20',
        theme === 'dark' ? ' text-white' : ' text-gray-900'
      )}
    >
      <h2 className="text-3xl font-semibold mb-12 text-center">
        {t('partnersTitle')}
      </h2>

      <div className="flex gap-6 items-center justify-center flex-wrap">
        {isLoading
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <div
                key={i}
                className={clsx(
                  'w-16 h-16 rounded-full animate-pulse',
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
                )}
              />
            ))
          : visiblePartners.map((partner, i) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 100 }}
                className="flex items-center justify-center"
              >
                <a href={partner.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={partner.logo}
                    alt={`Partner ${i + 1}`}
                    className="w-16 h-16 hover:scale-110 object-cover rounded-full transition duration-300"
                  />
                </a>
              </motion.div>
            ))}
      </div>

      <h2 className="text-3xl font-semibold mt-20 mb-12 text-center">
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
