const data = require('./mock-data')
const _campaigns = data.campaigns
const _users = data.users

export function getAllCampaigns (cb) {
  setTimeout(() => cb(_campaigns), 100)
}

export function login (username, password) {
  return _users.filter((e) => {
    var validUsername = e.username === username
    var validEmail = e.email === username
    var validPassword = e.password === password

    return (validUsername || validEmail) && validPassword
  })[0]
}
