import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { getUserRole } from "../app/services/authService";
import { auth } from "../firebaseConfig";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const role = await getUserRole(user.uid);
          if (role === "admin") {
            router.replace("/(admin)/home");
          } else {
            router.replace("/(barber)/home");
          }
        } catch (error) {
          console.error(error);
          router.replace("/(auth)/login");
        }
      } else {
        router.replace("/(auth)/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return null;
}
