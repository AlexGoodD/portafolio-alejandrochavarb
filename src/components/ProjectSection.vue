<template>
  <div class="project-section">
    <ProjectItem v-for="project in sortedProjects" :key="project.title" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import ProjectItem from './ProjectItem.vue'
import { projectsEs, projectsEn } from '../data/projectsData'

const props = defineProps({
  language: {
    type: String,
    required: true,
  },
})

const projects = ref(projectsEs)

watch(
  () => props.language,
  (newLang) => {
    projects.value = newLang === 'es' ? projectsEs : projectsEn
  },
  { immediate: true },
)

const sortedProjects = computed(() => {
  return [...projects.value].sort((a, b) => b.year - a.year)
})
</script>

<style scoped>
.project-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 30rem 1rem 14rem;
  transition: padding 0.5s ease;
}

@media (max-width: 1439px) {
  .project-section {
    padding: 0rem 29rem 1rem 13rem;
  }
}

@media (max-width: 1165px) {
  .project-section {
    padding: 0rem 10rem 1rem 8rem;
  }
}

@media (max-width: 690px) {
  .project-section {
    justify-content: center;
    padding: 0;
    margin: 0;
  }
}
</style>
