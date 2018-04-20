<template>
  <q-page
    class="q-pa-sm row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <img
          alt="Profile Icon"
          src="~assets/female.svg"
        >
      </div>
      <div class="row justify-center">
        <q-card
          color="indigo-6"
          class="q-ma-sm"
        >
          <q-card-title class="text-center">
            <h4 class="q-ma-sm">{{ userTotalDonated }}</h4>
            <span slot="subtitle">Money Donated</span>
          </q-card-title>
        </q-card>
        <q-card
          color="indigo-6"
          class="q-ma-sm"
        >
          <q-card-title class="text-center">
            <h4 class="q-ma-sm">{{ userTotalGoals }}</h4>
            <span slot="subtitle">Goals Supported</span>
          </q-card-title>
        </q-card>
        <q-card
          color="indigo-6"
          class="q-ma-sm"
        >
          <q-card-title class="text-center">
            <h4 class="q-ma-sm">{{ userTotalUsers }}</h4>
            <span slot="subtitle">People Helped</span>
          </q-card-title>
        </q-card>
      </div>
      <div class="row justify-center">
        <CampaignCard
          v-for="campaign in campaigns"
          :key="campaign.id"
          :campaign="campaign"
          :percent="50"
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
  name: 'DashboardPage',
  components: {
    CampaignCard
  },
  computed: mapGetters({
    campaigns: 'campaigns/all',
    userTotalDonated: 'user/total_donated',
    userTotalGoals: 'user/goals_supported',
    userTotalUsers: 'user/total_users'
  }),

  created () {
    this.$store.dispatch('campaigns/getAll')
  }
}
</script>

<style scoped lang="stylus">
  img
    width: 128px
    height: 128px
  .q-btn
    margin: 5px
</style>
