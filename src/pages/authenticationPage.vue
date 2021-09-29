<template>
  <q-page color="teal" class="flex q-pa-md">
      Welcome Home {{ user }} <br> {{ email }}
    <q-space />
    <div>
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Logout"
        @click="logout"
        color="primary"
      />
    </div>
  </q-page>
</template>
<script>
import firebase from "firebase/app";

export default {
name: "Auth",
 data () {
    return {
      user: '',
      email: ''
    }
  },
    created() {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        this.user = auth.displayName
        this.email = auth.email
      } else {
        console.log('user name is null')
      }
    })
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      this.$router.push('/login')
        .then(() => {
        // this.$q.notify({message: 'Sign Out Success.'})
      })
      .catch(error =>  console.log('error',error))
    }
  }
}

</script>

