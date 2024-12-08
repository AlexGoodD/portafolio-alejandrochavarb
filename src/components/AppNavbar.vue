<template>
  <div @click="handleClickOutside">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="search-bar">
          <SearchBar />
        </div>
        <ul class="navbar-menu">
          <div class="navbar-selector">
            <li>
              <router-link to="/" active-class="active-link">
                <i class="fas fa-home"></i> Inicio
              </router-link>
            </li>
            <li class="item">
              <router-link to="/Technologies" active-class="active-link">
                <i class="fa-solid fa-gear"></i> Tecnologías
              </router-link>
            </li>
            <li>
              <router-link to="/Projects" active-class="active-link">
                <i class="fa-solid fa-folder"></i> Proyectos
              </router-link>
            </li>
            <li>
              <router-link to="/Contact" active-class="active-link">
                <i class="fas fa-envelope"></i> Contacto
              </router-link>
            </li>
          </div>
          <li class="more-menu">
            <div class="dropdown-container" ref="dropdownMenu">
              <button @click="toggleMoreMenu"><i class="fas fa-ellipsis-v"></i> Más</button>
              <ul v-if="showMoreMenu" class="dropdown-menu">
                <li class="item1"><a href="/path/to/CV.pdf" download>Descargar CV en pdf</a></li>
                <li class="item2">
                  <a href="https://www.linkedin.com/in/alejandro-chavarb" target="_blank"
                    >LinkedIn</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="content"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SearchBar from './SearchBar.vue'
const showMoreMenu = ref(false)
const dropdownMenu = ref<HTMLElement | null>(null)
const toggleMoreMenu = () => {
  showMoreMenu.value = !showMoreMenu.value
}
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownMenu.value && !dropdownMenu.value.contains(event.target as Node)) {
    showMoreMenu.value = false
  }
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 2rem 5rem 1rem 5rem;
  border-bottom: 1px solid #ccc;
  color: white;
}
.content {
  padding-top: 10%;
}
.navbar-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.search-bar {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2%;
}
.navbar-menu {
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
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
  margin-right: 10px;
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
