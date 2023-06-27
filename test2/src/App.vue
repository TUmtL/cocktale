<script >
import { useRoute } from 'vue-router'
export default {
  computed: {
    page() {
      return this.$route.path
    }
  }
}
</script>

<template>
  <div>
    <header>
      <nav class="header__nav">
        <router-link :class="{ 'page__btn': true, 'curent__page__btn': page === '/' }" to="/">блоги</router-link>
        <router-link :class="{ 'page__btn': true, 'curent__page__btn': page === '/photo' }" to="/photo">фото</router-link>
        <router-link :class="{ 'page__btn': true, 'curent__page__btn': page === '/task' }" to="/task">задачи</router-link>
      </nav>
    </header>
    <section>
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<style scoped>
.curent__page__btn {
  background: white !important;
  border-bottom: none !important;
}

.page__btn {
  border: 1px solid black;
  background: rgb(139, 139, 139);
}
</style>
 