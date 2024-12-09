<template>
  <div class="modal" @click.self="close">
    <div class="modal-content">
      <div class="action-buttons">
        <button class="prev" @click="prevItem">&lt;</button>
        <button class="next" @click="nextItem">&gt;</button>
        <button class="close" @click="close">&times;</button>
      </div>
      <p class="title">{{ props.image.title }}</p>
      <div class="image-container">
        <img class="small-image" :src="props.image.src" :alt="props.image.title" />
      </div>
      <p class="description">{{ props.image.description }}</p>
      <ul v-if="props.image.details.length" class="details">
        <li v-for="(detail, index) in props.image.details" :key="index">{{ detail }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  images: {
    type: Array as () => { id: string; title: string; src: string; description: string }[],
    required: true,
  },
})
const emit = defineEmits(['close', 'update:image'])
const close = () => {
  emit('close')
}
const prevItem = () => {
  const currentIndex = props.images.findIndex((image) => image.id === props.image.id)
  const prevIndex = (currentIndex - 1 + props.images.length) % props.images.length
  emit('update:image', props.images[prevIndex])
}
const nextItem = () => {
  const currentIndex = props.images.findIndex((image) => image.id === props.image.id)
  const nextIndex = (currentIndex + 1) % props.images.length
  emit('update:image', props.images[nextIndex])
}
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft') {
    prevItem()
  } else if (event.key === 'ArrowRight') {
    nextItem()
  } else if (event.key === 'Escape') {
    close()
  }
}
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
<style scoped>
.modal {
  position: fixed;
  right: 0;
  width: 40%;
  height: 100vh;
  background: #232323;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
  z-index: 900;
  border-radius: 1rem;
}
.modal-active .modal {
  transform: translateX(0);
}
.title {
  color: white;
  font-size: 1.2rem;
}
.description {
  color: white;
  font-size: 1.4rem;
}
.uses,
.details,
.categories,
.level {
  color: white;
  font-size: 1.2;
}
.modal-content {
  position: relative;
  padding: 20px;
}
.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.close,
.prev,
.next {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #9d9d9d;
  transition:
    transform 0.5s ease-in-out,
    color 0.5s ease;
}
.close:hover,
.prev:hover,
.next:hover {
  transform: scale(1.2);
  color: #c4c4c4;
}
.image-container {
  width: 100%;
  height: 300px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.small-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
