import { createApp } from 'vue'
import App from './App'

import router from './router'
import mixin from './mixin'
import { i18n } from './js/i18n'

import './app.styl'

const Vue = createApp(App)

Vue.use(i18n)
Vue.use(router)
Vue.mixin(mixin)
Vue.mount('#app')