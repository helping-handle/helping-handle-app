<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
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
      <q-toolbar
        color="primary"
        class="justify-center"
      >
        <q-btn
          flat
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
    </q-layout-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped lang="stylus">
  .q-layout-footer .q-toolbar .q-btn
    margin: 0 16px
</style>
