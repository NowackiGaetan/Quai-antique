import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/carte',
      name: 'carte',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Carte.vue')
    },
    {
      path: '/contact',
        name: 'contact',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/Contact.vue')
      }, 
    {
    path: '/reserver',
      name: 'reserver',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Reserver.vue')
    },
    {
      path: '/horaires',
        name: 'horaires',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/Horaires.vue')
      }   
  ]
})

export default router
