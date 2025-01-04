<template>
  <div>
    <Navbar @language-changed="handleLanguageChange" />
    <main class="main-content">
      <router-view :language="language" />
    </main>
    <Footer :language="language" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/AppNavbar.vue'
import Footer from './components/AppFooter.vue'

const language = ref('es')

const handleLanguageChange = (newLang: string) => {
  language.value = newLang
}
</script>
