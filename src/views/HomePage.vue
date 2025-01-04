<template>
  <div>
    <p class="info-search">{{ searchText }}</p>
    <InfoItem :language="props.language" />
    <QuestionSection :language="props.language" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import InfoItem from '../components/InfoItem.vue'
import QuestionSection from '../components/QuestionSection.vue'

const props = defineProps({
  language: {
    type: String,
    required: true,
  },
})

const searchText = computed(() => {
  return props.language === 'es'
    ? 'Cerca de 17,000 resultados (0.33 segundos)'
    : 'About 17,000 results (0.33 seconds)'
})
</script>

<style scoped>
.info-search {
  color: #9d9d9d;
  margin-bottom: 3rem;
  margin-left: 240px;
  transition:
    margin-left 0.5s ease,
    margin-right 0.5s ease,
    margin-top 0.5s ease;
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
