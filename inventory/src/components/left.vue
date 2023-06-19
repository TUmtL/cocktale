<template>
  <div class="left__wrapper">
    <img src="../assets/Img Blur.jpg" alt="" class="left__img">
    <div class="void__text1"></div>
    <div class="void__text2"></div>
    <div class="void__text3"></div>
    <div class="void__text4"></div>
    <div class="void__text5"></div>
    <div class="void__text6"></div>
    <div class="void__text7"></div>
  </div>
</template>

<script>
import { ref } from 'vue'
import store from '../store.js';
</script>

<style lang="scss" scoped>
.left__wrapper {
  padding: 18px 14px;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
}

.left__img {
  border-radius: 10px;
  margin-bottom: 20px;
}

.void__text1 {
  width: 190px;
  height: 26px;
  left: 23px;
  top: 278px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 8px;
  margin-bottom: 24px;
}

.void__text2 {
  width: 155px;
  height: 10px;
  left: 40px;
  top: 328px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
  margin-bottom: 16px;
}

.void__text3 {
  width:190px;
  height: 10px;
  left: 40px;
  top: 328px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
  margin-bottom: 16px;
}

.void__text4 {
  width: 170px;
  height: 10px;
  left: 40px;
  top: 328px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
  margin-bottom: 16px;
}

.void__text5 {
  width: 160px;
  height: 10px;
  left: 40px;
  top: 328px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
  margin-bottom: 16px;
}

.void__text6 {
  width: 140px;
  height: 10px;
  left: 40px;
  top: 328px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
  margin-bottom: 24px;
}

.void__text7 {
  width: 80px;
  height: 10px;
  left: 40px;
  top: 328px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
}</style>