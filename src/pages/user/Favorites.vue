<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <CampaignCard
          v-for="campaign in campaigns"
          :key="campaign.id"
          :name="campaign.name"
          :desc="campaign.desc"
          :percent="campaign.percent"
        >
        </CampaignCard>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import CampaignCard from 'components/CampaignCard'

export default {
  name: 'FavoritesPage',
  components: {
    CampaignCard
  },
  computed: mapGetters({
    campaigns: 'campaigns/all'
  }),
  created () {
    this.$store.dispatch('campaigns/getAll')
  }
}
</script>

<style scoped lang="stylus">
  img
    width: 256px
    height: 256px
  .q-btn
    margin: 5px
</style>
