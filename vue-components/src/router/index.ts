import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
