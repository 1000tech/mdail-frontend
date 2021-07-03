import { createApp } from 'vue'
import App from './App'

import router from './router'
import mixin from './mixin'

import './app.styl'

const Vue = createApp(App)

Vue.use(router)
Vue.mixin(mixin)
Vue.mount('#app')