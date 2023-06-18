<template>
  <div>
  <img class="beer__list__item__img" :src="beer.image_url || './src/assets/XR9hSMI-wSs.jpg'" alt="фото пивы">
  <router-link :to="`/beer/${beer.id}`">
    {{ beer.name }}
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
  watch:{
    onBeloved(val) {
      if (this.onBeloved === 1) {
        this.store.myBeLoved.push(this.beer)
      } else if (this.onBeloved === 0) {
        this.store.myBeLoved = this.store.myBeLoved.filter(item => item.id != this.beer.id)
      }
    }
  },
  methods:{
    addBeloved(){
      if (this.onBeloved === 0) {
        this.onBeloved = 1
      } else {
        this.onBeloved = 0
      }
    }
  }
}
</script>

<style></style>