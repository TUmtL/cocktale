<script>
import store from './store'
import componentr from './components/component.vue'
export default {
  computed: {
    store() {
      return store()
    }
  },
  data(){
    return{
      taker:'',
    }
  },
  methods: {
    log(e) {
      this.taker = e
    },
    auth(){
      this.store.something = !this.store.something
    }
  },
  components: {
    componentr
  }
}
</script>

<template>
  <div>
    <p>work store status:<span>{{ store.something }}</span></p>
    <input type="text" v-model="taker.text">
    <p>vue router status : good</p>
    <button @click="auth()"><span v-show="this.store.something === false">залогинся</span><span v-show="this.store.something === true">разлогинся</span></button>
    <router-link :to="'/first'">1</router-link><router-link :to="{name:'second'}">2</router-link>
   <router-view :props="'huh'" @emete="log"></router-view>
  </div>
</template>

<style scoped></style>
