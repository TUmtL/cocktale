<script >
  import leftTop from './topLeft.vue'
  import rightTop from './topRight.vue'
  import leftBottom from './leftBottom.vue'
  import rightBottom from './rightBottom.vue'
  import { useStore } from '../store'
  export default {
    components: {
      leftBottom , leftTop , rightBottom , rightTop
    },
    data(){
      return{
        datas:useStore()
      }
    }, 
  }
</script>

<template>
  <div class="page">
      <main class="main">
        <div class="container">
          <div class="laptop">
            <div class="sections">
              <leftTop :datas="datas"></leftTop>
              <rightTop :datas="datas"></rightTop>
            </div>
            <div class="sections">
              <leftBottom :datas="datas"></leftBottom>
              <rightBottom :datas="datas"></rightBottom>
            </div>
          </div>
        </div>
      </main>
    </div>
</template>

<style >

</style>
