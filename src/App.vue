<template>
  <div>
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer ref="footer" />
  </div>
</template>
<script setup lang="ts">
import Navbar from './components/AppNavbar.vue'
import Footer from './components/AppFooter.vue'
</script>
