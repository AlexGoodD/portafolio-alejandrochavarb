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
  transition:
    margin-left 0.5s ease,
    margin-right 0.5s ease,
    margin-top 0.5s ease;
}

@media (min-width: 1680px) {
  .info-search {
    margin-left: 14%;
  }
}

@media (min-width: 901px) and (max-width: 1679px) {
  .info-search {
    margin-left: 16%;
  }
}

@media (min-width: 826px) and (max-width: 900px) {
  .info-search {
    margin-left: 20%;
  }
}

@media (max-width: 825px) {
  .info-search {
    margin-left: 15%;
    margin-right: auto;
  }
}
</style>
