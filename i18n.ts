import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';


export const supportedLngs = ['pt', 'en', 'es'] as const;
export type Language = typeof supportedLngs[number];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    supportedLngs: [...supportedLngs],
    

    fallbackLng: 'pt',
    

    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es }
    },
    

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      convertDetectedLanguage: (lng) => lng.split('-')[0], 
    },
    

    interpolation: {
      escapeValue: false 
    },
    

    load: 'languageOnly', 
    cleanCode: true, 
    

    debug: process.env.NODE_ENV === 'development',
    
 
    saveMissing: false,
    partialBundledLanguages: true
  });


export const changeLanguage = (lng: Language) => i18n.changeLanguage(lng);

export default i18n;