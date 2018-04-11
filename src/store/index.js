import Vue from 'vue'
import Vuex from 'vuex'

import campaigns from 'store/modules/campaigns'
import user from 'store/modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    campaigns,
    user
  }
})

export default store
