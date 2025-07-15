const state = () => ({
  features: [],
});

const mutations = {
  setFeatures(state: any, newList: any[]) {
    state.features = newList;
    console.log("setFeatures", state.features);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
