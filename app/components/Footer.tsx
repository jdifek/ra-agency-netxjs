import clsx from 'clsx';
import { useTheme } from './ThemeProvider';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const { theme } = useTheme();
  const t = useTranslations('footer');

  return (
    <footer
      className={clsx(
        'relative mt-32 pt-16 pb-16 border-t',
        theme === 'dark' ? 'border-white/10' : 'border-gray-200'
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Legal */}
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
              <p>{t('privacy')}</p>
              <p>{t('clients')}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className={clsx(
                'font-medium mb-4',
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}
            >
              {t('services')}
            </h3>
            <div
              className={clsx(
                'space-y-2 text-sm',
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              )}
            >
              <p>{t('about')}</p>
              <p>{t('resources')}</p>
              <p>{t('partners')}</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <p className="pt-4">© RA AGENCY 2025.</p>
            <p>{t('rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
