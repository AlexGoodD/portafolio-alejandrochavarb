<template>
  <div class="tw:relative tw:w-[40rem]">
    <div>
      <input
        type="text"
        v-model="query"
        @input="search"
        placeholder="Alejandro Chavarría..."
        :class="results.length ? 'tw:w-full tw:py-[0.8rem] tw:px-[1rem] tw:text-[16px] tw:border-none tw:rounded-t-3xl tw:bg-[var(--searchbar-search-input-background-color)] tw:text-[var(--searchbar-search-input-color)] tw:transition-colors tw:duration-200 search-input-shadow tw:hover:bg-[var(--searchbar-search-input-hover-background-color)]' : 'tw:w-full tw:py-[0.8rem] tw:px-[1rem] tw:text-[16px] tw:border-none tw:rounded-full tw:bg-[var(--searchbar-search-input-background-color)] tw:text-[var(--searchbar-search-input-color)] tw:transition-colors tw:duration-200 search-input-shadow tw:hover:bg-[var(--searchbar-search-input-hover-background-color)]'"
      />
      <i v-if="query"
         class="fa-solid fa-x tw:absolute tw:right-6 tw:top-1/2 tw:-translate-y-[50%] tw:text-sm tw:cursor-pointer tw:text-[var(--searchbar-search-input-color)] tw:opacity-50"
         @click="clearSearch"></i>
    </div>
    <ul v-if="results.length"
        class="tw:absolute tw:left-0 tw:w-full tw:list-none tw:m-0 tw:rounded-b-[1rem] tw:bg-[var(--searchbar-search-input-background-color)] tw:z-[999] tw:p-4 result-list-shadow">
      <li v-for="result in results" :key="result"
          class="tw:w-full tw:py-2 tw:text-[var(--searchbar-result-item-color)] tw:cursor-pointer tw:transition-colors tw:duration-200 tw:hover:text-[var(--searchbar-result-item-color-hover)]">
        <a :href="getResultLink(result)">{{ result }}</a>
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
  '¿Cómo contactar a Alejandro Chavarría?'
]
const search = () => {
  if (query.value) {
    results.value = allResults.filter((result) =>
      result.toLowerCase().includes(query.value.toLowerCase())
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

input {
  outline: none;
  display: flex;
}

.search-input-shadow, .result-list-shadow {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.258);
}

li a {
  color: inherit;
  text-decoration: none;
}

li :active {
  color: inherit;
}
</style>
