<script setup>
import { ref } from 'vue'
import store from '../store.js';
</script>

<template>
  <div class="inventory__wrapper">
    <ul class="inventory__list">
      <li class="inventory__list__item" v-for="item of store().inventoryCells" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.inventory__wrapper {
  background: #262626;
  border-radius: 12px;
  border: 1px solid #4D4D4D;
  overflow: hidden;
  flex-basis: 525px;
}

.inventory__list {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  &__item {
    flex-basis: calc(100% / 5);
    min-height: 100px;
    border-right: 1px solid #4D4D4D;
    border-bottom: 1px solid #4D4D4D;
    border-collapse: collapse;
    &:nth-child(5n) {
      border-right: none ;
    }
    &:nth-last-child(-n + 5){
      border-bottom:none ;
    }
  }
}
</style>
 