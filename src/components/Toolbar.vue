<template>
  <q-toolbar
    v-if="userType === 'donor'"
    color="indigo-6"
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
  <q-toolbar
    v-else
    color="deep-purple-6"
    class="justify-center"
  >
    <q-btn
      flat
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
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    userType: {
      type: String,
      required: true,
      validator: function (v) {
        return ['donor', 'recipient'].indexOf(v) !== -1
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .q-card
    width: 100%
  .q-progress
    height: 40px
</style>
