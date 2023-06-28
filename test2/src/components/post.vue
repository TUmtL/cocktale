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
    <form class="add__post" @submit.prevent="addPost()">
      <select v-model="userId">
        <option v-for="user of store.users" :key="user.id" :value="user.id">
          {{ user.name }}
        </option>
      </select>
      <input v-model="title" placeholder="" type="text">
      <input v-model="body" placeholder="" type="text">
      <button type="submit">ОТПРАВИТЬ</button>
    </form>
    <div class="selected__menu" v-if="store.selected != 0">
      <button @click="selectBel()">Beloved</button> <br>
      <button @click="selectDel()">Del</button>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import store from '../storePost'
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
      // this.store.beloved.push(this.store.selected)
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
    async addPost() {
      const body = {
        body: this.body,
        userId: this.userId,
        title: this.title,
      }
      const raw = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ body })
      })
      body.id = this.store.listItems.length + 1
      body.user = this.store.users.find(item => item.id === this.userId).name
      this.store.listItems.unshift(body)
    }
  },
  async created() {
    if(localStorage.getItem('post') != null) this.store.listItems = JSON.parse(localStorage.getItem('post'))
    else {
    await this.store.listTake()
    }
    await setTimeout(() => this.store.userAdvance(), 100)
  },
  computed: {
    store() {
      return store()
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
        localStorage.setItem('post' , JSON.stringify(this.store.listItems))
      },
      deep:true
    }
  }
}
</script>

<style>
.add__post {
  position: fixed;
  right: 0;
  bottom: 0;
}
.selected__menu{
  position: fixed;
  left:0;
  top:40%;
}
</style>