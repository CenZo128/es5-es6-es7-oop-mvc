/**
 * Toko "Si Dia"
 * 
 * Toko "Si Dia" merupakan toko online yang menyediakan barang-barang keperluan "si dia". Vincent selaku pemilik toko tersebut ingin mengetahui jumlah dari harga terendah dan harga tertinggi dari kumpulan harga yang dimilikinya.
 * 
 * Contoh : 
 * let prices = [19, 5, 42, 2, 77]
 * Hasil yang di harapkan -> 79, karena 2 + 77 = 79
 * 
 * let prices = [10, 30, 5, 500]
 * Hasil yang di harapkan -> 510, karena 10 + 500
 * 
 * DIRECTIONS
 * ------------
 * Buatlah sebuah function yang memiliki 1 parameter scores berupa array. Lalu tentukan jumlah 2 harga terendah dan harga tertinggi dari scores yang diberikan.
 *  
 * RULES : Tidak boleh menggunakan built in function!!
 * */

function sumScores(scores) {
    // code disini
    let max = scores[0];
    let min = scores[0];

    for (let i = 0; i < scores.length; i++) {
        if (max < scores[i]) {
            max = scores[i]
        }
        if (min > scores[i]) {
            min = scores[i]
        } 
    }

    return max + min
}

console.log(sumScores([19, 5, 42, 2, 77]))
// 79

console.log(sumScores([10, 30, 5, 500]))
// 510

module.exports = sumScores