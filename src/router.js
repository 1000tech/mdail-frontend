import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: () => import('#/Bookmarks'),
    },
    {
        path: '/account',
        component: () => import('#/Account'),
    },
    {
        path: '*',
        component: () => import('#/404')
    }
]

export default new Router({
    mode: 'history',
    routes,
    linkActiveClass: '',
    linkExactActiveClass: 'active'
})