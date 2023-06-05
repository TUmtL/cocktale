import { defineStore } from "pinia";
import { watch } from "vue";
export const useStore = defineStore('Store' , {
  state() {
    return {
      weatherCity: {},
      city:'vladimir',
    }
  },
  actions:{
    async getWeather() {
      const raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=ea1d24195e2d6e45bca3b1bc98a80e32`)
      const coocked = await raw.json()
      this.weatherCity = coocked
    }
  },
  getters:{

  },
  watch:{
    city(state){
      console.log(state)
    }
  },
})