import { createI18n } from 'vue-i18n'
import messages from '../locales/en'

const locale = navigator.language.slice(0, 2) || 'en'

const i18n = createI18n({
    locale,
    fallbackLocale: 'en',
    messages,
})

export default i18n