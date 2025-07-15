import { Module } from "vuex";

interface UserState {
  name: string | null;
  email: string | null;
}

const userModule: Module<UserState, any> = {
  namespaced: true,
  state: () => ({
    name: null,
    email: null,
  }),
  mutations: {
    // Set user info
    SET_USER(state, payload: { name: string; email: string }) {
      state.name = payload.name;
      state.email = payload.email;
    },
    // Clear user info
    CLEAR_USER(state) {
      state.name = null;
      state.email = null;
    },
  },
  actions: {
    // Fake set user on login
    setUser({ commit }) {
      commit("SET_USER", {
        name: "Fake User",
        email: "fake@example.com",
      });
    },
    // Clear user on logout
    clearUser({ commit }) {
      commit("CLEAR_USER");
    },
  },
  getters: {
    name: (state) => state.name,
    email: (state) => state.email,
  },
};

export default userModule;
