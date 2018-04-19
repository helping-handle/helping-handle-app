<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <img
          alt="Helping Handle logo"
          src="~assets/logo-full.svg"
        >
        <h2>Helping Handle</h2>
      </div>
      <div class="row justify-center">
        <q-card class="q-ma-sm">
          <q-card-title>
            Login
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-input
              v-model="form.email"
              float-label="Username / Email Address"
            />
            <q-input
              v-model="form.password"
              type="password"
              float-label="Password"
              @keyup.enter="login()"
            />
          </q-card-main>
          <q-card-separator />
          <q-card-actions class="justify-center">
            <q-btn
              push
              label="Cancel"
              @click="$router.push('/')"
            />
            <q-btn
              push
              color="primary"
              icon="home"
              label="Login"
              @click="login()"
            />
          </q-card-actions>
        </q-card>
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
  img
    width: 128px
    height: 128px
  .q-btn
    margin: 5px
  .q-card
    width: 400px;
  .q-input
    margin-bottom 16px
</style>
