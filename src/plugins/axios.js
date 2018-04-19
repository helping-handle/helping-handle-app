import axios from 'axios'

import { SessionStorage } from 'quasar'

const API = process.env.API

export default ({ Vue }) => {
  Vue.prototype.$authResource = axios.create({
    baseURL: `${API}/`,
    headers: {
      post: { 'Content-Type': 'application/jsoncharset=UTF-8' },
      put: { 'Content-Type': 'application/jsoncharset=UTF-8' }
    }
  })

  Vue.prototype.$apiResource = axios.create({
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
}
