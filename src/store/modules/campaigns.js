import { apiResource } from 'plugins/axios'

const state = {
  campaigns: []
}

const getters = {
  all: state => state.campaigns
}

const actions = {
  getAll ({ commit }) {
    apiResource
      .get('/goals')
      .then(response => {
        commit('set', response.data)
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
