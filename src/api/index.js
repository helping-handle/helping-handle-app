import axios from 'axios'

// const querystring = require('querystring')

const API = process.env.API

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

export function login (handle, password) {
  return _users.filter((e) => {
    var validHandle = e.handle === handle
    var validEmail = e.email === handle
    var validPassword = e.password === password

    return (validHandle || validEmail) && validPassword
  })[0]
}
