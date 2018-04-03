import * as api from '../../api'

const state = {
  campaigns: []
}

const getters = {
  all: state => state.campaigns
}

const actions = {
  getAll ({ commit }) {
    api.getAllCampaigns(campaigns => {
      commit('set', campaigns)
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
