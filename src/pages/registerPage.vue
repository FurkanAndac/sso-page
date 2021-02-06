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
              <div style="width: 63.27px"></div>
              <div style="color: teal;" class="test text-h4">LOGIN</div>
              <a color="teal" class="register-link" href="url">Registreer</a>
            </q-card-section>

            <q-separator color="teal" inset/>

            <q-card-section >
              <q-input class="q-pa-sm" standout="bg-teal text-white" v-model="text" label="Email adres" />
              <q-input class="q-pa-sm" standout="bg-teal text-white" v-model="text" label="Wachtwoord" />
              <div class="buttonDiv">
                <q-btn color="teal" class="loginButton q-ma-sm">LOGIN</q-btn>
              </div>
              <a color="teal" class="forgot-password q-mt-sm" href="url">wachtwoord vergeten?</a>
            </q-card-section>
          </q-card>
          </div>
    </q-page>
  </q-page-container>
</template>

<script>
export default {
  name: 'Register',
}
</script>

<style lang="sass" scoped>

</style>