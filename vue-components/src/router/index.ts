import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/Home',
    component: () => import('@/views/Home.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
