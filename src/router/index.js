import { createWebHistory, createRouter } from 'vue-router'
import NotFound from '../pages/NotFound.vue'
import Home from '../pages/Home.vue';
import MainLayout from '../Layout/mainLayout.vue';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
        ]
    },
{
     path: '/:pathMatch(.*)*',
     name: 'NotFound',
     component: NotFound
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;