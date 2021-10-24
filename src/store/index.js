import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';
import getters from './getters';
import routers from './modules/routers';
// import menu from './modules/menu'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    user,
    // menu
    routers
  },
  getters,
});
