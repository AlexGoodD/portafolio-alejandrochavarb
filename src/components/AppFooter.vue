<template>
  <div>
    <nav class="footer">
      <div class="footer-content">
        <div class="footer-searchs">
          <p id="text">Los resultados están personalizados</p>
          <p>-</p>
          <p id="resalt">Probar sin personalización</p>
        </div>
        <div class="footer-ubication">
          <p id="semibold">México</p>
          <p id="text">San Nicolás de los Garza, Nuevo Léon</p>
        </div>
        <div class="footer-extra" id="semibold">
          <ul>
            <li>Ayuda</li>
            <li>Enviar comentarios</li>
            <li>Privacidad</li>
            <li>Condiciones</li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.footer {
  background-color: #181818;
  color: white;
  text-align: left;
  padding: 1rem;
  z-index: 1000;
  width: 100%;
  position: relative;
  bottom: 0;
  margin-top: 10rem;
  transition: padding 0.5s ease;
}

@media (max-width: 1250px) {
  .footer {
    padding: 1rem 0;
  }
}

.footer-content {
  padding: 0 14rem;
  font-size: 0.9rem;
  transition: padding 0.5s ease;
}

@media (min-width: 1680px) {
  .footer-content {
    padding: 0 300px;
  }
}

@media (max-width: 1250px) {
  .footer-content {
    padding: 0 12rem;
  }
}

@media (max-width: 800px) {
  .footer-content {
    padding: 0 7rem;
  }
}

.footer-searchs {
  display: flex;
  gap: 0.5rem;
}
.footer-ubication {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.footer-extra {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.footer-extra ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-section {
  flex: 1;
}
#semibold {
  color: #9d9d9d;
}
.footer-extra li {
  transition: color 0.5s ease;
  cursor: pointer;
}
.footer-extra li:hover {
  color: #d0d0d0;
}
#resalt {
  color: #81acec;
  cursor: pointer;
}
#text {
  color: #cccccc;
}
</style>
