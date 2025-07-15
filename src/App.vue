<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div id="app">
    <Navbar v-if="!route.path.startsWith('/admin')" />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.content {
  width: 100%;
  height: 100%;
  min-height: 0;
}
</style>