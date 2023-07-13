<template>
  <div>
  <img class="beer__list__item__img" :src="beer?.image_url || './src/assets/XR9hSMI-wSs.jpg'" alt="фото пивы">
  <router-link :to="`/beer/${beer?.id}`">
    {{ beer?.name }}
  </router-link>
  <button @click="addBeloved">s</button>
  </div>
</template>

<script>
import store from '../store'
export default {
  props: [
    'beer' , 'beerId'
  ],
  data(){
    return{
      onBeloved:0,
    }
  },
  computed:{
    store(){
      return store()
    }
  },
  methods:{
    addBeloved(){
      if (this.onBeloved === 0) {
        this.onBeloved = 1
        this.beer.beloved = true 
      } else {
        this.onBeloved = 0
        this.beer.beloved = false
      }
    }
  }
}
</script>

<style></style>