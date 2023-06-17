import {createRouter,createWebHistory} from 'vue-router'
import home from '../pages/home.vue'
import cocktale from '../pages/cocktale.vue'
import random from '../pages/random.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      component: home,
      path: '/'
    },
    {
      name: 'cocktale',
      component: cocktale,
      path: '/cocktale/:id'
    },
    {
      name: 'random',
      component: random,
      path: '/random'
    }
  ]
})