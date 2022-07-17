##    Vue3 + Typescript + vite 二次封装 element组件

## 一. 使用vite搭建项目 

### 1. 查看当前 npm 版本 : npm -v

### 2. 使用对应的命令行搭建项目

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

### 3. 进入项目, 使用 cnpm 安装依赖 :

1. 查看cnpm是否安装 : cnpm -v 

 3. 修改 端口号 为 8080 

    ```javascript
    vite.config.js :
    
    export default defineConfig({
      server: {
        port: 8080,
      },
    });
    ```

    #### 4. 启动项目 : npm run dev



## 二. 安装项目基础依赖 及 配置

### 1. Vue路由 

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

  

### 2. Element-plus

//  https://element-plus.gitee.io/zh-CN/guide/quickstart.html

- cnpm i -S element-plus

```typescript
项目配置 : main.ts
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
```



### 3. sass sass-loader

- cnpm i -D sass sass-loader



### 4. 项目别名配置

```typescript
项目配置 : vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src/',
      '@components': '/src/components/',
      '@assets': '/src/assets/',
    },
  },
})

项目配置 : ts.config.ts
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@assets/*": ["./src/assets/*"]
    }
  },
}
```

### 5. mockjs 引入 及 axios封装

#### 1). mockjs引入

```typescript
1. 安装依赖 : npm i mockjs

2. src/mock/index.ts: 		// 循环注册模拟接口
import Mock from 'mockjs'
import { MockParams } from './typing'
import user from './user'
const mocks = [...user]
export function mockXHR() {
  let i: MockParams
  for (i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', i.response)
  }
}

3. src/mock/typing.ts : 		// 编写模拟接口的类型接口
export interface MockParams={
    url:string,
    type:string,
    data?:any,
    params?:any,
    response(options?:any):Record<string,unknown>
}

4. src/mock/user.ts					// 编写mock模拟接口,axios封装的url地址需和此处模拟url地址一致
import Mock from 'mockjs'
export default [{
    url: 'xxx/xxx',
    type: 'get',
    response: (options: any) => {
        return {
          code: 200,
          message: 'xxxx',
          data: null,
          success: true,
      }
    },
  },
]

5. main.ts						// 引入mock
import { mockXHR } from './mock'
mockXHR()
```

#### 2). axios 封装

```typescript
1. 安装依赖 : npm i axios

2. src/utils/request.ts :		// 封装axios请求

import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: 'api/',
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 设置响应拦截器
service.interceptors.response.use(
  // 响应成功
  (response) => {
    const { message, success } = response.data
    if (success) {
      return response.data
    } else {
      ElMessage({
        showClose: true,
        message: message,
        type: 'error',
      })
    }
  },
  // 响应失败
  (error) => {
    ElMessage({
      showClose: true,
      message: error.message,
      type: 'error',
    })
    return Promise.reject(error)
  },
)

export default service


3. src/apis/user.ts :
import request from '@/utils/request'

export const xxx_api = (params: any) => {
  return request({
    url: '/xx/xxx',  // 此处地址需和mock.js模拟的url地址保持一致
    method: 'get',
    params,
  })
}
```

### 6. 封装 storage

```typescript
src/utils/storage.ts :
/**
 * 封装 localStorage 和 sessionStorage
 */

// 存储 | 修改
export const setLocalItem = (k: any, v: any) => {
  if (typeof v === 'object') {
    v = JSON.stringify(v)
  }
  window.localStorage.setItem(k, v)
}

// 获取
export const getLocalItem = (k: any) => {
  const data = window.localStorage.getItem(k)
  try {
    return JSON.parse(data || '')
  } catch (err) {
    return data
  }
}

// 删除
export const removeLocalItem = (k: any) => {
  window.localStorage.removeItem(k)
}

// 清空
export const clearLocalItem = () => {
  window.localStorage.clear()
}

// sessionStorage
// 存储 | 修改
export const setSessionItem = (k: any, v: any) => {
  if (typeof v === 'object') {
    v = JSON.stringify(v)
  }
  window.sessionStorage.setItem(k, v)
}

// 获取
export const getSessionItem = (k: any) => {
  const data = window.sessionStorage.getItem(k)
  try {
    return JSON.parse(data || '')
  } catch (err) {
    return data
  }
}

// 删除
export const removeSessionItem = (k: any) => {
  window.sessionStorage.removeItem(k)
}

// 清空
export const clearSessionItem = () => {
  window.sessionStorage.clear()
}

```

### 7. 引入 vuex

```typescript
1. 安装依赖 : npm i vuex

2. src/store/index.ts
import { createStore } from "vuex"
export default createStore({
    modules:{}
})

3. main.ts  注册 store
import store from "./store"
app.use(store)
```



## 三.  Login 页面

### 1. 新建 src/login/index 页面

### 2.login页主要实现功能 :

#### 1). 登录页路由配置

#### 2). 模拟mock登录接口,封装axios登录接口;

#### 3). 路由守卫控制(根据token) :

如无token,则只能访问 白名单页面 , 有token则无需进入登录页直接跳转至首页.

## 四.  全局注册图标组件

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

   ## 四. 伸缩菜单
   
   
