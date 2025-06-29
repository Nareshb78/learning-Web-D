const num1  = [1,2,3,5]
const num2 = [6,7,8,9,0]
const num3 = [...num1,...num2]
// console.log(num3)

// Falsy values
// false , 0 , null , 0n in BigInt , undefined , NaN , ""

// Truthy values
// "0" , 'false' ," ", [], {}, function(){} 

//Nullish coalescing Operator (??)

// let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// console.log(val1)

//For of loop

const myArray = [1,2,3,4,5]
const myArray2 = "n"
// for (const val of myArray) {
//     console.log(val)
// }
// for (const val of myArray2) {
//     console.log(val)
// }
const map = new Map()
map.set('In' , "India")

// for (const [key,value] of map) {
//     console.log(`Key is ${key} and value is ${value}`)
// }

// For in loop

// const languages = {
//     cpp : "C++",
//     py : "python",
//     rb : "Ruby"
// }

// for (const key in languages) {
//     console.log(languages[key])
// }

//For each

// myArray.forEach((item)=>{
//     console.log(item)
// })

// function print(item){
//     console.log(item);
// }
// myArray.forEach(print)

console.log(myArray.filter((item)=>item>=4))
