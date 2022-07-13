##    Vue3 + Typescript + vite 二次封装 element组件

## 一. 使用vite搭建项目 

1. 查看当前 npm 版本 : npm -v
2. 使用对应的命令行搭建项目

```javascript
vite 官网 : https://vitejs.cn/
# npm 6.x
npm init vite@latest my-vue-app --template vue-ts

# npm 7+, 需要额外的双横线：
npm init vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app -- --template vue

```

 3. 进入项目, 使用 cnpm 安装依赖 :

    	1. 查看cnpm是否安装 : cnpm -v 

 4.  修改 端口号 为 8080 

    ```javascript
    vite.config.js :
    
    export default defineConfig({
      server: {
        port: 8080,
      },
    });
    ```

  	5. 启动项目 : npm run dev



## 二. 安装项目基础依赖 及 配置

1.  Vue路由 

   - cnpm i -S vue-router@next

     ```typescript
     项目配置 ：src/router/index
     import {creatRouter,createWebHashHistory,RouteRecordRaw} from "vue-router"
     // 此处会出现报错信息 找不到模块“../views/Home;”或其相应的类型声明 解决方法见下方 ps
     // import Home from "../views/home"   配置d.ts文件后,引入vue文件需加上.vue后缀
     import Home from "../views/home.vue"  
     const routes:RouteRecordRaw[]=[{
         path:'/',
         component:Home
     }]
     
     const router=creatRouter({
         history:createWebHashHistory(),
         routes
     })
     export routes
     
     项目配置 ：main.ts
     import router from "./router/index.ts"
     const app = creatApp(app)
     app.use(router).mount(#app)
     
     项目配置 ：App.vue
     <template>
       <router-view></router-view>
     </template>
     ```

     ps： 报错解决方法如下 

     ```typescript
     项目配置 : env.d.ts (与main.ts同级目录下新建)
     declare module "*.vue" {
       import type { DefineComponent } from "vue";
       // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
       const component: DefineComponent<{}, {}, any>;
       export default component;
     }
     ```

     

2. Element-plus  https://element-plus.gitee.io/zh-CN/guide/quickstart.html

   - cnpm i -S element-plus

   ```typescript
   项目配置 : main.ts
   import ElementPlus from 'element-plus'
   import 'element-plus/dist/index.css'
   app.use(ElementPlus)
   ```

   

3.  sass sass-loader

   - cnpm i -D sass sass-loader

    

## 三.  全局注册图标组件

1.  element-plus 的 icon 图标需要单独进行安装 ：

   - npm install @element-plus/icons-vue

   ```typescript
   项目配置 : main.ts
   import * as Icons from "@element-plus/icons-vue"
   
   // 注册为全局组件
   for(let i in Icons){
   	// (Icons as any)[i] icon组件实例对象
   	app.component(i,(Icons as any)[i])
   }
   
   // 配置icon名称转大驼峰命名的公用方法 :
   项目配置 :  src/utils/index.ts
   export default toLine = (v:string) => {
   	return v.replace(/(A-Z)g/,'-$1').toLocaleLowerCase()
   }
   
   // 将icons组件名转换为 el-icon-xx ； 
   import {toLine} from "./utils"
   for(let i in Icons){
   	app.component(`el-icon-${toLine(i)}`,(Icons as any)[i])
   }
   ```

   
