// components/screens/HomeScreen.tsx
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { NavOverlay } from "../nav/NavOverlay"

export default function HomeScreen() {
  // const bottomPad = NavOverlay();
  return (
    <ScrollView contentContainerStyle={[styles.content, { paddingBottom: 0 }]}>
      <Text style={styles.h1}>Home</Text>
      {/* HomePage */}
      <Text>Home Page!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16 },
  h1: { fontSize: 24, fontWeight: "600", marginBottom: 12 },
});