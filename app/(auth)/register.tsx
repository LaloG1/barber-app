import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { registerUser } from "../../app/services/authService";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("barber");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await registerUser(email, password, role);
      Alert.alert("Registro exitoso", `Usuario registrado como ${role}`);
      // Opcional: redirigir al login automáticamente
      router.push("/(auth)/login");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <Text>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <Text>Rol</Text>
      <Picker
        selectedValue={role}
        onValueChange={(itemValue) => setRole(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Barber" value="barber" />
        <Picker.Item label="Admin" value="admin" />
      </Picker>

      <Button title="Registrar" onPress={handleRegister} />

      <Text style={styles.text}>¿Ya tienes cuenta?</Text>
      <Button
        title="Volver al Login"
        onPress={() => router.push("/(auth)/login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 5 },
  picker: { marginBottom: 20 },
  text: { textAlign: "center", marginVertical: 10 }
});
