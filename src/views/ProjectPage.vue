<template>
  <div>
    <p class="info-search">{{ searchText }}</p>
    <ProjectSection :language="props.language" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProjectSection from '../components/ProjectSection.vue'
import { projectsEs } from '../data/projectsData'

const props = defineProps({
  language: {
    type: String,
    required: true,
  },
})

const projectsCount = computed(() => {
  return projectsEs.length
})

const searchText = computed(() => {
  const count = projectsCount.value
  return props.language === 'es'
    ? `Cerca de ${count} resultados (0.33 segundos)`
    : `About ${count} results (0.33 seconds)`
})
</script>

<style scoped>
.info-search {
  color: #9d9d9d;
  margin-left: 240px;

  transition: all 0.5s ease;
}

@media (max-width: 830px) {
  .info-search {
    margin-left: 155px;
  }
}
@media (max-width: 650px) {
  .info-search {
    margin-left: 75px;
  }
}
</style>
