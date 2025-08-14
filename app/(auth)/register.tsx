
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { registerUser } from "../../app/services/authService";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("barber"); // por defecto barber
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await registerUser(email, password, role);
      Alert.alert("Registro exitoso");
      router.replace("/(auth)/login");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <Text>Registro</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={setPassword} />
      <TextInput placeholder="Rol (admin o barber)" onChangeText={setRole} />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}
