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
    title: '¿Dónde puedo descargar el CV de Alejandro Chavarría?',
    answer: 'Aquí está el enlace al CV: https://alejandro-chavarria.github.io/cv/CV.pdf',
  },
  {
    title: '¿Qué herramientas se utilizaron para la creación de este portafolio?',
    answer: 'Se usaron tecnologías como Vue.js, TypeScript y Vite.',
  },
  {
    title: '¿Por donde puedo contactar a Alejandro Chavarría?',
    answer:
      'Puedes contactar a Alejandro Chavarría a través de LinkedIn: https://www.linkedin.com/in/alejandro-chavarb',
  },
])
</script>
<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
.question-section {
  padding: 1rem 14rem;
  width: 45%;
  margin-top: 1rem;
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
