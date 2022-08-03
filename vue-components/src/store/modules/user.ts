/*
 * @Description: 用户相关
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-07-28 15:18:58
 * @FilePath: /vue-components/src/store/modules/user.ts
 *
 */

import { defineStore } from 'pinia'
import { TOKEN } from '@/constant/index'
import { login_api } from '@/apis/user'
import { setLocalItem, getLocalItem, clearLocalItem } from '@/utils/storage'
import router from '@/router'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: getLocalItem(TOKEN) || '',
    }
  },
  actions: {
    async onLogin(params: object) {
      return new Promise((resolve, reject) => {
        login_api(params)
          .then((res) => {
            this.token = res.data.token
            setLocalItem(TOKEN, res.data.token)
            resolve(res.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    logout() {
      clearLocalItem()
      this.token = ''
      router.push('/login')
    },
  },
  getters: {
    getStore(state) {
      return state.token
    },
  },
})
