import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/DetailView.vue')
  },
  {
    path: '/section',
    name: 'section',
    component: () => import('../views/SectionView.vue'),
    props: route => ({ idx: route.query.idx })
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue'),
    props: route => ({ world: route.query.world, keyword: route.query.keyword })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
