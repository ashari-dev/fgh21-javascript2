const nilaiAwal = 5;
const nilaiAkhir = 20;
const dataArray = [2, 25, 4, 14, 17, 30, 8];

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAkhir > nilaiAwal && dataArray.length > 5) {
    const filterData = dataArray.filter(function (i) {
      return i >= nilaiAwal && i <= nilaiAkhir;
    });
    if (filterData.length > 0) {
      const hasil = filterData.sort((a, b) => a - b);
      console.log(hasil);
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
