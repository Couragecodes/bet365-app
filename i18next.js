// i18n.js (or any other name you prefer)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Example translation resources (you can replace this with your own translation files)
const resources = {
  en: {
    translation: {
      home: 'Home',
      sports: 'Sports',
      liveInGame: 'Live In Game',
      myBets: 'My Bets',
      casino: 'Casino',
    },
  },
  // You can add more languages here, like "fr" for French, etc.
};

i18n
  .use(initReactI18next) // pass i18n instance to react-i18next
  .init({
    resources, // the translation resources
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language in case the translation is not available
    interpolation: {
      escapeValue: false, // React already escapes HTML
    },
  });

export default i18n;
