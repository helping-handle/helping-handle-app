<template>
  <q-toolbar
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

<style scoped lang="stylus">
  .q-card
    width: 100%
  .q-progress
    height: 40px
</style>
