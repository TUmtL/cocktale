import { defineStore } from "pinia";
export const useCocktaleStore = defineStore('cocktaleStore', {
  state() {
    return {
      ingridients: [],
      ingridient: '',
      cocktaleUrl: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list ',
      cocktalesSearch: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
      cocktales: [],
    }
  },
  actions: {
    async getSomeCocktale() {
      const raw = await fetch(this.cocktaleUrl)
      const coocked = await raw.json()
      this.ingridients = coocked.drinks
    },

    async findeCocktale() {
      const raw = await fetch(`${this.cocktalesSearch}${this.ingridient}`)
      const coocked = await raw.json()
      this.cocktales = coocked.drinks
    }
  },
  getters: {

  }

})