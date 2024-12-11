<template>
  <div class="project-section">
    <ProjectItem v-for="project in projects" :key="project.title" :project="project" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ProjectItem from './ProjectItem.vue'
import projectData from '../data/projectData'
const sortedProjects = projectData.sort((a, b) => b.year - a.year)
const projects = ref(sortedProjects)
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
    padding: 0rem 20rem 1rem 11rem;
  }
}

@media (max-width: 690px) {
  .project-section {
    padding: 1rem 20rem 0 0;
    justify-content: center;
  }
}
</style>
