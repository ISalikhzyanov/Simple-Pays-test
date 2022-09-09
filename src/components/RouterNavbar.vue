<template>
  <div class="navbar">
    <div>Тестовое задание</div>
    <div class="navbar-btns">
      <button class="btn"   @click="$router.push('/')">Регистрация пользователя</button>
      <button class="btn"  style="margin-left: 20px" @click="$router.push('/update')">Редактирование ползователя</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem('token')
    }
  }
}
</script>

<style scoped>
.navbar {
  align-items: center;
  height: 100px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  margin-bottom: 20px;
  padding: 0 15px;
}

.btn {
  padding: 10px 15px;
  background: none;
  color: lightblue;
  border: none;
  cursor: pointer;
}

.navbar-btns {
  margin-left: auto;
}
</style>