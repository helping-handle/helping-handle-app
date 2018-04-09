import Vue from 'vue'
import Vuex from 'vuex'

import campaigns from './modules/campaigns'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    campaigns,
    user
  }
})

export default store
