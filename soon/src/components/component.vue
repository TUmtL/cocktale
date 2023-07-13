<template>
  <div>
    1
    <button @click="emitThis()">clicks</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      datas:{text:'amabatakum'}
    }
  },
  props:[
    'props'
  ],

  methods:{
    emitThis(){
      this.$emit('emete' , this.datas)
    }
  }
}
</script>

<style>

</style>
