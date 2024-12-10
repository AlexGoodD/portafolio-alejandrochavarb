<template>
  <div class="project-grid">
    <div
      v-for="project in filteredProjects"
      :key="project.title"
      class="project-item"
      @click="goToRepo(project.repoURL)"
    >
      <img :src="project.smallImage" :alt="project.title" class="project-image" />
      <p class="project-title">{{ project.title }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'
import projectData from '../data/projectData'
const props = defineProps({
  technology: {
    type: String,
    required: true,
  },
})
const filteredProjects = computed(() =>
  projectData.filter((project) => project.technologies.includes(props.technology)),
)
const goToRepo = (url: string) => {
  window.open(url, '_blank')
}
</script>
<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 2rem;
}
.project-item {
  cursor: pointer;
  text-align: center;
}
.project-image {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}
.project-image:hover {
  transform: scale(1.05);
}
.project-title {
  text-align: left;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #d2d2d2;
}
</style>
