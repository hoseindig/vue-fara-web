const state = () => ({
  features: [],
});

const mutations = {
  setFeatures(state: any, newList: any[]) {
    state.features = newList;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
