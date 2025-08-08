import { createWebHistory, createRouter } from 'vue-router';
import NotFound from '../pages/NotFound.vue';
import MainLayout from '../Layout/mainLayout.vue';
import Login from '../pages/Login.vue';
import Signup from '../pages/Signup.vue';
import Home from '../pages/Home/Home.vue';
import WorkerAccount from '../pages/WorkerAccount/WorkerAccount.vue';
import ProfileLayout from '../Layout/profileLayout.vue';
import Profile from '../pages/Profile/Profile.vue';
import authService from '../services/authService.js';
import Jobs from '../pages/Jobs.vue';

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
      {
        path: 'jobs',
        name: 'Jobs',
        component: Jobs,
      },
      {
        path: '/worker-account',
        name: 'WorkerAccount',
        component: WorkerAccount,
        meta: { requiresAuth: true },
      },

    ],
  },
  {
    path: '/profile',
    component: ProfileLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { requiresGuest: true },
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

// Navigation guards
router.beforeEach((to, from, next) => {
  const isLoggedIn = authService.isLoggedIn();

  // Routes that require authentication
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login');
    return;
  }

  // Routes that require guest (not logged in)
  if (to.meta.requiresGuest && isLoggedIn) {
    next('/');
    return;
  }

  next();
});

export default router;
