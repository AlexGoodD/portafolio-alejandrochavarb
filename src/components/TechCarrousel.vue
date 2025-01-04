<template>
  <div
    :class="[
      'carousel-container',
      { 'no-left-shadow': !showLeftButton, 'no-right-shadow': !showRightButton },
    ]"
  >
    <button v-if="showLeftButton" class="scroll-button left" @click="scrollLeft">
      <i class="fas fa-chevron-left"></i>
    </button>
    <div class="carousel" ref="carousel" @scroll="updateScrollPositions">
      <div
        v-for="item in items"
        :key="item.id"
        :class="{ 'has-url': item.url }"
        class="carousel-item"
        @click="handleItemClick(item)"
      >
        <img v-if="item.image" :src="item.image" class="carousel-image" />
        <div :class="['carousel-text', { 'no-image': !item.image }]">
          {{ item.text }}
        </div>
      </div>
    </div>
    <button v-if="showRightButton" class="scroll-button right" @click="scrollRight">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { itemsEs, itemsEn } from '../data/techData'

const props = defineProps({
  language: {
    type: String,
    required: true,
  },
})

const items = ref(itemsEs)
const carousel = ref<HTMLElement | null>(null)
const currentScrollPosition = ref(0)
const maxScrollPosition = ref(0)

watch(
  () => props.language,
  (newLang) => {
    items.value = newLang === 'es' ? itemsEs : itemsEn
  },
  { immediate: true },
)

const updateScrollPositions = () => {
  if (carousel.value) {
    currentScrollPosition.value = carousel.value.scrollLeft
    maxScrollPosition.value = carousel.value.scrollWidth - carousel.value.clientWidth
  }
}
const scrollLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -200, behavior: 'smooth' })
  }
}
const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: 200, behavior: 'smooth' })
  }
}
const showLeftButton = computed(() => currentScrollPosition.value > 0)
const showRightButton = computed(() => currentScrollPosition.value < maxScrollPosition.value)
const handleItemClick = (item: { url?: string }) => {
  if (item.url) {
    window.open(item.url, '_blank')
  }
}

onMounted(() => {
  if (carousel.value) {
    carousel.value.addEventListener('scroll', updateScrollPositions)
    updateScrollPositions()
  }
})
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  overflow: hidden;
}
.carousel {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel-item {
  flex: 0 0 auto;
  width: 210px;
  height: 60px;
  margin-right: 10px;
  border-radius: 1rem;
  border: 2px solid #5a5a5a;
  background-color: #232323;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: default;
}

.carousel-item.has-url {
  cursor: pointer;
}

.carousel-image {
  width: 30%;
  height: 100%;
  border-radius: 1rem 0 0 1rem;
  object-fit: cover;
  margin-right: 10px;
}
.carousel-text {
  flex: 1;
  text-align: center;
  padding: 10px;
}
.carousel-text.no-image {
  text-align: center;
  margin: auto;
}
.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  padding: 1rem;
  cursor: pointer;
  border-radius: 2rem;
  z-index: 2;
  transition: background-color 0.5s ease;
}
.scroll-button:hover {
  background-color: #3e3f42ae;
}
.scroll-button.left {
  left: 0;
}
.scroll-button.right {
  right: 0;
}
.carousel-container::before,
.carousel-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 150px;
  pointer-events: none;
  z-index: 1;
  opacity: 1;
  transition: opacity 0.3s ease;
}
.carousel-container.no-left-shadow::before {
  opacity: 0;
}
.carousel-container.no-right-shadow::after {
  opacity: 0;
}
.carousel-container::before {
  left: 0;
  background: linear-gradient(to right, rgba(35, 35, 35, 1), rgba(35, 35, 35, 0));
}
.carousel-container::after {
  right: 0;
  background: linear-gradient(to left, rgba(35, 35, 35, 1), rgba(35, 35, 35, 0));
}
</style>
