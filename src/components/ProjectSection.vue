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
  padding: 1rem 30rem 1rem 14rem;
}
</style>
