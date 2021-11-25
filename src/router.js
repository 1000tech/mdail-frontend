import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        name: 'page.home.title',
        path: '/',
        component: () => import('#/bookmarks/Page'),
    },
    {
        name: 'page.add.title',
        path: '/add',
        component: () => import('#/Add'),
    },
    {
        name: 'page.edit.title',
        path: '/edit/:id',
        component: () => import('#/Edit'),
    },
    {
        name: 'page.account.title',
        path: '/account',
        component: () => import('#/Account'),
    },
    {
        name: 'page.404.title',
        path: '/:catchAll(.*)',
        component: () => import('#/404'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: '',
    linkExactActiveClass: 'active',
})

export default router