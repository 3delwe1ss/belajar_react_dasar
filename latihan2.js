const siswa = {
    nama: "Keonho",
    kelas: "11 RPL 2",
    nilai: 90
}

//const namaSiswa = siswa.nama;

const {nama, kelas, nilai} = siswa;
console.log(`Siswa bernama ${nama} dari ${kelas} mendapat nilai ${nilai}`);