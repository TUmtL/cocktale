import { defineStore } from "pinia";
export default defineStore('beerStore' , {
  state(){
    return{
      beers:{},
      page:1,
      myBeLoved:[
        
      ]
    }
  },
  actions:{
    async getBeer(){
      const raw = await fetch(`https://api.punkapi.com/v2/beers?page=${this.page}&per_page=15`)
      const coocked = await raw.json()
      this.beers = coocked
    }
  },
  getters:{
    pages(){
      const raw = 325 / 15
      if (raw.toString().split('.').pop() != 0) {
        return Math.round(raw)
      }
    }
  },
})