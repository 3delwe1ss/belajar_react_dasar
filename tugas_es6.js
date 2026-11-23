const products = [
  { nama: "Kaos Polos", harga: 75000 },
  { nama: "Sepatu Sneakers", harga: 350000 },
  { nama: "Tas Ransel", harga: 150000 }
];

const promosi = products.map((product) => {
  const status = product.harga > 100000 ? " - Barang mewah" : "";
  return `Promo spesial! ${product.nama} hanya IDR ${product.harga.toLocaleString("id-ID")}${status}`;
});

console.log("Daftar Promosi");
promosi.forEach((kalimat) => {
  console.log(kalimat);
});