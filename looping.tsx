import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function TugasLooping() {
  //SOAL 1 
  var hasil1: string[] = [];
  for (let i = 1; i <= 8; i++) {
    hasil1.push("Tiket antrean nomor: " + i);
  }
  console.log(hasil1);

  //SOAL 2
  var hasil2: string[] = [];
  for (let i = 5; i >= 1; i--) {
    hasil2.push(i.toString());
  }
  hasil2.push("Roket Meluncur!");
  console.log(hasil2);

  //SOAL 3
  var hasil3: string[] = [];
  var jumlah3 = 0;
  for (var deret3 = 5; deret3 > 0; deret3--) {
    jumlah3 += deret3;
    hasil3.push("Total poin saat ini: " + jumlah3);
  }
  console.log(hasil3);

  //SOAL 4 
  var hasil4: string[] = [];
  for (var deret4 = 2; deret4 < 10; deret4 += 2) {
    hasil4.push("Meja VIP nomor: " + deret4);
  }
  console.log(hasil4);

  //SOAL 5 
  var hasil5: string[] = [];
  for (let i = 0; i <= 6; i++) {
    if (i === 3) {
      hasil5.push("Peringatan: Suhu Mesin Stabil!");
    } else {
      hasil5.push(i.toString());
    }
  }
  console.log(hasil5);

  //SOAL 6 
  var hasil6: string[] = [];
  var flag6 = 1;
  while (flag6 < 10) {
    hasil6.push("Memanggil nasabah antrean ke-" + flag6);
    flag6++;
  }
  console.log(hasil6);

  //SOAL 7 
  var hasil7: string[] = [];
  var jumlah7 = 0;
  var deret7 = 4;
  while (deret7 > 0) {
    jumlah7 += deret7;
    deret7--;
    hasil7.push("Jumlah tabungan saat ini: " + jumlah7);
  }
  console.log(hasil7);

  //SOAL 8 
  var hasil8: string[] = [];
  var i8 = 0;
  while (i8 < 5) {
    if (i8 === 3) {
      hasil8.push("Awas Halangan Dekat!");
    } else {
      hasil8.push("Iterasi ke-" + i8);
    }
    i8++;
  }
  console.log(hasil8);

  //SOAL 9
  var hasil9: string[] = [];
  var flag9 = 1;
  while (flag9 < 10) {
    hasil9.push("Iterasi ke-" + flag9);
    flag9++;
  }
  console.log(hasil9);

  //SOAL 10 
  var hasil10: string[] = [];
  for (let nomorKupon = 1; nomorKupon <= 10; nomorKupon++) {
    if (nomorKupon % 2 === 0) {
      hasil10.push("Kupon nomor " + nomorKupon + ": Kupon Genap");
    } else {
      hasil10.push("Kupon nomor " + nomorKupon + ": Kupon Ganjil");
    }
  }
  console.log(hasil10);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* SOAL 1 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 1</Text>
        {hasil1.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>

      {/* SOAL 2 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 2</Text>
        {hasil2.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>

      {/* SOAL 3 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 3</Text>
        {hasil3.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>

      {/* SOAL 4 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 4</Text>
        {hasil4.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>

      {/* SOAL 5 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 5</Text>
        {hasil5.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>

      {/* SOAL 6 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 6</Text>
        {hasil6.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>

      {/* SOAL 7 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 7</Text>
        {hasil7.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>

      {/* SOAL 8 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 8</Text>
        {hasil8.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>

      {/* SOAL 9 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 9</Text>
        <Text style={{ fontStyle: "italic", marginBottom: 6 }}>
          Penjelasan: Kode asli tanpa flag++ akan Infinite Loop karena kondisi flag {"<"} 10 selalu true.
        </Text>
        {hasil9.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>

      {/* SOAL 10 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 10</Text>
        {hasil10.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
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