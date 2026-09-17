import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  ImageSourcePropType,
  FlatList,
  Modal,
  ActivityIndicator,
  SectionList,
  TouchableOpacity,
  Switch,
} from "react-native";

// ==================== SOAL 1 ====================
interface UserCardProps {
  name: string;
  status: string;
  imageSource: ImageSourcePropType;
}

function UserCard({ name, status, imageSource }: UserCardProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
      <Image
        source={imageSource}
        style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
        <Text style={{ color: "gray" }}>{status}</Text>
      </View>
    </View>
  );
}

// ==================== SOAL 2 ====================
function LoginForm() {
  return (
    <View style={{ gap: 10 }}>
      <TextInput
        placeholder="Masukkan Email"
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 8, borderRadius: 6 }}
      />
      <TextInput
        placeholder="Masukkan Password"
        secureTextEntry
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 8, borderRadius: 6 }}
      />
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#0056b3" : "#007AFF",
          padding: 10,
          borderRadius: 6,
          alignItems: "center",
        })}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
      </Pressable>
    </View>
  );
}

// ==================== SOAL 3 ====================
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
      <Pressable
        onPress={() => setCount(count - 1)}
        style={{ backgroundColor: "#ff4d4d", paddingHorizontal: 15, paddingVertical: 8, borderRadius: 6 }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>-</Text>
      </Pressable>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{count}</Text>
      <Pressable
        onPress={() => setCount(count + 1)}
        style={{ backgroundColor: "#2ed573", paddingHorizontal: 15, paddingVertical: 8, borderRadius: 6 }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>+</Text>
      </Pressable>
    </View>
  );
}

