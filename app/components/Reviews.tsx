'use client';

import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import Image from 'next/image';

const reviews = [
  {
    name: 'Олена К.',
    text: 'RA Agency допомогли нам запустити успішну кампанію в Telegram, що принесла 150% зростання продажів!',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    name: 'Михайло П.',
    text: 'Професійний підхід і чітка аналітика. Рекомендую для просування в Telegram.',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
  },
  {
    name: 'Анна С.',
    text: 'Завдяки RA Agency ми отримали 10K нових підписників за місяць!',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  },
];


export const Reviews: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="reviews"
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
          Відгуки Клієнтів
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
           <motion.div
           key={review.name}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: index * 0.2 }}
           className={clsx(
             'p-6 rounded-2xl border shadow-sm flex flex-col items-center text-center h-full transition-all',
             theme === 'dark'
               ? 'bg-white/5 border-white/10 hover:shadow-md'
               : 'bg-white border-gray-200 hover:shadow-md'
           )}
         >
           <Image
           width={10}
           height={10}
             src={review.photo}
             alt={review.name}
             className="w-16 h-16 rounded-full mb-4 object-cover border-2"
           />
           <h3 className={clsx(
             'text-lg font-semibold mb-1',
             theme === 'dark' ? 'text-white' : 'text-gray-900'
           )}>
             {review.name}
           </h3>
         
           {/* ⭐ Звезды */}
           <div className="flex items-center justify-center gap-0.5 mb-2">
             {Array.from({ length: 5 }).map((_, i) => (
               <svg
                 key={i}
                 className={clsx(
                   'w-4 h-4',
                   i < review.rating
                     ? theme === 'dark' ? 'text-amber-400' : 'text-amber-500'
                     : theme === 'dark' ? 'text-gray-600' : 'text-gray-300'
                 )}
                 fill="currentColor"
                 viewBox="0 0 20 20"
               >
                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.065 3.272a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.065 3.272c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.065-3.272a1 1 0 00-.364-1.118L2.475 8.7c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.065-3.272z" />
               </svg>
             ))}
           </div>
         
           {/* Текст отзыва */}
           <p className={clsx(
             'text-sm leading-relaxed italic',
             theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
           )}>
             “{review.text}”
           </p>
         </motion.div>
         
          ))}
        </div>
      </div>
    </section>
  );
};