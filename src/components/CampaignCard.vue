<template>
  <q-card class="q-ma-sm">
    <q-card-title>
      {{ name }}
      <span slot="subtitle">
        {{ desc }}
      </span>
      <q-btn
        rounded
        v-if="showUser && owned == false"
        slot="right"
        size="md"
        icon="mdi-account"
        :label="user.handle"
        @click="$router.push('/user/history')"
      />
    </q-card-title>
    <q-card-main>
      <q-progress
        :percentage="percent"
        v-bind:class="progressClass"
        style="height: 12px"
      />
    </q-card-main>
    <q-card-main v-if="owned">
      Donors: {{ donors }}
    </q-card-main>
    <template v-if="!owned">
      <q-card-separator />
      <q-card-actions>
        <q-btn
          flat
          round
          color="red"
          icon="favorite outline"
        />
        <q-btn
          flat
          label="Donate $1"
          @click="donateModal = true, donateAmount = 1"
        />
        <q-btn
          flat
          label="Donate"
          @click="donateModal = true, donateAmount = 10"
        />
        <q-btn flat>Share</q-btn>
      </q-card-actions>
      <q-modal
        v-model="donateModal"
         class="layout-padding qa-pa-sm"
      >
        <h5 class="layout-padding">
          Donate to @{{ user.handle }}
        </h5>
        <div class="layout-padding">
          <q-field
            icon="mdi-currency-usd"
            helper="Donation amount"
          >
            <q-input v-model="donateAmount"/>
          </q-field>
        </div>
        <div class="layout-padding">
          <q-btn
            rounded
            color="positive"
            icon="mdi-square-inc-cash"
            label="Square"
            @click="donateCash()"
          />
          <q-btn
            rounded
            color="light-blue-4"
            icon="mdi-venmo"
            label="Venmo"
            @click="donateVenmo()"
          />
          <q-btn
            rounded
            color="blue-10"
            icon="mdi-paypal"
            label="PayPal"
            @click="donatePayPal()"
          />
          <q-btn
            flat
            label="Cancel"
            @click="donateModal = false"
          />
        </div>
      </q-modal>
    </template>
  </q-card>
</template>

<script>

export default {
  name: 'CampaignCard',
  data () {
    return {
      donateModal: false,
      donateAmount: 1,
      confirmModal: false
    }
  },
  props: {
    owned: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    user: {
      type: Object
    },
    showUser: {
      type: Boolean,
      default: true
    },
    percent: {
      type: Number,
      required: true
    },
    donors: {
      type: Number
    }
  },
  computed: {
    progressClass: () => {
      return {
        'text-deep-purple-6': this.owned,
        'text-indigo-6': !this.owned
      }
    }
  },
  methods: {
    donateCash: function () {
      var href = 'https://cash.me/$' + this.user.handle +
                 '/' + this.donateAmount
      window.open(href, '_blank')
      this.donateModal = false
    },
    donateVenmo: function () {
      var href = 'https://venmo.com/' +
                 '/?txn=pay' +
                 '&recipients=' + this.user.handle +
                 '&amount=' + this.donateAmount +
                 '&note=Donation from Helping Handle!'
      window.open(href, '_blank')
      this.donateModal = false
    },
    donatePayPal: function () {
      var href = 'https://paypal.me/' + this.user.handle +
                 '/' + this.donateAmount
      window.open(href, '_blank')
      this.donateModal = false
    }
  }
}
</script>

<style scoped lang="stylus">
  .q-card
    width: 100%
  .modal .q-btn
    margin-right: 8px
  h5
    margin-bottom: 0
</style>
