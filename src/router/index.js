import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "@/views/auth/Register";
import Login from "@/views/auth/Login";
import SingleThread from "@/views/thread/SingleThread";
import CreateThread from "@/views/thread/CreateThread";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Register',
    name: 'Register',
    component: localStorage.getItem('isAuth') === 'false' ? Register : HomeView
  },
  {
    path: '/Login',
    name: 'Login',
    component: localStorage.getItem('isAuth') === 'false' ? Login : HomeView
  },
  {
    path: '/thread/:slug',
    name: 'Single Thread',
    component: SingleThread
  },
  {
    path: '/create/thread',
    name: 'Create Thread',
    component: CreateThread
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
