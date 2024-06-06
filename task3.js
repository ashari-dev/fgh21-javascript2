function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAkhir > nilaiAwal) {
    if (dataArray.length > 5) {
      let result = [];
      for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
          result = [...result, dataArray[i]];
        }
      }
      if (result.length !== 0) {
        // console.log(result);
        let kondisi = false;
        while (!kondisi) {
          kondisi = true;
          for (let i = 1; i < result.length; i++) {
            if (result[i - 1] > result[i]) {
              kondisi = false;
              let temp = result[i - 1];
              result[i - 1] = result[i];
              result[i] = temp;
            }
          }
        }
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

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
