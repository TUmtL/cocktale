<template>
  <div>
    <button @click="curNum = 10">10 постов</button>
    <button @click="curNum = 20">20 постов</button>
    <button @click="curNum = 50">50 постов</button>
    <button @click="curNum = store.listItems.length + 2">все посты</button>
    <button @click="sortId()">sortID</button>
    <button @click="sortName()">sortName</button>
    <button @click="sortBeloved()">sortBeloved</button>
    <ul v-if="belovedInit === 0">
      <li v-for="(item, itemIndex) of storeItem" :key="itemIndex">
        <ListItem v-if="item != null" :item="item" :store="store" />
      </li>
    </ul>
    <ul v-else>
      <li v-for="(item, itemIndex) of store.beloved" :key="itemIndex">
        <ListItem v-if="item != null" :item="item" />
      </li>
    </ul>
    <div class="selected__menu" v-if="store.selected.length != 0">
      <button @click="selectBel()">Beloved</button> <br>
      <button @click="selectDel()">Del</button>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import storePhoto from '../storePhoto'
export default {
  components: {
    ListItem
  },
  data() {
    return {
      userId: '',
      body: '',
      title: '',
      curNum: 10,
      idInit: 0,
      nameInit: 0,
      belovedInit: 0
    }
  },
  methods: {
    selectBel(){
      for(let item of this.store.selected){
        if( item.beloved === false || item.beloved === undefined) item.beloved = true
        else item.beloved = false
      }
      this.store.selected = []
      
    },
    async selectDel(){
      for(let item1 of this.store.selected){
        this.store.listItems = this.store.listItems.filter(item => item.id != item1.id)
        fetch('https://jsonplaceholder.typicode.com/posts/' + item1.id , {
          method:'DELETE'
        })
      }
      this.store.selected = []

    },
    sortBeloved() {
      if (this.belovedInit === 0) this.belovedInit = 1
      else this.belovedInit = 0
    },
    sortId() {
      if (this.idInit === 0) {
        this.store.listItems.sort((a, b) => a.id - b.id)
        this.idInit = 1
      } else {
        this.store.listItems.reverse()
        this.idInit = 0
      }
    },
    sortName() {
      if (this.nameInit === 0) {
        this.store.listItems.sort((a, b) => {
          let fa = a.user.toLowerCase()
          let fb = b.user.toLowerCase()

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0
        })
        this.nameInit = 1
      } else {
        this.store.listItems.reverse()
        this.nameInit = 0
      }
    },
  },
  async created() {
    if(localStorage.getItem('photo') != null) this.store.listItems = JSON.parse(localStorage.getItem('photo'))
    else {await this.store.listTake()}
    setTimeout(() => this.store.userAdvance(), 100)
  },
  computed: {
    store() {
      return storePhoto()
    },
    storeItem() {
      const result = []
      for (let i = 0; i < this.curNum; i++) {
        result.push(this.store.listItems[i])
      }
      return result
    },
  },
  watch:{
    storeItem:{
      handler(val){
        localStorage.setItem('photo' , JSON.stringify(this.store.listItems))
      },
      deep:true
    }
  }
}
</script>

<style>
.selected__menu{
  position: fixed;
  left:0;
  top:40%;
}
</style>