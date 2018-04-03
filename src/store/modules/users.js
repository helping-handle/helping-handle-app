// import actions from './actions';
// import getters from './getters';
// import mutations from './mutations';
import * as api from '../../api'

const state = {
  users: [],
};

const actions = {
  userExists ({commit}) {
    api.userExists(user)
  })
};

export default {
  namespaced: true,
  state,
  actions
};
