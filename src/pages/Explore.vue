<template>
  <q-page padding class="docs-btn row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <h3>Explore</h3>
      </div>
      <div class="row justify-center">
        <CampaignCard
          v-for="campaign in campaigns"
          :key="campaign.id"
          :campaign="campaign"
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
  name: 'ExplorePage',
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
