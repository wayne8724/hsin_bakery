import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/products',
    component: () => import('../views/ProductsList.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/cart',
    component: () => import('../views/CartPage.vue'),
  },
  {
    path: '/checkout',
    component: () => import('../views/checkoutPage.vue'),
  },
  {
    path: '/result',
    component: () => import('../views/checkoutResult.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
