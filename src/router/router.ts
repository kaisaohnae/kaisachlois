import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'login',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '403',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/error/Error.vue'),
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/main',
                name: 'main',
                meta: {
                    title: 'main',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "main" */ '../views/main/Main.vue'),
            },
            {
                path: '/sub',
                name: 'sub',
                meta: {
                    title: 'SubMain',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "SubMain" */ '../views/main/SubMain.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | kaisa admin`;
    const role = localStorage.getItem('userInfo');
    //const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permiss && !role) {
        next('/403');
    } else {
        next();
    }
});

export default router;
