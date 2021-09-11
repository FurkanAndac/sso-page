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
              <div style="color: teal;" class="register-header text-h4">Registreren</div>
              <!-- <a color="teal" class="login-link" href="login">Login</a> -->
            </q-card-section>

            <q-separator color="teal" inset/>

            <q-card-section >
              <q-input class="q-pa-sm" label-slot color="teal" outlined type="email" v-model="email" label="Email adres" />
              <q-input class="q-pa-sm" label-slot color="teal" outlined type="password" v-model="password" label="Wachtwoord" />
              <q-input class="q-pa-sm" label-slot color="teal" outlined type="repeatPassword" v-model="password" label="Herhaal wachtwoord" />
              <div class="buttonDiv">
                <q-btn style="width: 100%" color="teal" class="loginButton q-ma-sm">REGISTREER</q-btn>
              </div>
              <div class="register-check q-mt-sm">Bent u al geregistreerd?
                 <a color="teal" class="forgot-password" href="login">Inloggen</a>
              </div>
            </q-card-section>
          </q-card>
          </div>
    </q-page>
  </q-page-container>
</template>

<script>
export default {
  name: 'Register',
  mounted () {
    console.log("test")
  }
}
</script>

<style lang="sass" scoped>
  .top-bar
    display: flex
    align-items: center
    justify-content: center

  // .register-header
  //   display: flex
  //   justify-content: center
  //   align-items: center

  .register-check
    display: flex
    justify-content: center

  .login-link
    // color: teal

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