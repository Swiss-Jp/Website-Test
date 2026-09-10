import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admission from '../views/Admission.vue'


const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/admissions', name: 'Admissions', component: Admission }     
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 