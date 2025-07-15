// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });
// src/store/index.ts

import { createStore } from "vuex";
import auth from "./modules/auth";
import user from "./modules/user";
import features from "./modules/features";

export default createStore({
  modules: {
    auth,
    user,
    features,
  },
});
