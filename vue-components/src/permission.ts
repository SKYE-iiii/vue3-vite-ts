/**
 * 登录鉴权
 */
import router from './router/index'
import store from './store/index'
/**
 * 设置白名单
 */
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
