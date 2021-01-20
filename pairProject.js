/*
    ============
    PAIR PROJECT
    ============

    [INSTRUCTION]
    saat nya phase 0 mengerjakan project secara pair ( berpasangan / berdua ).
    dalam pembagian kelompok student, ada kriteria yang harus dipenuhi yaitu
    setiap kelompok yang dipasangkan harus memiliki huruf depan ( inisial ) yang
    BERBEDA.

    pada kelas ini , jumlahnya selalu genap dan murid yang memiliki inisial yang sama
    tidak lebih dari 2 orang

    [EXAMPLE]
      input : ["Afifah", "Bayu", "Juminten", "Junaedi", "Iqbal", "Marimar""]
      output : ["Afifah dan Bayu", "Juminten dan Iqbal", "Junaedi dan Marimar"]

    [NOTES] :
    - jika murid berjumlah ganjil output : "Jumlah murid harus genap"
    - murid dengan inisial yang sama maksimal hanya 2 orang
    - murid dipasangkan dengan murid lain dengan inisial berbeda terdekat.

    [RULE]
    - dilarang menggunakan build in function 'match', 'indexOf', 'search', 'includes'

*/

// ["Afifah", "Bayu", "Juminten", "Junaedi", "Iqbal", "Marimar"]
// [false, false, "Juminten", "Junaedi", "Iqbal", "Marimar"]
// [false, false, false, "Junaedi", false, "Marimar"]
// [false, false, false, false, false, false]

// Afifah dan Bayu
// Juminten dan Iqbal
// Junaedi dan Marimar

function pairProject(names) {
    let result = []
    if (names.length % 2 === 1) {
        return "Students total should be even"
    } else {
        for (let i = 0; i < names.length; i++) {
            if (names[i]) {
                for (let j = i + 1; j < names.length; j++) {
                    if (names[j]) {
                        if (names[i][0] !== names[j][0]) {
                            result.push(`${names[i]} dan ${names[j]}`)
                            names[i]= false;
                            names[j]= false;
                            break;
                        }
                    }
                }
            }
        }
    }
    return result

}

console.log(pairProject(["Acong", "Afifah", "Charlie", "Samuel", "Daniel", "Wika", "Wiwin", "Mimin", "Rindu", "Semmi"]))
// [
//   'Acong dan Charlie',
//   'Afifah dan Samuel',
//   'Daniel dan Wika',
//   'Wiwin dan Mimin',
//   'Rindu dan Semmi' 
// ]

console.log(pairProject(["Afifah", "Bayu", "Juminten", "Junaedi", "Iqbal", "Marimar"]))
// ["Afifah dan Bayu", "Juminten dan Iqbal", "Junaedi dan Marimar"]

console.log(pairProject(["Afifah", "Bayu", "Juminten"]))
// jumlah murid harus genap
