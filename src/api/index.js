const data = require('./mock-data')
const _users = data.users

export function login (handle, password) {
  return _users.filter((e) => {
    var validHandle = e.handle === handle
    var validEmail = e.email === handle
    var validPassword = e.password === password

    return (validHandle || validEmail) && validPassword
  })[0]
}
