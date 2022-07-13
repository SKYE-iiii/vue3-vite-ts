import { createApp } from 'vue'
import App from './App.vue'
import { toLine } from './utils'
// 注册路由
import router from './router/index'
// 引入 ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入icons
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)

// 全局注册icons组件
for (let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

app.use(router).use(ElementPlus).mount('#app')
