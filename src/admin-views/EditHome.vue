<template>
<div class="tw:flex tw:flex-col tw:w-full tw:h-full tw:p-8 tw:gap-8">
  <p class="tw:text-3xl tw:font-bold top-text">Dashboard</p>
  <!-- Sección de primera busqueda -->
  <div class="tw:flex tw:flex-col tw:border tw:border-gray-300 tw:p-4 tw:gap-4 tw:rounded-xl">
    <p class="tw:text-2xl top-text">Información general de primera búsqueda</p>
    <FormKit
      type="text"
      label="Título"
      name="Título"
      placeholder="Desarrollador Front End, Diseñador Web Freelancer"
    />

    <div class="tw:flex tw:flex-col tw:w-[41rem]">
      <p class="tw:text-sm top-text">Descripción</p>
    <Editor editorStyle="height: 150px" />
    </div>
  </div>

  <div class="tw:flex tw:flex-col tw:border tw:border-gray-300 tw:p-4 tw:gap-4 tw:rounded-xl">
    <p class="tw:text-2xl top-text">Información sitio web de primera búsqueda</p>
      <FormKit
        type="text"
        label="Nombre del sitio web"
        name="Título"
        placeholder="Desarrolladores web"
      />
      <FormKit
        type="text"
        label="URL del sitio web"
        name="Título"
        placeholder="https://www.desarrolladoresweb.com > blog > Alejandro-Chavarria..."
      />
      <FormKit
        type="text"
        label="Título del sitio web"
        name="Título"
        placeholder="¿Quién es Alejandro Chavarría? - Desarrolladores web"
      />
  </div>

</div>
</template>

<script setup lang="ts">
import Editor from 'primevue/editor';
</script>

<style scoped>
.top-text {
  font-weight: bold;
}
</style>