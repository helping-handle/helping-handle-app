import axios from 'axios'

const API = process.env.API

export default ({ Vue }) => {
  Vue.prototype.$axios = axios.create({
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
}
