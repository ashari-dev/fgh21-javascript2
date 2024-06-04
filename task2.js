const names = [
  "Abigail","Alexandra","Alison","Amanda",
  "Angela","Bella","Carol","Caroline",
  "Carolyn","Deirdre","Diana","Elizabeth",
  "Ella","Faith","Olivia","Penelope",
];

function searchNames(search, jumMax) {
  const filterNama = names.filter(function (name) {
    name.toLowerCase().includes(search.toLowerCase());
  });
  return filterNama.slice(0, jumMax);
}

const hasilPencarian = searchNames("an", 3);
console.log(hasilPencarian);
