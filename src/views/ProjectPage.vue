<template>
  <div>
    <p class="info-search">Cerca de 6 resultados (0.33 segundos)</p>
    <ProjectSection />
  </div>
</template>
<script setup lang="ts">
import ProjectSection from '../components/ProjectSection.vue'
</script>
<style scoped>
.info-search {
  color: #9d9d9d;
  padding: 0rem 14.5rem;
  margin-bottom: -1.5rem;
}
</style>
