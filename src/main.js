import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import './app.styl'

Vue.use(VueRouter);

// New Router Components
const routes = [
  {
    path: '/',
    component: require('./pages/Bookmarks').default
  },
  {
    path: '/account',
    component: require('./pages/Account').default
  }
];

// New Router
const router = new VueRouter({
  mode: 'history', // History API
  //path: '*', component: NotFoundComponent, // 404
  routes, // `routes: routes`
  linkActiveClass: '',
  linkExactActiveClass: 'active',
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});