import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About.vue"
import contactMe from "../views/contactMe.vue"
import projects from "../views/myProjects"
import register from "../views/register.vue"


Vue.use(VueRouter)

const routes = [
 

  {
    path: '/',
    name: '',
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

  {
    path: '/register',
    name: 'register',
    component: register
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
