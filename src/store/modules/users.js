import * as api from '../../api'

const state = {
  user: Object,
}

const getters = {
  user: state => state.user
}

const actions = {
  login ({commit}) {
    if (api.userExists(user)) {
    }
  })
}

const mutations = {
  login (state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
