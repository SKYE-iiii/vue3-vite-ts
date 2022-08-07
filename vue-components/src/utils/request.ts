/*
 * @Description:
 * @Author: zyj
 * @Date: 2022-08-03 14:19:38
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-04 15:08:43
 * @FilePath: /vue-components/src/utils/request.ts
 *
 */
import axios from "axios";

import { useUserStore } from "@/store/modules/user";
import { ElMessage } from "element-plus";

const service = axios.create({
  baseURL: "api/",
  timeout: 5000,
});

service.interceptors.request.use(
  (config: any) => {
    let userStore = useUserStore();
    if (userStore.token) {
      config.headers.Authorization = `Bearer${userStore.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 设置响应拦截器
service.interceptors.response.use(
  // 响应成功
  (response) => {
    const { message, success } = response.data;

    if (success) {
      return response.data;
    } else {
      ElMessage({
        showClose: true,
        message: message,
        type: "error",
      });
    }
  },
  // 响应失败
  (error) => {
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      let userStore = useUserStore();
      userStore.logout();
    }
    ElMessage({
      showClose: true,
      message: error.message,
      type: "error",
    });
    return Promise.reject(error);
  }
);

export default service;
