import { createI18n } from 'vue-i18n'
import messages from '../locales/en'

const locale = 'en'
const loadedLocales = [locale]
export const listLocales = ['en', 'ru']

export const i18n = createI18n({
    locale,
    fallbackLocale: locale,
    messages: {'en': messages},
})

export function setLocale(lang) {
    i18n.global.locale = lang
}

export function getUserLocale() {
    const lang = navigator.language.slice(0, 2) || 'en'
    if (listLocales.includes(lang)) {
        return loadLocale(lang)
    }
    return 'en'
}

export function loadLocale(lang) {
    if (i18n.locale !== lang) {
        if (!loadedLocales.includes(lang)) {
            return import(`../locales/${lang}`).then(msgs => {
                i18n.global.setLocaleMessage(lang, msgs.default)
                loadedLocales.push(lang)
                return setLocale(lang)
            })
        }
        return Promise.resolve(setLocale(lang))
    }
    return Promise.resolve(lang)
}