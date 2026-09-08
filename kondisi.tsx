import { StyleSheet, Text, View } from "react-native";

//soal1
    export default function tugas2() {
  //deklarasi variabel
     var nilai= 75;
     var lulus= nilai >= 75 ? "Selamat, Anda Lulus!" : "Maaf, Anda Belum Lulus.";
     // hasilnya belum bisa vote var angka = 9
     // var jenisBilangan = angka % 2 === 0 ? "Bilangan Genap" : "Bukan Bilangan Genap"
     // //hasilnya bukan bilangan genap
  const outputMessage = `Nilai= ${nilai}, ${lulus}`;
    console.log(outputMessage);

    return (
         <View>
         <Text>{outputMessage}</Text>
         </View>
   );
}
//soal2
// export default function tugas2() {
//   //deklarasi variabel
//   var suhuUdara = 38;
//   const statusCuaca =
//     suhuUdara > 35 ? "Peringatan: Cuaca Sangat Panas Hari Ini!" : "";

//   const outputMessage = `Suhu Udara= ${suhuUdara}°C, ${
//     statusCuaca !== "" ? statusCuaca : "Cuaca dalam kondisi normal."
//   }`;
//   console.log(outputMessage);

//   return (
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   );
// }

// soal 3
// export default function tugas2() {
//   //deklarasi variabel
//   var isLoggedIn = true;
//   var namaUser = "Andi";

//   const outputMessage = isLoggedIn ? `Halo, ${namaUser}!` : "Silakan Login Terlebih Dahulu";
//   console.log(outputMessage);

//   return (
//     <View>
//         <Text>{outputMessage}</Text>
//     </View>
//   );
// }

// soal 4
// export default function tugas2() {
//   //deklarasi variabel
//   var totalBelanja = 90000;

//   const statusDiskon =
//     totalBelanja > 500000
//       ? "Anda Mendapat Diskon 20%!"
//       : totalBelanja >= 200000
//       ? "Anda Mendapat Diskon 10%!"
//       : "Belanja lebih banyak untuk dapat diskon!";
//   const outputMessage = `Total Belanja= Rp ${totalBelanja}, ${statusDiskon}`;
//   console.log(outputMessage);

//   return (
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   );
// }

// soal 5
// export default function tugas2() {
//   //deklarasi variabel
//   var jamSekarang = 18;

//   const statusToko =
//     jamSekarang >= 8 && jamSekarang <= 17 ? "Toko Buka" : "Toko Tutup";

//   const outputMessage = `Jam Sekarang= ${jamSekarang}, ${statusToko}`;
//   console.log(outputMessage);

//   return (
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   );
// }

// soal 6
// export default function tugas6() {
//   //deklarasi variabel
//   var isDarkMode = false;

//   const backgroundColor = isDarkMode ? "#121212" : "#FFFFFF";
//   const textColor = isDarkMode ? "white" : "black";

//   const outputMessage = `Mode= ${isDarkMode ? "Dark Mode" : "Light Mode"}`;
//   console.log(outputMessage);

//   return (
//     <View style={{ backgroundColor: backgroundColor, flex: 1, padding: 20 }}>
//       <Text style={{ color: textColor }}>
//         {outputMessage}
//       </Text>
//     </View>
//   );
// }

// soal 7
// export default function tugas2() {
//   //deklarasi variabel
//   var password = "abc12";

//   const outputMessage = `Password= ${password}, Panjang= ${password.length}`;
//   console.log(outputMessage);

//   return (
//     <View>
//       <Text>Password: {password}</Text>

//       {password.length < 6 && (
//         <Text style={{ color: "red" }}>
//           Password terlalu pendek (minimal 6 karakter)
//         </Text>
//       )}
//     </View>
//   );
// }

// soal 8
// export default function tugas8() {
//   //deklarasi variabel
//   var jenisKendaraan = "Mobil";

//   const tarifParkir =
//     jenisKendaraan === "Mobil"
//       ? "Tarif Parkir: Rp 5.000 / jam"
//       : jenisKendaraan === "Motor"
//       ? "Tarif Parkir: Rp 2.000 / jam"
//       : "Jenis kendaraan tidak dikenali";

//   const outputMessage = `Jenis Kendaraan= ${jenisKendaraan}, ${tarifParkir}`;
//   console.log(outputMessage);

//   return (
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   );
// }

// soal 9
// export default function tugas2() {
//   //deklarasi variabel
//   var stokBarang = 5;

//   const statusStok =
//     stokBarang > 10
//       ? "Stok Tersedia"
//       : stokBarang >= 1
//       ? "Stok Terbatas! Segera Beli"
//       : "Stok Habis";

//   const warnaStok =
//     stokBarang > 10 ? "green" : stokBarang >= 1 ? "orange" : "red";

//   const outputMessage = `Stok Barang= ${stokBarang}, ${statusStok}`;
//   console.log(outputMessage);

//   return (
//     <View>
//       <Text style={{ color: warnaStok }}>{outputMessage}</Text>
//     </View>
//   );
// }

// soal 10
// export default function tugas2() {
//   //deklarasi variabel
//   var usiaPenonton = 15;

//   const kategoriFilm =
//     usiaPenonton < 13
//       ? "Kategori: Semua Umur (SU)"
//       : usiaPenonton <= 17
//       ? "Kategori: Remaja (R)"
//       : "Kategori: Dewasa (D)";

//   const outputMessage = `Usia Penonton= ${usiaPenonton}, ${kategoriFilm}`;
//   console.log(outputMessage);

//   return (
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   );
// }