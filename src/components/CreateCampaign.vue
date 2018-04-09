<template>
  <q-dialog
    v-model="createCampaignDialog"
    stack-buttons
    prevent-close
  >
    <span slot="title">Favorite Superhero</span>

    <!-- This or use "message" prop on <q-dialog> -->
    <span slot="message">What is your superhero of choice?</span>

    <div slot="body">
      <q-field
        icon="account_circle"
        helper="We need your name so we can send you to the movies."
        label="Your name"
        :label-width="3"
      >
      </q-field>
    </div>
  </q-dialog>
</template>

<script>
export default {
  props: {
    createCampaignDialog: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
</style>
