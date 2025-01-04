<template>
  <div class="contact-item" @click="goToContact">
    <div class="image-container">
      <img :src="props.contact.smallImage" alt="Contact Image" class="contact-image" />
    </div>
    <div class="contact-details">
      <h3>{{ props.contact.title }}</h3>
      <p class="description">{{ props.contact.description }}</p>
      <div class="social-media">
        <span class="site">{{ props.contact.socialMedia }}</span>
        <span class="dot" id="dot-1"></span>
        <span class="user">{{ props.contact.userName }}</span>
        <span class="dot" id="dot-2"></span>
        <span class="month-year">{{ props.contact.month }} {{ props.contact.year }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
})
const goToContact = () => {
  window.open(props.contact.URL, '_blank')
}
</script>
<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
.contact-item {
  padding: 0;
  margin: 16px 0;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.5s ease;
}
.contact-item:hover {
  transform: scale(1.02);
}
.image-container {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.social-media {
  display: flex;
  align-items: center;
  gap: 1px;
  margin-top: 8px;
  color: #909090;
  font-size: 0.8rem;
}
.social {
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  background-color: #2e2e2e;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.site {
  color: var(--contact-item-contact-site-color);
}
.dot::before {
  content: '•';
  margin: 0 8px;
  color: #909090;
}
img {
  transition: transform 0.5s ease;
}
img:hover {
  transform: scale(1.1);
}
.contact-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.contact-details {
  text-align: left;
  flex: 1;
  max-width: calc(100% - 132px);
}
.contact-details h3 {
  font-size: 1rem;
  color: var(--conact-item-contact-details-h3-color);
}
.description {
  color: var(--contact-item-contact-description-color);
}

@media (max-width: 455px) {
  .contact-item {
    flex-direction: column;
  }
}

@media (max-width: 510px) {
  .site {
    display: none;
  }

  #dot-1 {
    display: none;
  }
}

@media (max-width: 625px) {
  .description {
    display: none;
  }
  .month-year {
    display: none;
  }

  #dot-2 {
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
</style>
