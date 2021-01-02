//Planning hari ini
/**
 * 1. ES6
 * 2. High order function -> built in function dalam array : .forEach, .map, .filter, .reduce
 * 3. Destructuring array dan object
 */

// FRONT END : UI UX,  
// BACK END


 //Fase 1
 /**
  * Week 1 -> refresh fase 0, oop, intro mvc
  * Week 2 -> callback, asynch js : promise, mvc
  * Week 3 -> node + express, ejs, database SQL, db relation
  * Week 4 -> advanced express, apply db relational SQL  
  */

//Function
/**
 * 1. Declaration
 * 2. Expression
 * 3. Arrow
 */


 //Declaration
//  function tambah(a,b){
//      return a+b
//  }
 //Expression
//  const tambah = function(a,b){
//      return a+b
//  }

 //Arrow
//  const tambah = (a,b) => a+b

// console.log(tambah(1,2))

// const checkAngka = function(x){
//     if(x === 1){
//         return 1;
//     }else{
//         return "Bukan angka 1";
//     }
// }

// const checkAngka = x => x === 1 ? 1 : "Bukan angka 1"

// console.log(checkAngka(10))

//High order Function

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// 1. For Each

// fruits.forEach(x => console.log(x))

// 2. Map -> menghasilkan array baru

// const fruitsCopy = fruits.map(el => el)

// console.log(fruitsCopy)

// 3. Filter -> menghasilkan array baru sesuai kondisi

// const numbers = [10,5,2,15,17,7,12]

// Filter lebih dari 5

// const filterResult = numbers.filter(el => el === 5)

// console.log(filterResult)

//Destructuring array
// const fruits = ["Apple","Mango","Cherry","Orange","Banana"]

// const destructure = buah => {
//     // console.log(fruits)
//     // buah.forEach(el => {
//     //     console.log(el)
//     // })
//     const [ buah1,buah2,buah3 ] = buah

//     console.log(buah1);
//     console.log(buah[3]);
// }

// destructure(fruits)
