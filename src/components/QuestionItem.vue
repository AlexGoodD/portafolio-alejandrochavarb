<template>
  <div class="question-item">
    <div class="question-title" @click="toggleAnswer">
      <span>{{ props.title }}</span>
      <i :class="{ rotated: isOpen }" class="fas fa-chevron-down"></i>
    </div>
    <div v-if="isOpen" class="question-answer">
      <p>{{ props.answer }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
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
function toggleAnswer() {
  isOpen.value = !isOpen.value
}
</script>
<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
.question-item {
  margin-bottom: 10px;
  overflow: hidden;
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
}
.fas {
  transition:
    transform 0.5s ease,
    color 0.5s ease;
  transform: rotate(0deg);
  color: #d2d2d2;
}
.fas:hover {
  color: #ebebeb;
}
.rotated {
  transform: rotate(180deg);
}
</style>
