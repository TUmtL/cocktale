<script setup>
import inventory from './components/inventory.vue';
import store from './store.js';
import left from './components/left.vue'
import dragg from 'vuedraggable'
import {ref} from 'vue'
const closse = ref(1)
</script>

<template>
  <section class="inventory container">
    <div class="wrapper">
      <left />
      <inventory />
    </div>
    <div v-if="closse === 1" class="bottom">
      <button @click="closse = 0" class="btn__bottom"></button>
      <div class="void__text"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.btn__bottom {
  height: 12px;
  width: 12px;
  position: absolute;
  top: 14px;
  right: 14px;
  background: url(./assets/cross.svg);
}
.wrapper {
  display: flex;
  margin-bottom: 24px;

  left {
    flex-basis: 236px;

  }

  right {
    flex-basis: 525px;
  }

}

.bottom {
  padding: 18px;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  max-width: 795px;
  position: relative;
}

.void__text {
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 12px;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  max-width: 699px;
  height: 36px;
}
</style>
