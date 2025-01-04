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
