import {createMemoryHistory, createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/Home.vue")
    },
    {
        path: '/about',
        name: 'About',
        component: () => import("../views/About.vue")
    },
    {
        path: '/work',
        name: 'Work',
        component: () => import("../views/Work.vue")
    },
];

const isClient = typeof window !== "undefined";

const router = createRouter({
    history: isClient ? createWebHistory() : createMemoryHistory(),
    routes: routes
})

export default router;
