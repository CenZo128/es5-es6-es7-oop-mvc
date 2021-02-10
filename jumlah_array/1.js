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
 * Hasil yang di harapkan -> 505, karena 5 + 500
 * 
 * DIRECTIONS
 * ------------
 * Buatlah sebuah function yang memiliki 1 parameter prices berupa array. Lalu tentukan jumlah 2 harga terendah dan harga tertinggi dari prices yang diberikan.
 *  
 * RULES : Tidak boleh menggunakan built in function!!
 * */

function sumPrices(prices) {
    // code disini
    let max = -Infinity; // mencari harga max
    let min = Infinity; // mencari harga min

    for (let i = 0; i < prices.length; i++) {
        if (max < prices[i]) {
            max = prices[i]
        }
        if (min > prices[i]) {
            min = prices[i]
        } 
    }

    return max + min
}

console.log(sumPrices([19000, 5000, 42000, 2000, 77000]))
// 79000

console.log(sumPrices([10000, 30000, 5000, 500000]))
// 505000

module.exports = sumPrices