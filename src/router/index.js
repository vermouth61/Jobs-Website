import { createWebHistory, createRouter } from 'vue-router';
import NotFound from '../pages/NotFound.vue';
import MainLayout from '../Layout/mainLayout.vue';
import Login from '../pages/Login.vue';
import Signup from '../pages/Signup.vue';
import Home from '../pages/Home/Home.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
