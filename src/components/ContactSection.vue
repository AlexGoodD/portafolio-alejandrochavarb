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
}
</style>
