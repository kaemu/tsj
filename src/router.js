import { createWebHistory, createRouter } from 'vue-router'
import { routes, baseUrl } from './routes.js'

export const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
})
