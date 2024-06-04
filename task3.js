const nilaiAwal = 20;
const nilaiAkhir = 30;
const dataArray = [2, 4, 5, 1, 8, 19];

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAkhir > nilaiAwal && dataArray.length > 5) {
    const filterData = dataArray.filter(function (i) {
      return i >= nilaiAwal && i <= nilaiAkhir;
    });
    if (filterData.length > 0) {
      console.log(filterData);
    } else {
      console.log("Nilai tidak ditemukan");
    }
  } else if (dataArray.length < 5) {
    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  } else {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  }
}

seleksiNilai(nilaiAwal, nilaiAkhir, dataArray);
