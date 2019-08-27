import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import HelloI18n from '../components/HelloI18n.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: HelloWorld },
  { path: '/work', component: HelloI18n }
]

export default new VueRouter({
  mode: 'history',
  routes: routes
})
