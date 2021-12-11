import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// "/" => Home.vue,
// "/posts" => Posts.vue,
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/posts', // <router-link to="/posts"></router-link>
    component: () => import('../views/Posts.vue') // ленивая загрузка. подгрузка в отдельный файл, по необходимости, сразу не загружается в общий файл.
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
