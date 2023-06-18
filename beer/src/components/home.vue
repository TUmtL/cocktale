<script>
import store from '../store';
import beerCard from './beerCard.vue';
import beloved from './belovedMenu.vue'
export default {
  computed: {
    store() {
      return store()
    }
  },
  created() {
    this.store.getBeer()
  },
  methods: {
    pageUP() {
      if (this.store.page != this.store.pages) {
        this.store.page++
        this.store.getBeer()
      } else if (this.store.page = this.store.pages) {
        this.store.page = 1
        this.store.getBeer()
      }
    },
    pageDOWN() {
      if (this.store.page != 1) {
        this.store.page--
        this.store.getBeer()
      } else if (this.store.page = 1) {
        this.store.page = 22
        this.store.getBeer()
      }
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
        <li class="beer__list__item" v-for="(beer, beerId) of store.beers" :key="beerId">
          <beerCard :beer="beer" :beerId="beerId"></beerCard>
        </li>
      </ul>
      <button @click="pageDOWN()">предыдущяя</button>
      <button>{{ store.page }}</button>
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
