import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About.vue"
import contactMe from "../views/contactMe.vue"
import projects from "../views/myProjects"


Vue.use(VueRouter)

const routes = [
 

  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contactMe',
    name: 'contactMe',
    component: contactMe
  },
  {
    path: '/myProjects',
    name: 'myProjects',
    component: projects
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
