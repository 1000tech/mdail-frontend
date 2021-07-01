import { createWebHistory, createRouter } from 'vue-router'

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
        path: "/:catchAll(.*)",
        component: () => import('#/404')
    }
]

const Router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: '',
    linkExactActiveClass: 'active'
})

export default Router