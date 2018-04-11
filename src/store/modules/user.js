import * as api from '@/api'
import router from '@/router'

const state = {
  user: Object
}

const getters = {
  logged: state => Object.keys(state.user).length !== 0,
  color: state => (state.user.type === 'recipient') ? 'deep-purple-6'
    : 'indigo-6',
  type: state => state.user.type
}

const actions = {
  login ({commit, state}, payload) {
    var user = api.login(payload.username, payload.password)
    if (user != null) {
      commit('setUser', user)
      router.push(
        user.type === 'recipient'
          ? '/user/campaigns'
          : '/dashboard'
      )
    }
  },
  logout ({commit, state}) {
    commit('setUser', Object)
    router.push('/welcome')
  }
}

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
