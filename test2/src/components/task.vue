<template>
  <div>
    <button @click="sortId()">sortID</button>

    <div class="list__wrapper">
      <ul>
        <li>completed</li>
        <li v-for="(item, itemIndex) of complete" :key="itemIndex">
          <ListItem v-if="item != null" :item="item" :store="store" />
        </li>
      </ul>
      <ul>
        <li>not completed</li>
        <li v-for="(item, itemIndex) of notComplete" :key="itemIndex">
          <ListItem v-if="item != null" :item="item" />
        </li>
      </ul>
    </div>

    <div class="selected__menu" v-if="store.selected.length != 0">
      <button @click="selectBel()">Beloved</button> <br>
      <button @click="selectDel()">Del</button>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import store from '../storeTask'
export default {
  components: {
    ListItem
  },
  data() {
    return {
      userId: '',
      body: '',
      title: '',
      idInit: 0,
      nameInit: 0,
      belovedInit: 0,
      pages: 0
    }
  },
  methods: {
    selectBel() {
      for (let item of this.store.selected) {
        if (item.completed === false ) item.completed = true
        else item.completed = false
      }
      this.store.selected = []

    },
    async selectDel() {
      for (let item1 of this.store.selected) {
        this.store.listItems = this.store.listItems.filter(item => item.id != item1.id)
        fetch('https://jsonplaceholder.typicode.com/posts/' + item1.id, {
          method: 'DELETE'
        })
      }
      this.store.selected = []
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
  },
  async created() {
    if (localStorage.getItem('task') != null) this.store.listItems = JSON.parse(localStorage.getItem('task'))
    else {
      await this.store.listTake()
    }
  },
  computed: {
    store() {
      return store()
    },
    complete(){
      return this.store.listItems.filter(item => item.completed === true)
    },
    notComplete(){
      return this.store.listItems.filter(item => item.completed === false)
    }
  },
  watch: {
    complete: {
      handler(val) {
        localStorage.setItem('task', JSON.stringify(this.store.listItems))
      },
      deep: true
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

.selected__menu {
  position: fixed;
  left: 0;
  top: 40%;
}

.list__slider {
  position: fixed;
  right: 5px;
  top: 45%;
  display: flex;
  flex-direction: column;
}

.list__wrapper{
  display: flex;
  justify-content: space-between;
}
</style>