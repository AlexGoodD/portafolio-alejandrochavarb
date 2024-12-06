<template>
  <div>
    <nav class="navbar">
      <div class="navbar-content">
        <SearchBar />
        <ul class="navbar-menu">
          <li>
            <router-link to="/" active-class="active-link">
              <i class="fas fa-home"></i> Inicio
            </router-link>
          </li>
          <li class="item">
            <router-link to="/Technologies" active-class="active-link">
              <i class="fas fa-cogs"></i> Tecnologías
            </router-link>
          </li>
          <li>
            <router-link to="/Projects" active-class="active-link">
              <i class="fas fa-project-diagram"></i> Proyectos
            </router-link>
          </li>
          <li>
            <router-link to="/Contact" active-class="active-link">
              <i class="fas fa-envelope"></i> Contacto
            </router-link>
          </li>
          <li class="more-menu">
            <button @click="toggleMoreMenu"><i class="fas fa-ellipsis-v"></i> Más</button>
            <ul v-if="showMoreMenu" class="dropdown-menu">
              <li><router-link to="#item1">Item 1</router-link></li>
              <li><router-link to="#item2">Item 2</router-link></li>
              <li><router-link to="#item3">Item 3</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div class="content">
      <!-- Contenido de la página -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'

const showMoreMenu = ref(false)

const toggleMoreMenu = () => {
  showMoreMenu.value = !showMoreMenu.value
}
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  border-bottom: 1px solid #5a5a5a;
  color: white;
  display: flex;
  justify-content: left;
  align-items: left;
  padding: 10px 20px;
}

li .item {
  margin-right: 20px;
}

.navbar-content {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
}

.searchbar-container {
  width: 100%;
  max-width: 600px;
}

.navbar-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: left;
  align-items: left;
  width: 100%;
}

.navbar-menu li {
  margin: 0 10px;
  position: relative;
}

.navbar-menu li a,
.navbar-menu li button {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: left;
  padding: 10px;
  border-bottom: 2px solid transparent;
}

.navbar-menu li a:hover,
.navbar-menu li button:hover,
.navbar-menu li a.active-link {
  border-bottom: 2px solid white;
}

.more-menu .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #444;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid #5a5a5a;
  border-radius: 4px;
  z-index: 999;
}

.more-menu .dropdown-menu li {
  margin: 0;
}

.more-menu .dropdown-menu li a {
  color: white;
  padding: 10px;
  display: block;
  text-decoration: none;
}

.more-menu .dropdown-menu li a:hover {
  background-color: #555;
}
</style>
