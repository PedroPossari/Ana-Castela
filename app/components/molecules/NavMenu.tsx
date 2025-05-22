'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';

const navItems = [
  { key: 'home', path: '/' },
  { key: 'discography', path: '/pages/discrografia' },
  { key: 'popularSongs', path: '/pages/musicas-populares' },
  { key: 'curiosities', path: '/pages/curiosidades' },
  { key: 'contact', path: '/pages/contato' },
];

const LanguageSwitcher = () => {
  const { i18n: i18nInstance } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18nInstance.language);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLang(lng);
    };

    i18nInstance.on('languageChanged', handleLanguageChange);
    return () => {
      i18nInstance.off('languageChanged', handleLanguageChange);
    };
  }, [i18nInstance]);

  const languages = [
    { code: 'pt', flag: '🇧🇷', label: 'Português' },
    { code: 'en', flag: '🇺🇸', label: 'English' },
    { code: 'es', flag: '🇪🇸', label: 'Español' },
  ];

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`p-1 rounded-md transition-colors ${
            currentLang === lang.code
              ? 'bg-purple-100 text-purple-600'
              : 'hover:bg-gray-100'
          }`}
          title={lang.label}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

export function NavMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <div className="flex items-center">
        <button
          className="md:hidden p-2 text-gray-700 hover:text-purple-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-4">
          <LanguageSwitcher />
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.path} className="border-b border-gray-100">
                <Link
                  href={item.path}
                  className="block py-3 px-6 text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
            <li className="border-b border-gray-100">
              <div className="flex justify-center py-3 px-6">
                <LanguageSwitcher />
              </div>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}