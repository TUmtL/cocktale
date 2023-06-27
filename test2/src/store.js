import { defineStore } from "pinia";
export default defineStore('testStore' , {
  state(){
    return{
      listItems:[],
      selected:[],
      users:[],
    }
  },
  actions:{
    async listTake(){
      const raw = await fetch('https://jsonplaceholder.typicode.com/posts')
      const coocked = await raw.json()
      this.listItems = coocked
    },
    async userAdvance(){
      await this.userAdvanceGet()
      for(let i = 0 ; i < this.listItems.length  ; i++){
        let iu = Math.floor(i / 10)
        if(this.listItems[i].userId === this.users[iu]?.id) {
          this.listItems[i].user = this.users[iu]
        }
      }
    },
    async userAdvanceGet(){
      const raw = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const coocked = await raw.json()
      this.users = coocked
    }
  },
  getters:{
    beloved(){
      return this.listItems.filter(item => item.beloved === true)
    }
  }
})