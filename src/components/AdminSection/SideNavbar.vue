<template>
<div class="tw:h-[100vh] tw:bg-gray-100 tw:w-64 ">
  <nav class="tw:flex tw:flex-col tw:p-4">
    <h4>Secciones</h4>
    <router-link class="tw:w-full tw:flex tw:items-center tw:py-2 tw:text-base tw:cursor-pointer tw:hover:text-gray-400 tw:hover:translate-x-2 tw:transition tw:duration-500" to="/admin/home"><i class="fa-solid fa-house tw:w-8"></i>Inicio</router-link>
    <router-link class="tw:w-full tw:flex tw:items-center tw:py-2 tw:text-base tw:cursor-pointer tw:hover:text-gray-400 tw:hover:translate-x-2 tw:transition tw:duration-500" to="/admin/tech"><i class="fa-solid fa-gears tw:w-8"></i>Tecnología</router-link>
    <router-link class="tw:w-full tw:flex tw:items-center tw:py-2 tw:text-base tw:cursor-pointer tw:hover:text-gray-400 tw:hover:translate-x-2 tw:transition tw:duration-500" to="/admin/projects"><i class="fa-solid fa-folder tw:w-8"></i>Proyectos</router-link>
    <router-link class="tw:w-full tw:flex tw:items-center tw:py-2 tw:text-base tw:cursor-pointer tw:hover:text-gray-400 tw:hover:translate-x-2 tw:transition tw:duration-500" to="/admin/contact"><i class="fa-solid fa-envelopes-bulk tw:w-8"></i>Medios de contacto</router-link>
    <button class="tw:w-full tw:flex tw:items-center tw:gap-4 tw:py-2 tw:text-base tw:cursor-pointer tw:hover:text-gray-400" @click="logout"><i class="fa-solid fa-right-from-bracket tw:w-8"></i>Log Out</button>
  </nav>
</div>
</template>

<script setup lang="ts">
import { useFirebaseAuth } from 'vuefire'
import { signOut } from 'firebase/auth'

const auth = useFirebaseAuth()

async function logout() {
  try {
    await signOut(auth)
  } catch (error) {
    console.error('Error signing out:', error)
  }
}
</script>