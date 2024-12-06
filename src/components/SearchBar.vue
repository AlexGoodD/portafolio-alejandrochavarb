<template>
  <div class="searchbar-container">
    <input
      type="text"
      v-model="query"
      @input="search"
      placeholder="Buscar en Google"
      class="search-input"
    />
    <ul v-if="results.length" class="results-list">
      <li v-for="result in results" :key="result" class="result-item">
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Variables reactivas
const query = ref('')
const results = ref<string[]>([])
const allResults = [
  '¿Alejandro Chavarría quién es?',
  '¿Que tecnologías usa Alejandro Chavarría?',
  'Proyectos de Alejandro Chavarría',
  '¿Cómo contactar a Alejandro Chavarría?',
]

// Método de búsqueda
const search = () => {
  if (query.value) {
    results.value = allResults.filter((result) =>
      result.toLowerCase().includes(query.value.toLowerCase()),
    )
  } else {
    results.value = []
  }
}
</script>

<style scoped>
.searchbar-container {
  position: relative; /* Añadir posición relativa */
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.search-input {
  width: 100%;
  padding: 1rem;
  font-size: 16px;
  border: none;
  border-radius: 2rem;
  background-color: #383838;
}

.results-list {
  position: absolute; /* Añadir posición absoluta */
  top: 60%;
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  z-index: 999;
}

.result-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  color: #333;
}

.result-item:last-child {
  border-bottom: none;
}
</style>
