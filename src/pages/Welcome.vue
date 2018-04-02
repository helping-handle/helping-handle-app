<template>
  <q-page padding class="docs-btn row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <h2>Helping Handle</h2>
      </div>
      <div class="row justify-center">
        <img
          alt="Helping Handle logo"
          src="~assets/logo-full.svg"
        >
      </div>
      <div class="row justify-center">
        <p>
          Helping individuals in need raise money and better their lives for
          themselves, their families, and their community.
        </p>
        <p>
          Fundraise towards foals, get unstuck, and be the best version of
          yourself you can be. Start today!
        </p>
      </div>
      <div class="row justify-center">
      <q-btn
          push
          color="primary"
          icon="home"
          label="Login"
          @click="$router.push('/login')"
        />
        <q-btn
          push
          color="secondary"
          icon="accessibility"
          label="sign Up"
          @click="$router.push('/signup')"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'WelcomePage'
}
</script>

<style scoped lang="stylus">
  img
    width: 256px
    height: 256px
  .q-btn
    margin: 5px
</style>
