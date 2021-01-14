/**
 * ==============
 * Find the value of Y
 * ==================
 *
 * Mungkin kalian ingat persamaan linear seperti ini y = 2x + 3
 *
 * Tugas kalian adalah membuat sebuah fungsi yang akan mengembalikan nilai dari Y, fungsi ini akan menerima dua input:
 * - String yang merupakan persamaan yang ingin kita cari.
 * - Angka yang akan menggantikan variable x di dalam persamaan yang kita punya
 *
 * Contoh fungsi:
 *
 * Input
 * findTheY('2x+3', 2)
 *
 * Proses
 * 2 x (2) + 3
 *
 * Output
 * 7
 */

function findTheY(linearEquation, xValue) {
    let num = []
    let temp = [];
    let tempString = '';
    let total = 0;
    let numString = ''
    for (let i = 0; i < linearEquation.length; i++) {

        if (linearEquation[i] === '+') {
            num.push(numString);
            numString = '';
        } else {
                numString += linearEquation[i]
            if (i === linearEquation.length - 1) {
                num.push(numString);
                numString = '';

            }
        }
    }
    for(let i=0;i<num.length;i++){
        let outerLoop = num[i]
        for(let j=0;j<outerLoop.length;j++){
            if (outerLoop[j] === 'x') {
                total += +Number(tempString)*xValue ;
                tempString = '';
            } else {
                tempString += outerLoop[j];
                if (j === outerLoop.length - 1) {
                    total += +Number(tempString)*1 ;
                    tempString = '';
                }
            }
        }
    }
    return total;
}


console.log(findTheY('2x+3', 2)) // 7
console.log(findTheY('2x+3x', 3)) // 15
console.log(findTheY('3x', 5)) // 15

console.log(findTheY('3x+7x+10x', 2)) // 40
console.log(findTheY('3x+18+100x', 7)) // 739

console.log(findTheY('5+30+100x+25x+3', 1)) // 163
console.log(findTheY('1000x', 7)) // 7000

