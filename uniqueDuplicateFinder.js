/**
 * UNIQUE DUPLICATE FINDER
 * =======================
 * 
 * uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat. 
 * Function akan memberikan return object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.
 * 
 * Contoh:
 *   - Input  : uniqueFinder('saya dan SAYA suka makan nasi'))
 *   - Output : {
 *       unique: [ 'dan', 'suka', 'makan', 'nasi' ],
 *       duplicate: [ 'saya' ]
 *     }
 * 
 * RULES :
 *   - Kerjakan tanpa built-in function kecuali .push(), Number(), String(), .toString(), .toLowerCase(), .toUpperCase().
 */

function stringToArray(str){
    let result = [];
    let tempString = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            tempString += str[i].toLowerCase()
        }else{
            result.push(tempString)
            tempString = ''
        }
        if(i === str.length - 1){
            result.push(tempString)
            tempString = ''
        }
    }
    return result
}

console.log(stringToArray('saya dan SAYA suka makan nasi'))

function uniqueDuplicateFinder(str) {
  // Your code here
}

// console.log(uniqueDuplicateFinder('saya dan SAYA suka makan nasi'));
// {
//   unique: ['dan', 'suka', 'makan', 'nasi'],
//   duplicate: ['saya']
// }


// console.log(uniqueDuplicateFinder('dia percaya aku percaya'));
// {
//   unique: ['dia', 'aku'],
//   duplicate: ['percaya']
// }

module.exports = uniqueDuplicateFinder;
