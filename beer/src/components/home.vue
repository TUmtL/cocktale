<script>
import store from '../store';
import beerCard from './beerCard.vue';
import beloved from './belovedMenu.vue'
export default {
  computed: {
    store() {
      return store()
    },
    storeBeers(){
      return store().beers
    }
  },
  async created() {
    if (localStorage.getItem('beers') != null) {
      this.store.beers = JSON.parse(localStorage.getItem('beers'))
    } else {
      await this.store.getBeer()
      localStorage.setItem('beers', JSON.stringify(this.store.beers))
    }
  },
  watch:{
    storeBeers:{
      handler(){
        localStorage.setItem('beers', JSON.stringify(this.store.beers))
      },
      deep:true
    }
  },
  methods: {
    pageUP() {
      if (this.store.page != this.store.pages) this.store.page++
      else if (this.store.page === this.store.pages) this.store.page = 0
    },
    pageDOWN() {
      if (this.store.page != 0) this.store.page--
      else if (this.store.page === 0) this.store.page = this.store.pages
    }
  },
  components: {
    beerCard, beloved
  }

}
</script>

<template>
  <section class="beers">
    <div class="container">
      <ul class="beer__list">
        <li class="beer__list__item" v-for="(beer, beerId) of store.beerList" :key="beerId">
          <beerCard :beer="beer" :beerId="beerId"></beerCard>
        </li>
      </ul>
      <button @click="pageDOWN()">предыдущяя</button>
      <button>{{ store.page + 1 }}</button>
      <button @click="pageUP()">следущая</button>
    </div>
  </section>
</template>

<style>
.beer__list {
  display: flex;
  flex-wrap: wrap;
}

.beer__list__item {
  flex-basis: 200px;
}

.beer__list__item__img {
  height: 120px;
  object-fit: contain;
}
</style>
