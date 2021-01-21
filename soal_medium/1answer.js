/*
TEMBAK TARGET
=============

Tembak target adalah  sebuah permainan yang menembak target dengan melalui beberapa rintangan sampai tembakan bisa menembus target.

Diberikan sebuah function dengan nama tembakTarget dan menerima 1 parameter berupa array dengan format sebagai berikut: 

- TEMBAKAN dimulai dari index 0, TARGET berada pada index terakhir dan RINTANGAN (bisa berupa pohon atau batu) berada di antara TEMBAKAN dan TARGET.
- terdapat 4 element yang akan di isi ke dalam array sebagai berikut:
S = tembakan
P = pohon
B = batu
T = Target
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

BEGIN tembakTarget
    PASS IN: arr AS ARRAY WITH ANY VALUE

    STORE `pohon` AS NUMBER WITH 0

    // for i = 0; i < arr.length - 1; i++
    FOR i FROM 1 TO (length OF arr MINUS 2) INCREMENT BY i

        IF `arr[i]` EQUAL "P" THEN
            SET `pohon` WITH `pohon` PLUS 1
        ELSE
            PASS OUT: "tembakan tidak menembus batu dan target terkena tidak terkena tembakan"
        END IF

    END FOR


    IF `pohon` EQUAL 0 THEN
        PASS OUT: "target terkena tembakan"
    ELSE IF `pohon` LESS THAN EQUAL 2 THEN
        PASS OUT: "tembakan menembus " CONCAT `pohon` CONCAT " pohon dan target terkena tembakan"
    ELSE
        PASS OUT: "tembakan tidak menembus " CONCAT `pohon` CONCAT " pohon dan target tidak terkena tembakan"
    END IF

END tembakTarget



*/



function tembakTarget(arr) {

    let pohon = 0

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] === "P") {
            pohon++
        }else if (arr[i] === "B") { // konditional output ketemu batu 
            return `tembakan tidak menembus batu dan target tidak terkena tembakan`
        }
    }

    // konditional output
    if (pohon === 0) { // ketika tidak ketemu pohon dan batu
        return `target terkena tembakan`
    }else if (pohon <= 2) { // ketika ketemu pohon, max 2   
        return `tembakan menembus ${pohon} pohon dan target terkena tembakan`
    }else { // ketika ketemu 3 pohon ke atas
        return `tembakan tidak menembus ${pohon} pohon dan target tidak terkena tembakan`
    }
}

console.log(tembakTarget(["S", " ", " ", " ", " ", "T"]))  // target terkena tembakan
console.log(tembakTarget(["S", " ", "P", "P", " ", "T"])) // tembakan menembus 2 pohon dan target terkena tembakan
console.log(tembakTarget(["S", " ", "B", "P", " ", "T"])) // tembakan tidak menembus batu dan target tidak terkena tembakan
console.log(tembakTarget(["S", "P", " ", " ", "B", "T"])) // tembakan tidak menembus batu dan target tidak terkena tembakan
console.log(tembakTarget(["S", "P", " ", " ", " ", "T"]))  // tembakan menembus 1 pohon dan target terkena tembakan
console.log(tembakTarget(["S", "P", "P", "P", " ", "T"]))  // tembakan tidak menembus 3 pohon dan target tidak terkena tembakan

module.exports = tembakTarget