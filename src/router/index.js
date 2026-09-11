import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admission from '../views/Admission.vue'
import SampleData from '../views/SampleData.vue'
import SampleMethods from '../views/SampleMethods.vue'
import SampleVmodel from '@/views/SampleVmodel.vue'
import LiveProfileForm from '@/views/LiveProfileForm.vue'




const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/admissions', name: 'Admissions', component: Admission },
  { path: '/sample-data', name: 'SampleData', component: SampleData },
  { path: '/sample-methods', name: 'SampleMethods', component: SampleMethods },
  { path: '/sample-model', name: 'SampleVmodel', component: SampleVmodel },
  { path: '/live-profile', name: 'LiveProfileForm', component: LiveProfileForm }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 