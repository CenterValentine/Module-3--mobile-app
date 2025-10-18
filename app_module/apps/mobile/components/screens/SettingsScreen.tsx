import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import MapScreen from '../maps/Map'

export default function PlannerScreen() {

    return (
   <ScrollView contentContainerStyle={[styles.content, { paddingBottom: 0 }]}>
         <Text style={styles.h1}>Settings</Text>
         <Text>Adjust your settings</Text>
    </ScrollView>)
}


const styles = StyleSheet.create({
  content: { padding: 16 },
  h1: { fontSize: 24, fontWeight: "600", marginBottom: 12 },
});