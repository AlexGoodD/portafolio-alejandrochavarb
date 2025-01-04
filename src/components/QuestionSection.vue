<template>
  <div class="question-section">
    <div class="question-title">
      <h1>{{ questionsTitle }}</h1>
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
import { ref, watch, computed } from 'vue'
import QuestionItem from '../components/QuestionItem.vue'
import { questionsEs, questionsEn } from '../data/questionData'
const props = defineProps({
  language: {
    type: String,
    required: true,
  },
})

const questionsTitle = computed(() => {
  return props.language === 'es' ? 'Mas preguntas' : 'More questions'
})

const questions = ref(questionsEs)
watch(
  () => props.language,
  (newLang) => {
    questions.value = newLang === 'es' ? questionsEs : questionsEn
  },
  { immediate: true },
)
</script>
<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
.question-section {
  padding: 1rem 0;
  width: 45%;
  margin-top: 1rem;
  margin-left: 230px;
  transition: all 0.5s ease;
}
@media (max-width: 830px) {
  .question-section {
    width: 70%;
    margin-left: 145px;
  }
}
@media (max-width: 650px) {
  .question-section {
    width: 70%;
    margin-left: 70px;
  }
}
.question-title {
  display: flex;
  align-items: center;
  color: #d2d2d2;
  font-size: 0.7rem;
  margin: 0;
  padding: 0 0.5rem;
  border-bottom: 1px solid var(--question-title-border-bottom);
}
.question-title i {
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: 1.5rem;
  color: var(--question-title-h1-color);
}
.question-title h1 {
  color: var(--question-title-h1-color);
}
</style>
