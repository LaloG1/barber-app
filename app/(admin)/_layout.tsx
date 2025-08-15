import { Tabs } from "expo-router";
import React from "react";

export default function AdminTabs() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Inicio" }} />
      <Tabs.Screen name="settings" options={{ title: "Ajustes" }} />
    </Tabs>
  );
}
