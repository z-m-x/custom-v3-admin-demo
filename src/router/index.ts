import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router'

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
