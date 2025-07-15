<template>
  <div>
    <Login v-if="!user" />
    <div v-else>
      <h1>Contenido protegido</h1>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCurrentUser } from 'vuefire'
import { signOut } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'

import Login from '@/components/AdminSection/Login.vue'

const user = useCurrentUser()
const auth = useFirebaseAuth();

async function logout() {
  try {
    await signOut(auth)
  } catch (error) {
    console.error('Error signing out:', error)
  }
}
</script>