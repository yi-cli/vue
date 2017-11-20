import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from '@/components/HelloWorld.vue'

const routes = [
  { path: '/', name: 'index', component: index },

  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router