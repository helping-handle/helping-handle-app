import user from './auth'

export default {
  guest (to, from, next) {
    next(!user.check())
  },

  noauth (to, from, next) {
    next(
      !user.check() ? true : { path: '/' }
    )
  },

  auth (to, from, next) {
    next(
      user.check() ? true : { path: '/login', query: { redirect: to.name } }
    )
  }
}

/*

user.type === 'recipient'
            ? '/user/campaigns'
            : '/dashboard'

*/
