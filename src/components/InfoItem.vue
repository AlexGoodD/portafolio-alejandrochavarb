<template>
  <div class="info-item">
    <h1 class="title">Desarrollador Front End, Diseñador Web Freelancer</h1>
    <ul class="search-results">
      <li class="result-item">21 años</li>
      <li class="result-item">Estudiante de Ingeniería en Tecnología de Software</li>
      <li class="result-item">Reside en Nuevo León, México</li>
      <li class="result-item">Proactivo</li>
      <li class="result-item">Autodidacta</li>
    </ul>
    <div class="site-info">
      <div class="site-preview">
        <!-- ** Agregar imagen aqui
        <img src="path/to/logo.png" alt="Logo" class="site-logo" />
        -->
        <div class="site-preview-info">
          <p class="site-shortname">Desarrolladores web</p>
          <p class="site-url">https://www.desarrolladoresweb.com > blog > Alejandro-Chavarria...</p>
        </div>
      </div>
      <p class="site-name">¿Quién es Alejandro Chavarría? - Desarrolladores web</p>
    </div>
    <hr />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.info-item {
  /* border: 1px solid #ccc; */
  margin-top: -1.5rem;
  padding: 1rem 14.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 40%;
  cursor: pointer;
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
