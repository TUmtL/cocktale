import { defineStore } from "pinia";
export default defineStore('taskStore' , {
  state(){
    return{
      listItems:[],
      selected:[],
      users:[],
    }
  },
  actions:{
    async listTake(){
      await this.userAdvance()
      const raw = await fetch('https://jsonplaceholder.typicode.com/todos')
      const coocked = await raw.json()
      this.listItems = coocked
    },
    async userAdvance(){
      for(let i = 0 ; i < this.listItems.length  ; i++){
        let iu = Math.floor(i / 20)
        if(this.listItems[i].userId === this.users[iu]?.id) {
          this.listItems[i].user =  this.users[iu].name  
        }
      }
    },
    completer(item){
      if(item.completed === false) item.completed = true
      else item.completed = false
    }
  },
  getters:{

  },
  
})