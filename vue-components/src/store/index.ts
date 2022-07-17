import { createStore } from 'vuex'
import user from './modules/user'
import layout from './modules/layout'
import getters from './getters'
export default createStore({
  modules: { user, layout },
  getters,
})
