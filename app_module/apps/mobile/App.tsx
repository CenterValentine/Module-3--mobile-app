import React from "react";
import { SafeAreaView, TextInput, Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useGreeting } from "@project/core";

export default function App() {
  const { message, setName } = useGreeting();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Mobile: Shared Core Demo</Text>
        <Text style={styles.message}>{message}</Text>
        <TextInput
          placeholder="Type your name"
          onChangeText={(t) => setName(t)}
          style={styles.input}
        />
        <Text style={styles.hint}>
          Greeting powered by <Text style={styles.code}>@project/core</Text>
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "600", marginBottom: 8 },
  message: { fontSize: 18, marginBottom: 12 },
  input: {
    borderColor: "#bbb",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6
  },
  hint: { marginTop: 10, color: "#666" },
  code: { fontFamily: "Courier", color: "#333" }
});