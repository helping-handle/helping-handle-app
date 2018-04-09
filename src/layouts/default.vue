<template>
  <q-layout view="lHh lpr lFf">
    <q-layout-header>
      <q-toolbar
        :color="userColor">
        <q-toolbar-title>
          Helping Handle
        </q-toolbar-title>
        <q-btn
          v-if="userLogged"
          flat
          round
          icon="settings"
          @click="$router.push('/user/profile')"
          aria-label="Settings"
        />
        <q-btn
          v-if="userLogged"
          flat
          round
          dense
          icon="mdi-logout"
          @click="logout"
          aria-label="Logout"
        />
        <q-btn
          v-if="!userLogged"
          flat
          icon="home"
          @click="$router.push('/login')"
          label="Login"
        />
        <q-btn
          v-if="!userLogged"
          flat
          icon="mdi-account"
          @click="$router.push('/signup')"
          label="Sign Up"
        />
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer>
      <DonorFooterToolbar v-if="userType == 'donor'">
      </DonorFooterToolbar>
      <RecipientFooterToolbar v-if="userType == 'recipient'">
      </RecipientFooterToolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import DonorFooterToolbar from 'components/DonorFooterToolbar'
import RecipientFooterToolbar from 'components/RecipientFooterToolbar'

export default {
  name: 'DefaultLayout',
  components: {
    DonorFooterToolbar,
    RecipientFooterToolbar
  },
  computed: {
    ...mapGetters({
      userLogged: 'user/logged',
      userColor: 'user/color',
      userType: 'user/type'
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
