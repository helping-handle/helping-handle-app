<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate () {
    var self = this
    const config = function httpConfig (conf) {
      return conf
    }

    const response = function httpResponse (resp) {
      // setLoading(false)
      return resp
    }

    const error = function httpError (obj) {
      // setLoading(false)

      let err = 'Unknown error.'

      if (obj) {
        if (obj.response) {
          if (obj.response.status === 401) {
            self.$store.dispatch('user/logout')
          } else if (obj.response.data.error_description) {
            err = obj.response.data.error_description
          } else if (obj.response.data.error) {
            err = obj.response.data.error
          }
        }
      }

      self.$q.notify({
        color: 'negative',
        position: 'bottom',
        message: err,
        icon: 'report_problem'
      })

      return Promise.reject(obj)
    }

    this.$authResource.interceptors.request.use(config, error)
    this.$authResource.interceptors.response.use(response, error)
    this.$apiResource.interceptors.request.use(config, error)
    this.$apiResource.interceptors.response.use(response, error)
  }
}
</script>

<style>
</style>
