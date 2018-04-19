import { SessionStorage } from 'quasar'

export default {
  user () {
    return SessionStorage.get.item('user')
  },

  check () {
    return SessionStorage.get.item('token').length > 0
  }
}
