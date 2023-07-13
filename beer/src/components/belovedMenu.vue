<template>
  <div>
    <button @click="activ = true" v-if="activ === false">s list</button>
    <div v-if="activ === true">
      <button @click="activ = false">close</button>
      <ul>
        <li v-for="(item, itemId) of store.myBeLoved" :key="itemId">
          {{item.name}} <button @click="item.beloved = false">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  data(){
    return {
      activ:false,
    }
  },
  computed:{
    store(){
      return store()
    }
  },
  methods:{
    remove(id){
      this.store.myBeLoved = this.store.myBeLoved.filter(item => item != id)
    }
  }
}
</script>

<style>

</style>