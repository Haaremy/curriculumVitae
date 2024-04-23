import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'de',
  lng: 'de',
  resources: {
    de: {
      translations: require('./de.json')
    },
    en: {
      translations: require('./en.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['de', 'en'];

export default i18n;
