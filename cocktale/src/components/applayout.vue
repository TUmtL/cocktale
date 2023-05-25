<script>
import { useCocktaleStore } from '../store/cocktaleStore';
export default {
  data(){
    return{
      cocktaleStore: useCocktaleStore()
    }
  },
  computed:{

  },
  props:{
    imageURL:{
      type:String,
      required:false ,
      default:''
    },
    backFun:{
      type:Function,
      required:true,
    },

  }
}
</script>

<template>
  <div class="main">
    <div :style="{backgroundImage: `url(${imageURL})`}" class="main__left"></div>
    <div class="main__right">
      <button  class="out" @click="backFun()">
        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26.5" cy="26.5" r="26" stroke="white" />
          <path d="M21.9166 21.2917L16.6041 26.5L21.9166 31.7083" stroke="white" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M36.3958 26.5H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button @click="$router.push('/random')" class="main__btn">Get random cocktail</button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@import url(../style.css);

.main {
  width: 100vw;
  min-height: 100%;
  display: flex;
  background: #141414;
}

.main__left {
  width: 50%;
  background-image: imageURL;
  background: center no-repeat;
  background-size: cover;
}

.main__right {
  padding: 185px 52px 52px 58px;
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}

.main__btn {
  background: #FF0F82;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  padding: 8px 16px;
  position: absolute;
  top: 32px;
  right: 40px;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
}
.main__btn:hover {
  background: #d40e6e;
}
.main__btn:active {
  background: #b60c5e;
}

.out {
  position: absolute;
  top: 35px;
  left: 35px;
  background-color: transparent;
  cursor: pointer;
}
.out:hover svg circle , .out:hover svg path {
  stroke: rgb(204, 204, 204);
  transition:  stroke 0.3s ease-in-out;
}
.out:active svg circle , .out:active svg path {
  stroke: rgb(163, 162, 162);
  transition:  stroke 0.3s ease-in-out;
}
</style>