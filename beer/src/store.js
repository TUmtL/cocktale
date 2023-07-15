import { defineStore } from "pinia";
export default defineStore('beerStore', {
  state() {
    return {
      beers: [],
      page: 0,
    }
  },
  actions: {
    async getBeer() {
      let result = []
      for (let i = 1; i <= 5; i++) {
        const raw = await fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=80`)
        const coocked = await raw.json()
        result = result.concat(coocked)
      }
      this.beers = result
    }
  },
  getters: {
    pages() {
      const raw = 325 / 15
      if (raw.toString().split('.').pop() != 0) {
        return Math.round(raw - 1)
      }
    },
    pagesPlus() {
      return 15 * this.page
    },
    beerList() {
      let result = []
      for (let i = 0 + this.pagesPlus; i < 15 + this.pagesPlus; i++) {
        if (this.beers[i] != null) {
          result.push(this.beers[i])
        }
      }
      return result
    },
    myBeLoved() {
      return this.beers.filter(item => item.beloved === true)
    }
  },

})