<template>
  <div>
    <button @click="listTake(10)">1</button>
    <button @click="listTake(20)">2</button>
    <button @click="listTake(50)">3</button>
    <button @click="listTake(100)">4</button>
    <ul>
      <li v-for="(item , itemIndex) of listItems" :key="itemIndex">
        <ListItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import store from '../store'
export default {
  components:{
    ListItem
  },
  data(){
    return{
      listItems:''
    }
  },
  methods:{
    async listTake(e){
      const raw = await fetch('https://jsonplaceholder.typicode.com/posts')
      const coocked = await raw.json()
      coocked.length = e 
      this.listItems = coocked
    },
  },
  created(){
    this.listTake(100)
  },
  computed:{
    store(){
      return store()
    }
  }
}
</script>

<style>

</style>