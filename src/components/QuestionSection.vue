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
import { ref, watch } from 'vue'
import QuestionItem from '../components/QuestionItem.vue'
import { questionsEs, questionsEn } from '../data/questionData'

const props = defineProps({
  language: {
    type: String,
    required: true,
  },
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

/*

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
  */

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
