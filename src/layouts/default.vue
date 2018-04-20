<template>
  <q-layout view="lHh lpr lFf">
    <q-layout-header>
      <q-toolbar :color="userColor">
        <q-toolbar-title>
          Helping Handle
        </q-toolbar-title>
        <template v-if="userLogged">
          <q-btn
            flat
            round
            icon="settings"
            aria-label="Settings"
            @click="$router.push('/user/profile')"
          />
          <q-btn
            flat
            round
            dense
            icon="mdi-logout"
            aria-label="Logout"
            @click="logout"
          />
        </template>
        <template v-else>
          <q-btn
            flat
            icon="home"
            label="Login"
            @click="$router.push('/login')"
          />
          <q-btn
            flat
            icon="mdi-account"
            label="Sign Up"
            @click="$router.push('/signup')"
          />
        </template>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer>
      <template v-if="userLogged">
        <q-toolbar
          :color="userColor"
          class="justify-center"
          v-if="userRole == 'donor'"
        >
          <q-btn
            flat
            default
            label="Dashboard"
            icon="home"
            @click="$router.push('/dashboard')"
          />
          <q-btn
            flat
            label="Explore"
            icon="search"
            @click="$router.push('/explore')"
          />
          <q-btn
            flat
            label="History"
            icon="history"
            @click="$router.push('/user/history')"
          />
          <q-btn
            flat
            label="Favorites"
            icon="favorite"
            @click="$router.push('/user/favorites')"
          />
        </q-toolbar>
        <q-toolbar
          :color="userColor"
          class="justify-center"
          v-if="userRole == 'recipient'"
        >
          <q-btn
            flat
            default
            label="Campaigns"
            icon="mdi-gift"
            @click="$router.push('/user/campaigns')"
          />
          <q-btn
            flat
            label="Resources"
            icon="domain"
            @click="$router.push('/resources')"
          />
          <q-btn
            flat
            label="History"
            icon="mdi-currency-usd"
            @click="$router.push('/user/donations')"
          />
          <q-btn
            flat
            label="Profile"
            icon="settings"
            @click="$router.push('/user/profile')"
          />
        </q-toolbar>
        <q-toolbar
          :color="userColor"
          class="justify-center"
          v-if="userRole == 'admin'"
        >
          <q-btn
            flat
            default
            label="Dashboard"
            icon="mdi-home"
            @click="$router.push('/dashboard')"
          />
          <q-btn
            flat
            label="Resources"
            icon="favorite"
            @click="$router.push('/favorites')"
          />
          <q-btn
            flat
            label="History"
            icon="mdi-currency-usd"
            @click="$router.push('/history')"
          />
          <q-btn
            flat
            label="Profile"
            icon="settings"
            @click="$router.push('/user/profile')"
          />
        </q-toolbar>
      </template>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapGetters({
      userLogged: 'user/logged',
      userColor: 'user/color',
      userRole: 'user/role'
    })
  },
  methods: {
    ...mapActions({
      logout: 'user/logout'
    })
  }
}
</script>

<style scoped lang="stylus">
  .q-layout-footer .q-toolbar .q-btn
    margin: 0 16px
</style>
