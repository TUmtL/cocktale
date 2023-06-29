<template>
  <div>
    <p :class="{ red: item?.beloved === true }">{{ item?.id }}</p>
    <input v-if="$route.path === '/'" type="checkbox" :value="item" v-model="storePost.selected">
    <input v-if="$route.path === '/photo'" type="checkbox" :value="item" v-model="storePhoto.selected">
    <input v-if="$route.path === '/task'" type="checkbox" :value="item" v-model="storeTask.selected">
    <button v-if="$route.path != '/task'" @click="setLoved()">on beloved</button>
    <button v-if="$route.path === '/task'" @click="storeTask.completer(item)"><span v-if="item.completed === true">not
        complited</span> <span v-else-if="item.completed === false">complited</span></button>
    <button v-if="$route.path != '/photo' && $route.path != '/task'" @click="comentTake()">comment</button>
    <button @click="redactSet()">redact</button>
    <button @click="removeSelf()">remove</button>

    <div v-if="redacter === 0">
      <router-link :to="`/photo/${item?.id}`" style="color: rgba(255, 102, 0, 0.89) ;" v-if="$route.path === '/photo'">{{
        item?.user }}</router-link>
      <p v-else style="color: red ;"><span>{{ item?.user }}</span></p>
      <p :class="{'completed': item?.completed === true}">{{ item?.title }}</p>
      <p> {{ item?.body }} </p>
    </div>
    <div v-else>
      <input placeholder="title" v-model="titleRed" type="text">
      <input v-if="$route.path != '/photo' && $route.path != '/task'" placeholder="body" v-model="bodyRed" type="text">
      <select v-if="$route.path != '/task'" v-model="nameRED">
        <option v-for="user of this.store.users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
      <button @click="set()">redact</button>
      <button @click="cancel()">cancel</button>
    </div>
    <div v-if="comments != ''">
      <ul>
        <li v-for="comment of comments" :key="comment.id">
          {{ comment.id }} {{ comment.name }} {{ comment.email }}
          {{ comment.body }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import storePhoto from '../storePhoto'
import storePost from '../storePost'
import storeTask from '../storeTask'
export default {
  props: [
    'item', 'store'
  ],
  data() {
    return {
      comments: '',
      redacter: 0,
      nameRED: '',
      nameBack: '',
      titleRed: this.item.title,
      bodyRed: this.item.body,
    }
  },
  methods: {
    async removeSelf() {
      this.store.listItems = this.store.listItems.filter(item => item.id != this.item.id)
      if ($route.path === '/') {

      }
    },
    cancel() {
      this.redacter = 0
      this.titleRed = this.item.title
      this.bodyRed = this.item.body
      this.nameRED = ''
    },
    async set() {
      this.item.userId = this.nameRED
      if (this.nameRED != '') {
        this.item.user = this.store.users[this.nameRED - 1].name
        const patch = await fetch('https://jsonplaceholder.typicode.com/posts/' + this.item.id, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'userId': this.nameRED
          })
        })
      }
      if (this.titleRed != '') {
        this.item.title = this.titleRed
        const patch = await fetch('https://jsonplaceholder.typicode.com/posts/' + this.item.id, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'title': this.titleRed
          })
        })
      }
      if (this.bodyRed != '') {
        this.item.body = this.bodyRed
        const patch = await fetch('https://jsonplaceholder.typicode.com/posts/' + this.item.id, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'body': this.bodyRed
          })
        })
      }
      this.redacter = 0
    },
    redactSet() {
      if (this.redacter === 0) {
        this.redacter = 1
      } else {
        this.redacter = 0
      }
    },
    setLoved() {
      if (this.item.beloved === undefined || this.item.beloved === false) {
        this.item.beloved = true
      } else {
        this.item.beloved = false
      }
    },
    async comentTake() {
      if (this.comments === '') {
        const raw = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.item.id}`)
        const coocked = await raw.json()
        this.comments = coocked
      } else this.comments = ''
    },
  },
  computed: {
    storePhoto() {
      return storePhoto()
    },
    storePost() {
      return storePost()
    },
    storeTask() {
      return storeTask()
    }
  }
}
</script>

<style>
.red {
  color: red
}
.completed{
  color: green;
  text-decoration: line-through;
}
</style>