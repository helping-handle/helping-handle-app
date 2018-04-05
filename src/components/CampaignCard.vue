<template>
  <q-card class="q-ma-sm">
    <q-card-title>
      {{ name }}
      <span slot="subtitle">
        {{ desc }}
       </span>
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
        <q-btn flat>Donate $1</q-btn>
        <q-btn flat>Donate</q-btn>
        <q-btn flat>Share</q-btn>
      </q-card-actions>
    </template>
  </q-card>
</template>

<script>
export default {
  name: 'CampaignCard',
  props: {
    owned: {
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
    percent: {
      type: Number,
      required: true
    },
    donors: {
      type: Number
    }
  },
  computed: {
    progressClass: function () {
      return {
        'text-deep-purple-6': !this.owned,
        'text-teal-6': this.owned
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .q-card
    width: 100%
  .q-progress
    height: 40px
</style>
