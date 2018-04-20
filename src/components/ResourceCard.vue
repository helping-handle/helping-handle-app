<template>
  <q-card class="q-ma-sm">
    <q-card-media>
        <img src="https://placeimg.com/640/200/any">
      </q-card-media>
      <q-card-title class="relative-position">
        <q-btn
          fab
          :icon="res.icon"
          size="xl"
          color="deep-purple-6"
          class="absolute"
          style="top: -40px; right: 8px; transform: translateY(-50%);"
        />
        <div class="ellipsis"></div>
        <q-rating slot="subtitle" :max="5" />
        <div slot="right" class="row items-center">
          <q-icon name="place" /> 250 ft
        </div>
      </q-card-title>
      <q-card-main>
        <p>{{ res.name }}</p>
        <p class="text-faded">
          {{ res.slug }}
        </p>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat color="deep-purple-6">Learn More</q-btn>
        <q-btn
          flat
          :href="`mailto:${res.email}`"
        >
          Contact
        </q-btn>
      </q-card-actions>
  </q-card>
</template>

<script>

export default {
  name: 'resourceCard',
  props: {
    res: Object
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
