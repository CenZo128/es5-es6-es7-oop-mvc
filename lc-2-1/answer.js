/**
ALAY O'METER
SEBERAPA ALAY KAH ANDA?

Input : 
[
    'Lucu sek@l! y@ng mul!@, h@h@', 
    'Hai, @ku g@nggu k@mu gak'
]
Output : [29.16, 15] 

Setelah meneliti dengan waktu yang cukup singkat, ilmuwan dari Perancis telah menemukan pola untuk emngetahui seberapa alaykah chat seseorang.
- Karakter spasi tidak dihitung dalam sebuah kalimat
- Huruf besar atau kcl tidak masalah
- Kode berikut penyebab  membantu : 
    - @ -> 'a'
    - ! -> 'i'
    - # -> 'h'
- Rumus alay adalah : (Jumlah kode alay) / (Jumlah total huruf) x 100%
- Agar mudah buat jadi 2 angka di koma. (Gunakan .toFixed(2))

    BUAT PSEUDOCODE DARI SOAL DI ATAS, LALU BUAT SOLUSI CODING NYA
*/

/**
 * PSEUDOCODE
    
    STORE string TO input
    STORE 0 TO flagAlay
    STORE 0 to flagInput
    
 */

let input = [
    'Lucu sek@l! y@ng mul!@, h@h@', 
    'Hai, @ku g@nggu k@mu gak'
 ]
 let flagAlay = 0;
 let flagInput = 0;
 let alay  = []
 for (let a = 0; a < input.length; a++) {
     for (let i = 0; i < input[a].length; i++) {
         if (input[a][i] === '@' || input[a][i] === '!') {
             flagAlay++
         }
         if (input[a][i] !== ' ') {
             flagInput++
         }
     }
     alay.push(flagAlay / flagInput * 100)
     flagAlay = 0
     flagInput = 0 
 }
 console.log(alay)

