import Vue from "vue";
import Vuex from "vuex";

import challenges from "../assets/challenges";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    challenges: challenges
  }
});
