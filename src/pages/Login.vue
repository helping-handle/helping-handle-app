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
            Login
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-input v-model="text" float-label="Username / Email Address" />
            <q-input v-model="password" type="password" float-label="Password" />
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
              color="primary"
              icon="home"
              label="Login"
              @click="$router.push('/dashboard')"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage'
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
