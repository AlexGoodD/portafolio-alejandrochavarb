<template>
  <div @click="handleClickOutside">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="top-bar">
          <img src="../assets/Googol.svg" alt="Logo" class="site-logo" />
          <SearchBar />
          <div class="navbar-buttons">
            <li>
              <button @click="toggleTheme" class="theme-button">
                <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
              </button>
            </li>
            <li>
              <button @click="toggleLanguage" class="language-button">
                {{ language === 'es' ? 'EN' : 'ES' }}
              </button>
            </li>
          </div>
        </div>
        <ul class="navbar-menu">
          <div class="navbar-selector">
            <li>
              <router-link to="/" active-class="active-link">
                <i class="fas fa-home"></i> {{ translations.home }}
              </router-link>
            </li>
            <li class="item">
              <router-link to="/Technologies" active-class="active-link">
                <i class="fa-solid fa-gear"></i> {{ translations.technologies }}
              </router-link>
            </li>
            <li>
              <router-link to="/Projects" active-class="active-link">
                <i class="fa-solid fa-folder"></i> {{ translations.projects }}
              </router-link>
            </li>
            <li>
              <router-link to="/Contact" active-class="active-link">
                <i class="fas fa-envelope"></i> {{ translations.contact }}
              </router-link>
            </li>
          </div>
          <li class="more-menu">
            <div class="dropdown-container" ref="dropdownMenu">
              <button @click="toggleMoreMenu">
                <i class="fas fa-ellipsis-v"></i> {{ translations.more }}
              </button>
              <ul v-if="showMoreMenu" class="dropdown-menu">
                <li class="item1">
                  <a :href="cvLink" download>{{ translations.downloadCV }}</a>
                </li>
                <li class="item2">
                  <a href="https://www.linkedin.com/in/alejandro-chavarb" target="_blank">{{
                    translations.visitLinkedIn
                  }}</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import SearchBar from './SearchBar.vue'

const showMoreMenu = ref(false)
const dropdownMenu = ref<HTMLElement | null>(null)
const theme = ref('dark')
const language = ref('es')
import { navbarEs, navbarEn } from '../data/navbarData'

const translations = computed(() => {
  return language.value === 'es' ? navbarEs : navbarEn
})

const cvLink = computed(() => {
  return language.value === 'es'
    ? 'src/assets/Alejandro_Chavarria_CV.pdf'
    : 'src/assets/Alejandro_Chavarria_CV-En.pdf'
})

const toggleMoreMenu = () => {
  showMoreMenu.value = !showMoreMenu.value
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownMenu.value && !dropdownMenu.value.contains(event.target as Node)) {
    showMoreMenu.value = false
  }
}

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
}

const emit = defineEmits(['language-changed'])

const toggleLanguage = () => {
  language.value = language.value === 'es' ? 'en' : 'es'
  emit('language-changed', language.value)
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
.navbar {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 94%;
  z-index: 1000;
  padding: 2rem 3rem 1rem 3rem;
  border-bottom: 1px solid #5a5a5a;
  color: white;
  background-color: #232323;
  transition: padding 0.5s ease;
}
.site-logo {
  width: 150px;
  height: 50px;
  margin-top: 0.5rem;
  transition: all 0.5s ease;
}
@media (max-width: 830px) {
  .site-logo {
    width: 80px;
    height: 100%;
  }
}
.navbar-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.top-bar {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2%;
  gap: 2%;
}
.navbar-menu {
  margin: 0;
  padding: 0 0 0 160px;
  display: flex;
  list-style-type: none;
  transition: padding 0.5s ease;
}

li {
  list-style: none;
}

.navbar-buttons {
  margin-left: auto;
  margin-right: 30px;
  z-index: 1000;
  display: flex;
  gap: 15px;
}

.theme-button,
.language-button {
  background: none;
  border: none;
  color: #9d9d9d;
  cursor: pointer;
  font-size: 17px;
}

.navbar-selector {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.navbar-selector li {
  margin-left: 30px;
}
.more-menu {
  margin-left: 50px;
}
.navbar-menu li a {
  color: #9d9d9d;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.2s;
  padding: 15px 0;
}
.navbar-selector li a i {
  margin-right: 0.3rem;
}
.navbar-menu li a:hover {
  color: #d0d0d0;
}
.navbar-menu li a.active-link {
  color: #81acec;
}
.active-link {
  color: #81acec;
  border-bottom: 3px solid #81acec;
}
.more-menu .dropdown-container {
  position: relative;
}
.more-menu button {
  background: none;
  border: none;
  color: #9d9d9d;
  cursor: pointer;
  font-size: 14px;
}
.more-menu .dropdown-menu {
  position: absolute;
  top: 150%;
  left: 0;
  background-color: #232323;
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.258);
  border-radius: 1rem;
  z-index: 700;
  width: 10vw;
  margin-left: 0;
}
.more-menu .dropdown-menu li a {
  color: #9d9d9d;
  padding: 10px 20px;
  display: block;
  text-decoration: none;
  font-size: 14px;
  transition:
    background-color 0.2s,
    color 0.2s;
}
.dropdown-menu li a:hover {
  color: #d0d0d0;
}
</style>
