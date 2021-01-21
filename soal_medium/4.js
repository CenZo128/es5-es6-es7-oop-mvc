/**
 * Pilihan Makanan
 * 
 * Kamu dititipkan anak dari kakakmu dan diminta untuk
 * menjaganya selama 3 jam. Kebetulan tepat dengan jam
 * makan siang, jadi kamu bisa sekalian ajak makan.
 * 
 * Diberikan list harga makanan di restoran,
 * list alergi anaknya, dan budget untuk makan siang,
 * pilihlah makanan yang cocok untuk anak kakakmu.
 * 
 * note: jika tidak ada makanan yang cocok, kamu
 * akan pulang dan masak di rumah
 * 
 * dilarang memakai built-in function kecuali:
 * toString, String, Number, push, pop, Math, typeof, toLowerCase, toUpperCase, 
 * isNaN, isArray, parseInt, parseFloat, toFixed
 */

function pilihMakanan(menuResto, listAlergi, budget){

}

let menu = [
    ["ikan", 50000],
    ["ayam", 15000],
    ["roti tawar", 5500]
]
console.log(pilihMakanan(menu, ["kismis", "roti tawar", "ikan"], 50000))
// [ 'ayam' ]

console.log(pilihMakanan(menu, ["kismis", "kacang", "sapi panggang"], 50000))
// [ 'ikan', 'ayam', 'roti tawar' ]

console.log(pilihMakanan(menu, ["kismis", "kacang", "sapi panggang"], 15000))
// [ 'ayam', 'roti tawar' ]

console.log(pilihMakanan(menu, ["ayam", "ikan"], 5000))
// [ 'masak di rumah' ]

// ini jangan dihapus, jangan diubah
module.exports = pilihMakanan