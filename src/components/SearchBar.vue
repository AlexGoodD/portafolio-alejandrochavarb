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
const query = ref('')
const results = ref<string[]>([])
const allResults = [
  '¿Alejandro Chavarría quién es?',
  '¿Que tecnologías usa Alejandro Chavarría?',
  'Proyectos de Alejandro Chavarría',
  '¿Cómo contactar a Alejandro Chavarría?',
]
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
  position: relative;
  width: 100%;
  max-width: 50%;
}
input {
  outline: none;
}
.search-input {
  width: 100%;
  padding: 1rem;
  font-size: 16px;
  border: none;
  border-radius: 2rem;
  background-color: #383838;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.258);
}
.search-input:hover {
  background-color: #505050;
  transition: background-color 0.2s;
}
.results-list {
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 100%;
  left: 0;
  width: 104%;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 0 0 1rem 1rem;
  background: #383838;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.258);
}
.result-item {
  padding: 10px;
  color: #dddddd;
  border-top: 1px solid #505050;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
}
.result-item:hover {
  background-color: #505050;
  color: #ffffff;
}
</style>
