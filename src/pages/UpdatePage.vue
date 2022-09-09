<template>
  <form class="create" @submit.prevent>
    <h4 class="center">Редактирование пользователя</h4>
    <input
        v-model="name"
        class="input"
        type="text"
        placeholder="Имя пользователя">
    <input
        v-model="email"
        class="input"
        type="text"
        placeholder="E-mail">
    <input
        v-model="phone"
        class="input"
        type="text"
        placeholder="Номер телефона">
    <button
        class="btn"
        @click="updateUser"
    >Редактировать
    </button>
  </form>
  <div class="user" v-for="user in users" :key="user">
    <h1 class="header">Текущий пользователь</h1>
    <div><strong>Имя пользователя: </strong>{{ user.name }}</div>
    <div><strong>E-mail: </strong>{{ user.email }}</div>
    <div><strong>E-mail: </strong>{{ user.phone }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
        name: '',
        email: '',
        phone: '',
      token: localStorage.getItem('token')
    }
  },
  methods: {
    async updateUser() {
      const response = await fetch("https://api.sitemap-generator.ru/test-api/user", {
        method: 'PATCH',
        headers: {
          'accept': 'application/json',
          "Authorization": `Bearer ${this.token}`
        },
        body: new URLSearchParams({
          'name': `${this.name}`,
          'email': `${this.email}`,
          'phone': `${this.phone}`
        })
      });
      const data = await response.json()
      console.log(data)
      this.users.splice(0)
      this.users.push(data)

    },

  }
}

</script>

<style scoped>
.create {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 50%;
  border: 2px solid teal;
  margin: 0 auto;
}

.header{
  display: flex;
  align-items: center;
  justify-content: center;
}

.input {
  display: flex;
  width: 40%;
  border: 1px solid teal;
  margin: 10px;
}

.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
.user{
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>