<template>
  <div>
    <button @click="curNum = 10">10 постов</button>
    <button @click="curNum = 20">20 постов</button>
    <button @click="curNum = 50">50 постов</button>
    <button @click="curNum = store.listItems.length + 2">все посты</button>
    <button @click="sortId()">sortID</button>
    <button @click="sortName()">sortName</button>
    <button @click="store.listItems.sort()"></button>
    <ul>
      <li v-for="(item, itemIndex) of storeItem" :key="itemIndex">
        <ListItem v-if="item != null" :item="item" />
      </li>
    </ul>
    <form class="add__post" @submit.prevent="addPost()">
      <select v-model="userId">
        <option  v-for="user of store.users" :key="user.id" :value="user.id">
          {{ user.name }}
        </option>
      </select>
      <input v-model="title" placeholder="" type="text">
      <input v-model="body" placeholder="" type="text">
      <button type="submit">ОТПРАВИТЬ</button>
    </form>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import store from '../store'
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
      nameInit: 0
    }
  },
  methods: {
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
          let fa = a.user.name.toLowerCase(),
            fb = b.user.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
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
      body.user = this.store.users.find(item => item.id === this.userId)
      this.store.listItems.unshift(body)
    }
  },
  async created() {
    await this.store.listTake()
    await setTimeout(()=>this.store.userAdvance()  , 100)
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
  }
}
</script>

<style>
.add__post{
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>