<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <q-card
          color="deep-purple-6"
          class="q-ma-sm"
        >
          <q-card-title class="text-center">
            <h4 class="q-ma-sm">{{ campaigns.length }}</h4>
            <span slot="subtitle">My Campaigns</span>
          </q-card-title>
        </q-card>

        <q-card
          color="deep-purple-6"
          class="q-ma-sm"
        >
          <q-card-title class="text-center">
            <h4 class="q-ma-sm">34</h4>
            <span slot="subtitle">Number of Donors</span>
          </q-card-title>
        </q-card>

        <q-card
          color="deep-purple-6"
          class="q-ma-sm"
        >
          <q-card-title class="text-center">
            <h4 class="q-ma-sm">$345</h4>
            <span slot="subtitle">Money Recieved</span>
          </q-card-title>
        </q-card>

        <q-card
          color="deep-purple-6"
          class="q-ma-sm"
        >
          <q-card-title class="text-center">
            <q-btn
              color="primary"
              label="Create Campaign"
              class="q-b-md"
              @click="createCampaignDialog = true"
            />
            <span slot="subtitle">Raise Money</span>
          </q-card-title>
        </q-card>
      </div>
      <q-modal
        v-model="createCampaignDialog"
        :content-css="{padding: '50px', minWidth: '50vw'}"
        class="q-pa-md"
      >
        <div class="q-display-1 q-mb-md">Create New Campaign</div>
        <q-input
          v-model="campaignName"
          float-label="Campaign Name"
          class="q-mb-md"
        />
        <q-input
          v-model="campaignAmount"
          float-label="Funding Amount"
          class="q-mb-md"
        />
        <p class="caption">Description</p>
        <q-editor
          v-model="campaignDesc"
          :toolbar="[
            ['bold', 'italic', 'strike'],
            ['undo', 'redo']
          ]"
        />
        <q-btn color="primary" @click="createCampaignDialog = false" label="Create Campaign" />
      </q-modal>
      <div class="row justify-center">
        <CampaignCard
          v-for="campaign in campaigns"
          :key="campaign.id"
          :name="campaign.name"
          :desc="campaign.desc"
          :user="campaign.user"
          :percent="50"
          :donors="13"
          :owned="true"
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
  name: 'CampaignsPage',
  data () {
    return {
      createCampaignDialog: false,
      campaignName: '',
      campaignAmount: '',
      campaignDesc: ''
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
  .q-btn
    margin-bottom: 10px
</style>
