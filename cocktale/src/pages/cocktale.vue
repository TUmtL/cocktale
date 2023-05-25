<template>
  <applayout :imageURL="curentCocktale.strDrinkThumb" :backFun="() => router.go(-1)">
    <div class="info">
      <h2 class="info__title">{{ curentCocktale.strDrink }}</h2>
      <ul class="ingridient__list">
        <li v-for="ingridient of ingridients" :key="ingridient" class="ingridient">
          {{ ingridient.name }}<span v-if="ingridient.measure"> | {{ ingridient.measure }}</span>
        </li>
      </ul>
      <p class="instruction">{{ curentCocktale.strInstructions }}</p>
    </div>
  </applayout>
</template>

<script>
import applayout from '../components/applayout.vue';
import { useRoute, useRouter } from 'vue-router'
export default {
  data() {
    return {
      route: useRoute().path.split('/').pop(),
      router: useRouter(),
      curentCocktale: '',
    }
  },

  methods: {
    async getById() {
      const raw = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.route}`)
      const coocked = await raw.json()
      this.curentCocktale = coocked.drinks[0]
    }
  },
  computed: {
    ingridients() {
      const ingridient = []
      for (let i = 1; i < 15; i++) {
        if (this.curentCocktale[`strIngredient${i}`] != null) {
          const insruction = {}
          insruction['name'] = this.curentCocktale[`strIngredient${i}`]
          insruction['measure'] = this.curentCocktale['strMeasure' + i]
          ingridient.push(insruction)
        } else {
          break
        }
      }
      return ingridient
    }
  },
  created() {
    this.getById()
  },
  components: {
    applayout
  },
}
</script>

<style>
.ingridient__list {
  list-style: none;
  margin-bottom: 80px;
  align-self: flex-start;
}

.ingridient {
  padding-left: 50px;
  background: left center url(../assets/img/heart.svg) no-repeat;
}

.instruction {
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #D3D3D3;
}
</style>