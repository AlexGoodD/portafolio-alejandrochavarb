<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
</script>

<template>
  <div id="app">
    <Navbar/>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}
</style>
