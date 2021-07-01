import Vue from 'vue'
import App from './App'
import router from './router.js'

import './app.styl'

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})