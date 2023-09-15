import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Dashbaord from '../views/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashbaord
    },
  ]
})

export default router
