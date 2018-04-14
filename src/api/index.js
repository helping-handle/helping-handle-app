import axios from 'axios'

// const querystring = require('querystring')

const API = process.env.API

// export const authResource = axios.create({
//   baseURL: `${API}/oauth/`,
//   transformRequest(data) {
//     return querystring.stringify(data)
//   },
// })

export const apiResource = axios.create({
  baseURL: `${API}/`,
  headers: {
    post: { 'Content-Type': 'application/json;charset=UTF-8' },
    put: { 'Content-Type': 'application/json;charset=UTF-8' }
  },
  transformRequest (data, headers) {
    // headers.Authorization = `Bearer ${Vue.prototype.$session.get('token')}`
    return JSON.stringify(data)
  }
})

const data = require('./mock-data')
const _users = data.users

export function getAllCampaigns (cb) {
  apiResource
    .get('goals')
    .then(r => {
      cb(r.data)
    })
}

export function login (username, password) {
  return _users.filter((e) => {
    var validUsername = e.username === username
    var validEmail = e.email === username
    var validPassword = e.password === password

    return (validUsername || validEmail) && validPassword
  })[0]
}
