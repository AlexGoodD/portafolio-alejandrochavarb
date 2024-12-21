<template>
  <div class="question-section">
    <div class="question-title">
      <h1>Más preguntas</h1>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    <QuestionItem
      v-for="(question, index) in questions"
      :key="index"
      :title="question.title"
      :answer="question.answer"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import QuestionItem from '../components/QuestionItem.vue'
const questions = ref([
  {
    title: '¿Dónde puedo ver el CV de Alejandro Chavarría?',
    answer:
      'Aquí está el enlace al CV: <a href="https://drive.google.com/file/d/1xw2PsbmsAQ_oiippHu81JCbQ9S7VvwNl/view?usp=share_link" target="_blank">CV de Alejandro Chavarria</a>',
  },
  {
    title: '¿Qué herramientas se utilizaron para la creación de este portafolio?',
    answer: 'Se usaron Vue.js con TypeScript, Vite, imgbb API',
  },
  {
    title: '¿Por donde puedo contactar a Alejandro Chavarría?',
    answer:
      'A través de LinkedIn: <a href="https://www.linkedin.com/in/alejandro-chavarb" target="_blank">Alejandro Chavarria</a>',
  },
  {
    title: '¿Qué tipo de proyectos desarrolla Alejandro Chavarría?',
    answer:
      'Alejandro se especializa en proyectos web responsivos, aplicaciones de una sola página (SPA) y plataformas dinámicas',
  },
  {
    title: '¿Dónde puedo encontrar el repositorio del código de este portafolio?',
    answer:
      'El código fuente del portafolio está disponible en GitHub: <a href="https://github.com/AlexGoodD/portafolio-alejandrochavarb" target="_blank">Repositorio de este portafolio</a>',
  },
  {
    title: '¿Cuáles son los proyectos más destacados de Alejandro Chavarría?',
    answer:
      'MoonHike, UanLog, CowTrack. Puedes consultar mas proyectos destacados en la sección de proyectos de este portafolio',
  },
  {
    title: '¿Alejandro Chavarría ofrece servicios freelance?',
    answer:
      'Sí, Alejandro está disponible para proyectos freelance. Puedes contactarlo directamente a través de <a href="https://www.linkedin.com/in/alejandro-chavarb" target="_blank">LinkedIn</a> o <a href="mailto:alejandrochavarb@gmail.com">correo electrónico</a>',
  },
])
</script>
<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
.question-section {
  padding: 1rem 14rem;
  width: 45%;
  margin-top: 1rem;
  transition:
    padding 0.5s ease,
    width 0.5s ease,
    margin-top 0.5s ease;
}

@media (min-width: 1680px) {
  .question-section {
    width: 850px;
    padding: 1rem 13.5%;
  }
}

@media (min-width: 901px) and (max-width: 1679px) {
  .question-section {
    width: 45%;
    padding: 1rem 15%;
  }
}

@media (min-width: 826px) and (max-width: 900px) {
  .question-section {
    width: 70%;
    padding: 1rem 19%;
  }
}

@media (max-width: 825px) {
  .question-section {
    width: 73%;
    padding: 1rem 14%;
  }
}

.question-title {
  display: flex;
  align-items: center;
  color: #d2d2d2;
  font-size: 0.7rem;
  margin: 0;
  padding: 0 0.5rem;
  border-bottom: 1px solid #5a5a5a;
}
.question-title i {
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: 1.5rem;
}
</style>
