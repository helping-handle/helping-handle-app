<template>
  <q-page>
    <div class="window-height window-width row justify-center items-center">
      <q-card>
        <q-card-title>
          Sign Up
        </q-card-title>
        <q-card-separator />
        <q-card-main>

          <!-- Full Name -->
          <q-field
            :error="$v.name.$error"
            :error-label="nameError"
            icon="mdi-account-card-details"
            helper="Your name will not be shared on the site"
            class="q-mb-md"
          >
            <q-input
              v-model.trim="name"
              @blur="$v.name.$touch"
              float-label="Full Name"
              color="indigo-8"
            />
          </q-field>

          <!-- Email -->
          <q-field
            :error="$v.email.$error"
            :error-label="emailError"
            icon="mail"
            helper="Please enter a valid email address"
            class="q-mb-md"
          >
            <q-input
              v-model.trim="email"
              @blur="$v.email.$touch"
              type="email"
              color="indigo-8"
              float-label="Email"
            />
          </q-field>

          <!-- Handle -->
          <q-field
            :error="$v.handle.$error"
            :error-label="handleError"
            :count="32"
            icon="mdi-at"
            helper="Select the name people will use to find you"
            class="q-mb-md"
          >
            <q-input
              v-model.trim="handle"
              @blur="$v.handle.$touch"
              color="indigo-8"
              float-label="Handle"
            />
          </q-field>

          <!-- Password -->
          <q-field
            :error="$v.password.$error || $v.passwordConfirm.$error "
            :error-label="passwordError"
            count
            icon="mdi-lock"
            helper="Enter a secure password"
          >
            <q-input
              v-model="password"
              @blur="$v.password.$touch"
              type="password"
              color="indigo-8"
              float-label="Password"
              class="q-mb-sm"
            />

            <q-input
              v-model="passwordConfirm"
              @blur="$v.passwordConfirm.$touch"
              type="password"
              color="indigo-8"
              float-label="Confirm Password"
              no-pass-toggle
            />
          </q-field>
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <div class="actions row q-ma-sm">
            <div class="col-sm-12 col-md-6 q-ma-none q-pa-none">
              <q-btn
                class="full-width"
                color="indigo-3"
                label="Cancel"
                @click="$router.push('/')"
              />
            </div>
            <div class="col-sm-12 col-md-6 q-ma-none q-pa-none">
              <q-btn
                class="full-width"
                color="indigo-8"
                icon="accessibility"
                label="Sign Up"
                @click="signUp()"
              />
            </div>
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength,
  alphaNum
} from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      name: '',
      email: '',
      handle: '',
      password: '',
      passwordConfirm: ''
    }
  },
  validations: {
    name: { required },
    email: { required, email },
    handle: {
      required,
      alphaNum,
      minLength: minLength(3),
      maxLength: maxLength(32)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    passwordConfirm: {
      sameAsPassword: sameAs('password')
    }
  },
  computed: {
    nameError () {
      return 'Please tell us your name'
    },
    emailError () {
      return 'Valid email address is required'
    },
    handleError () {
      if (!this.$v.handle.minLength) {
        return 'Handle must be 3 or more characters long'
      } else if (!this.$v.handle.maxLength) {
        return 'Handle cannot be more than 32 characters long'
      } else if (!this.$v.handle.alphaNum) {
        return 'Please enter only alphanumeric characters'
      } else {
        return 'Please choose a valid Handle'
      }
    },
    passwordError () {
      if (!this.$v.password.minLength) {
        return 'Password must be at least 8 characters long'
      } else if (!this.$v.passwordConfirm.sameAsPassword) {
        return 'Passwords do not match'
      } else {
        return 'Please enter a valid password'
      }
    }
  },
  methods: {
    submit () {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.')
        return
      }

      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="stylus">
  .q-card
    width 400px
    max-width 100vw
    margin-bottom 32px

  .q-btn
    margin 5px

  div.actions
    width 100%
</style>
