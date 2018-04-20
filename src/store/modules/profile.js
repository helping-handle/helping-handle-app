import { apiResource } from 'plugins/axios'
import { Notify } from 'quasar'
import router from '@/router'

const state = {
  profile: Object,
  goals: []
}

const getters = {
  profile: state => state.profile,
  goals: state => state.goals
}

const actions = {
  load ({commit, state}, userId) {
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
  },
  navigateTo ({commit, state}, user) {
    apiResource
      .get('/users/?q=' + user)
      .then(response => {
        if (user.length < 3  || response.data.length > 0) {
          router.push('/profile/' + response.data[0].id)
        } else {
          Notify.create({
            color: 'warning',
            position: 'bottom',
            message: 'Unable to find User',
            icon: 'mdi-comment-question-outline',
            timeout: 500
          })
        }
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
