/*
TEMBAK TARGET
=============

Tembak target adalah  sebuah permainan yang menembak target dengan melalui beberapa rintangan sampai tembakan bisa menembus target.

Diberikan sebuah function dengan nama tembakTarget dan menerima 1 parameter berupa array dengan format sebagai berikut: 

- TEMBAKAN dimulai dari index 0, TARGET berada pada index terakhir dan RINTANGAN (bisa berupa pohon atau batu) berada di antara TEMBAKAN dan TARGET.
- terdapat 4 element yang akan di isi ke dalam array sebagai berikut:
"S" = tembakan
"P" = pohon
"B" = batu
"T" = Target
" " or (space) = ABAIKAN saja

PENTING!: Tembakan hanya bisa menembus maksimal 2 pohon dan tidak bisa menembus batu.

Buatlah pseudocode dan program untuk menyelesaikan masalah ini!

Contoh 1:
Input: ["S", " ", " ", " ", " ", "T"]
Ilustrasi: S --> " " --> " " --> " " --> " " --> "T"
Output: Target terkena tembakan

Contoh 2:
Input: ["S", " ", "P", "P", " ", "T"]
Ilustrasi: S --> " " --> "P" --> "P" --> " " --> "T" 
Output: tembakan menembus 2 pohon dan target terkena tembakan

Contoh 3: 
Input: ["S", " ", "B", "P", " ", "T"]
Ilustrasi: S --> " " --x "B" // tembakan tidak bisa menembus batu
Output: tembakan tidak menembus batu dan target tidak terkena tembakan

NOTES:
    - Dilarang menggunakan built-in function apapun
    - Wajib menuliskan PSEUDOCODE!
*/

/*
TULIS PSEUDOCODE DISINI YA OPPA/NUNA!
...

*/



function tembakTarget(arr) {
 // code-nya oppa atau nuna bisa tulis dsni ya. -_<

}

console.log(tembakTarget(["S", " ", " ", " ", " ", "T"]))  // target terkena tembakan
console.log(tembakTarget(["S", " ", "P", "P", " ", "T"])) // tembakan menembus 2 pohon dan target terkena tembakan
console.log(tembakTarget(["S", " ", "B", "P", " ", "T"])) // tembakan tidak menembus batu dan target tidak terkena tembakan
console.log(tembakTarget(["S", "P", " ", " ", "B", "T"])) // tembakan tidak menembus batu dan target tidak terkena tembakan
console.log(tembakTarget(["S", "P", " ", " ", " ", "T"]))  // tembakan menembus 1 pohon dan target terkena tembakan
console.log(tembakTarget(["S", "P", "P", "P", " ", "T"]))  // tembakan tidak menembus 3 pohon dan target tidak terkena tembakan

module.exports = tembakTarget
