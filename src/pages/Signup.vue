<template>
  <q-page padding class="docs-btn row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <img
          alt="Helping Handle logo"
          src="~assets/logo-full.svg"
        >
        <h2>Helping Handle</h2>
      </div>
      <div class="row justify-center">
        <q-card inline class="bigger q-ma-sm">
          <q-card-title>
            Sign Up
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-input v-model="name" float-label="Full Name" />
            <q-input v-model="email" float-label="Email Address" />
            <q-checkbox v-model="hasUsername" label="Use email address as Username" />
            <q-input v-if="!hasUsername" v-model="email" float-label="Username" />
            <q-input type="password" float-label="Password" />
          </q-card-main>
          <q-card-separator />
          <q-card-actions class="justify-center">
            <q-btn
              push
              color="deep-orange"
              label="Cancel"
              @click="$router.push('/')"
            />
            <q-btn
              push
              color="secondary"
              icon="accessibility"
              label="Sign Up"
              @click="$router.push('/login')"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SignUpPage',
  data () {
    return {
      hasUsername: true
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
  .q-input, .q-checkbox
    margin-bottom 16px
</style>
