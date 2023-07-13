<script setup>
import { ref ,watch } from 'vue'
import store from '../store.js';
import modal from './modal.vue';
import draggable from 'vuedraggable';
const setItem = (item) => {
  if (item.name === 'none') {
    item.name === 'none'
  } else {
    if (store().modalOpen === 0) {
      store().curentItem = item
      store().modalOpen = 1
    } else {
      store().curentItem = ''
      store().modalOpen = 0
    }
  }
}

watch(() => store().inventoryCells , (val)=>{
  localStorage.setItem('inventory' , JSON.stringify(store().inventoryCells))
}, {deep:true})
if(JSON.parse(localStorage.getItem('inventory')) != null) {
  store().inventoryCells = JSON.parse(localStorage.getItem('inventory'))
}
</script>

<template>
  <div class="inventory__wrapper">
    <draggable  class="inventory__list" v-model="store().inventoryCells" item-key="id" tag="ul" group="item">
      <template #item="{ element: item }">
        <li @click="setItem(item)" class="inventory__list__item">
          <img v-if="item.name != 'none'" style="width: 54px;" :src="`./src/assets/${item.name}.png`" alt="">
          <div v-if="item.count >= 1 " class="list__item__counter">{{ item.count}}</div>
        </li>
      </template>
    </draggable>

    <modal></modal>
  </div>
</template>

<style lang="scss" scoped>
.inventory__wrapper {
  background: #262626;
  border-radius: 12px;
  border: 1px solid #4D4D4D;
  overflow: hidden;
  flex-direction: column;
  flex-basis: 525px;
  flex-grow: 0;
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
 