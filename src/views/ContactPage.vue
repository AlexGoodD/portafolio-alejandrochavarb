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
  transition:
    margin-left 0.5s ease,
    margin-right 0.5s ease,
    margin-top 0.5s ease;
}

@media (min-width: 1680px) {
  .info-search {
    margin-left: 14%;
  }
}

@media (min-width: 901px) and (max-width: 1679px) {
  .info-search {
    margin-left: 16%;
  }
}

@media (min-width: 826px) and (max-width: 900px) {
  .info-search {
    margin-left: 20%;
  }
}

@media (max-width: 825px) {
  .info-search {
    margin-left: 15%;
    margin-right: auto;
  }
}
</style>
