/*
 * @Description: main.ts
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-07-28 11:04:10
 * @FilePath: /vue-components/src/main.ts
 *
 */
import { createApp } from "vue";
import App from "./App.vue";
import { toLine } from "./utils";
// 注册路由
import router from "./router/index";
// 注册pinia
import pinia from "@/store/index";
// 引入 ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 引入icons
import * as Icons from "@element-plus/icons-vue";

// 引入样式
import "@/styles/reset.scss"; // 导入reset 样式

// 引入路由守卫
import "./permission";

// 引入mock
// import './mock'
import { mockXHR } from "./mock";
mockXHR();
const app = createApp(App);

// 全局注册icons组件
for (let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}

app.use(router).use(pinia).use(ElementPlus).mount("#app");
