'use client';

import React from 'react';
import clsx from 'clsx';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Users, Eye, DollarSign, Activity } from 'lucide-react';

const achievements = [
  {
    label: 'Аудиторія в місяць',
    value: 120000,
    postfix: '+',
    description: 'Унікальних користувачів',
  },
  {
    label: 'Активних клієнтів',
    value: 87,
    postfix: '',
    description: 'на місяць співпраці',
  },
  {
    label: 'Рекламний бюджет',
    value: 300000,
    postfix: '$+',
    description: 'в місяць через наші кампанії',
  },
  {
    label: 'Охоплення реклами',
    value: 2400000,
    postfix: '+',
    description: 'в місяць у Telegram та соцмережах',
  },
];

const icons = [Eye, Users, DollarSign, Activity];

const team = [
  { name: 'Dima Shadow', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Olena Sky', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: 'Max Black', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { name: 'Liza Code', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { name: 'Artem Volt', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { name: 'Nika Flame', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { name: 'Vadym Tech', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
];

const currentMonth = new Date().toLocaleString('uk-UA', {
  month: 'long',
}).toUpperCase();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AchievementItem = ({ icon: Icon, item, index }: any) => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={clsx(
        'group p-6 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl',
        theme === 'dark'
          ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
          : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
      )}
    >
      <Icon className="mx-auto w-8 h-8 mb-2 opacity-70 group-hover:text-amber-400 transition-colors" />
      <div className="text-3xl font-bold">
        {inView && <CountUp end={item.value} duration={2} separator="," />}
        {item.postfix}
      </div>
      <div className="text-sm mt-1 opacity-80">{item.label}</div>
      <div className={clsx('text-xs mt-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-500')}>
        {item.description}
      </div>
    </motion.div>
  );
};

export const AchievementsAndTeam: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="achievements"
      className={clsx(
        'relative py-24 overflow-hidden',
        theme === 'dark' ? 'bg-black' : 'bg-gray-100'
      )}
    >
     

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
          Наші Досягнення{' '}
          <span className={clsx('text-lg ml-2', theme === 'dark' ? 'text-amber-400' : 'text-amber-600')}>
            ({currentMonth})
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {achievements.map((item, i) => (
            <AchievementItem key={i} icon={icons[i]} item={item} index={i} />
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={clsx(
            'text-3xl md:text-4xl font-light mt-24 mb-8 text-center',
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}
        >
          Наша Команда
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center space-y-2"
            >
              <Image
                src={member.avatar}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full object-cover border-2 border-amber-500"
              />
              <div className={clsx('text-sm font-medium', theme === 'dark' ? 'text-white' : 'text-gray-800')}>
                {member.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};