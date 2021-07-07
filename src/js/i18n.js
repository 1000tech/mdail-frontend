import Polyglot from 'polyglot.js'
import localeEn from '../locales/en'

class polyglot {
    constructor(locale = 'en') {
        this.polyglot = {
            en: new Polyglot({
                phrases: localeEn,
                locale: 'en',
            }),
        }[locale]
    }

    t(key, count, emptyState) {
        if (count === 0 && emptyState) {
            const phrase = this.polyglot.t(key, count).replace(count, '').trim()

            return this.polyglot.t('emptyState', { phrase })
        }
        return this.polyglot.t(key, count)
    }
}

const i18n = new polyglot()

export default i18n
