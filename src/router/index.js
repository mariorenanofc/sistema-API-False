import { createRouter, createWebHistory } from 'vue-router'
import Homelinks from '../views/Homelinks.vue'

const routes = [
  {
    path: '/',
    name: 'homelinks',
    component: Homelinks
  },
  {
    path: '/list',
    name: 'listerlinks',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListerLinks.vue')
  },
  {
    path: '/edit',
    name: 'editlinks',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditLinks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
