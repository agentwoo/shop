import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/test",
        name: "test",
        component: () => import("@/views/test.vue"),
    },
    {
        path: "/",
        name: "homePage",
        component: () => import("@/views/homePage/index.vue"),
        children: [
            {
                path: "home",
                name: "home",
                component: () => import("@/views/home/index.vue"),
            },
            {
                path: "pubGoods",
                name: "pubGoods",
                component: () => import("@/views/pubGoods/index.vue"),
            },
            {
                path: "userCenter",
                name: "userCenter",
                component: () => import("@/views/userCenter/index.vue"),
            }
        ]
    },
    {
        path: "/search",
        name: "search",
        component: () => import("@/views/home/search/index.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router