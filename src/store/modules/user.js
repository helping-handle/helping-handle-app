import router from '@/router'
import { SessionStorage } from 'quasar'

const state = {
  user: Object
}

const getters = {
  logged: state => Object.keys(state.user).length !== 0,
  color: state => (state.user.role === 'recipient') ? 'deep-purple-6'
    : 'indigo-6',
  role: state => state.user.role
}

const actions = {
  logout ({commit, state}) {
    SessionStorage.set('token', '')
    commit('setUser', Object)
    router.push('/login')
  },
  setUser ({commit, state}, user) {
    commit('setUser', user)
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
