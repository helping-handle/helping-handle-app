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
</template>

<style scoped lang="stylus">
  .q-card
    width: 100%
  .q-progress
    height: 40px
</style>
