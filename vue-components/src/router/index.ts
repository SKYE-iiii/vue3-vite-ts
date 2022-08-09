/*
 * @Description:
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-09 16:32:37
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
        redirect: "/test1",
        children: [
          {
            path: "/test1",
            name: "test1",
            meta: {
              title: "test1",
              icon: "",
            },
            component: () => import("@/views/three/index.vue"),
          },
          {
            path: "/test2",
            name: "test2",
            meta: {
              title: "test2",
              icon: "",
            },
            component: () => import("@/views/three/index.vue"),
          },
        ],
        // meta: {
        //   title: "profile",
        //   icon: "Avatar",
        // },
        // component: () => import('@/views/profile/index.vue'),
      },
      {
        path: "/three",
        name: "three",
        meta: {
          title: "three",
          icon: "",
        },
        component: () => import("@/views/three/index.vue"),
      },
      {
        path: "/chooseIcon",
        name: "chooseIcon",
        meta: {
          title: "chooseIcon",
          icon: "",
        },
        component: () => import("@/views/chooseIcon/index.vue"),
      },
    ],
  },
  {
    path: "/system",
    component: Layout,
    meta: {
      title: "system",
      icon: "",
    },
    children: [
      {
        path: "/system/department",
        name: "department",
        meta: {
          title: "department",
          icon: "",
        },
        component: () => import("@/views/system/department/index.vue"),
      },
      {
        path: "/system/user",
        name: "user",
        meta: {
          title: "user",
          icon: "",
        },
        component: () => import("@/views/system/user/index.vue"),
      },

      {
        path: "/system/role",
        name: "role",
        meta: {
          title: "role",
          icon: "",
        },
        component: () => import("@/views/system/role/index.vue"),
      },
      {
        path: "/system/menu",
        name: "menu",
        meta: {
          title: "menu",
          icon: "",
        },
        component: () => import("@/views/system/menu/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
