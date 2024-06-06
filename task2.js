// const names = [
//   "Abigail",
//   "Alexandra",
//   "Alison",
//   "Amanda",
//   "Angela",
//   "Bella",
//   "Carol",
//   "Caroline",
//   "Carolyn",
//   "Deirdre",
//   "Diana",
//   "Elizabeth",
//   "Ella",
//   "Faith",
//   "Olivia",
//   "Penelope",
// ];

// function searchName(search, arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase().includes(search)) {
//       result = [...result, arr[i]];
//     }
//   }
//   callback(result, 3);
// }

// function limit(arr, lim) {
//   let penampung = [];
//   for (let i = 0; i < lim; i++) {
//     if (arr[i] !== undefined) {
//       penampung = [...penampung, arr[i]];
//     }
//   }
//   console.log(penampung);
// }
// searchName("an", names, limit);

const names = [
  "Abigail",
  "alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];
const hurufKecil = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
  H: "h",
  I: "i",
  J: "j",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  O: "o",
  P: "p",
  Q: "q",
  R: "r",
  S: "s",
  T: "t",
  U: "u",
  V: "v",
  W: "w",
  X: "x",
  Y: "y",
  Z: "z",
};

function searchName(search, arr, callback) {
  //membuat search menjadi huruf kecil semua
  let cari = "";
  for (let i = 0; i < search.length; i++) {
    const karakter = search[i];
    cari += hurufKecil[karakter] || karakter;
  }

  // mengubah isi dalam array menjadi huruf kecil semua
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let pecahArr = arr[i];

    let kata = "";
    for (let i = 0; i < pecahArr.length; i++) {
      const karakter = pecahArr[i];
      kata += hurufKecil[karakter] || karakter;
    }
    result = [...result, kata];
  }

  // melakukan filterasi
  let container = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i].includes(cari)) {
      container = [...container, result[i]];
    }
  }
  callback(container, 3);
}

function limit(arr, lim) {
  let penampung = [];
  for (let i = 0; i < lim; i++) {
    if (arr[i] !== undefined) {
      penampung = [...penampung, arr[i]];
    }
  }
  console.log(penampung);
}
searchName("La", names, limit);
