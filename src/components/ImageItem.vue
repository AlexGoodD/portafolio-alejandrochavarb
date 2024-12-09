<template>
  <div :class="['image-item', { selected: selected }]" @click="$emit('click')">
    <div class="image-container">
      <img :src="image.src" :alt="image.title" />
    </div>
    <div class="image-title">
      <p>{{ props.image.title }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: '',
  },
})
</script>
<style scoped>
.image-item {
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  padding: 0.5rem;
  border-radius: 1rem;
}
.image-item.selected {
  border-color: rgb(176, 199, 255);
  background-color: rgba(51, 78, 107, 0.511);
}
.image-item p {
  transition: color 0.3s ease;
}
.image-item p:hover {
  color: #a8a8a8;
}
.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: #282828;
}
.image-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.2s;
}
.image-item img:hover {
  transform: scale(1.01);
}
.image-title {
  color: #818181;
}
</style>
