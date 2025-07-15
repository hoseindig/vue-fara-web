// src/store/modules/auth.ts

import { Module } from "vuex";

interface AuthState {
  isAuthenticated: boolean;
}

const authModule: Module<AuthState, any> = {
  namespaced: true,
  state: () => ({
    isAuthenticated: false,
  }),
  mutations: {
    // Set auth status
    SET_AUTH(state, status: boolean) {
      state.isAuthenticated = status;
    },
  },
  actions: {
    // Fake login action
    login({ commit }) {
      commit("SET_AUTH", true);
    },
    // Logout action
    logout({ commit }) {
      commit("SET_AUTH", false);
    },
  },
  getters: {
    // Get auth status
    isAuthenticated: (state) => state.isAuthenticated,
  },
};

export default authModule;
