import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function SoalArray() {
  // SOAL 1
  const hasilSoal1: number[] = [];
  for (let i = 0; i <= 9; i++) {
    hasilSoal1.push(i);
  }

  // SOAL 2
  const hasilSoal2: number[] = [];
  for (let i = 1; i <= 9; i++) {
    if (i % 2 !== 0) {
      hasilSoal2.push(i);
    }
  }

  // SOAL 3
  const hasilSoal3: number[] = [];
  for (let i = 1; i <= 8; i++) {
    if (i % 2 === 0) {
      hasilSoal3.push(i);
    }
  }

  // SOAL 4
  let array1: number[] = [1, 2, 3, 4, 5, 6];
  const hasilSoal4: number = array1[5];

  // SOAL 5
  let array2: number[] = [5, 2, 4, 1, 3, 5];
  const hasilSoal5: number[] = array2.slice().sort((a, b) => a - b);

  // SOAL 6
  let array3: string[] = [
    "selamat",
    "kalian",
    "melakukan",
    "perulangan",
    "array",
    "dengan",
    "for",
  ];

  // SOAL 7
  let array4: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const hasilSoal7: number[] = [];
  for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 === 0) {
      hasilSoal7.push(array4[i]);
    }
  }

  // SOAL 8
  let kalimat: string[] = ["saya", "sangat", "senang", "belajar", "javascript"];
  const hasilSoal8: string = kalimat.join(" ");

  // SOAL 9
  var sayuran: string[] = [];
  sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* SOAL 1 */}
      <View style={styles.box}>
        <Text style={styles.title}>1. Looping Sederhana</Text>
        {hasilSoal1.map((val) => (
          <Text key={val} style={styles.codeText}>{val}</Text>
        ))}
      </View>

      {/* SOAL 2 */}
      <View style={styles.box}>
        <Text style={styles.title}>2. Conditional Angka Ganjil</Text>
        {hasilSoal2.map((val) => (
          <Text key={val} style={styles.codeText}>{val}</Text>
        ))}
      </View>

      {/* SOAL 3 */}
      <View style={styles.box}>
        <Text style={styles.title}>3. Conditional Angka Genap</Text>
        {hasilSoal3.map((val) => (
          <Text key={val} style={styles.codeText}>{val}</Text>
        ))}
      </View>

      {/* SOAL 4 */}
      <View style={styles.box}>
        <Text style={styles.title}>4. Mengakses Elemen Array Index 5</Text>
        <Text style={styles.codeText}>{hasilSoal4}</Text>
      </View>

      {/* SOAL 5 */}
      <View style={styles.box}>
        <Text style={styles.title}>5. Mengurutkan Elemen Array</Text>
        <Text style={styles.codeText}>[ {hasilSoal5.join(", ")} ]</Text>
      </View>

      {/* SOAL 6 */}
      <View style={styles.box}>
        <Text style={styles.title}>6. Mengeluarkan Elemen Array dengan For</Text>
        {array3.map((kata, idx) => (
          <Text key={idx} style={styles.codeText}>{kata}</Text>
        ))}
      </View>

      {/* SOAL 7 */}
      <View style={styles.box}>
        <Text style={styles.title}>7. Mengeluarkan Elemen Angka Genap</Text>
        {hasilSoal7.map((val) => (
          <Text key={val} style={styles.codeText}>{val}</Text>
        ))}
      </View>

      {/* SOAL 8 */}
      <View style={styles.box}>
        <Text style={styles.title}>8. Menggabungkan Elemen Menjadi String</Text>
        <Text style={styles.codeText}>"{hasilSoal8}"</Text>
      </View>

      {/* SOAL 9 */}
      <View style={styles.box}>
        <Text style={styles.title}>9. Menambahkan Elemen Array</Text>
        <Text style={styles.codeText}>[</Text>
        {sayuran.map((item, idx) => (
          <Text key={idx} style={styles.codeText}>
            {"  "}'{item}'{idx < sayuran.length - 1 ? "," : ""}
          </Text>
        ))}
        <Text style={styles.codeText}>]</Text>
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
    marginBottom: 6,
    color: "#111827",
  },
  codeText: {
    fontFamily: "monospace",
    fontSize: 13,
    color: "#1F2937",
  },
});