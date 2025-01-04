<template>
  <div :class="['image-item', { selected: selected }]" @click="$emit('click')">
    <div class="image-container">
      <img :src="image.src" :alt="image.title" />
    </div>
    <div class="image-info">
      <p class="title">{{ props.image.title }}</p>
      <p class="description">{{ props.image.description }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
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
  transition: box-shadow 0.5s ease;
}
.image-item:hover {
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
}
.image-item.selected {
  border-color: rgb(176, 199, 255);
  background-color: var(--image-item-selected-background-color);
}
.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--image-item-image-container-background-color);
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
.title {
  font-size: 0.8rem;
  color: #818181;
  margin-bottom: -0.8rem;
}
.description {
  font-size: 0.9rem;
  color: var(--image-item-description-color);
}
</style>
