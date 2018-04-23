<template>
  <q-page>
    <div class="window-height window-width row justify-center items-center">
      <q-card>
        <q-card-title>
          Sign Up
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <!-- User Type -->
          <q-btn-toggle
            v-model="form.role"
            toggle-color="indigo-8"
            class="q-mb-md"
            :options="[
              { label: 'Recipient', value: 1 },
              { label: 'Donor', value: 0 }
            ]"
          />

          <!-- Full Name -->
          <q-field
            :error="$v.form.name.$error"
            :error-label="nameError"
            icon="mdi-account-card-details"
            helper="Your name will not be shared on the site"
            class="q-mb-md"
          >
            <q-input
              v-model.trim="form.name"
              @blur="$v.form.name.$touch"
              @keyup.enter="signUp()"
              float-label="Full Name"
              color="indigo-8"
            />
          </q-field>

          <!-- Email -->
          <q-field
            :error="$v.form.email.$error"
            :error-label="emailError"
            icon="mail"
            helper="Please enter a valid email address"
            class="q-mb-md"
          >
            <q-input
              v-model.trim="form.email"
              @blur="$v.form.email.$touch"
              @keyup.enter="signUp()"
              type="email"
              color="indigo-8"
              float-label="Email"
            />
          </q-field>

          <!-- Handle -->
          <q-field
            :error="$v.form.handle.$error"
            :error-label="handleError"
            :count="32"
            icon="mdi-at"
            helper="Select the name people will use to find you"
            class="q-mb-md"
          >
            <q-input
              v-model.trim="form.handle"
              @blur="$v.form.handle.$touch"
              @keyup.enter="signUp()"
              color="indigo-8"
              float-label="Handle"
            />
          </q-field>

          <!-- Password -->
          <q-field
            :error="$v.form.password.$error || $v.form.passwordConfirm.$error "
            :error-label="passwordError"
            count
            icon="mdi-lock"
            helper="Enter a secure password"
          >
            <q-input
              v-model="form.password"
              @blur="$v.form.password.$touch"
              @keyup.enter="signUp()"
              type="password"
              color="indigo-8"
              float-label="Password"
              class="q-mb-sm"
            />

            <q-input
              v-model="form.passwordConfirm"
              @blur="$v.form.passwordConfirm.$touch"
              @keyup.enter="signUp()"
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
      form: {
        name: '',
        email: '',
        handle: '',
        role: 1,
        password: '',
        passwordConfirm: ''
      }
    }
  },
  validations: {
    form: {
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
      if (!this.$v.form.handle.minLength) {
        return 'Handle must be 3 or more characters long'
      } else if (!this.$v.form.handle.maxLength) {
        return 'Handle cannot be more than 32 characters long'
      } else if (!this.$v.form.handle.alphaNum) {
        return 'Please enter only alphanumeric characters'
      } else {
        return 'Please choose a valid Handle'
      }
    },
    passwordError () {
      if (!this.$v.form.password.minLength) {
        return 'Password must be at least 8 characters long'
      } else if (!this.$v.form.passwordConfirm.sameAsPassword) {
        return 'Passwords do not match'
      } else {
        return 'Please enter a valid password'
      }
    }
  },
  methods: {
    signUp () {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('There are errors—please review fields.')
        return
      }

      var user = {
        user: {
          name: this.form.name,
          email: this.form.email,
          handle: this.form.handle,
          password: this.form.password,
          role: this.form.role
        }
      }

      this.$authResource
        .post('/auth', user)
        .then(response => {
          this.$q.notify({
            color: 'positive',
            message: 'User created! Please log in with your email',
            icon: 'mdi-thumb-up'
          })
          this.$router.push('/login')
        })
        .catch(error => {
          console.log(error)
          this.$q.notify({
            message: 'User created! Please log in with your email'
          })
        })
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

  .q-btn-toggle
    margin-left 42px

  div.actions
    width 100%
</style>
