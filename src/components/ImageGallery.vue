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
      :language="props.language"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ImageItem from '../components/ImageItem.vue'
import ImageModal from '../components/ImageModal.vue'
import { imagesEs, imagesEn } from '../data/imageData'

const props = defineProps({
  language: {
    type: String,
    required: true,
  },
})

const images = ref(imagesEs)
const selectedImage = ref<null | {
  id: string
  src: string
  title: string
  description: string
  categories: string[]
  type: string
}>(null)

watch(
  () => props.language,
  (newLang) => {
    images.value = newLang === 'es' ? imagesEs : imagesEn
  },
  { immediate: true },
)

const getImageClass = (image: { type: string }) => {
  return `image-item ${image.type}`
}

const openModal = (image: {
  id: string
  src: string
  title: string
  description: string
  categories: string[]
  type: string
}) => {
  selectedImage.value = image
}

const closeModal = () => {
  selectedImage.value = null
}

const updateImage = (updatedImage: {
  id: string
  src: string
  title: string
  description: string
  categories: string[]
  type: string
}) => {
  const index = images.value.findIndex((image) => image.id === updatedImage.id)
  if (index !== -1) {
    images.value[index] = updatedImage
  }
}
</script>

<style scoped>
.image-gallery {
  padding: 1% 3% 1% 1%;
  display: flex;
  transition: transform 0.5s ease-in-out;
}

@media (min-width: 2271px) {
  .image-gallery {
    padding: 1% 1% 1% 1%;
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
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
  transition: grid-template-columns 0.5s ease-in-out;
}

@media (max-width: 1120px) {
  .image-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
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
