<template>
  <div>
    <crate-form
        :users="users"


    />
    <user-list
        :users="users"
    />

  </div>

</template>

<script>
import CrateForm from "@/components/CrateForm";
import UserList from "@/components/UserList";

export default {
  components: {
    CrateForm, UserList
  },
  data() {
    return {
      'name': '',
      'email': '',
      'users': [],
      'token': localStorage.getItem('token'),
      'auth': false
    }
  },
  methods: {


    // handeAuth(){
    //   if (this.token) {
    //     this.auth = true
    //     console.log(this.auth)
    //   } else (this.auth = false)
    //   console.log(this.auth)
    // },

    async fetchUser() {
      const response = await fetch("https://api.sitemap-generator.ru/test-api/user", {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          "Authorization": `Bearer ${this.token}`
        }
      });
      const data = await response.json()
      console.log(data)
      if (data.auth_key) {
        this.users.push(data)
      }
      console.log(data)
    }
  },

  created() {
    this.fetchUser()

  }
}

</script>

<style>
.none {
  display: none;
}
</style>