/**
1. push()
untuk memasukkan nilai kedalam array paling belakang
 */
const buah = ["pisang", "mangga", "anggur"];
buah.push("melon");
console.log(buah);

/**
2. forEach()
untuk melakukan perulangan dalam array
 */
const motor = ["beat", "nmax", "supra", "mio"];
motor.forEach((item) => {
  console.log(item);
});

/**
3. include()
untuk mengecek apakah pada elemen array memenuhi suatu kondisi atau tidak.
dengan output berupa boolean
 */

const angka = [1, 2, 3, 4, 5];
const ada = angka.includes(3);
const tidakAda = angka.includes(6);

console.log(`${ada} \n${tidakAda}`);

/**
4. filter()
untuk membuat sebuah array baru dengan memperhatikan kondisi tertentu
pada setiap elemen dari array yang sudah ada.
 */
const nomer = [1, 2, 3, 4, 5, 6, 7];
const nomerFilter = nomer.filter(function (item) {
  return item % 2 == 1;
});
console.log(nomerFilter);

/**
5. concat()
untuk mengabungkan 2 array menjadi 1
 */

const buah5 = ["angur", "apel", "jambu"];
const angka5 = [1, 2, 3];

const gabung = buah5.concat(angka5);
console.log(gabung);

/**
6.pop()
untuk menghapus item terakhir dari array
 */
const nama = ["bagas", "bagus", "harun", "maria"];
nama.pop();
console.log(nama);

/**
7.slice()
untuk mengambil salahsatu atau beberapa item dalam array
 */
const mobil = ["pajero", "fortuner", "inova", "avanza"];
console.log(mobil.slice(1, 3));

/**
8. unshift
untuk menambah item baru di awal array
 */
const num = [3, 4];
num.unshift(1, 2);
console.log(num);

/**
9. split()
untuk memisahkan string menjadiarray
 */
const myName = "Muhammad Ashari";
const pemisah = " ";
const hasil = myName.split(pemisah);

console.log(hasil);

/**
10.toUpperCase() & toLowerCase()
digunakan untuk mencetak string menjadi huruf besar/kecil
 */
const kata = "Hello Ashari";
const kecil = kata.toLowerCase();
const besar = kata.toUpperCase();
console.log(`upper case : ${besar}
lower case: ${kecil}`);
