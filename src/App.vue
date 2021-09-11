<template>
  <div id="q-app">
    <router-view>
    </router-view>
  </div>
</template>
<script>
import MainLayout from './layouts/MainLayout.vue'
export default {
  components: { MainLayout },
  name: 'App'
}
</script>
