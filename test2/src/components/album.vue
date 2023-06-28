<template>
  <div>
    <ul class="picture__list">
      <li class="picture__list__item" v-for="picture of pictures" :key="picture.id">
        <img @click="(setImage(picture))" :src="picture.url" alt="я ожидал большего">
        <p>{{ picture.title }}</p>
      </li>
    </ul>
    <div @click="picInit = 0" class="big-pig" v-if="picInit === 1">
      <button class="closser" @click="picInit = 0">x</button>
      <img  style="width: 70%;" :src="picCur.url" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pictures: [],
      picInit: 0,
      picCur:{},
    }
  },
  methods: {
    async getAlbum() {
      const raw = await fetch(`https://jsonplaceholder.typicode.com/albums/${this.$route.path.split('/').pop()}/photos`)
      const coocked = await raw.json()
      this.pictures = coocked
    },
    setImage(picture) {
      this.picInit = 1
      this.picCur = picture
    }
  },
  created() {
    this.getAlbum()
  }
}
</script>

<style>
.picture__list {
  display: flex;
  flex-wrap: wrap;
}

.picture__list__item {
  flex-basis: 200px;
}

.picture__list__item:not(:nth-child(3n)) {
  margin-right: 10px;
}

.picture__list__item:not(:nth-last-child(-n + 2)) {
  margin-bottom: 10px;
}
.big-pig{
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.closser{
  position: absolute;
  top: 5px;
  right: 5px;
}


</style>