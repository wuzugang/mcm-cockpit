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
    // 导航栏
    saveNavIndex: function (state, roslov) {
      state.navInde = roslov
    },
    // swiper
    saveSwiperIndex: function (state, res) {
      state.swpierIndex = res
    }
  }
});
