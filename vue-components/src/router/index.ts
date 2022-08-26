/*
 * @Description:
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-09 16:32:37
 * @FilePath: /vue-components/src/router/index.ts
 *
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/layout/index.vue'
const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    meta: {
      isShow: true,
      title: 'home',
      icon: 'Avatar',
    },
    component: Layout,
    children: [
      {
        path: '/profile',
        name: 'profile',
        meta: {
          title: 'profile',
          icon: 'Avatar',
        },
        component: () => import('@/views/profile/index.vue'),
      },
      {
        path: '/three',
        name: 'three',
        meta: {
          title: 'three',
          icon: 'moonnight',
          isShow: true,
        },
        component: () => import('@/views/three/index.vue'),
      },
      {
        path: '/chooseIcon',
        name: 'chooseIcon',
        meta: {
          title: 'chooseIcon',
          icon: 'elementplus',
          isShow: true,
        },
        component: () => import('@/views/chooseIcon/index.vue'),
      },
    ],
  },
  {
    path: '/system',
    component: Layout,
    meta: {
      title: 'system',
      icon: 'grid',
      isShow: true,
    },
    children: [
      {
        path: '/system/department',
        name: 'department',
        meta: {
          title: 'department',
          icon: 'officebuilding',
          isShow: true,
        },
        component: () => import('@/views/system/department/index.vue'),
      },
      {
        path: '/system/user',
        name: 'user',
        meta: {
          title: 'user',
          icon: 'user',
          isShow: true,
        },
        component: () => import('@/views/system/user/index.vue'),
      },

      {
        path: '/system/role',
        name: 'role',
        meta: {
          title: 'role',
          icon: 'userfilled',
          isShow: true,
        },
        component: () => import('@/views/system/role/index.vue'),
      },
      {
        path: '/system/menu',
        name: 'menu',
        meta: {
          title: 'menu',
          icon: 'document',
          isShow: true,
        },
        component: () => import('@/views/system/menu/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
