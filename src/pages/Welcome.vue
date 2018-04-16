<template>
  <q-page class="row justify-center">
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
        <q-tabs color="indigo-6" align="justify">
        <q-tab
          default
          name="help"
          slot="title"
          icon="mdi-gift"
          label="Help"
        />
        <q-tab
          name="handle"
          slot="title"
          icon="mdi-leaf"
          label="Handle"
        />
        <q-tab-pane name="help">
          <div class="row justify-center">
            Help someone in need
          </div>
          <div class="row justify-center">
            <q-btn
              push
              color="primary"
              icon="mdi-view-list"
              label="Explore Campaigns"
              @click="$router.push('/explore')"
            />
          </div>
          <div class="row justify-center">
            <q-search
              inverted
              clearable
              class="col"
              icon="search"
              color="indigo-4"
              placeholder="Search username"
              v-model="search"
              @keyup.enter="$router.push('/user/campaigns')"
             />
          </div>
        </q-tab-pane>
        <q-tab-pane name="handle">
          <div class="row justify-center">
            Get a handle on your financial life
          </div>
          <div class="row justify-center">
            <q-btn
              push
              color="secondary"
              icon="mdi-account"
              label="Start a Goal"
              @click="$router.push('/signup')"
            />
            <q-btn
              push
              color="deep-orange"
              icon="home"
              label="Login"
              @click="$router.push('/login')"
            />
          </div>
        </q-tab-pane>
      </q-tabs>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'WelcomePage',
  data () {
    return {
      search: ''
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
  .q-tab-pane
    width: 600px
</style>
