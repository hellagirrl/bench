import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import store from '../store/index';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/offers',
    name: 'offers',
    component: () => import('@/views/Offers.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.state.accessToken) next({ name: 'Login' });
      else next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;