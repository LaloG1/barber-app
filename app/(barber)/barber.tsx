import { signOut } from "firebase/auth";
import React from "react";
import { Alert, Button, Text, View } from "react-native";
import { auth } from "../../firebaseConfig";

export default function BarberScreen() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // No navegamos aquí, el index.tsx se encargará de mandarlo a login
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bienvenido, Barber</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}
