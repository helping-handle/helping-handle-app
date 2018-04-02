<template>
  <q-page padding class="docs-btn row justify-center">
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
            <q-input v-if="!hasUsername" v-model="email" float-label="Username" />
            <q-input type="password" float-label="Current Password" />
            <q-input type="password" float-label="Password" />
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
      hasUsername: true
    }
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
    width: 400px;
</style>
