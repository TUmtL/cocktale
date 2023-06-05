<template>
  <section class="section section-left">
    <div class="info">
      <div class="city-inner">
        <input @keypress.enter="store.getWeather(), clouds()" v-model="store.city" type="text" class="search">
      </div>
      <div class="summary">
        <img style="background-image: url('../assets/img/weather-main/') ;" alt="">
        <div v-show="cloud === 'broken clouds'"
          style="background-image: url('./src/assets/img/weather-main/broken\ clouds.png');" class="pic-main"></div>
        <div v-show="cloud === 'clear sky'" style="background-image: url('./src/assets/img/weather-main/clear\ sky.png');"
          class="pic-main"></div>
        <div v-show="cloud === 'drizzle'" style="background-image: url('./src/assets/img/weather-main/drizzle.png');"
          class="pic-main"></div>
        <div v-show="cloud === 'few clouds'"
          style="background-image: url('./src/assets/img/weather-main/few\ clouds.png');" class="pic-main"></div>
        <div v-show="cloud === 'haze'" style="background-image: url('./src/assets/img/weather-main/haze.png');"
          class="pic-main"></div>
        <div v-show="cloud === 'heavy intensity rain'"
          style="background-image: url('./src/assets/img/weather-main/heavy\ intensity\ rain.png');" class="pic-main">
        </div>
        <div v-show="cloud === 'light intensity shower rain'"
          style="background-image: url('./src/assets/img/weather-main/light\ intensity\ shower\ rain.png');"
          class="pic-main"></div>
        <div v-show="cloud === 'light rain'"
          style="background-image: url('./src/assets/img/weather-main/light\ rain.png');" class="pic-main"></div>
        <div v-show="cloud === 'light snow'"
          style="background-image: url('./src/assets/img/weather-main/light\ snow.png');" class="pic-main"></div>
        <div v-show="cloud === 'mist'" style="background-image: url('./src/assets/img/weather-main/mist.png');"
          class="pic-main"></div>
        <div v-show="cloud === 'moderate rain'"
          style="background-image: url('./src/assets/img/weather-main/moderate\ rain.png');" class="pic-main"></div>
        <div v-show="cloud === 'overcast clouds'"
          style="background-image: url('./src/assets/img/weather-main/overcast\ clouds.png');" class="pic-main"></div>
        <div v-show="cloud === 'rain'" style="background-image: url('./src/assets/img/weather-main/rain.png');"
          class="pic-main"></div>
        <div v-show="cloud === 'scattered clouds'"
          style="background-image: url('./src/assets/img/weather-main/scattered\ clouds.png');" class="pic-main"></div>
        <div v-show="cloud === 'snow'" style="background-image: url('./src/assets/img/weather-main/snow.png');"
          class="pic-main"></div>
        <div v-show="cloud === 'thunder storm'"
          style="background-image: url('./src/assets/img/weather-main/thunderstorm.png');" class="pic-main"></div>
        <div class="weather">
          <div class="temp">
            {{ Math.round(temp) }} °C
          </div>
          <div class="weather-desc text-block">
            {{ cloud }}
          </div>
        </div>
        <div class="city text-block">
          {{ datas?.weatherCity?.name }}
          ,
          {{ datas?.weatherCity?.sys?.country }}
        </div>
        <div class="date text-block">
          {{ date[9] }}, {{ date[1] }} {{ date[2] }},{{ date[3] }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from '../store.js'
export default {
  data() {
    return {
      store: useStore(),
      cloud: '',
      temp: '',
      country: '',
    }
  },
  created() {
    this.store.getWeather()
    this.clouds()
  },
  methods: {
    clouds() {
      setTimeout(() => {
        this.cloud = this.store.weatherCity.weather[0].description
        this.temp = this.store.weatherCity.main.temp 
        this.country = this.store.weatherCity.sys.country

      }, 400)
    },
  },
  computed: {
    date() {
      const date = new Date
      const dateNew = date.toString().split(' ')
      const day = date.getDay()
      if (day === 0) {
        dateNew.push('Sun')
      } else if (day === 1) {
        dateNew.push('Mon')
      } else if (day === 2) {
        dateNew.push('Tue ')
      } else if (day === 3) {
        dateNew.push('Wed ')
      } else if (day === 4) {
        dateNew.push('Thu ')
      } else if (day === 5) {
        dateNew.push('Fri')
      } else if (day === 6) {
        dateNew.push('Sat ')
      }
      return dateNew
    }
  },
  props:[
    'datas'
  ],
}
</script>

<style></style>