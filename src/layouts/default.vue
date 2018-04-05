<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar v-bind:class="userTypeColor">
        <q-toolbar-title>
          Helping Handle
        </q-toolbar-title>
        <q-btn
          flat
          round
          icon="settings"
          @click="$router.push('/user/profile')"
          aria-label="Settings"
        />
        <q-btn
          flat
          round
          dense
          icon="power"
          @click="$router.push('/')"
          aria-label="Logout"
        />
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer>
      <Toolbar :userType="userType">
      </Toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import Toolbar from 'components/Toolbar'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      userType: 'recipient'
    }
  },
  components: {
    Toolbar
  },
  computed: {
    userTypeColor: function () {
      return {
        'bg-deep-purple-6': this.userType === 'recipient',
        'bg-indigo-6': this.userType === 'donor'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .q-layout-footer .q-toolbar .q-btn
    margin: 0 16px
</style>
