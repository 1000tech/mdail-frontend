import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './app.styl'

Vue.use(VueRouter);

// Определяем компоненты для маршрутов
const routes = [
  { path: '/', component: require('./Article.vue').default },
  { path: '/account', component: require('./Account.vue').default }
];

// Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
const router = new VueRouter({
  mode: 'history', // включаем History API
  routes // сокращённая запись для `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});