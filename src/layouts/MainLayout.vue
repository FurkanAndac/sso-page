<template>
    <q-layout view="hHh lpR fFf">
      <div class="bg-image">
      <router-view>
      </router-view>
      </div>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import LoginPage from '../pages/loginPage.vue'

export default defineComponent({
  components: { LoginPage },
  name: 'MainLayout',
  data () {
    return { 
     }
  },
  created () {
    // window.location.pathname = '/login'
  }
})
</script>

<style lang="sass" scoped>

    
  .bg-image 
    content: ''
    position: fixed
    width: 100vw
    height: 100%
    background-image: url("../assets/rotterdam.jpg")
    background-position: center center
    background-repeat: no-repeat
    background-attachment: fixed
    background-size: cover
    // -webkit-filter: blur(5px)
    // -moz-filter: blur(5px)
    // filter: blur(7px)
</style>