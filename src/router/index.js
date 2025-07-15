import { createRouter, createWebHistory } from 'vue-router';

// Vistas públicas
import Home from '../views/HomeView.vue';
import Technologies from '../views/TechnologiesView.vue';
import Projects from '../views/ProjectsView.vue';
import Contact from '../views/ContactView.vue';

// Vistas admin
import AdminLayout from "../views/AdminView.vue";
import EditHome from "../admin-views/EditHome.vue";
import EditTech from '@/admin-views/EditTech.vue'
import EditProjects from '@/admin-views/EditProjects.vue'
import EditContact from '@/admin-views/EditContact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/technologies', component: Technologies },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
    {
        path: '/admin',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            { path: '', redirect: '/admin/home' },
            { path: 'home', component: EditHome },
            { path: 'tech', component: EditTech },
            { path: 'projects', component: EditProjects },
            { path: 'contact', component: EditContact },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// // Protección de rutas
// router.beforeEach(async (to, from, next) => {
//     if (to.meta.requiresAuth) {
//         const user = await getCurrentUser();
//         if (user) {
//             next();
//         } else {
//             next('/');
//         }
//     } else {
//         next();
//     }
// });

export default router;