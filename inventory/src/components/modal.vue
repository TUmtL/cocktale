<template>
  <div :class="{ modal__wrapper: store().modalOpen === 1, modal__wrapper__off: store().modalOpen === 0 }">
    <button @click="store().modalOpen = 0 , iDeleteThis = 0" class="cross"></button>
    <img style="width: 130px; margin-bottom: 30px;" :src="`./src/assets/${store().curentItem.name}.png`" alt="">
    <div style="margin-bottom: 16px; background-color:#4D4D4D; width: 100%; height: 1px;"></div>
    <div class="void__text1"></div>
    <div class="void__text2"></div>
    <div class="void__text3"></div>
    <div class="void__text4"></div>
    <div class="void__text5"></div>
    <div class="void__text6"></div>
    <div style="margin-bottom: 18px; background-color:#4D4D4D; width: 100%; height: 1px;"></div>
    <button @click="iDeleteThis = 1" class="modal__btn">Удалить предмет</button>
    <div :class="{ deleting__menu: iDeleteThis === 1, deleting__menu__off: iDeleteThis === 0 }">
      <input v-model="iDELITING" placeholder="Введите количество" class="delete__input" type="number">
      <div class="btn__wrapper">
        <button @click="iDeleteThis = 0" class="cancel">Отмена</button>
        <button @click="now()" class="delete">Подтвердить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import store from '../store.js';

const iDeleteThis = ref(0)
const iDELITING = ref('')
const now = () => {
  store().curentItem.count -= iDELITING.value
}
</script>

<style lang="scss" scoped>
.delete__input {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  opacity: 0.4;
  padding: 11px 12px 12px 12px;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 4px;
  max-width: 210px;
  margin-bottom: 20px;
}

.delete {
  background: #FA7272;
  border-radius: 8px;
  padding: 8px 15px;
  color: #FFFFFF;font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
}

.cancel {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 8px 19.5px;
  color: #2D2D2D;
  margin-right: 10px;font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
}

.deleting__menu {
  padding: 20px 19px;
  border: 1px solid #4D4D4D;
  position: absolute;
  background: rgba(38, 38, 38, 0.9);
  backdrop-filter: blur(8px);
  transform: translateY(0px);
  transition: transform, 0.3s, ease-in-out;
  bottom: 0;
}

.deleting__menu__off {
  padding: 20px 21px;
  border: 1px solid #4D4D4D;
  position: absolute;
  background: rgba(38, 38, 38);
  border: 1px solid #4D4D4D;
  transform: translateY(133px);
  transition: transform, 0.3s, ease-in-out;
  bottom: 0;
}


.cross {
  height: 12px;
  width: 12px;
  background: url('../assets/cross.svg');
  position: absolute;
  top: 14px;
  right: 14px;
}

.modal__btn {
  background: #FA7272;
  border-radius: 8px;
  padding: 11px 55px;
  padding-right: 57px;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}

.void__text1 {
  width: 211px;
  height: 30px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 8px;
  margin-bottom: 24px;
}

.void__text2 {
  width: 211px;
  height: 10px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
  margin-bottom: 16px;

}

.void__text3 {
  height: 10px;
  width: 211px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
  margin-bottom: 16px;
}

.void__text4 {
  height: 10px;
  width: 211px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
  margin-bottom: 16px;
}

.void__text5 {
  height: 10px;
  width: 180px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
  margin-bottom: 16px;
}

.void__text6 {
  height: 10px;
  width: 80px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
  margin-bottom: 24px;
}

.modal__wrapper {
  height: 100%;
  width: 250px;
  position: absolute;
  right: 0;
  top:0;
  transform: translateX(0);
  transition: transform, 0.3s ease-in-out;
  background: rgba(38, 38, 38, 0.5);
  border-left: 1px solid #4D4D4D;
  backdrop-filter: blur(8px);
  padding: 20px 15px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

}

.modal__wrapper__off {
  height: 100%;
  width: 250px;
  position: absolute;
  right: 0;
  top:0;
  transform: translateX(250px);
  transition: transform, 0.3s ease-in-out;
  background: rgba(38, 38, 38, 0.5);
  border-left: 1px solid #4D4D4D;
  backdrop-filter: blur(8px);
  padding: 20px 15px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

}
</style>