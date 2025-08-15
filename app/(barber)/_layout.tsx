import { Tabs } from "expo-router";
import React from "react";

export default function BarberTabs() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Inicio" }} />
      <Tabs.Screen name="agenda" options={{ title: "Agenda" }} />
    </Tabs>
  );
}
