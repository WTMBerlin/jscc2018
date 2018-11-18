import Vue from 'vue';
import Vuex from 'vuex';

import meetups from './modules/meetups';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    meetups,
  },
});
