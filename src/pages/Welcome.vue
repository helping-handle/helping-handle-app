<template>
  <q-page>
    <div class="row justify-center">
      <div class="container shadow-3">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="q-mb-md">Helping Handle</h2>
          </div>
          <div class="col-12 text-center">
            <img
              alt="Helping Handle logo"
              src="assets/logo-full.svg"
            />
          </div>
          <div class="col-12 text-left q-pa-lg">
            <p class="q-subheading">
              Helping individuals in need raise money and better their
              lives for themselves, their families, and their community.
            </p>
            <p class="q-subheading">
              Fundraise towards foals, get unstuck, and be the best version of
              yourself you can be. Start today!
            </p>
          </div>
          <div class="col-12">
            <q-tabs
              color="indigo-6"
              position="bottom"
              align="justify"
            >
              <q-tab
                default
                name="help"
                slot="title"
                icon="mdi-gift"
                label="Help"
              />
              <q-tab
                name="handle"
                slot="title"
                icon="mdi-leaf"
                label="Handle"
              />
              <q-tab-pane name="help">
                <div class="row justify-center q-ma-sm">
                  <div class="col-sm-12 col-md-6 q-ma-none q-pa-none">
                    <q-search
                      inverted
                      clearable
                      icon="search"
                      color="indigo-8"
                      placeholder="Search Username"
                      v-model="search"
                      @keyup.enter="goProfile()"
                    />
                  </div>
                  <div class="col-sm-12 col-md-3 q-ma-none q-pa-none">
                    <q-btn
                      class="full-width"
                      color="indigo-7"
                      icon-right="mdi-arrow-right-box"
                      label="Donate"
                      @click="goProfile()"
                    />
                  </div>
                  <div class="col-sm-12 col-md-3 q-ma-none q-pa-none">
                    <q-btn
                      class="full-width"
                      color="indigo-4"
                      icon-right="mdi-view-list"
                      label="Explore"
                      @click="$router.push('/explore')"
                    />
                  </div>
                </div>
              </q-tab-pane>
              <q-tab-pane name="handle">
                <div class="row justify-center q-ma-sm">
                  <div class="col-sm-12 col-md-6 q-ma-none q-pa-none">
                    <q-btn
                      class="full-width"
                      color="indigo-6"
                      icon-right="mdi-account"
                      label="Start a Goal"
                      @click="$router.push('/signup')"
                    />
                  </div>
                  <div class="col-sm-12 col-md-6 q-ma-none q-pa-none">
                    <q-btn
                      class="full-width"
                      color="indigo-8"
                      icon-right="mdi-view-list"
                      label="Explore"
                      @click="$router.push('/login')"
                    />
                  </div>
                </div>
              </q-tab-pane>
            </q-tabs>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'WelcomePage',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    goProfile: function () {
      if (this.search.length < 2) {
        this.$q.notify({
          color: 'info',
          position: 'bottom',
          message: 'Please enter more than two characters',
          icon: 'keyboard',
          timeout: 500
        })
      } else {
        this.$store.dispatch('profile/navigateTo', this.search)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .container
    width 600px
    max-width 100vw

  img
    width 160px
    height 160px

  .q-btn-group
    width 100%

  .q-btn
    padding: 10.5px
</style>
