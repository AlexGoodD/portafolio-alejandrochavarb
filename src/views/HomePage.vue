<template>
  <div>
    <p class="info-search">Cerca de 17,000 resultados (0.33 segundos)</p>
    <InfoItem />
    <QuestionSection />
  </div>
</template>

<script setup lang="ts">
import InfoItem from '../components/InfoItem.vue'
import QuestionSection from '../components/QuestionSection.vue'
</script>

<style scoped>
.info-search {
  color: #9d9d9d;
  padding: 0rem 14.5rem;
}
</style>
