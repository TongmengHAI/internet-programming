import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/categories/:categoryId',
      name: 'category',
    
      component: () => import('@/views/CategoryPage.vue')
    },
    {
      path: '/products/:productId',
      name: 'productDetail',
    
      component: () => import('@/views/ProductDetailPage.vue')
    },
  ]
})

export default router
