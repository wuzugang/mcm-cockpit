import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'
import tagsView from "./modules/tagsView.js"
import getters from "./getters.js"
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const vuexSession = new VuexPersist({
  storage: window.sessionStorage
})

const state = {
  navInde: 0,
  swpierIndex: 0,
  token: ''
}

export default new Vuex.Store({
  modules: {
		tagsView
  },
  getters,
  state,
  plugins: [createPersistedState(), vuexSession.plugin],
  mutations: {
    saveToken(state, tokenValue) {
      state.token = tokenValue;
    },
    saveNavIndex: function (state, roslov) {
      console.log('1111', roslov)
      state.navInde = roslov
    },
    saveSwiperIndex: function (state, res) {
      console.log('2222222', res)
      state.swpierIndex = res
    }
  }
});
