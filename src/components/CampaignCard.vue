<template>
  <q-card
    v-bind:class="cardClass"
  >
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
      />
    </q-card-main>
    <q-card-main
      v-if="donors != null">
      Donors: {{ donors }}
    </q-card-main>
  </q-card>
</template>

<script>
export default {
  name: 'CampaignCard',
  props: {
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
    cardClass: function () {
      return {
        'q-ma-sm': true
      }
    },
    progressClass: function () {
      return {
        'text-deep-purple-6': this.donors == null,
        'text-teal-6': this.donors != null
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .q-card
    width: 100%
  .q-progress
    height: 15px
</style>
