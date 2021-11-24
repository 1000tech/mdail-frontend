import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        name: 'Bookmarks',
        path: '/',
        component: () => import('#/bookmarks/Page'),
    },
    {
        name: 'Account',
        path: '/account',
        component: () => import('#/Account'),
    },
    {
        name: 'Add Bookmark',
        path: '/add',
        component: () => import('#/Add'),
    },
    {
        name: 'Edit Bookmark',
        path: '/edit/:id',
        component: () => import('#/Edit'),
    },
    {
        name: '404 – Not Found',
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