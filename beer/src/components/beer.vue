<script>
export default {
  data() {
    return {
      beer: '',
    }
  },
  methods: {
    async getBeer() {
      if (this.id != 'random') {
        const raw = await fetch(`https://api.punkapi.com/v2/beers/${this.id}`)
        const coocked = await raw.json()
        this.beer = coocked[0]
      } else if (this.id === 'random') {
        const raw = await fetch(`https://api.punkapi.com/v2/beers/random`)
        const coocked = await raw.json()
        this.beer = coocked[0]
      }
    }
  },
  computed: {
    id() {
      return this.$route.path.split('/').pop()
    }
  },
  created() {
    this.getBeer()
  }
}
</script>

<template>
  <section class="container">
    {{ beer.id }}
  </section>
</template>


<style></style>