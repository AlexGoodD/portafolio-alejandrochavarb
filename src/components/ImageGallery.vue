<template>
  <div class="image-gallery" :class="{ 'modal-active': selectedImage }">
    <div class="image-grid">
      <ImageItem
        v-for="image in images"
        :key="image.id"
        :image="image"
        :class="getImageClass(image)"
        :selected="image.id === selectedImage?.id"
        @click="openModal(image)"
      />
    </div>
    <ImageModal
      v-if="selectedImage"
      :image="selectedImage"
      :images="images"
      @close="closeModal"
      @update:image="updateImage"
    />
  </div>
</template>
<script setup lang="ts">
import ImageModal from '../components/ImageModal.vue'
import { ref } from 'vue'
import ImageItem from '../components/ImageItem.vue'
import { images, Image } from '../data/imageData'
const getImageClass = (image: Image) => {
  return `image-item ${image.type}`
}
const selectedImage = ref<Image | null>(null)
const openModal = (image: Image) => {
  selectedImage.value = image
}
const closeModal = () => {
  selectedImage.value = null
}
const updateImage = (image: Image) => {
  selectedImage.value = image
}
</script>
<style scoped>
.image-gallery {
  padding: 1% 3% 1% 1%;
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.image-gallery.modal-active {
  margin-right: 45%;
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  grid-auto-rows: 250px;
  flex-grow: 1;
}
.image-item {
  width: 100%;
  height: 100%;
}
.image-item.vertical {
  grid-row: span 2;
}
.image-item.rectangular {
  grid-column: span 2;
}
.image-item.square {
  grid-column: span 1;
  grid-row: span 1;
}
</style>
