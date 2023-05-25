<template>
  <applayout :imageURL="'src/assets/img/bkgHome.jpg'" :backFun="() => cocktaleStore.ingridient = ''">
    <div v-if="cocktaleStore.ingridient != []" class="info">
      <h1 class="info__title">COCKTAILS WITH {{ cocktaleStore.ingridient }}</h1>
      <el-scrollbar class="cocktales__list">
        <div class="cocktale__card" v-for="cocktale of cocktaleStore.cocktales" :key="cocktale">
          <router-link style="cursor: pointer;" :to="`cocktale/${cocktale.idDrink}`">
            <img class="cocktale__img" :src="cocktale.strDrinkThumb" alt="cocktale photo">
            <p class="cocktale__name">{{ cocktale.strDrink }}</p>
          </router-link>
        </div>
        <div class="cocktale__card hiden__card">

        </div>

      </el-scrollbar>
    </div>
    <div v-else class="info">
      <h1 class="info__title">Choose your drink</h1>
      <el-select class="m-2" placeholder="Choose main ingredient " size="large" v-model="cocktaleStore.ingridient" @change="cocktaleStore.findeCocktale()">
        <el-option v-for="cocktale of cocktaleStore.ingridients" :key="cocktale" :value="cocktale.strIngredient1">
          {{ cocktale.strIngredient1 }}
        </el-option>
      </el-select>
    </div>
  </applayout>
</template>

<script>
import { useCocktaleStore } from '../store/cocktaleStore';
import applayout from '../components/applayout.vue';
export default {
  data() {
    return {
      cocktaleStore: useCocktaleStore(),
    }
  },
  created() {
    this.cocktaleStore.getSomeCocktale()
  },
  components: {
    applayout
  },
  methods:{
    async moovies() {
      const raw = await fetch('https://api.tvmaze.com/search/shows?q=mouse')
      const coocked = await raw.json()
      console.log(coocked)
    }
  },
}

</script>

<style>
@import url(../style.css);

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info__title {
  font-family: 'Raleway';
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  color: #FFFFFF;
  position: relative;
  padding-bottom: 32px;
  margin-bottom: 50px;
  text-align: center;
  padding-top: 78px;
}

.info__title::after {
  content: '';
  width: 100px;
  height: 5px;
  background: #FF0F82;
  position: absolute;
  left: calc(50% - 50px);
  bottom: 0px;
}

.cocktales__list {
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  max-height: 387px;
  overflow: auto;
  justify-content: space-between;
}

.cocktale__card {
  flex-basis: calc((100% - 194px) / 2);
  flex-grow: 0;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 41px;
  align-items: center;
  text-align: center;
}

.cocktale__card:not(:nth-child(3n)) {
  margin-right: 22px;
}

.cocktale__img {
  margin-bottom: 15px;
  max-width: 120px;
}

.cocktale__name {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;

}
.el-input__wrapper {
  background: #141414;
}
.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default .el-scrollbar__view{
  display: block;
}
.el-scrollbar__wrap .el-scrollbar__wrap--hidden-default {
  max-height: 400px;
}
.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default .el-scrollbar__view {
  display: flex;
  flex-wrap: wrap;
}
.hiden__card {
  height: 0.1px;
}
</style>