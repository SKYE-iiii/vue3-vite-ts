/**
 * layout 相关
 *
 */
export default {
  namespaced: true,
  state: () => ({ isCollapse: false }),
  mutations: {
    setCollapse(state: any) {
      state.isCollapse = !state.isCollapse
    },
  },
  actions: {},
}
