const searchName = function (search, batas, callback) {
  const names = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabets",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];
  const hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const hurufKecil = "abcdefghijklmnopqrstuvwxyz";
  let searchResult = [];

  let search2 = "";
  for (let i = 0; i < search.length; i++) {
    let converted = false;
    for (let j = 0; j < hurufBesar.length; j++) {
      if (converted === false) {
        if (search[i] === hurufBesar[j]) {
          search2 += hurufKecil[j];
          converted = true;
        }
        if (j === 25) {
          if (search[i] !== hurufBesar[j]) {
            search2 += search[i];
            converted = true;
          }
        }
      }
    }
  }
  console.log(search2);

  for (let i = 0; i < names.length; i++) {
    const personName = names[i];
    let result = "";
    for (let i = 0; i < personName.length; i++) {
      let converted = false;
      for (let j = 0; j < hurufBesar.length; j++) {
        if (converted === false) {
          if (personName[i] === hurufBesar[j]) {
            result += hurufKecil[j];
            converted = true;
          }
          if (j === 25) {
            if (personName[i] !== hurufBesar[j]) {
              result += personName[i];
              converted = true;
            }
          }
        }
      }
    }

    let isFound = false;
    for (let m = 0; m < result.length; m++) {
      let segmen = "";
      if (result[m + 1] !== undefined) {
        segmen = result[m] + result[m + 1];
      } else {
        segmen = result[i];
      }
      if (segmen === search2) {
        isFound = true;
      }
    }
    if (isFound === true) {
      searchResult = [...searchResult, personName];
    }
  }
  console.log(searchResult);
  callback(searchResult, batas);
};

function limited(arr, lim) {
  let result = [];
  for (let a = 0; a < lim; a++) {
    if (arr[a]) {
      result = [...result, arr[a]];
    }
  }
  console.log(result);
}

searchName("an", 3, limited);
