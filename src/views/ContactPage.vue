<template>
  <div>
    <p class="info-search">Cerca de 3 resultados (0.14 segundos)</p>
    <ContactSection />
  </div>
</template>
<script setup lang="ts">
import ContactSection from '../components/ContactSection.vue'
</script>
<style scoped>
.info-search {
  color: #9d9d9d;
  padding: 0rem 14.5rem;
  margin-bottom: -1rem;
}
</style>
