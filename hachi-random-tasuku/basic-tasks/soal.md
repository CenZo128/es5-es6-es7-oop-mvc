# Tik Tok Viewer

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll

### HINTS

- Nama function  __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Directions

Implementasikan function :

    - splitSongName
        - Mengubah dari __papi-chulo__ menjadi __Papi Chulo__
        - Karakter '-' menjadi 'spasi'
        - Huruf pertama menjadi capital case

    - rankName
        - Terdapat 3 jenis rank :  
        - Top -> viewer lebih dari sama dengan 1000000
        - Middle -> viewer antara 300001 - 999999
        - Low -> viewer kurang dari sama dengan 300000
        
    - groupSongName
        - Me return hasil sesuai expected

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

```javascript
{
  <song_name>: { user: <user>, view: <view>, rank : <rank> },
  <song_name>: { user: <user>, view: <view>, rank : <rank> },
  <song_name>: { user: <user>, view: <view>, rank : <rank> }
}
```

Perhatikan contoh test case berikut:

```javascript
function splitSongName(str){
    // Code here
    
}
function rankName(num){
    // Code here

}
function groupSongName(data) {
  // Code disini
   
}


// TEST CASE
console.log(groupSongName([
    {
        user : "chikakiku",
        views: 1000000,
        song : "papi-chulo"
    },
    {
        user : "lisa Stream",
        views: 155700,
        song : "saranghae"
    },
    {
        user : "mr_jack",
        views: 720000,
        song : "mipan-zuzuzu"
    },
    {
        user : "12yes",
        views: 500000,
        song : "papi-chulo"
    },
    {
        user : "dj_cuap",
        views: 150000,
        song : "saranghae"
    },  
]))
/*
{
    "Papi Chulo" : {
        user : "chikakiku" ,
        view : 1000000,
        rank : "Top"
    },
    "Saranghae" : {
         user : "lisa Stream",
         view : 155700,
        rank : "Low"
    },
    "Mipan Zuzuzu" : {
        user : "mr_jack" ,
        view : 720000,
        rank : "Middle"
    }
}
*/
console.log(groupSongName([])) // [];
console.log(groupSongName()) // Insert data
```
