import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import './app.styl'
import router from './router.js'

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});