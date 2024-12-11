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
  margin-bottom: 3rem;
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
