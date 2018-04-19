import Vue from 'vue'

const state = {
  campaigns: []
}

const getters = {
  all: state => state.campaigns
}

const actions = {
  getAll ({ commit }) {
    Vue.prototype.$axios.get('goals').then(r => {
      commit('set', r.data)
    })
  }
}

const mutations = {
  set (state, campaigns) {
    state.campaigns = campaigns
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
