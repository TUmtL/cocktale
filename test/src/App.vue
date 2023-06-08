<script>
import employe  from './components/employe.vue'
import employess from "./constance/constance.js"
export default {
  data() {
    return {
      name: '',
      lastName: '',
      experience: '',
      age: "",
      addres: '',
      employees: employess
    }
  },
  methods: {
    push(){
      const employe = {name:this.name , lastName:this.lastName, experience:this.experience , age:this.age , addres:this.addres}
      if (this.name != '' && this.lastName != '' && this.experience != '' && this.age != '' && this.addres != '') {
        this.employees.unshift(employe)
        this.name = ''
        this.lastName = ''
        this.age = ''
        this.experience = ''
        this.addres = ''
      }
    },
    edit(id){
      const redacted = this.employees.splice(id , 1)[0]
      this.name = redacted.name
      this.lastName = redacted.lastName
      this.age = redacted.age
      this.experience = redacted.experience
      this.addres = redacted.addres
    }
  },
  watch:{
    employees:{
      handler(Val){
        localStorage.setItem('employees' , JSON.stringify(Val))
      },
      deep:true
    }
  },
  components:{
    employe
  },
  created(){
    this.employees =  JSON.parse(localStorage.getItem('employees'))
  }
}
</script>

<template>
  <section class="main">
    <form  @submit.stop.prevent="push()" class="main-input-wrapper"> <!-- здесь я при помощи v-modal оброщаюсь к data из блока script-->
      <input v-model="name" type="text" placeholder="name">
      <input v-model="lastName" type="text" placeholder="last name">
      <input v-model="experience" type="text" placeholder="experience">
      <input v-model="age" type="text" placeholder="age">
      <input v-model="addres" type="text" placeholder="addres">
      <button type="submit">send</button> <!-- эта кнопка отправляет все данные в employees и стирает текст со всех полей -->
    </form>
    <ul class="employees-list">
      <li class="employees-item" v-for="(employe , id) of employees" :key="id">
        <employe :data="employe"></employe><!-- здесь я через проп data отправляю компаненту объект -->
         <button @click="edit(id)">редактировать</button><!-- тут кнопка получает id и заберает все данные перенося в текстовые поля выше -->
      </li>
    </ul>
  </section>
</template>

<style>
.main-input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
