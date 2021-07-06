import Polyglot from 'polyglot.js';
import localeEn from '../locales/en';

class polyglot {
  constructor(locale = 'en') {
    this.polyglot = {
      en: new Polyglot({
        phrases: localeEn,
        locale: 'en',
      }),
    }[locale];
  }

  t(key, count, emptyState) {
    if (count === 0 && emptyState) {
      return `No ${this.polyglot.t(key, count).replace(count, '').trim()} found`;
    }
    return this.polyglot.t(key, count);
  }
}

const i18n = new polyglot();

export default i18n;
