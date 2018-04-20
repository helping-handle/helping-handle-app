<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center q-ma-sm">
        <q-search
          inverted
          clearable
          class="col"
          icon="search"
          color="deep-purple-6"
          placeholder="Search Resources"
          v-model="search"
         />
      </div>
      <div class="row justify-center">
        <ResourceCard
          v-for="res in resources"
          :key="res.id"
          :res="res"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import ResourceCard from 'components/ResourceCard'

export default {
  name: 'ExplorePage',
  data () {
    return {
      search: ''
    }
  },
  components: {
    ResourceCard
  },
  computed: mapGetters({
    resources: 'resources/all'
  }),
  created () {
    this.$store.dispatch('resources/getAll')
  }
}
</script>

<style scoped lang="stylus">
  img
    width: 256px
    height: 256px
  .q-btn
    margin: 5px
</style>
