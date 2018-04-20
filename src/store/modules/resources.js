import { apiResource } from 'plugins/axios'

const state = {
  resources: []
}

const getters = {
  all: state => state.resources
}

const actions = {
  getAll ({ commit }) {
    apiResource
      .get('/resources')
      .then(response => {
        commit('set', response.data)
      })
  }
}

const mutations = {
  set (state, resources) {
    state.resources = resources
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
