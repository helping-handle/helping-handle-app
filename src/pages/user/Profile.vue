<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <q-card inline class="bigger q-ma-sm">
          <q-card-title>
            Edit Profile
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-input v-model="name" float-label="Full Name" />
            <q-input v-model="email" float-label="Email Address" />
            <q-input v-if="username" v-model="username" float-label="Username" />
            <q-input v-model="password" type="password" float-label="Current Password" />
            <q-input v-model="password" type="password" float-label="Password" />
          </q-card-main>
          <q-card-separator />
          <q-card-main>
            <q-chips-input
              v-model="education"
              placeholder="Education"
            />
          </q-card-main>
          <q-card-main>
            <q-chips-input
              v-model="workplaces"
              placeholder="Workplace"
            />
          </q-card-main>
          <q-card-main>
            <q-chips-input
              v-model="interests"
              placeholder="Interests"
            />
          </q-card-main>
          <q-card-actions class="justify-center">
            <q-btn
              push
              color="deep-orange"
              label="Cancel"
              @click="$router.push('/dashboard')"
            />
            <q-btn
              push
              color="primary"
              label="Update"
              @click="$router.push('/dashboard')"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ProfilePage',
  data () {
    return {
      name: 'Jason Nedell',
      username: 'nedell',
      email: 'jason@pnc.one',
      hasUsername: true,
      education: ['University Colorado, Boulder'],
      workplaces: ['Pinecone Industries Limited'],
      interests: ['Snowboarding', 'Tin Whistle', 'Bassoon', 'Electronics']
    }
  }
}
</script>

<style scoped lang="stylus">
  .q-btn
    margin: 5px
  .q-card
    width: 400px;
  .q-input
    margin-bottom: 16px
</style>
