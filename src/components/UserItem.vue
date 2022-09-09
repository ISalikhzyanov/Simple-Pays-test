<template>
  <div class="user">
    <div><strong>Имя пользователя: </strong>{{ user.name }}</div>
    <div><strong>E-mail: </strong>{{ user.email }}</div>
  </div>
</template>

<script>
export default {

props:{
  user:{
    type: Object,
    required: true
  }
}
}
</script>

<style scoped>

</style>