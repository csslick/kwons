// import { createRouter, createWebHistory } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../view/Home.vue'
import About from '../view/About.vue'

const routes = [
  { 
    path: '/', 
    component: Home
  },
  { 
    path: '/about', 
    component: About
  },
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(), // Hash 모드 설정
  routes,
})

export default router