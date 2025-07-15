import './assets/base.css'
import './assets/tailwind.css'
import './assets/fontawesome.css'

import { initializeApp } from 'firebase/app'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire, VueFireAuth } from 'vuefire'
import { plugin, defaultConfig } from '@formkit/vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
})


createApp(App)
  .use(router)
  .use(VueFire, { firebaseApp, modules: [VueFireAuth()] })
  .use(plugin, defaultConfig)
  .use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
  .mount('#app')
