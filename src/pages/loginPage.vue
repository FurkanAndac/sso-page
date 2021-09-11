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
              <q-input label-slot color="teal" outlined type="email" class="q-pa-sm" v-model="email" label="Email adres" />
              <q-input label-slot color="teal" outlined type="password" class="q-pa-sm" v-model="text" label="Wachtwoord" />
              <div class="buttonDiv">
                <q-btn color="teal" class="loginButton q-ma-sm">Inloggen</q-btn>
              </div>
              <a color="teal" class="forgot-password q-ma-sm" href="url">wachtwoord vergeten?</a>
              <a color="teal" class="register-link q-mt-sm" href="register">Gratis registreren</a>
            </q-card-section>
          </q-card>
          </div>
    </q-page>
  </q-page-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      // email: '',
      // username: '',
      // password: ''
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