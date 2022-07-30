/*
 * @Description:
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-07-28 15:22:47
 * @FilePath: /vue-components/src/store/modules/layout.ts
 *
 */

import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", {
  state: () => {
    return { isCollapse: false };
  },
  actions: {
    setCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
  getters: {
    getIsCollapse(state) {
      return state.isCollapse;
    },
  },
});
