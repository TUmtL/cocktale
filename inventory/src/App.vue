<script setup>
import inventory from './components/inventory.vue';
import store from './store.js';
import left from './components/left.vue'
import dragg from 'vuedraggable'
</script>

<template>
  <section class="inventory">
    <div class="inventory__wrapper container">
      <left />
      <inventory />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.inventory__wrapper {
  display: flex;

  left {
    flex-basis: 236px;

  }

  right {
    flex-basis: 525px;
  }

}
</style>
