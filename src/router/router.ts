import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'login',
            permiss: 0,
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '403',
            permiss: 0,
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/error/403.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        meta: {
            title: '404',
        },
        component: () => import('../views/error/404.vue'),
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home',
            permiss: 0,
        },
        children: [
            {
                path: '/main',
                name: 'main',
                meta: {
                    title: 'main',
                    permiss: 0,
                },
                component: () => import(/* webpackChunkName: "main" */ '../views/main/Main.vue'),
            },
            {
                path: '/sub',
                name: 'sub',
                meta: {
                    title: 'SubMain',
                    permiss: 0,
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
    document.title = `${to.meta.title} | chlois`;
    const role = localStorage.getItem('userInfo');
    //const permiss = usePermissStore();
    if (to.meta && to.meta.permiss && to.meta.permiss as number > 0 && !role) {
        //next('/403');
        next('/login');
    } else {
        next();
    }
});

export default router;
