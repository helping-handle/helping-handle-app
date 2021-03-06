import Vue from 'vue'
import Vuex from 'vuex'

import campaigns from 'store/modules/campaigns'
import resources from 'store/modules/resources'
import user from 'store/modules/user'
import profile from 'store/modules/profile'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    campaigns,
    resources,
    user,
    profile
  }
})

export default store
