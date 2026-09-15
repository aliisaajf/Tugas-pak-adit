import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";

// ==================== SOAL 1 ====================
interface UserCardProps {
  name: string;
  status: string;
  imageUrl: string;
}

function UserCard({ name, status, imageUrl }: UserCardProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
      <Image
        source={{ uri: imageUrl }}
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

// ==================== SOAL 4 ====================
interface ProductProps {
  nama: string;
  harga: number;
}

function ProductCard({ nama, harga }: ProductProps) {
  return (
    <View style={{ borderWidth: 1, borderColor: "#ddd", padding: 10, borderRadius: 8, marginBottom: 8 }}>
      <Text style={{ fontWeight: "bold" }}>{nama}</Text>
      <Text style={{ color: "green" }}>Rp {harga.toLocaleString("id-ID")}</Text>
    </View>
  );
}

// ==================== SOAL 5 ====================
function NotificationBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <View style={{ backgroundColor: "red", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, alignSelf: "flex-start" }}>
      <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>{count} Notifikasi Baru</Text>
    </View>
  );
}

// ==================== SOAL 6 ====================
interface CustomButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
}

function CustomButton({ title, onPress, color = "#007AFF" }: CustomButtonProps) {
  return (
    <Pressable onPress={onPress} style={{ backgroundColor: color, padding: 10, borderRadius: 6, alignItems: "center" }}>
      <Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
    </Pressable>
  );
}

// ==================== KOMPONEN UTAMA ====================
export default function Scom() {
  const products = [
    { id: 1, nama: "Sepatu Sneaker", harga: 250000 },
    { id: 2, nama: "Tas Punggung", harga: 150000 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* SOAL 1 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 1: User Card</Text>
        <UserCard name="Alisa" status="Aktif" imageUrl="https://picsum.photos/100" />
        <UserCard name="Aura" status="Alumni" imageUrl="https://picsum.photos/101" />
      </View>

      {/* SOAL 2 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 2: Login Form</Text>
        <LoginForm />
      </View>

      {/* SOAL 3 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 3: Counter State</Text>
        <Counter />
      </View>

      {/* SOAL 4 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 4: Product List</Text>
        {products.map((p) => (
          <ProductCard key={p.id} nama={p.nama} harga={p.harga} />
        ))}
      </View>

      {/* SOAL 5 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 5: Notification Badge</Text>
        <NotificationBadge count={5} />
      </View>

      {/* SOAL 6 */}
      <View style={styles.box}>
        <Text style={styles.title}>Soal 6: Reusable Button</Text>
        <CustomButton title="Klik Saya" onPress={() => alert("Tombol Ditekan!")} color="#2ed573" />
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
    marginBottom: 8,
    color: "#111827",
  },
});