<template>
  <div>
  <img class="beer__list__item__img" :src="beer?.image_url || './src/assets/XR9hSMI-wSs.jpg'" alt="фото пивы">
  <router-link :to="`/beer/id/${beer?.id}`">
    {{ beer?.name }}
  </router-link>
  <button @click="addBeloved()">s</button>
  </div>
</template>

<script>
import store from '../store'
export default {
  props: [
    'beer' , 'beerId'
  ],

  computed:{
    store(){
      return store()
    }
  },
  methods:{
    addBeloved(){
      if (this.beer.beloved === false || this.beer.beloved === undefined) {
        this.beer.beloved = true 
      } else {
        this.beer.beloved = false
      }
    }
  }
}
</script>

<style></style>