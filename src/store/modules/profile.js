import { apiResource } from 'plugins/axios'

const state = {
  profile: Object,
  goals: []
}

const getters = {
  profile: state => state.profile,
  goals: state => state.goals
}

const actions = {
  loadProfile ({commit, state}, userId)  {
    apiResource
      .get('/users/' + userId)
      .then(response => {
        commit('setProfile', response.data)
      })
    apiResource
      .get('/users/' + userId + '/goals')
      .then(response => {
        commit('setGoals', response.data)
      })
  }
}

const mutations = {
  setProfile (state, profile) {
    state.profile = profile
  },
  setGoals (state, goals) {
    state.goals = goals
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
