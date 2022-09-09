<template>
  <form class="form" @submit.prevent>
    <input
        v-model="user.name"
        class="input"
        type="text"
        placeholder="ФИО"
    >
    <input
        v-model="user.email"
        class="input"
        type="text"
        placeholder="E-mail"
    >
    <button
        class="btn"
        @click="createUser"
    >
      Создать
    </button>
  </form>
</template>

<script>


export default {

  data() {
    return {
      user: {
        name: '',
        email: ''
      }
    }
  },



  methods: {
    async createUser() {
      const response = await fetch("https://api.sitemap-generator.ru/test-api/user", {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          "X-Application-Token": "wefiEFv_dwDEvf-12Veda_feadvkJbBgh831"
        },
        body: new URLSearchParams({
          'name': `${this.user.name}`,
          'email': `${this.user.email}`,
        })
      });
      const data = await response.json()
      if (data.auth_key) {
        localStorage.setItem('token', data.auth_key)
      }


    }
  },

}
</script>

<style scoped>
.form {
  border: 2px solid teal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;

}

.input {
  width: 50%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
</style>