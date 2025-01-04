<template>
  <div class="info-item">
    <h1 class="title">{{ info.title }}</h1>
    <ul class="search-results">
      <li class="result-item" v-for="(detail, index) in info.details" :key="index">
        {{ detail }}
      </li>
    </ul>
    <div class="site-info">
      <div class="site-preview">
        <div class="site-preview-info">
          <p class="site-shortname">{{ info.siteInfo.shortname }}</p>
          <p class="site-url">{{ info.siteInfo.url }}</p>
        </div>
      </div>
      <p class="site-name">{{ info.siteInfo.name }}</p>
    </div>
    <hr />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { infoEs, infoEn } from '../data/infoData'
const props = defineProps({
  language: {
    type: String,
    required: true,
  },
})
const info = ref(infoEs)
watch(
  () => props.language,
  (newLang) => {
    info.value = newLang === 'es' ? infoEs : infoEn
  },
  { immediate: true },
)
</script>
<style scoped>
.info-item {
  margin-top: -1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 240px;
  margin-right: auto;
  width: 40%;
  cursor: pointer;
  transition:
    padding 0.5s ease,
    margin-left 0.5s ease,
    margin-right 0.5s ease,
    width 0.5s ease;
}
@media (min-width: 1680px) {
  .info-item {
    width: 600px;
  }
}
@media (max-width: 830px) {
  .info-item {
    width: 60%;
    margin-left: 155px;
  }
}
@media (max-width: 650px) {
  .info-item {
    width: 60%;
    margin-left: 80px;
  }
}
.title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #d9d9d9;
}
.search-results {
  list-style-type: disc;
  padding: 0 1.2rem;
  color: #d9d9d9;
}
.result-item {
  font-size: 1.25rem;
  margin: 5px 0;
}
.site-shortname {
  font-size: 1.2rem;
  color: #fff;
}
.site-url {
  margin-top: -1rem;
  color: #d2d2d2;
}
.site-name {
  margin-top: -0.5rem;
  padding: 0;
  font-size: 1.4rem;
  color: #81acec;
}
.site-name:hover {
  text-decoration: underline;
}
hr {
  margin-top: -1rem;
  color: #5a5a5a;
  opacity: 0.5;
}
</style>