// ==================== TAMBAHAN SOAL 3 (FLATLIST) ====================
function ProductList() {
  const products = Array.from({ length: 50 }, (_, i) => ({
    id: i.toString(),
    name: `Produk Toko #${i + 1}`,
  }));

  return (
    <View style={{ height: 180 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        nestedScrollEnabled
        renderItem={({ item }) => (
          <View style={{ padding: 8, borderBottomWidth: 1, borderBottomColor: "#eee" }}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

// ==================== SOAL 4 ====================
function Soal4() {
  const categories = ["React Native", "TypeScript", "UI/UX", "Expo", "Backend", "Database"];
  const articles = Array.from({ length: 5 }, (_, i) => `Artikel Pembelajaran #${i + 1}`);

  return (
    <View style={{ height: 240 }}>
      <View style={{ height: 45, marginBottom: 8 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <View key={index} style={styles.categoryChip}>
              <Text style={{ color: "white", fontWeight: "bold" }}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={{ flex: 1 }} nestedScrollEnabled>
        {articles.map((item, index) => (
          <View key={index} style={styles.articleCard}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>{item}</Text>
            <Text style={{ color: "#666", marginTop: 2, fontSize: 12 }}>
              Konten materi pembelajaran interaktif vertikal.
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// ==================== SOAL 5 ====================
interface MyButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "success" | "danger";
}

function MyButton({ title, onPress, variant = "primary" }: MyButtonProps) {
  const getBackgroundColor = () => {
    switch (variant) {
      case "success": return "#2ed573";
      case "danger": return "#ff4757";
      case "primary": default: return "#1e90ff";
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.customBtn,
        { backgroundColor: getBackgroundColor(), opacity: pressed ? 0.8 : 1 },
      ]}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
    </Pressable>
  );
}

function Soal5() {
  return (
    <View style={{ gap: 8 }}>
      <MyButton title="Tombol Primary" variant="primary" onPress={() => {}} />
      <MyButton title="Tombol Success" variant="success" onPress={() => {}} />
      <MyButton title="Tombol Danger" variant="danger" onPress={() => {}} />
    </View>
  );
}

// ==================== SOAL 6 ====================
function Soal6() {
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <View>
      <Pressable style={[styles.customBtn, { backgroundColor: "#70a1ff" }]} onPress={handleFetch}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Fetch Data</Text>
      </Pressable>

      <Modal transparent visible={loading} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#1e90ff" />
            <Text style={{ marginTop: 12, fontWeight: "bold" }}>Memuat data...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// ==================== SOAL 7 ====================
function CustomImage({ uri }: { uri: string }) {
  const [loading, setLoading] = useState(false);

  return (
    <View style={{ width: 80, height: 80, justifyContent: "center", alignItems: "center" }}>
      {loading && <ActivityIndicator size="small" color="#1e90ff" style={{ position: "absolute" }} />}
      <Image
        source={{ uri }}
        style={{ width: 80, height: 80, borderRadius: 8 }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}

function Soal7() {
  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <CustomImage uri="https://picsum.photos/200" />
      <CustomImage uri="https://picsum.photos/201" />
    </View>
  );
}

// ==================== SOAL 8 ====================
function Soal8() {
  const DATA = [
    {
      title: "Mata Pelajaran Kejuruan",
      data: [
        { name: "Pemrograman Web", score: 90 },
        { name: "Pemrograman Bergerak", score: 95 },
      ],
    },
    {
      title: "Mata Pelajaran Umum",
      data: [
        { name: "Matematika", score: 85 },
        { name: "Bahasa Inggris", score: 88 },
      ],
    },
  ];

  return (
    <View style={{ height: 200 }}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.name + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.sectionItem}>
            <Text>{item.name}</Text>
            <Text style={{ fontWeight: "bold" }}>{item.score}</Text>
          </View>
        )}
      />
    </View>
  );
}

// ==================== SOAL 9 ====================
function Soal9() {
  const options = ["Light Mode", "Dark Mode", "System Default"];
  const [selected, setSelected] = useState("Light Mode");

  return (
    <View style={{ gap: 8 }}>
      {options.map((item, index) => {
        const isSelected = selected === item;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setSelected(item)}
            style={[
              styles.optionItem,
              { backgroundColor: isSelected ? "#1e90ff" : "#f1f2f6" },
            ]}
          >
            <Text style={{ color: isSelected ? "white" : "black", fontWeight: isSelected ? "bold" : "normal" }}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// ==================== SOAL 10 ====================
function Soal10() {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={{ gap: 12 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Switch value={agreed} onValueChange={setAgreed} />
        <Text style={{ flex: 1, fontSize: 13 }}>Saya menyetujui Syarat & Ketentuan yang berlaku.</Text>
      </View>
      <Pressable
        disabled={!agreed}
        style={{
          backgroundColor: agreed ? "#007AFF" : "#ccc",
          padding: 10,
          borderRadius: 6,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
      </Pressable>
    </View>
  );
}

// ==================== KOMPONEN UTAMA ====================
export default function ComponentSoal() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* SOAL 1 (Manggil file 2.jpg) */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 1: User Card</Text>
        <UserCard
          name="Alisa"
          status="Aktif"
          imageSource={require("./2.jpg")}
        />
        
        <UserCard
          name="Reva"
          status="Alumni"
          imageSource={require("./3.jpg")}
        />
      </View>

      {/* SOAL 2 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 2: Login Form</Text>
        <LoginForm />
      </View>

      {/* SOAL 3 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 3: Counter & FlatList Produk</Text>
        <Counter />
        <View style={{ marginTop: 12 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 6 }}>Katalog Produk (FlatList):</Text>
          <ProductList />
        </View>
      </View>

      {/* SOAL 4 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 4: Pembelajaran Interaktif</Text>
        <Soal4 />
      </View>

      {/* SOAL 5 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 5: Tombol Varian (MyButton)</Text>
        <Soal5 />
      </View>

      {/* SOAL 6 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 6: Status Indikator (Modal)</Text>
        <Soal6 />
      </View>

      {/* SOAL 7 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 7: Custom Image Indicator</Text>
        <Soal7 />
      </View>

      {/* SOAL 8 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 8: Dashboard Nilai (SectionList)</Text>
        <Soal8 />
      </View>

      {/* SOAL 9 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 9: Pilihan Kategori Kustom</Text>
        <Soal9 />
      </View>

      {/* SOAL 10 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 10: Pengaturan Kebijakan Privasi</Text>
        <Soal10 />
      </View>
    </ScrollView>
  );
}

// ==================== STYLES ====================
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
    marginBottom: 8,
    color: "#111827",
  },
  categoryChip: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    justifyContent: "center",
  },
  articleCard: {
    backgroundColor: "#f8f9fa",
    padding: 10,
    borderRadius: 6,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: "#eee",
  },
  customBtn: {
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 10,
    alignItems: "center",
  },
  sectionHeader: {
    backgroundColor: "#eccc68",
    padding: 6,
    fontWeight: "bold",
    borderRadius: 4,
    marginTop: 4,
  },
  sectionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionItem: {
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
});