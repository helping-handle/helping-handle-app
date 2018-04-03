<template>
  <q-card color="secondary q-ma-sm">
    <q-card-title>
      {{ campaign.name }}
      <span slot="subtitle">
        {{ campaign.desc }}
       </span>
    </q-card-title>
    <q-card-main>
      <q-progress
        :percentage="campaign.percent"
        stripe
        color="teal-1" />
    </q-card-main>
  </q-card>
</template>

<script>
export default {
  name: 'CampaignCard',
  props: {
    campaign: Object
  }
}
</script>

<style scoped lang="stylus">
  .q-card
    width: 100%
  .q-progress
    height: 15px
</style>
