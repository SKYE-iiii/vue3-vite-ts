/*
 * @Description:
 * @Author: zyj
 * @Date: 2022-08-03 14:19:38
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-04 15:08:34
 * @FilePath: /vue-components/src/permission.ts
 *
 */
/**
 * 登录鉴权
 */
import router from "./router/index";

import { useUserStore } from "@/store/modules/user";

/**
 * 设置白名单
 */
const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  const store = useUserStore();
  if (store.token) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
