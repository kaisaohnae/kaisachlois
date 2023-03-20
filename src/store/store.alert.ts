/* eslint-disable no-debugger */
export const alert = {
  namespaced: true,
  state: {
    active: false,
    info: null,
  },
  actions: {
    open({ commit }:any, info:any) {
      commit("open", info)
    },
    close({ commit }:any) {
      commit("close")
    },
  },
  mutations: {
    open(state:any, payload:any) {
      state.info = payload
      state.active = true
    },
    close(state:any) {
      state.info = null
      state.active = false
    },
  },
};
