/*
 * @Description:
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-07-29 10:11:47
 * @FilePath: /vue-components/src/router/index.ts
 *
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/login/index.vue";
import Layout from "@/layout/index.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/profile",
    children: [
      {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/profile/index.vue"),
      },
      {
        path: "/three",
        name: "three",
        component: () => import("@/views/three/index.vue"),
      },
    ],
  },
  {
    path: "/system",
    component: Layout,
    children: [
      {
        path: "/system/role",
        name: "role",
        component: () => import("@/views/system/role/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
