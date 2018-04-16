<template>
  <q-modal
    padding
    v-if="visible"
    :content-css="{padding: '50px', minWidth: '50vw'}"
    class="q-pa-md"
  >
    <div class="q-display-1 q-mb-md">
      Donate {{ amount }} to {{ username }}
    </div>
    <q-btn
      color="primary"
      icon="square-inc-cash"
      label="Donate with Square"
      @click="donateDialog = false"
    />
    <q-btn
      label="Cancel"
      @click="donateDialog = false"
    />
  </q-modal>
</template>

<script>
export default {
  name: 'DonateModal',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    username: {
      type: String
    },
    amount: {
      type: Number
    }
  }
}
</script>

<style scoped lang="stylus">
  .q-card
    width: 100%
</style>
