<template>
  <li class="tw:ml-[50px] tw:relative">
    <!-- Botón que muestra/oculta el menú -->
    <button
        class="tw:bg-none tw:border-none tw:text-[var(--navbar-text-color)] tw:cursor-pointer tw:text-[14px]"
        @click="toggleMoreMenu"
    >

      <i class="fas fa-ellipsis-v tw:mr-2"></i> {{ translations.more }}
    </button>

    <!-- Menú desplegable -->
    <ul
        v-if="showMoreMenu"
        class="tw:absolute tw:top-[150%] tw:left-0 tw:bg-[var(--navbar-more-menu-background-color)] tw:list-none tw:mt-2 tw:rounded-xl tw:shadow-md tw:z-[700] tw:w-[10vw] tw:overflow-hidden"
    >
      <li>
        <a
            :href="cvLink"
            download
            class="tw:text-[#9d9d9d] tw:hover:text-[#d0d0d0] tw:transition-colors tw:duration-200 tw:ease-in-out tw:text-[14px] tw:no-underline tw:block tw:px-5 tw:py-2.5"
        >
          {{ translations.downloadCV }}
        </a>
      </li>
      <li>
        <a
            href="https://www.linkedin.com/in/alejandro-chavarb"
            target="_blank"
            class="tw:text-[#9d9d9d] tw:hover:text-[#d0d0d0] tw:transition-colors tw:duration-200 tw:ease-in-out tw:text-[14px] tw:no-underline tw:block tw:px-5 tw:py-2.5"
        >
          {{ translations.visitLinkedIn }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showMoreMenu = ref(false)

const toggleMoreMenu = () => {
  showMoreMenu.value = !showMoreMenu.value
}

const translations = {
  more: 'Más',
  downloadCV: 'Descargar CV',
  visitLinkedIn: 'Visitar LinkedIn'
}

const cvLink = '/cv.pdf'
</script>