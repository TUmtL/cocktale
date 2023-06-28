import {createRouter , createWebHistory} from 'vue-router'
import photo from './components/photo.vue'
import task from './components/task.vue'
import post from './components/post.vue'
import album from './components/album.vue'

export default createRouter({
  history:createWebHistory(),
  routes:[
    {name:'photo',path:'/photo',component:photo,},
    {name:'album',path:'/photo/:id',component:album,},
    {name:'task',path:'/task',component:task,},
    {name:'post',path:'/',component:post,}
  ]
}) 