<template>
  <div>
    <Login v-if="!user" />
    <div v-else class="tw:flex">
      <SideNavbar class="tw:w-64 tw:flex-shrink-0" />
      <main class="tw:flex-1">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Login from '@/components/AdminSection/Login.vue'
import SideNavbar from '@/components/AdminSection/SideNavbar.vue'
import { useCurrentUser } from 'vuefire'
const user = useCurrentUser()
</script>