<template>
  <q-toolbar
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
</template>

<style scoped lang="stylus">
  .q-card
    width: 100%
  .q-progress
    height: 40px
</style>
