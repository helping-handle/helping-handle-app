<template>
  <q-page padding class="docs-btn row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <h3>Explore</h3>
        <pre>
          {{ campaigns }}
        </pre>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ExplorePage',
  computed: mapGetters({
    campaigns: 'campaigns/all'
  }),
  created () {
    this.$store.dispatch('campaigns/getAll')
  }
}
</script>
