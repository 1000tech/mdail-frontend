import { createI18n } from 'vue-i18n'
import messages from '../locales/en'

export const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {'en': messages},
})

const loadedLanguages = ['en']

export const languagesAvailable = ['en', 'fr', 'ru']

function setI18nLanguage (lang) {
    i18n.locale = lang
    document.querySelector('html').setAttribute('lang', lang)
    return lang
}

export function navigatorCloseLanguage () {
    const locale = navigator.language.slice(0, 2) || 'en'
    if (languagesAvailable.includes(locale)) {
        return loadLanguageAsync(locale)
    }
    return 'en'
}

export function loadLanguageAsync (lang) {
    if (i18n.locale !== lang) {
        if (!loadedLanguages.includes(lang)) {
            return import(/* webpackChunkName: "lang-[request]" */ `../locales/${lang}`).then(msgs => {
                i18n.global.setLocaleMessage(lang, msgs.default)
                loadedLanguages.push(lang)
                return setI18nLanguage(lang)
            })
        }
        return Promise.resolve(setI18nLanguage(lang))
    }
    return Promise.resolve(lang)
}