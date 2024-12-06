import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Contact from '../views/ContactPage.vue'
import Tech from '../views/TechPage.vue'
import Project from '../views/ProjectPage.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/Technologies',
      name: 'technologies',
      component: Tech,
    },
    {
      path: '/Projects',
      name: 'projects',
      component: Project,
    },
  ],
})

export default router
