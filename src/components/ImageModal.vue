<template>
  <div :class="['modal', { 'fixed-to-navbar': modalFixed }]">
    <div class="modal-content">
      <div class="action-buttons">
        <button class="prev" @click="prevItem"><i class="fas fa-chevron-left"></i></button>
        <button class="next" @click="nextItem"><i class="fas fa-chevron-right"></i></button>
        <button class="close relative" @click="close"><i class="fas fa-xmark"></i></button>
      </div>
      <div class="header">
        <p class="title">{{ props.image.title }}</p>
      </div>
      <div class="image-container">
        <img class="small-image" :src="props.image.src" :alt="props.image.title" />
      </div>
      <p class="description">{{ props.image.description }}</p>
      <p class="m-description">
        {{ descriptionText }}
        <strong
          ><RouterLink to="/Projects" class="m-description-router">
            {{ routerLinkText }}
          </RouterLink></strong
        >
      </p>
      <div class="categories">
        <li class="fas fa-tag" id="tag"></li>
        <span v-for="category in props.image.categories" :key="category" class="category"
          >{{ category }}
        </span>
      </div>
      <div class="more-buttons">
        <button class="share"><i class="fas fa-share-nodes"></i> {{ buttonShare }}</button>
        <button class="save"><i class="fas fa-bookmark"></i> {{ buttonSave }}</button>
      </div>
      <div class="project-grid-container">
        <ProjectGrid :technology="props.image.title" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed, watch } from 'vue'
import ProjectGrid from './ProjectGrid.vue'
import { imagesEs, imagesEn } from '../data/imageData'

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  images: {
    type: Array as () => { id: string; title: string; src: string; description: string }[],
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
})

const descriptionText = computed(() => {
  return props.language === 'es'
    ? 'Los proyectos los puedes visualizar a detalle en la'
    : 'You can view the projects in detail at'
})

const buttonShare = computed(() => {
  return props.language === 'es' ? 'Compartir' : 'Share'
})

const buttonSave = computed(() => {
  return props.language === 'es' ? 'Guardar' : 'Save'
})

const routerLinkText = computed(() => {
  return props.language === 'es' ? 'sección correspondiente' : 'corresponding section'
})

const translatedCategories = ref(props.image.categories)

watch(
  () => props.language,
  (newLang) => {
    const image =
      newLang === 'es'
        ? imagesEs.find((img) => img.id === props.image.id)
        : imagesEn.find((img) => img.id === props.image.id)
    if (image) {
      translatedCategories.value = image.categories
    }
  },
  { immediate: true },
)

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
const carouselVisible = ref(true)
const modalFixed = ref(false)
const handleScroll = () => {
  const carousel = document.querySelector('.carousel-container')
  if (carousel) {
    const rect = carousel.getBoundingClientRect()
    carouselVisible.value = rect.bottom > 0
  }
  modalFixed.value = window.scrollY > 84
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
.modal {
  position: fixed;
  top: 65%;
  right: 0;
  transform: translate(-50%, -50%);
  width: 45%;
  height: 70%;
  background: var(--image-modal-background-color);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: top 0.3s ease;
}
.header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.categories {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 1rem 0;
}
.category {
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  background-color: var(--image-modal-category-background-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #818181;
}
.modal-content {
  padding: 5%;
  flex-grow: 1;
  overflow-y: auto;
  max-height: 100%;
}
.modal.fixed-to-navbar {
  top: 50%;
  height: 90%;
}
.modal-active .modal {
  transform: translateY(-50%) translateX(0);
}
.project-grid-container {
  flex-grow: 1;
}
.title {
  color: var(--image-modal-title-color);
  font-size: 1rem;
}
#tag {
  color: #909090;
}
.description {
  color: var(--image-modal-description-color);
  font-size: 1.4rem;
  cursor: pointer;
}
.description:hover {
  text-decoration: underline;
}
.m-description,
.m-description-router {
  color: #818181;
  margin-top: -0.5rem;
  margin-bottom: rem;
  font-size: 0.8rem;
  text-decoration: none;
}
.m-description-router:hover {
  text-decoration: underline;
}
.uses,
.details,
.categories,
.level {
  color: white;
  font-size: 1.2rem;
}
.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  right: 10px;
  align-items: center;
}
.close {
  margin-left: 1rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #9d9d9d;
  transition: background-color 0.5s ease;
  position: absolute;
  background-color: var(--image-modal-close-background-color);
  border-radius: 1rem;
}
.close:hover {
  background-color: var(--image-modal-close-hover-background-color);
}
.prev,
.next {
  background: none;
  border: none;
  font-size: 0.8rem;
  cursor: pointer;
  color: #9d9d9d;
  transition:
    transform 0.5s ease-in-out,
    color 0.5s ease;
}
.next {
  margin-right: 5rem;
}
.prev:hover,
.next:hover {
  transform: scale(1.2);
  color: #c4c4c4;
}
.more-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.share,
.save {
  background-color: var(--image-modal-button-share-save-background-color);
  outline: none;
  border: none;
  padding: 0.7rem 5rem;
  border-radius: 1rem;
  color: var(--image-modal-button-share-save-color);
  font-size: 0.8rem;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.5s ease;
}
.share:hover,
.save:hover {
  background-color: var();
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
