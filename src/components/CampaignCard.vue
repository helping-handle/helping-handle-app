<template>
  <q-card class="q-ma-sm">
    <q-card-title>
      {{ name }}
      <span slot="subtitle">
        {{ desc }}
      </span>
      <q-btn
        rounded
        v-if="showUser"
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
        :content-css="{padding: '30px', minWidth: '50vw'}"
      >
        <div class="q-display-1 q-mb-md">
          Donate ${{ donateAmount }} to @{{ user.handle }}
        </div>
        <q-btn
          rounded
          color="positive"
          icon="mdi-square-inc-cash"
          label="Square"
          @click="donateModal = false"
        />
        <q-btn
          flat
          label="Cancel"
          @click="donateModal = false"
        />
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
      donateAmount: 1
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
  }
}
</script>

<style scoped lang="stylus">
  .q-card
    width: 100%
</style>
