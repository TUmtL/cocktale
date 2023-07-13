import { createRouter, createWebHistory} from 'vue-router'
import store from './store'
import home from './components/home.vue'
import component from './components/component.vue'
import component2 from './components/component2.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name:'home',
      path:'/',
      component: home
    },
    {
      name:'first',
      path:'/first',
      component:component,
      props:{props:true},
      meta:{
        needAuth:true
      },
      children:[{
        name:'second',
        path:'second',
        component:component2,
        props:{props:true}
      }]
    },
  ]
})
router.beforeEach((to , from) =>{
  if (to.meta.needAuth === true && store().something === false) {
    return {name:'home'}
  }
})