import { createI18n } from 'vue-i18n'
import en from '../locales/en'

const locale = 'en'
const loadedLocales = [locale]
const key = 'mdail_lang'
const storageLang = localStorage.getItem(key)

export const listLocales = ['en', 'ru']

export const i18n = createI18n({
    locale,
    fallbackLocale: locale,
    messages: { en }
})

export function getLocale() {
    const lang = storageLang ? storageLang : navigator.language.slice(0, 2) || locale

    if (listLocales.includes(lang)) {
        return loadLocale(lang)
    }
}

export function setLocale(lang) {
    i18n.global.locale = lang
    localStorage.setItem(key, lang)
}

export async function loadLocale(lang) {
    if (i18n.locale !== lang && listLocales.includes(lang)) {
        if (!loadedLocales.includes(lang)) {
            const msgs = await import(`../locales/${lang}`)
            i18n.global.setLocaleMessage(lang, msgs.default)
            loadedLocales.push(lang)
        }
        return setLocale(lang)
    }
}