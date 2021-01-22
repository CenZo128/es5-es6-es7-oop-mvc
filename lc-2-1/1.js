/**
    ALAY O'METER - SEBERAPA ALAY KAH ANDA? 

    Setelah meneliti dengan waktu yang cukup singkat, ilmuwan dari Perancis telah menemukan pola untuk emngetahui seberapa alaykah chat seseorang.
    - Karakter spasi tidak dihitung dalam sebuah kalimat
    - Huruf besar atau kcl tidak masalah
    - Kode berikut penyebab  membantu : 
        - @ -> 'a'
        - ! -> 'i'
        - # -> 'h'
    - Rumus alay adalah : (Jumlah kode alay) / (Jumlah total huruf) x 100%
    - Agar mudah buat jadi 2 angka di koma. (Gunakan .toFixed(2))

    Input : 
    [
        'Lucu sek@l! y@ng mul!@, h@h@', 
        'Hai, @ku g@nggu k@mu gak'
    ]
    Output : [29.16, 15.00] 

    BUAT PSEUDOCODE DARI SOAL DI ATAS, LALU BUAT SOLUSI CODING NYA
*/

function calculateAlay(input) {
    // code here

     
}

let input = [
    'Lucu sek@l! y@ng mul!@, h@h@',
    'Hai, @ku g@nggu k@mu gak'
]

console.log(calculateAlay(input))

module.exports = calculateAlay;