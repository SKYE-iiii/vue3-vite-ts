import { TOKEN } from '@/constant/index'
import { login_api } from '@/apis/user'
import { setLocalItem, getLocalItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getLocalItem(TOKEN) || '',
  }),
  mutations: {
    setToken(state: any, tokenVal: string) {
      state.token = tokenVal
      setLocalItem(TOKEN, tokenVal)
    },
  },
  actions: {
    async onLogin(context: any, params: object) {
      return new Promise((resolve, reject) => {
        login_api(params)
          .then((res) => {
            context.commit('setToken', res.data.token)
            resolve(res.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
}
