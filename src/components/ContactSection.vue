<template>
  <div class="contact-section">
    <ContactItem v-for="contact in contacts" :key="contact.title" :contact="contact" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ContactItem from './ContactItem.vue'
import contactData from '../data/contactData'
const sortedContacts = contactData.sort((a, b) => b.year - a.year)
const contacts = ref(sortedContacts)
</script>
<style scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 1rem 30rem 1rem 14rem;
  transition: padding 0.5s ease;
}

@media (min-width: 2560px) {
  .contact-section {
    padding: 0rem 0rem 0 350px;
  }
}

@media (min-width: 1440px) {
  .contact-section {
    padding: 0rem 0rem 0 15rem;
  }
}

@media (max-width: 1239px) {
  .contact-section {
    padding: 0rem 29rem 1rem 13rem;
  }
}

@media (max-width: 1165px) {
  .contact-section {
    padding: 1rem 8rem;
  }
}

@media (max-width: 690px) {
  .contact-section {
    justify-content: center;
    padding: 0;
  }
}
</style>
