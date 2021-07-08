import Polyglot from 'polyglot.js'

class polyglot {
    constructor(locale, phrases) {
        this.polyglot = new Polyglot({
            locale,
            phrases,
        })
    }

    t(key, count, emptyState) {
        if (count === 0 && emptyState) {
            const phrase = this.polyglot.t(key, count).replace(count, '').trim()

            return this.polyglot.t('emptyState', { phrase })
        }
        return this.polyglot.t(key, count)
    }
}

const locale = navigator.language.slice(0, 2) === ('en' && 'ru') ? navigator.language.slice(0, 2) : 'en'

const i18n = (key, count, emptyState) => import('../locales/' + locale).then(phrases => {
    return new polyglot(locale, phrases.default).t(key, count, emptyState)
})

export default i18n