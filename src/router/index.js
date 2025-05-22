import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/exchange-rate-options',
    name: 'exchange-rate-options-api',
    component: () => import('../views/ExchangeRateOptionsView.vue')
  },
  {
    path: '/exchange-rate-composition',
    name: 'exchange-rate-composition-api',
    component: () => import('../views/ExchangeRateCompositionView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
