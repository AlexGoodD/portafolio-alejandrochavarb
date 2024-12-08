<template>
  <div>
    <nav class="footer">
      <p>© 2023 Tu Empresa. Todos los derechos reservados.</p>
    </nav>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  z-index: 1000;
}
.content {
  padding-bottom: 60px;
}
</style>
