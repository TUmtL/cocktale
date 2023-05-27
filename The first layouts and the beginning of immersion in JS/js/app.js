
import thar from './testmodul.js'
console.log(thar)
Vue.createApp({
  data() {
    return {
      grids: [
        { img: null, text: "test " },
        { img: null, text: "test " },
        { img: null, text: "test " },
        { img: null, text: "test " },

      ],
      text: 'here am i',
      photo: null,
      thata: 'href',
      href: 'vk.com',
      nums: 1 ,
      pages: 7 ,
      curentPage: 1,  
      machektest: '', 
    }
  },
  methods: {
    takeImg(e) {
      const file = e.target.files[0] // здесь я обращяюсь по эвенту к файлу
      console.log(file)
    },
    puss() {
      if (this.text != '') {
        this.grids.push({ img: this.grids.img, text: this.text, })
        this.text = ''
      }
    },
  },
  computed: {
    previewFilePath() {
      if (this.grids.img) {
        return URL.createObjectURL(this.grids.img)
      }
    },
    thates() {
      return this.grids.length * 2
    },
  },
  watch: {
    nums(val) {
      if(val > 4) {
        return this.nums = 0
      }
    }
  }
})
.component('test' , {
  data() {
    return {
      arrs:['test' , 'test' , 'test', 'test', 'test', 'test']
    }
  },
  props: ['title'],

  template: `
  <p :style="{fontSize: title + 'em'}" v-for="arr of arrs">
  {{arr}}

  </p>
  `
})
.mount('#app')