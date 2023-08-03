<template>
  <div>
    <h6 v-show="winner != '' && winner != 'draw'"> winner:{{ winner }}!</h6>
    <h6 v-show="winner === 'draw'"> draw :(</h6>
    <ul  class="plate">
      <li @click="playerMakeXorO(oneID)" v-for="(one , oneID) of ticToc" :key="oneID">
        {{ one }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ticToc:[' ',' ',' ',' ',' ',' ',' ',' ',' ',],
      player:'x',
      winner:'',
      turns:0
    }
  },
  methods:{
    playerMakeXorO(oneID){
      if (this.ticToc[oneID] === ' ' && this.winner === '') {
        this.ticToc[oneID] = this.player
        if(this.player === 'x') this.player = 'o'
        else this.player = 'x'
      }

    }
  },
  watch:{
    ticToc:{
      handler(val){
        if(val[0] === 'x'  &&  val[1] === 'x'  && val[2] === 'x' ) this.winner = 'x'
        if(val[0] === 'o'  &&  val[1] === 'o'  && val[2] === 'o' ) this.winner = '0'
        if(val[0] === 'x'  &&  val[3] === 'x'  && val[6] === 'x' ) this.winner = 'x'
        if(val[0] === 'o'  &&  val[3] === 'o'  && val[6] === 'o' ) this.winner = '0'
        if(val[2] === 'x'  &&  val[5] === 'x'  && val[8] === 'x' ) this.winner = 'x'
        if(val[2] === 'o'  &&  val[5] === 'o'  && val[8] === 'o' ) this.winner = '0'
        if(val[6] === 'x'  &&  val[7] === 'x'  && val[8] === 'x' ) this.winner = 'x'
        if(val[6] === 'o'  &&  val[7] === 'o'  && val[8] === 'o' ) this.winner = '0'
        if(val[2] === 'x'  &&  val[4] === 'x'  && val[6] === 'x' ) this.winner = 'x'
        if(val[2] === 'o'  &&  val[4] === 'o'  && val[6] === 'o' ) this.winner = '0'
        if(val[0] === 'x'  &&  val[4] === 'x'  && val[8] === 'x' ) this.winner = 'x'
        if(val[0] === 'o'  &&  val[4] === 'o'  && val[8] === 'o' ) this.winner = '0'
        if(val[1] === 'x'  &&  val[4] === 'x'  && val[7] === 'x' ) this.winner = 'x'
        if(val[1] === 'o'  &&  val[4] === 'o'  && val[7] === 'o' ) this.winner = '0'
        if(val[3] === 'x'  &&  val[4] === 'x'  && val[5] === 'x' ) this.winner = 'x'
        if(val[3] === 'o'  &&  val[4] === 'o'  && val[5] === 'o' ) this.winner = '0'
        this.ticToc.forEach(element => {
          if(element != ' ') {
            this.turns += 1
          }
        });
        if(this.turns === 45) this.winner = 'draw'
      },
      deep:true
    }
  }
}
</script>

<style>
.plate {
  display: grid;
  grid-template-columns: 20px 20px 20px;

}
.plate li {
  border: 1px solid black;
  text-align: center;
  min-width: 20px;
  min-height: 20px;
}
</style>