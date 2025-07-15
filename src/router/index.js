// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
// Importa tus componentes de vistas
import Home from '../views/HomeView.vue';
import Technologies from '../views/TechnologiesView.vue';
import Projects from '../views/ProjectsView.vue';
import Contact from '../views/ContactView.vue';
import Admin from "@/views/AdminView.vue";
// Obteniendo usuario actual
import { getCurrentUser } from 'vuefire';

const routes = [
    { path: '/', component: Home },
    { path: '/technologies', component: Technologies },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
    { path: '/admin', component: Admin },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Middleware para proteger rutas con autenticación
router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth) {
        const user = await getCurrentUser();
        if (user) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
});

export default router;