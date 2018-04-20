<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <img
          alt="Profile Icon"
          src="~assets/male.svg"
        >
      </div>
      <div class="row justify-center">
        <q-card class="q-ma-sm">
          <q-card-title>
            {{ profile.name }}
            <span slot="subtitle">
              @{{ profile.handle }}
            </span>
          </q-card-title>
          <q-card-main>
            <dl>
              <dt>About Me</dt>
              <dd>{{ profile.about }}</dd>
              <dt>Interests</dt>
              <dd>
                <q-chips-input
                  color="deep-purple-6"
                  readonly
                  v-model="profileInterests"
                />
              </dd>
              <dt>Goals</dt>
              <dd>
                <q-chips-input
                  color="deep-purple-6"
                  readonly
                  v-model="profileGoals"
                />
              </dd>
              <dt>Education</dt>
              <dd>
                <q-chips-input
                  color="deep-purple-6"
                  readonly
                  v-model="profileEducation"
                />
              </dd>
            </dl>
          </q-card-main>
        </q-card>
      </div>
      <div class="row justify-center">
        <CampaignCard
          v-for="goal in goals"
          :key="goal.id"
          :campaign="goal"
          :showUser="false"
        >
        </CampaignCard>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import CampaignCard from 'components/CampaignCard'

export default {
  components: {
    CampaignCard
  },
  computed: {
    ...mapGetters({
      profile: 'profile/profile',
      goals: 'profile/goals'
    }),
    profileInterests: function () {
      return this.profile.interests.split(', ')
    },
    profileGoals: function () {
      return this.profile.goals.split(', ')
    },
    profileEducation: function () {
      return this.profile.education.split(', ')
    }
  },
  created () {
    this.$store.dispatch(
      'profile/load',
      this.$route.params.id
    )
  }
}
</script>

<style scoped lang="stylus">
  img
    width: 128px
    height: 128px
  .q-btn
    margin: 5px
  .q-card
    width: 100%
  dd, dt
    margin: 6px 0
</style>
