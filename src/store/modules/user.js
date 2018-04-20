import router from '@/router'
import { SessionStorage } from 'quasar'

const state = {
  user: Object
}

const getters = {
  logged: state => Object.keys(state.user).length !== 0,
  role: state => state.user.role,
  color (state) {
    if (state.user.role === 'recipient') return 'deep-purple-6'
    if (state.user.role === 'donor')     return 'indigo-6'
    if (state.user.role === 'admin')     return 'green-6'
    else                                 return 'light-blue-6'
  },
  total_donated: state => state.user.total_donated,
  goals_supported: state => state.user.goals_supported,
  total_users: state => state.user.total_users
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
