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
  if (store.getStore) {
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
