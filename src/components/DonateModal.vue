<template>
  <q-modal
    v-if="visible"
    :content-css="{padding: '50px', minWidth: '50vw'}"
    class="q-pa-md"
  >
    <div class="q-display-1 q-mb-md">Donate {{ amount }} to {{ username }}</div>
    <q-btn @click="donateDialog = false" label="Cancel" />
    <q-btn color="primary" @click="donateDialog = false" label="Donate" />
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
