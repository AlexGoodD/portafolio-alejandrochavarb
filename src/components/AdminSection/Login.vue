<template>
  <div class="tw:w-full tw:h-full tw:flex tw:items-center tw:justify-center">
    <div
      class="tw:flex tw:flex-col tw:w-[50rem] tw:h-[50rem] tw:items-center tw:justify-center tw:gap-8 tw:py-8 tw:px-32">
      <input
        type="text"
        placeholder="Email"
        v-model="email"
        class="tw:w-full tw:py-[0.8rem] tw:px-[1rem] tw:text-[16px] tw:h-8 tw:border-b tw:border-gray-300"
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="tw:w-full tw:py-[0.8rem] tw:px-[1rem] tw:text-[16px] tw:h-8 tw:border-b tw:border-gray-300"
      />
      <button @click="login" class="tw:px-4 tw:py-2 tw:w-full tw:bg-red-500 tw:text-white tw:rounded tw:cursor-pointer tw:hover:bg-red-400 tw:transition-colors tw:duration-500">Login</button>
      <div v-if="error" class="tw:text-red-500">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword } from 'firebase/auth'

const auth = useFirebaseAuth()
const email = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    error.value = ''
  } catch (e) {
    error.value = 'Login failed, please check your credentials.'
  }
}
</script>