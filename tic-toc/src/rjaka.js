// let arr = [1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,9,9,9,9,9,9,9,9,9,9,9,]
// // let arr = [1,1,1,1,1,1,1,1,1,1,21,34,34,267,72,211]

// function DDUplicate(arr) {
//   arr.sort((a, b) => a - b)
//   let some = []
//   arr.forEach((el , i) => {
//     if(el === arr[i+1]){
//       some.push(el)
//       some = [...new Set(some)]
//     }
//   })
//   some.forEach(elem =>{
//     arr = arr.filter(el => el != elem)
//   })
//   return arr
// }
// console.log(arr.sort((a, b) => a - b))
// console.log(DDUplicate(arr))
function gold(x){
  x -= 2
  const base = [1,1]
  for(let i = 0 ; i<x ; i++){
    base.push(base[base.length-1] + base[base.length-2])
  }
  return base.pop()
}

console.log(gold(25))