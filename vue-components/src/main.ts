import { createApp } from 'vue'
import App from './App.vue'
import { toLine } from './utils'
// 注册路由
import router from './router/index'
// 注册vuex
import store from './store/index'
// 引入 ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入icons
import * as Icons from '@element-plus/icons-vue'

// 引入样式
import '@/styles/reset.scss' // 导入reset 样式

// 引入路由守卫
import './permission'

// 引入mock
// import './mock'
import { mockXHR } from './mock'
mockXHR()
const app = createApp(App)

// 全局注册icons组件
for (let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

app.use(router).use(store).use(ElementPlus).mount('#app')
