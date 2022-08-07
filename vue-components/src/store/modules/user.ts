/*
 * @Description: 用户相关
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-04 15:33:03
 * @FilePath: /vue-components/src/store/modules/user.ts
 *
 */

import { defineStore } from "pinia";
import { TOKEN_KEY, USER_INFO_KEY } from "@/constant/index";
import { login_api } from "@/apis/user";
import { setLocalItem, getLocalItem, clearLocalItem } from "@/utils/storage";
import { UserState } from "../userType";
import router from "@/router";
import Avatar from "@assets/avatar.jpg";

const userInfo: UserState = getLocalItem(USER_INFO_KEY) || {};
const defaultAvatar = Avatar;
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: getLocalItem(TOKEN_KEY) || "",
      nickName: userInfo.nickName || "",
      userName: userInfo.userName || "",
      userId: userInfo.userId || 0,
      roleId: userInfo.roleId || 0,
      avatar: userInfo.avatar || defaultAvatar,
    };
  },
  actions: {
    async onLogin(params: object) {
      return new Promise((resolve, reject) => {
        login_api(params)
          .then((res) => {
            this.token = res.data.token;
            this.nickName = res.data.nickName;
            this.userName = res.data.userName;
            this.userId = res.data.userId;
            this.roleId = res.data.roleId;
            this.avatar = res.data.avatar;
            setLocalItem(USER_INFO_KEY, res.data);
            setLocalItem(TOKEN_KEY, res.data.token);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    logout() {
      clearLocalItem();
      this.token = "";
      this.nickName = "";
      this.userName = "";
      this.avatar = "";
      this.userId = 0;
      this.roleId = 0;
      router.push("/login");
    },
  },
  getters: {},
});
