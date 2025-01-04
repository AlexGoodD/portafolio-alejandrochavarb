<template>
  <div>
    <nav class="footer">
      <div class="footer-content">
        <div class="footer-searchs">
          <p id="text">{{ text1 }}</p>
          <p>-</p>
          <p id="resalt">{{ text2 }}</p>
        </div>
        <div class="footer-ubication">
          <p id="semibold">México</p>
          <p id="text">San Nicolás de los Garza, Nuevo Léon</p>
        </div>
        <div class="footer-extra" id="semibold">
          <ul>
            <li>{{ text3 }}</li>
            <li>{{ text4 }}</li>
            <li>{{ text5 }}</li>
            <li>{{ text6 }}</li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  language: {
    type: String,
    required: true,
  },
})

const text1 = computed(() => {
  return props.language === 'es'
    ? 'Los resultados están personalizados'
    : 'Results are personalized'
})

const text2 = computed(() => {
  return props.language === 'es' ? 'Probar sin personalización' : 'Try without customization'
})

const text3 = computed(() => {
  return props.language === 'es' ? 'Ayuda' : 'Help'
})

const text4 = computed(() => {
  return props.language === 'es' ? 'Enviar comentarios' : 'Send feedback'
})

const text5 = computed(() => {
  return props.language === 'es' ? 'Privacidad' : 'Privacy'
})

const text6 = computed(() => {
  return props.language === 'es' ? 'Condiciones' : 'Conditions'
})
</script>
<style scoped>
.footer {
  background-color: var(--footer-background-color);
  color: var(--footer-color);
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
  color: var(--footer-link-color);
  cursor: pointer;
}
#text {
  color: var(--footer-color);
}
</style>
