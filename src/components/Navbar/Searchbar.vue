<template>
  <div class="searchbar-container">
    <div class="search-input-wrapper">
      <input
          type="text"
          v-model="query"
          @input="search"
          placeholder="Alejandro Chavarría..."
          :class="results.length ? 'search-input results-open' : 'search-input'"
      />
      <i v-if="query" class="fa-solid fa-x clear-icon" @click="clearSearch"></i>
    </div>
    <ul v-if="results.length" class="results-list">
      <li v-for="result in results" :key="result" class="result-item">
        <a :href="getResultLink(result)">{{ result }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

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
const clearSearch = () => {
  query.value = ''
  results.value = []
}
const getResultLink = (result: string) => {
  switch (result) {
    case '¿Alejandro Chavarría quién es?':
      return '/'
    case '¿Que tecnologías usa Alejandro Chavarría?':
      return '/Technologies'
    case 'Proyectos de Alejandro Chavarría':
      return '/Projects'
    case '¿Cómo contactar a Alejandro Chavarría?':
      return '/Contact'
    default:
      return '#'
  }
}
</script>
<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';

.searchbar-container {
  position: relative;
  width: 50%;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

input {
  outline: none;
  display: flex;
}

.search-input {
  width: 100%;
  padding: 1rem;
  font-size: 16px;
  border: none;
  border-radius: 2rem;
  //background-color: var(--searchbar-search-input-background-color);
  //color: var(--searchbar-search-input-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.258);
  transition: background-color 0.2s;
}

.search-input:hover {
  //background-color: var(--searchbar-search-input-hover-background-color);
}

.clear-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: small;
  cursor: pointer;
  //color: var(--searchbar-search-input-color);
  opacity: 0.5;
}

.results-open {
  border-radius: 2rem 2rem 0 0;
}

.results-list {
  position: absolute;
  left: 0;
  width: 100%;
  list-style: none;
  margin: 0;
  border-radius: 0 0 1rem 1rem;
  //background: var(--searchbar-search-input-background-color);
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.258);
  padding: 1rem;
}

.result-item {
  padding: 0.5rem 0;
  width: 100%;
  //color: var(--searchbar-result-item-color);
  cursor: pointer;
  transition: background-color 0.2s,
  color 0.2s;
}

.result-item:hover {
  color: #ffffff;
}

li a {
  color: inherit;
  text-decoration: none;
}

li :active {
  color: inherit;
}
</style>
