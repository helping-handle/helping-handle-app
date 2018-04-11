<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <img
          alt="Profile Icon"
          src="~assets/male.svg"
        >
      </div>
      <div class="row justify-center">
        <q-card class="q-ma-sm">
          <q-card-title>
            Ricon S.
            <span slot="subtitle">
              @ricon
            </span>
          </q-card-title>
          <q-card-main>
            <dl>
              <dt>About Me</dt>
              <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt fermentum enim. Aenean tempus mollis congue.</dd>
              <dt>Interests</dt>
              <dd>A description list is perfect for defining terms.</dd>
              <dt>Goals</dt>
              <dd>Vivamus aliquet dictum sodales. </dd>
              <dt>Education</dt>
              <dd>Donec id elit non mi porta gravida at eget metus.</dd>
            </dl>
          </q-card-main>
        </q-card>
      </div>
      <div class="row justify-center">
        <CampaignCard
          v-for="campaign in campaigns"
          :key="campaign.id"
          :name="campaign.name"
          :desc="campaign.desc"
          :showUser="false"
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
  name: 'HistoryPage',
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
    width: 128px
    height: 128px
  .q-btn
    margin: 5px
  .q-card
    width: 100%
</style>
