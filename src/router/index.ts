import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HomeView from '@/views/HomeView.vue';


  const routes = [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/home',
          redirect: { name: 'home' },
        },
      ],
    },
  ];



const router = createRouter({
  history: createWebHistory(), 
  routes, 
});


export default router;
