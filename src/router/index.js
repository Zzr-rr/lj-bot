import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import('../views/Tools.vue'),
    },
    {
      path: '/tools/literature-helper',
      name: 'literature-helper',
      component: () => import('../views/tools/LiteratureHelper.vue')
    },
    {
      path: '/tools/name-generator',
      name: 'name-generator',
      component: () => import('../views/tools/NameGenerator.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
  ]
})

export default router
