<template>
  <div>
    <div class="carrousel-container">
      <Carrousel :language="props.language" />
    </div>
    <ImageGallery :language="props.language" />
  </div>
</template>

<script setup lang="ts">
import ImageGallery from '../components/ImageGallery.vue'
import Carrousel from '../components/TechCarrousel.vue'
const props = defineProps({
  language: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.carrousel-container {
  padding: 1rem;
}
</style>
