<template>
  <q-page>
    <div class="row justify-center">
      <div class="container q-mt-md">
        <div class="row justify-center">
          <div class="col-12">
            <h3 class="q-my-lg text-center">
              Helping Handle
            </h3>
          </div>
          <div class="col-12 text-center">
            <img
              alt="Helping Handle logo"
              src="assets/logo-full.svg"
            />
          </div>
          <div class="col-12 q-mt-md">
            <q-card class="q-ma-sm">
              <q-card-title class="text-center">
                Login
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                <q-input
                  v-model="form.email"
                  float-label="Username / Email Address"
                  class="q-mb-lg"
                />
                <q-input
                  v-model="form.password"
                  type="password"
                  float-label="Password"
                  @keyup.enter="login()"
                  class="q-mb-md"
                />
              </q-card-main>
              <q-card-separator />
              <q-card-actions>
                <div class="actions row q-ma-sm">
                  <div class="col-sm-12 col-md-6 q-ma-none q-pa-none">
                    <q-btn
                      class="full-width"
                      color="indigo-3"
                      label="Cancel"
                      @click="$router.push('/')"
                    />
                  </div>
                  <div class="col-sm-12 col-md-6 q-ma-none q-pa-none">
                    <q-btn
                      class="full-width"
                      color="indigo-8"
                      label="Login"
                      @click="login()"
                    />
                  </div>
                </div>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser'
    }),
    login () {
      this.$authResource.post('/auth/sign_in', {user: this.form}).then(response => {
        this.$q.sessionStorage.set('token', response.data.token)

        this.setUser(response.data.user)

        this.$router.push(
          response.data.user.role === 'recipient'
            ? '/user/campaigns'
            : '/dashboard'
        )
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .container
    width 400px
    max-width 100vw

  img
    width 100px
    height 100px

  .q-btn-group
    width 100%

  .q-btn
    padding 10.5px

  div.actions
    width 100%
</style>
