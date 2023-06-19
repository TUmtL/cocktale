<script setup>
import { ref } from 'vue'
import store from '../store.js';
import modal from './modal.vue';
const setItem = (item) => {

  if (store().modalOpen === 0 ) {
    store().curentItem = item
    store().modalOpen = 1
  } else if (store().modalOpen === 1) {
    store().curentItem = ''
    store().modalOpen = 0
  } 
}
</script>

<template>
  <div class="inventory__wrapper">
    <ul class="inventory__list">
      <li @click="setItem(item)" class="inventory__list__item" v-for="(item, itemId) of store().inventoryCells"
        :key="itemId">
        <img v-if="item.name" style="width: 54px;" :src="`./src/assets/${item.name}.png`" alt="">
        <div v-if="item.count" class="list__item__counter">{{ item.count }}</div>
      </li>
    </ul>
    <modal></modal>
  </div>
</template>

<style lang="scss" scoped>

.inventory__wrapper {
  background: #262626;
  border-radius: 12px;
  border: 1px solid #4D4D4D;
  overflow: hidden;
  flex-basis: 525px;
  overflow: hidden;
  position: relative;
}

.list__item__counter {
  position: absolute;
  right: 0;
  bottom: 0;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 6px 0px 0px 0px;
  padding: 2px 4px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
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
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    &:nth-child(5n) {
      border-right: none;
    }

    &:nth-last-child(-n + 5) {
      border-bottom: none;
    }
  }
}
</style>
 