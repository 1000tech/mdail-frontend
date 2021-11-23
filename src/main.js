import { createApp } from 'vue'
import App from './App'

import router from './router'
import mixin from './mixin'
import { i18n } from '%/i18n'

import './app.styl'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mixin(mixin)
app.mount('#app')