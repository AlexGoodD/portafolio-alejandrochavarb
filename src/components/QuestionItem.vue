<template>
  <div class="question-item">
    <div class="question-title" @click="toggleAnswer">
      <span>{{ props.title }}</span>
      <i :class="{ rotated: isOpen }" class="fas fa-chevron-down"></i>
    </div>
    <div
      ref="answerContainer"
      class="question-answer"
      :style="{ maxHeight: isOpen ? contentHeight + 'px' : '0' }"
    >
      <p v-html="props.answer" :class="{ 'slide-in': isOpen, 'slide-out': !isOpen }"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
})

const isOpen = ref(false)
const contentHeight = ref(0)
const answerContainer = ref<HTMLDivElement | null>(null)

function toggleAnswer() {
  isOpen.value = !isOpen.value
  nextTick(() => {
    if (answerContainer.value) {
      contentHeight.value = answerContainer.value.scrollHeight
    }
  })
}

onMounted(() => {
  if (answerContainer.value) {
    contentHeight.value = answerContainer.value.scrollHeight
  }
})
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';

.question-item {
  margin-bottom: 10px;
  overflow: hidden;
  transition: border 0.5s ease;
  border-bottom: 1px solid #5a5a5a;
}

.question-title {
  padding: 1rem 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d2d2d2;
}

.question-answer {
  padding: 0 0.5rem;
  color: #e5e5e5;
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.5s ease,
    padding 0.5s ease;
}

.fas {
  transition:
    transform 0.5s ease,
    color 0.5s ease,
    background-color 0.5s ease;
  transform: rotate(0deg);
  color: #d2d2d2;
  padding: 5px;
  border-radius: 1rem;
  background-color: #2d2c32;
}

.fas:hover {
  background-color: #39383f;
  color: #ebebeb;
}

.rotated {
  transform: rotate(180deg);
}

/* Animaciones para las respuestas */
.slide-in {
  transform: translateY(-5px);
  opacity: 1;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}

.slide-out {
  transform: translateY(-50px);
  opacity: 0;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}
</style>
