import Vue from 'vue';
import Vuex from 'vuex';
import tagsView from "./modules/tagsView.js"
import getters from "./getters.js"
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
		tagsView
  },
  getters,
	state: {
		token: ''
	},
  plugins: [createPersistedState()],
  mutations: {
    saveToken(state, tokenValue) {
      state.token = tokenValue;
    },
  }
});
