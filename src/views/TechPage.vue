<template>
  <div>
    <div class="carrousel-container">
      <Carrousel />
    </div>
    <ImageGallery />
  </div>
</template>

<script setup lang="ts">
import ImageGallery from '../components/ImageGallery.vue'
import Carrousel from '../components/TechCarrousel.vue'
</script>

<style scoped>
.carrousel-container {
  padding: 1rem;
}
</style>
