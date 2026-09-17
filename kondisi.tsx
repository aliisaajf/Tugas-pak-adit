import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function TugasKondisi() {
  // SOAL 1
  var nilai = 75;
  var lulus = nilai >= 75 ? "Selamat, Anda Lulus!" : "Maaf, Anda Belum Lulus.";
  const outputMessage1 = `Nilai= ${nilai}, ${lulus}`;
  console.log(outputMessage1);

  // SOAL 2 
  var suhuUdara = 38;
  const statusCuaca =
    suhuUdara > 35 ? "Peringatan: Cuaca Sangat Panas Hari Ini!" : "";
  const outputMessage2 = `Suhu Udara= ${suhuUdara}°C, ${
    statusCuaca !== "" ? statusCuaca : "Cuaca dalam kondisi normal."
  }`;
  console.log(outputMessage2);

  // SOAL 3 
  var isLoggedIn = true;
  var namaUser = "Andi";
  const outputMessage3 = isLoggedIn
    ? `Halo, ${namaUser}!`
    : "Silakan Login Terlebih Dahulu";
  console.log(outputMessage3);

  // SOAL 4 
  var totalBelanja = 90000;
  const statusDiskon =
    totalBelanja > 500000
      ? "Anda Mendapat Diskon 20%!"
      : totalBelanja >= 200000
      ? "Anda Mendapat Diskon 10%!"
      : "Belanja lebih banyak untuk dapat diskon!";
  const outputMessage4 = `Total Belanja= Rp ${totalBelanja}, ${statusDiskon}`;
  console.log(outputMessage4);

  // SOAL 5 
  var jamSekarang = 18;
  const statusToko =
    jamSekarang >= 8 && jamSekarang <= 17 ? "Toko Buka" : "Toko Tutup";
  const outputMessage5 = `Jam Sekarang= ${jamSekarang}, ${statusToko}`;
  console.log(outputMessage5);

  // SOAL 6 
  var isDarkMode = false;
  const backgroundColor = isDarkMode ? "#121212" : "#FFFFFF";
  const textColor = isDarkMode ? "white" : "black";
  const outputMessage6 = `Mode= ${isDarkMode ? "Dark Mode" : "Light Mode"}`;
  console.log(outputMessage6);

  // SOAL 7 
  var password = "abc12";
  const outputMessage7 = `Password= ${password}, Panjang= ${password.length}`;
  console.log(outputMessage7);

  // SOAL 8 
  var jenisKendaraan = "Mobil";
  const tarifParkir =
    jenisKendaraan === "Mobil"
      ? "Tarif Parkir: Rp 5.000 / jam"
      : jenisKendaraan === "Motor"
      ? "Tarif Parkir: Rp 2.000 / jam"
      : "Jenis kendaraan tidak dikenali";
  const outputMessage8 = `Jenis Kendaraan= ${jenisKendaraan}, ${tarifParkir}`;
  console.log(outputMessage8);

  // SOAL 9 
  var stokBarang = 5;
  const statusStok =
    stokBarang > 10
      ? "Stok Tersedia"
      : stokBarang >= 1
      ? "Stok Terbatas! Segera Beli"
      : "Stok Habis";
  const warnaStok =
    stokBarang > 10 ? "green" : stokBarang >= 1 ? "orange" : "red";
  const outputMessage9 = `Stok Barang= ${stokBarang}, ${statusStok}`;
  console.log(outputMessage9);

  // SOAL 10 
  var usiaPenonton = 15;
  const kategoriFilm =
    usiaPenonton < 13
      ? "Kategori: Semua Umur (SU)"
      : usiaPenonton <= 17
      ? "Kategori: Remaja (R)"
      : "Kategori: Dewasa (D)";
  const outputMessage10 = `Usia Penonton= ${usiaPenonton}, ${kategoriFilm}`;
  console.log(outputMessage10);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* SOAL 1 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 1</Text>
        <Text>{outputMessage1}</Text>
      </View>

      {/* SOAL 2 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 2</Text>
        <Text>{outputMessage2}</Text>
      </View>

      {/* SOAL 3 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 3</Text>
        <Text>{outputMessage3}</Text>
      </View>

      {/* SOAL 4 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 4</Text>
        <Text>{outputMessage4}</Text>
      </View>

      {/* SOAL 5 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 5</Text>
        <Text>{outputMessage5}</Text>
      </View>

      {/* SOAL 6 */}
      <View style={[styles.box, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>Soal 6</Text>
        <Text style={{ color: textColor }}>{outputMessage6}</Text>
      </View>

      {/* SOAL 7 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 7</Text>
        <Text>Password: {password}</Text>
        {password.length < 6 && (
          <Text style={{ color: "red" }}>
            Password terlalu pendek (minimal 6 karakter)
          </Text>
        )}
      </View>

      {/* SOAL 8 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 8</Text>
        <Text>{outputMessage8}</Text>
      </View>

      {/* SOAL 9 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 9</Text>
        <Text style={{ color: warnaStok }}>{outputMessage9}</Text>
      </View>

      {/* SOAL 10 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 10</Text>
        <Text>{outputMessage10}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 12,
    backgroundColor: "#F9FAFB",
  },
  box: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#111827",
  },
});