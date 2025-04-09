import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import HomePage from '../views/HomePage.vue'
import PreviewPage from '../views/PreviewPage.vue'
import UserPage from '../views/UserPage.vue'
import HelpPage from '../views/HelpPage.vue'
import WatchlistPage from '../views/WatchlistPage.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/preview',
    name: 'Preview',
    component: PreviewPage
  },
  {
    path: '/user',
    name : 'User',
    component:  UserPage
  },
  {
    path: '/help',
    name: 'Help',
    component: HelpPage
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: WatchlistPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router