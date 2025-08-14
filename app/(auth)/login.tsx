import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { loginUser } from "../../app/services/authService";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userData = await loginUser(email, password);
      if (userData.role === "admin") {
        router.replace("/(tabs)/admin");
      } else {
        router.replace("/(tabs)/barber");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <Text>Iniciar Sesión</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={setPassword} />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
