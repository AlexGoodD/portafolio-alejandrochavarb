<template>
  <div>
    <p class="info-search">{{ searchText }}</p>
    <ContactSection :language="props.language" />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import ContactSection from '../components/ContactSection.vue'
import { contactsEs } from '../data/contactData'

const props = defineProps({
  language: {
    type: String,
    required: true,
  },
})

const contactsCount = computed(() => {
  return contactsEs.length
})

const searchText = computed(() => {
  const count = contactsCount.value
  return props.language === 'es'
    ? `Cerca de ${count} resultados (0.14 segundos)`
    : `About ${count} results (0.14 seconds)`
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
