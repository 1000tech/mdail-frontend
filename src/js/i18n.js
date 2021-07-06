import Polyglot from 'polyglot.js';
import localeEn from '../locales/en';

const i18n = new Polyglot({
  phrases: localeEn,
  locale: 'en',
});

export default i18n;
