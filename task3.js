const awal = 5;
const akhir = 10;
const data = [2, 3, 7, 9, 10, 13, 8, 14, 7];

function seleksiNilai(awal, akhir, data) {
  if (akhir > awal) {
    if (data.length > 5) {
      let result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i] > awal && data[i] < akhir) {
          result = [...result, data[i]];
        }
      }
      if (result.length !== 0) {
        console.log(result);
      } else {
        console.log("nilai tidak ditemukan");
      }
    } else {
      console.log("data array harus lebih dari 5");
    }
  } else {
    console.log("nilai awal harus lebih kecil dari nilai akhir");
  }
}

seleksiNilai(awal, akhir, data);
