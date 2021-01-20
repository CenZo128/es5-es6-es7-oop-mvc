//Function Declaration
// function print(){
//     console.log("Ini declaration");
//     return 1
// }

// Invoke Function
// print();

// console.log(print())

// function tambah(n){
// if(n === undefined){
//     return "Tidak ada parameter"
// }else{
//     return n
// }
// Ternary -> Shorthand
// return n === undefined ?  "Tidak ada parameter" :  n
// }

//Arrow Function
// let tambah = (n) => n === undefined ? "Tidak ada parameter" : n

/**
 * 
 * let input = [1,2,3,4,5,6,7,8,9]
 * 
 * output : [
 *      [1,3,5,7,9], [2,4,6,8]
 * ]
 * 
 * Gunakan Modular Function : 3 Function -> checkGenap, checkGanjil, printHasil
 * 
 */

// Algoritma
/**
 * 1. Buat variables
 *  1.1 Array temp
 *  1.2 Result = [[],[]]
 * 2. Buat iterasi
 * 3. Input.length
 */

// function checkGenap(n) {
//     let result = [];
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] % 2 === 0) {
//             result.push(n[i])
//         }
//     }
//     return result
// }

// function checkGanjil(n) {
//     let result = [];
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] % 2 === 1) {
//             result.push(n[i])
//         }
//     }
//     return result
// }

function checkGenap(n) {
    if(n % 2 === 0){
        return true
    }
}

function checkGanjil(n) {
    if(n % 2 === 1){
        return true
    }
}

function printHasil(input) {

    let result = [[],[]]
    for(let i = 0; i < input.length; i++){
        if(checkGenap(input[i]) === true){
            result[1].push(input[i])
        }else if(checkGanjil(input[i]) === true){
            result[0].push(input[i])
        }
    }
    return result

    // Mr Rama
    // let genap = checkGenap(input)
    // let ganjil = checkGanjil(input)
    // return [ganjil,genap]
}

console.log(printHasil([1, 2, 3, 4, 5, 6, 7, 8, 9]))