<template>
  <q-page>
    <div class="window-height window-width row justify-center items-center">
      <q-card>
        <q-card-title>
          Sign Up
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <q-input
            v-model="name"
            color="indigo-8"
            float-label="Full Name" />
          <q-input
            v-model="email"
            color="indigo-8"
            float-label="Email Address" />
          <q-input
            v-model="username"
            color="indigo-8"
            float-label="Username"
          />
          <q-input
            v-model="password"
            type="password"
            color="indigo-8"
            float-label="Password"
          />
          <q-input
            no-pass-toggle
            v-model="password_c"
            type="password"
            color="indigo-8"
            float-label="Confirm Password"
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
                icon="accessibility"
                label="Sign Up"
                @click="signUp()"
              />
            </div>
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      username: '',
      password: '',
      password_c: ''
    }
  },
  methods: {
    signUp (e) {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="stylus">
  .q-card
    width 400px
    max-width 100vw
    margin-bottom 32px

  .q-btn
    margin 5px

  .q-input
    margin-bottom 16px

  div.actions
    width 100%
</style>
