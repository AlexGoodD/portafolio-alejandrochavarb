<template>
  <div class="project-item" @click="goToRepo">
    <div class="project-details">
      <h3>
        <span
          v-if="
            props.project.isOnline &&
            (props.project.tags.includes('Desarrollo web') ||
              props.project.tags.includes('Web Development'))
          "
          class="icon"
        >
          <i class="fas fa-globe"></i>
        </span>
        <span
          v-if="
            props.project.isOnline &&
            (props.project.tags.includes('Desarrollo móvil') ||
              props.project.tags.includes('Mobile Development'))
          "
          class="icon"
        >
          <i class="fas fa-store"></i>
        </span>
        {{ props.project.title }}
      </h3>
      <p class="description">{{ props.project.description }}</p>
      <p class="year">{{ props.project.year }}</p>
      <div class="info-technologies">
        <li class="fas fa-tag"></li>
        <div class="technologies">
          <span v-for="tech in props.project.technologies" :key="tech" class="technology">{{
            tech
          }}</span>
        </div>
      </div>
    </div>
    <div class="image-container">
      <img :src="project.smallImage" alt="Project Image" class="project-image" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})
const goToRepo = () => {
  window.open(props.project.repoURL, '_blank')
}
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
.project-item {
  padding: 0 1rem;
  margin: 16px 0;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.5s ease;
  overflow: hidden;
}
.project-item:hover {
  transform: scale(1.02);
}
.image-container {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.technologies {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: #909090;
  font-size: 0.8rem;
  overflow-x: auto;
  min-width: 100%; /* Asegura que tenga al menos el ancho del contenedor padre */
  white-space: nowrap;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.technologies::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.info-technologies {
  color: #909090;
  width: 100%; /* o auto, según sea necesario */
  align-items: center;
  display: inline-flex;
}

.info-technologies li {
  margin-top: 10px;
  margin-right: 10px;
}

@media (max-width: 800px) {
  .description {
    display: list-item;
  }

  .info-technologies {
    display: none;
  }
}

@media (max-width: 1165px) {
  .description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
}

@media (max-width: 690px) {
  .project-item {
    flex-direction: column;
    padding: 0;
  }
  .description {
    display: flex;
  }
}

.technology {
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  background-color: #2e2e2e;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
img {
  transition: transform 0.5s ease;
}
img:hover {
  transform: scale(1.1);
}
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-details {
  text-align: left;
  flex: 1;
  max-width: calc(100% - 132px);
}
.project-details h3 {
  font-size: 1rem;
  color: #81acec;
}
.description {
  color: #c5c3c3;
}
.year {
  color: #909090;
}
</style>
