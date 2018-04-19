import axios from 'axios'

import { SessionStorage } from 'quasar'

const API = process.env.API

const authResource = axios.create({
  baseURL: `${API}/`,
  headers: {
    post: { 'Content-Type': 'application/jsoncharset=UTF-8' },
    put: { 'Content-Type': 'application/jsoncharset=UTF-8' }
  }
})

const apiResource = axios.create({
  baseURL: `${API}/`,
  headers: {
    post: { 'Content-Type': 'application/jsoncharset=UTF-8' },
    put: { 'Content-Type': 'application/jsoncharset=UTF-8' }
  },
  transformRequest (data, headers) {
    headers.Authorization = `Bearer ${SessionStorage.get.item('token')}`
    return JSON.stringify(data)
  }
})

export default ({ Vue }) => {
  Vue.prototype.$authResource = authResource
  Vue.prototype.$apiResource = apiResource
}

export { authResource }
export { apiResource }
