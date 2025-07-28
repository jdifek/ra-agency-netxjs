'use client';

import toast from 'react-hot-toast';
import React, { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useTranslations } from 'next-intl';

export const ContactForm: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations('contact');

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    message: ''
  });

  const [contactMethod, setContactMethod] = useState<'email' | 'telegram'>('email');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.contact || !formData.subject || !formData.message) {
      toast.error(t('errorFillAll'));
      return;
    }

    try {
      const response = await fetch('https://ra-agency-back-production-246f.up.railway.app/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          method: contactMethod,
          theme: formData.subject,
          message: formData.message
        })
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(t('success'));
        setFormData({ name: '', contact: '', subject: '', message: '' });
      } else {
        toast.error('Error: ' + result.error);
      }
    } catch (error) {
      console.error(error);
      toast.error(t('submitError'));
    }
  };

  return (
    <section
      id="contact"
      className={clsx(
        'relative py-32 overflow-hidden',
        theme === 'dark' ? 'bg-black' : 'bg-gray-50'
      )}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.6 - i * 0.1, 1, 0.6 - i * 0.1],
              scale: [1, 1.2 + i * 0.1, 1]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i - 1
            }}
            className={clsx(
              'absolute w-1 h-1 rounded-full',
              theme === 'dark' ? 'bg-white' : 'bg-gray-600',
              {
                'top-1/4 left-1/4': i === 1,
                'top-1/3 right-1/3': i === 2,
                'bottom-1/3 left-1/2': i === 3,
                'top-2/3 right-1/4': i === 4
              }
            )}
          />
        ))}
      </div>

      {/* Form Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={clsx(
            'text-4xl md:text-6xl font-light mb-16 leading-tight',
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}
        >
          {t('title')}
        </motion.h2>

        {/* Method Switch */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            type="button"
            onClick={() => setContactMethod('email')}
            className={clsx(
              'px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ease-in-out hover:bg-amber-500',
              contactMethod === 'email' ? 'bg-amber-400 text-white' : 'bg-transparent',
              theme === 'dark' ? 'border-white/10 text-white' : 'border-gray-300/40 text-gray-700'
            )}
          >
            Email
          </button>
          <button
            type="button"
            onClick={() => setContactMethod('telegram')}
            className={clsx(
              'px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ease-in-out hover:bg-amber-500',
              contactMethod === 'telegram' ? 'bg-amber-400 text-white' : 'bg-transparent',
              theme === 'dark' ? 'border-white/10 text-white' : 'border-gray-300/40 text-gray-700'
            )}
          >
            Telegram
          </button>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 max-w-2xl mx-auto"
        >
          <input
            type="text"
            placeholder={t('name')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className={clsx(
              'w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400 transition',
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-white placeholder:text-white/50'
                : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
            )}
          />

          <input
            type="text"
            placeholder={contactMethod === 'email' ? t('email') : t('telegram')}
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            required
            className={clsx(
              'w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400 transition',
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-white placeholder:text-white/50'
                : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
            )}
          />

          <input
            type="text"
            placeholder={t('subject')}
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
            className={clsx(
              'w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400 transition',
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-white placeholder:text-white/50'
                : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
            )}
          />

          <textarea
            placeholder={t('message')}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={6}
            className={clsx(
              'w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none',
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-white placeholder:text-white/50'
                : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
            )}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={clsx(
              'px-8 py-4 rounded-full cursor-pointer font-medium transition-colors',
              theme === 'dark'
                ? 'bg-white text-black hover:bg-gray-50'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            )}
          >
            {t('send')}
          </motion.button>

          <a
            href="https://t.me/your_bot"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'px-2 mx-auto py-1 bg-amber-400 w-1/2 transition-all duration-200 ease-in-out hover:bg-amber-500 text-white rounded-full border cursor-pointer block text-center font-medium underline',
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            )}
          >
            {t('writeToBot')}
          </a>
        </motion.form>
      </div>
    </section>
  );
};
