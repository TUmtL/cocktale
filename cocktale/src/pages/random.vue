<template>
  <applayout :imageURL="cocktail.strDrinkThumb" :backFun="() => router.go('-1')">
    <div class="info">
      <h2 class="info__title">{{ cocktail.strDrink }}</h2>
      <ul class="ingridient__list">
        <li v-for="ingridient of ingridients" :key="ingridient" class="ingridient">
          {{ ingridient.name }}<span v-if="ingridient.measure"> | {{ ingridient.measure }}</span>
        </li>
      </ul>
      <p class="category">category: {{ cocktail.strCategory }}</p>
      <p class="instruction">{{ cocktail.strInstructions }}</p>
    </div>
  </applayout>
</template>

<script>
import { useRouter } from 'vue-router'
import applayout from '../components/applayout.vue'
export default {

  data() {
    return {
      cocktail: '',
      router: useRouter(),
    }
  },
  methods: {
    async getRandom() {
      const raw = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      const coocked = await raw.json()
      return this.cocktail = coocked.drinks[0]
    }
  },
  computed: {
    ingridients() {
      const ingridients = []
      for (let i = 1; i < 15; i++) {
        if (this.cocktail['strIngredient' + i] === null) break
        const ingridient = {}
        ingridient.name = this.cocktail['strIngredient' + i]
        ingridient.measure = this.cocktail['strMeasure' + i]

        ingridients.push(ingridient)
      }
      return ingridients
    }

  },
  created() {
    this.getRandom()
  },
  components: {
    applayout
  }
}
</script>

<style scoped>
.ingridient__list {
  list-style: none;
  margin-bottom: 27px;
  align-self: start;
}

.ingridient {
  padding-left: 50px;
  background: left center url(../assets/img/heart.svg) no-repeat;
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
}

.instruction {
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #D3D3D3;
}

.category {
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #D3D3D3;
  margin-bottom: 27px;
}
</style>