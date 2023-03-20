/* eslint-disable no-debugger */

export const auth = {
  namespaced: true,
  state: {
    active: false,
    info: null,
    message: null,
  },
  actions: {
    logout({ commit }:any) {
      commit('logout');
    },
  },
  mutations: {
    loginSuccess(state:any, data:any) {
      state.active = true;
      let userInfo = {
        id: data.id,
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
      };
      state.info = userInfo;
      state.message = null;
    },
    loginFail(state:any, message:any) {
      state.active = false;
      state.info = null;
      state.message = message;
      return state;
    },
    loginError(state:any) {
      state.active = false;
      state.info = null;
      state.message = null;
      return state;
    },
    logout(state:any) {
      state.active = false;
      state.info = null;
      state.message = null;
      return state;
    },
  },
};
