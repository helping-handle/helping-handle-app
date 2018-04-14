<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <q-btn
          size="lg"
          class="col q-pa-md"
          color="indigo-6"
          icon="mdi-currency-usd"
          label="Goal"
        />
        <q-btn
          size="lg"
          class="col q-pa-md"
          color="indigo-6"
          icon="mdi-seal"
          label="Their Need"
        />
        <q-btn
          size="lg"
          class="col q-pa-md"
          color="deep-purple-6"
          icon="mdi-gamepad-variant"
          label="Interest"
        />
        <q-btn
          size="lg"
          class="col q-pa-md"
          color="deep-purple-6"
          icon="mdi-map-marker"
          label="Location"
        />
      </div>
      <div class="row justify-center q-ma-sm">
        <q-search
          inverted
          clearable
          class="col"
          icon="search"
          color="deep-purple-6"
          placeholder="Search username, title, description"
          v-model="search"
         />
      </div>
      <div class="row justify-center">
        <CampaignCard
          v-for="campaign in campaigns"
          :key="campaign.id"
          :name="campaign.name"
          :desc="campaign.desc"
          :user="campaign.user"
          :percent="50"
          :donors="campaign.donors"
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
  data () {
    return {
      search: ''
    }
  },
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
