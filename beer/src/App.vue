<script >
import store from './store';
export default {
  data(){
    return{
      store:store()
    }
  }
}
</script>

<template>
  <div class="">
    <header class="header">
      <div class="header__wrapper container">
        <router-link style="display:  flex;" to="/">
          <img style="margin-right: 20px;"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/NCI_Visuals_Food_Beer.jpg/1200px-NCI_Visuals_Food_Beer.jpg"
            alt="логотип" class="logo">
            <h1>BEERS STORE</h1>
        </router-link>
        <nav class="header__nav">
          <ul class="header__nav__list">
            <li class="header__nav__list__item"><router-link to="/">home</router-link></li>
            <li class="header__nav__list__item"><router-link to="/beer/random">random</router-link></li>
            <li class="header__nav__list__item"><router-link to="/about">WHATUKNOWABOUTROLINGDOWN</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.header {}

.logo {
  height: 50px;
  width: 50px;
}
.header__nav__list{
  display: flex;
}
.header__nav__list__item {
  margin-right: 20px;
}
.header__nav__list__item:last-child {
  margin-right: 0px;
}

</style>
