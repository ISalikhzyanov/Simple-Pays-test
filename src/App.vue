<template>
  <div>
<router-navbar></router-navbar>
<router-view></router-view>
  </div>
</template>

<script>
import RouterNavbar from "@/components/RouterNavbar";

export default {
  components: {RouterNavbar}
}
</script>

<style scoped>

</style>