import {createRouter , createWebHistory} from 'vue-router'
import home from './components/home.vue'
import beer from './components/beer.vue'
export default createRouter({
  history:createWebHistory(),
  routes:[
    {
      name:'home',
      component:home,
      path:'/'
    },
    {
      name:'beer',
      component:beer,
      path:"/beer/id/:id"
    },
    {
      name:'random',
      component:beer,
      path:'/beer/random'
    },
    {
      name:'about us',
      component:() => import('./components/aboutUs.vue'),
      path:'/about'
    }
  ]
})