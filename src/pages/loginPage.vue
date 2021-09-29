<template>
  <q-page-container>

    <q-page
    >
        <div class="container">
          <q-card bordered class="loginForm" color="teal">
            <q-card-section class="top-bar">
              <!-- the width of this empty div is based on the width of
                   register-link. This way Login is fully centered using
                   justify-content: space-between.
               -->
              <!-- <div style="width: 63.27px"></div> -->
              <div style="color: teal;" class="test text-h4">Inloggen</div>
              <!-- <a color="teal" class="register-link" href="register">Registreren</a> -->
            </q-card-section>

            <q-separator color="teal" inset/>

            <q-card-section >
              <q-form @submit="submitForm">
                <q-input label-slot color="teal" outlined type="email" class="q-pa-sm" v-model="formData.email" label="Email adres" />
                <q-input label-slot color="teal" outlined type="password" class="q-pa-sm" v-model="formData.password" label="Wachtwoord" />
                <div class="buttonDiv">
                  <q-btn type="submit" color="teal" class="loginButton q-ma-sm">Inloggen</q-btn>
                </div>
              </q-form>
                <a color="teal" class="forgot-password q-ma-sm" href="url" @click="forgotPassword">wachtwoord vergeten?</a>
                <!-- <a color="teal" class="register-link q-mt-sm" href="register">Gratis registreren</a> -->
                <q-dialog v-model="resetPwdDialog">
                  <ForgotPassword />
                </q-dialog>
            </q-card-section>
          </q-card>
          </div>
    </q-page>
  </q-page-container>
</template>

<script>
import ForgotPassword from "../components/ForgotPassword.vue";
import firebase from "firebase";
// import * as firebase from "firebase/app";
// import { getAuth, signInWithEmailAndPassword} from "firebase/auth";


export default {
  name: 'Login',
  components: { ForgotPassword },
  data () {
    return {
      formData: {
        email: '',
        password: ''
      },
      resetPwdDialog: false,
      // auth: getAuth()

    }
  },
  methods: {
    submitForm () {
      if (true) {
         this.signInExistingUser(this.formData.email, this.formData.password)
      }
    },
    google () {
      console.log('google login & signup')
    },
    signInExistingUser (email, password) {
      console.log("test1")
      console.log(email, "--------", password)
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("test")
          // this.$q.notify({message: 'Sign In Success.'})
          this.$router.push('/auth')
        })
        .catch(error => { console.log(error)})
    },
    forgotPassword () {
      this.resetPwdDialog = true
    }
  }
}
</script>

<style lang="sass" scoped>
  .top-bar
    display: flex
    align-items: center
    justify-content: center

  .loginButton
    width: 100%

  .register-link
    // color: teal
    display: flex
    align-items: center
    justify-content: center

  .forgot-password
    display: flex
    align-items: center
    justify-content: center

  .buttonDiv
    display: flex
    align-items: center
    justify-content: center

  .container
    height: 100vh
    // width: 100vw
    display: flex
    align-items: center
    justify-content: center

  .loginForm
    width: 80%
    border-radius: 3px
    padding: 8px
</style>